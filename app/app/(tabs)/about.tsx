import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { WEBSITE_URL } from '@/constants/Content';
import { Brand } from '@/constants/Colors';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.title}>At Carbon Crowd,</Text>
        <Text style={styles.body}>
          We are dedicated to creating a sustainable future by offering investors—both individuals
          and organizations—unique opportunities to support projects that drive meaningful
          environmental change. Our platform connects forward-thinking investors with high-impact
          initiatives focused on reducing carbon emissions and promoting sustainability.
        </Text>
      </View>
      <Image
        source={{ uri: `${WEBSITE_URL}/assets/images/Rectangle%20102-Photoroom%201.png` }}
        style={styles.bannerImage}
      />
      <View style={styles.section}>
        <Image
          source={{ uri: `${WEBSITE_URL}/assets/images/footsteps%201.png` }}
          style={styles.footprintImg}
        />
        <Text style={styles.body}>
          We believe that by investing in innovative projects that combat climate change, we can make
          a lasting impact on the planet. Our carefully selected portfolio includes initiatives aimed
          at enhancing agricultural practices, improving urban air quality, and advancing green
          technologies. Each project is designed to not only contribute to a healthier environment
          but also to generate carbon NFTs—a secure and transparent way for investors to participate
          in the fight against climate change.
        </Text>
        <Text style={styles.body}>
          Through Carbon Crowd, you're not just contributing to global sustainability efforts;
          you're also building a legacy of positive impact that aligns with your investment goals.
          Our platform empowers you to own a stake in transformative environmental projects, offering
          the potential for financial returns while helping to create a greener, more sustainable
          world for future generations.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 40 },
  hero: { padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: '800', color: Brand.link, marginBottom: 16 },
  body: { fontSize: 15, color: '#444', lineHeight: 24, marginBottom: 16 },
  bannerImage: { width: '100%', height: 220, backgroundColor: '#eee' },
  section: { padding: 20 },
  footprintImg: { width: 120, height: 120, alignSelf: 'center', marginBottom: 20 },
});
