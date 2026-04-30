import { useRef, useEffect, useCallback } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer, loadAsync } from 'expo-three';
import { Asset } from 'expo-asset';
import * as THREE from 'three';

export type RwenAnimation =
  | 'idle'
  | 'arise'
  | 'victory'
  | 'wrong'
  | 'hipdance'
  | 'breakdance'
  | 'backflip'
  | 'powerspin'
  | 'runfast'
  | 'running'
  | 'walking';

interface Props {
  animation?: RwenAnimation;
  style?: ViewStyle;
  autoRotate?: boolean;
}

const RWEN_ASSET   = require('../../assets/rwen/rwen_final.glb');
const RWEN_TEXTURE = require('../../assets/rwen/textures/texture_0.png');

export default function RwenAvatar({ animation = 'idle', style, autoRotate = false }: Props) {
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionsRef = useRef<Record<string, THREE.AnimationAction>>({});
  const currentActionRef = useRef<THREE.AnimationAction | null>(null);
  const clockRef = useRef(new THREE.Clock());

  const switchAnimation = useCallback((name: RwenAnimation) => {
    const actions = actionsRef.current;
    const next = actions[name] ?? actions['idle'];
    if (!next || next === currentActionRef.current) return;
    const prev = currentActionRef.current;
    if (prev) {
      next.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(0.3);
      prev.fadeOut(0.3);
    } else {
      next.reset().play();
    }
    currentActionRef.current = next;
  }, []);

  useEffect(() => {
    if (mixerRef.current) switchAnimation(animation);
  }, [animation, switchAnimation]);

  const onContextCreate = useCallback(async (gl: WebGLRenderingContext) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    // expo-three's Renderer is a THREE.WebGLRenderer at runtime, but its
    // TypeScript declaration only exposes the constructor — cast to access
    // setSize/setClearColor/render/dispose.
    const renderer = new Renderer({ gl }) as unknown as THREE.WebGLRenderer;
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.5);
    camera.lookAt(0, 0.5, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 1.5);
    directional.position.set(2, 4, 3);
    scene.add(directional);
    const fill = new THREE.DirectionalLight(0x4A90D9, 0.5);
    fill.position.set(-2, 2, -1);
    scene.add(fill);

    try {
      // Load texture separately from PNG (avoids React Native blob URL issue)
      const textureAsset = Asset.fromModule(RWEN_TEXTURE);
      await textureAsset.downloadAsync();
      const texture = await loadAsync(RWEN_TEXTURE) as THREE.Texture;
      if (texture) {
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;
      }

      // Load the GLB model
      const gltf = await loadAsync(RWEN_ASSET);
      const model = gltf.scene;

      // Apply texture to all meshes
      if (texture) {
        model.traverse((node: any) => {
          if (node.isMesh && node.material) {
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            mats.forEach((mat: any) => {
              mat.map = texture;
              mat.needsUpdate = true;
            });
          }
        });
      }

      // Centre and scale
      const box = new THREE.Box3().setFromObject(model);
      const centre = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.0 / maxDim;
      model.scale.setScalar(scale);
      model.position.sub(centre.multiplyScalar(scale));

      scene.add(model);

      // Animations
      const mixer = new THREE.AnimationMixer(model);
      mixerRef.current = mixer;

      for (const clip of gltf.animations) {
        const action = mixer.clipAction(clip);
        action.setLoop(THREE.LoopRepeat, Infinity);
        actionsRef.current[clip.name] = action;
      }

      const startAction = actionsRef.current[animation] ?? actionsRef.current['idle'];
      if (startAction) {
        startAction.play();
        currentActionRef.current = startAction;
      }

      console.log('Rwen ready! Texture applied. Animations:', Object.keys(actionsRef.current).join(', '));
    } catch (e) {
      console.error('RwenAvatar: Failed to load', e);
    }

    let frameId: number;
    const render = () => {
      frameId = requestAnimationFrame(render);
      const delta = clockRef.current.getDelta();
      mixerRef.current?.update(delta);
      if (autoRotate) {
        scene.children.forEach((c: THREE.Object3D) => {
          if ((c as any).isMesh || c.type === 'Group') c.rotation.y += 0.01;
        });
      }
      renderer.render(scene, camera);
      (gl as any).endFrameEXP();
    };
    render();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, []);

  return (
    <View style={[styles.container, style]}>
      <GLView style={StyleSheet.absoluteFill} onContextCreate={onContextCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'transparent' },
});
