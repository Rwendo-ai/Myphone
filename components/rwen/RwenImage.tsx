import { Image, ImageStyle } from 'react-native';

export type RwenPose =
  | 'idle'
  | 'waving'
  | 'victory'
  | 'wrong'
  | 'thinking'
  | 'sad'
  | 'arms_spread'
  | 'whatshappening';

const POSES: Record<RwenPose, any> = {
  idle:           require('../../assets/rwen/processed/idle.webp'),
  waving:         require('../../assets/rwen/processed/waving.webp'),
  victory:        require('../../assets/rwen/processed/victory.webp'),
  wrong:          require('../../assets/rwen/processed/wrong.webp'),
  thinking:       require('../../assets/rwen/processed/thinking.webp'),
  sad:            require('../../assets/rwen/processed/sad.webp'),
  arms_spread:    require('../../assets/rwen/processed/arms_spread.webp'),
  whatshappening: require('../../assets/rwen/processed/whatshappening.webp'),
};

interface Props {
  pose?: RwenPose;
  size?: number;
  style?: ImageStyle;
}

export default function RwenImage({ pose = 'idle', size = 200, style }: Props) {
  return (
    <Image
      source={POSES[pose]}
      style={[{ width: size, height: size }, style]}
      resizeMode="contain"
    />
  );
}
