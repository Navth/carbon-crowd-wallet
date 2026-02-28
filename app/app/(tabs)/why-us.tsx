import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { PrimaryButton } from '@/components/PrimaryButton';
import { WEBSITE_URL } from '@/constants/Content';
import { Brand } from '@/constants/Colors';

export default function WhyUsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.title}>Your{'\n'}Green Investment</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.body}>
          Carbon Crowd transforms sustainability into an accessible and rewarding investment
          opportunity. Through our innovative Non-Fungible Tokens (NFTs), investors can own a stake
          in groundbreaking carbon-reduction initiatives. These NFTs represent your interest in
          projects designed to drive meaningful environmental change.
        </Text>
        <Text style={styles.body}>
          Available on our crowdfunding platform, these NFTs enable individuals and businesses to
          actively support impactful ventures while enjoying the potential for financial returns.
          Join us to be a part of a greener planet and secure a future where profitability and
          sustainability go hand in hand.
        </Text>
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.h2}>Projects</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(`${WEBSITE_URL}/why-us`)}>
            Download all
          </Text>
        </View>
        <ProjectCard
          title="Regenerative Agriculture in South India"
          body="South India boasts of vast farmlands with immense potential to act as carbon sinks. By adopting climate-friendly practices, these farmlands can generate carbon credits, providing a profitable avenue for businesses and individuals seeking meaningful carbon offsetting."
          image={`${WEBSITE_URL}/assets/images/w_p1.png`}
          pdfUrl={`${WEBSITE_URL}/assets/images/pdf/Regenerative%20Agriculture%20in%20South%20India.pdf`}
        />
        <ProjectCard
          title="Microalgae-Based Liquid Trees for Carbon Reduction"
          body="Investing in microalgae-based liquid trees presents a unique opportunity in the field of carbon sequestering. This innovative project involves deploying microalgae-based liquid trees in urban environments, where they sequester carbon dioxide and produce oxygen."
          image={`${WEBSITE_URL}/assets/images/w_p2.png`}
          pdfUrl={`${WEBSITE_URL}/assets/images/pdf/Microalgae-Based%20Liquid%20Trees%20for%20Carbon%20Reduction.pdf`}
        />
        <ProjectCard
          title="Decarbonizing Stations for IC Engines"
          body="Decarbonizing stations for internal combustion (IC) engines are reshaping the transportation landscape by reducing emissions and improving efficiency. This innovative technology uses hydrogen from water electrolysis to clean the entire engine system."
          image={`${WEBSITE_URL}/assets/images/w_p3.png`}
          pdfUrl={`${WEBSITE_URL}/assets/images/pdf/Decarbonizing%20Stations%20for%20IC%20Engines.pdf`}
        />
      </View>
      <View style={styles.ctaSection}>
        <PrimaryButton title="Purchase Carbon NFTs" />
      </View>
    </ScrollView>
  );
}

function ProjectCard({
  title,
  body,
  image,
  pdfUrl,
}: {
  title: string;
  body: string;
  image: string;
  pdfUrl: string;
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.downloadLink} onPress={() => Linking.openURL(pdfUrl)}>
        Download PDF
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 40 },
  hero: { padding: 20, paddingTop: 60, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: Brand.link, textAlign: 'center' },
  section: { padding: 20 },
  body: { fontSize: 15, color: '#444', lineHeight: 24, marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  h2: { fontSize: 20, fontWeight: '700', color: Brand.link },
  link: { fontSize: 14, color: Brand.accent, fontWeight: '600' },
  card: { marginBottom: 24, backgroundColor: '#f8fcf9', borderRadius: 12, padding: 16 },
  cardImage: { width: '100%', height: 180, borderRadius: 8, marginBottom: 12 },
  cardTitle: { fontSize: 17, fontWeight: '700', color: Brand.link, marginBottom: 8 },
  downloadLink: { fontSize: 14, color: Brand.primary, fontWeight: '600', marginTop: 8 },
  ctaSection: { padding: 20, alignItems: 'center' },
});
