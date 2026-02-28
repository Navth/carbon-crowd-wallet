import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Brand } from '@/constants/Colors';
import { PURCHASE_NFT_URL } from '@/constants/Content';

type PrimaryButtonProps = {
  title: string;
  onPress?: () => void;
  href?: string;
  style?: object;
};

export function PrimaryButton({ title, onPress, href = PURCHASE_NFT_URL, style }: PrimaryButtonProps) {
  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }
    if (href) WebBrowser.openBrowserAsync(href);
  };

  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed, style]} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Brand.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 28,
    minWidth: 200,
    alignItems: 'center',
  },
  pressed: { opacity: 0.9 },
  text: {
    color: Brand.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
