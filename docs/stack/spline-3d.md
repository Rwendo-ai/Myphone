# Spline / Three.js — Rwen 3D Avatar

## What it does in Rwendo
Renders Rwen the chameleon as an interactive 3D character within React Native. Handles animations, colour shifts, eye tracking, and reactive expressions.

## Recommended Approach: Spline (MVP) → Three.js (Phase 2)

### Phase 1 — Spline
- Design Rwen in Spline (browser-based 3D editor — no 3D software expertise needed)
- Export as React Native component via `@splinetool/react-native-spline`
- Trigger named animations from app state (e.g., `playAnimation('celebrate')`)
- Pros: fast to implement, visual editor, good enough for MVP
- Cons: less control over shaders, larger bundle size

### Phase 2 — Three.js / react-three-fiber
- Full control over Rwen's colour-shifting shader
- Better performance at scale
- `expo-gl` + `expo-three` + `@react-three/fiber` (native version)
- GLTF model format — design in Blender, export `.glb`

## Rwen Animation States
| State | Trigger |
|-------|---------|
| `idle` | Default — breathing cycle, eyes wandering |
| `listening` | Microphone active — leans forward, eyes widen |
| `thinking` | Processing response — tail swishes, colour pulses |
| `speaking` | Rwen is talking — mouth animation + colour warm |
| `celebrate` | Correct answer / streak — full body bounce, colours flare |
| `encourage` | Wrong answer — gentle head tilt, soft colour |
| `curious` | Onboarding questions — eyes tracking camera |
| `sleeping` | App idle/background — eyes closed, gentle breathing |

## Colour Shift System
Rwen's skin colour reflects:
- **Active language pack:** Shona = greens + terracottas, future packs = their own palette
- **XP level:** Brighter/more vibrant as user progresses
- **Emotion state:** Warm oranges for excitement, cool blues for calm, gold for celebration
- Implemented as shader uniform updates passed to the 3D model

```typescript
// Pseudocode — update Rwen's colour
rwen.setShaderUniform('primaryColor', languagePackTheme.rwendoColor)
rwen.setShaderUniform('emotionBlend', 0.8) // 0=calm, 1=excited
```

## Rwen Model Specs (for 3D artist brief)
- Style: stylised realism — not cartoon, not photorealistic
- Poly count: <50,000 triangles (mobile optimised)
- Rig: facial bones + body bones for full animation
- Texture maps: diffuse, normal, roughness — 1024x1024 max
- Format: `.glb` (GLTF binary)
- Separate blend shape targets for: eyes open/closed, mouth open, surprise, smile

## File Size Budget
- Rwen base model: <5MB
- Per animation clip: <200KB
- Total avatar assets on first load: <8MB
- Additional expression packs: lazy-loaded

## Commissioning a 3D Artist
Brief points to provide:
- Species: chameleon, stylised
- Personality: warm, curious, playful, wise
- Key feature: expressive eyes (independently mobile), colour-shifting skin
- Deliverables: `.glb` model + rig + 8 base animations listed above
- Platforms: Blender source file + optimised `.glb` export
- Budget range: $500–$2000 depending on artist

Platforms to find artists: ArtStation, Fiverr Pro, 99designs, Upwork

## Gotchas
- Test 3D performance on low-end Android devices (Samsung A-series) — not just iPhone
- Rwen should never block the lesson content — use picture-in-picture or corner positioning
- Spline exports can be large — check bundle size before committing
- Eye tracking (following user's face) requires face landmark detection — Phase 2 complexity

## Docs
- https://spline.design/docs
- https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
- https://github.com/expo/expo-three
