import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Container from '@/components/ui/container';

export default function HomeScreen() {
  return (
    <Container>
      <View className='flex flex-row justify-between items-center'>
      <Text className='text-white text-4xl'>FrogReel</Text>
      <View className='h-2 w-2 bg-red-500'></View>
      </View>
    </Container>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
