import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { PrimaryButton } from '@/components/PrimaryButton';
import { CONTACT, PURCHASE_NFT_URL, WEBSITE_URL } from '@/constants/Content';
import { Brand } from '@/constants/Colors';

export default function MoreScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>More</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Carbon Calculator</Text>
        <Link href="/calculator-business" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>For Businesses</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/calculator-individual" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>For Individuals</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <Link href="/faq" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>FAQ</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.menuItem} onPress={() => Linking.openURL(`mailto:${CONTACT.email}`)}>
          <Text style={styles.menuText}>Contact us</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.contactLabel}>Address</Text>
        <Text style={styles.contactValue}>{CONTACT.address}</Text>
        <Text style={styles.contactLabel}>Email</Text>
        <Text style={[styles.contactValue, styles.link]} onPress={() => Linking.openURL(`mailto:${CONTACT.email}`)}>
          {CONTACT.email}
        </Text>
      </View>
      <View style={styles.ctaSection}>
        <PrimaryButton title="Purchase Carbon NFTs" href={PURCHASE_NFT_URL} />
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(WEBSITE_URL)}>
        <Text style={styles.websiteLink}>Visit carboncrowd.net</Text>
      </TouchableOpacity>
      <Text style={styles.copyright}>@2025 Carbon Crowd. All rights reserved.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, paddingTop: 60, paddingBottom: 40 },
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: '800', color: Brand.link },
  section: { marginBottom: 28 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: '#666', marginBottom: 12 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: { fontSize: 16, color: '#333' },
  chevron: { fontSize: 20, color: '#999' },
  contactLabel: { fontSize: 12, color: '#666', marginTop: 8 },
  contactValue: { fontSize: 14, color: '#333', marginBottom: 4 },
  link: { color: Brand.accent },
  ctaSection: { marginTop: 8, marginBottom: 24 },
  websiteLink: { fontSize: 14, color: Brand.accent, textAlign: 'center', marginBottom: 16 },
  copyright: { fontSize: 12, color: '#999', textAlign: 'center' },
});
