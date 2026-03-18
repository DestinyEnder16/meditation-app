import { Text } from 'react-native';

interface infoProps {
  instruction: string;
  color: string;
}

export default function InfoText({ instruction, color }: infoProps) {
  return (
    <Text>
      ALREADY HAVE AN ACCOUNT?{'  '}
      <Text style={{ color }}>{instruction}</Text>
    </Text>
  );
}
