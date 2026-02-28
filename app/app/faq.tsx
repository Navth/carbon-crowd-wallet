import React, { useState } from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FAQ_ITEMS, CONTACT } from '@/constants/Content';
import { Brand } from '@/constants/Colors';
import { PrimaryButton } from '@/components/PrimaryButton';

export default function FAQScreen() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>FAQ</Text>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.h1}>Frequently Asked Questions</Text>
        {FAQ_ITEMS.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.accordion}
            onPress={() => setOpenIndex(openIndex === i ? null : i)}
            activeOpacity={0.8}>
            <Text style={styles.question}>{item.q}</Text>
            {openIndex === i && <Text style={styles.answer}>{item.a}</Text>}
          </TouchableOpacity>
        ))}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Can't find your answer?</Text>
          <Text style={styles.contactLink} onPress={() => Linking.openURL(`mailto:${CONTACT.email}`)}>
            {CONTACT.email}
          </Text>
          <PrimaryButton title="Purchase Carbon NFTs" style={styles.cta} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 56,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backBtn: { marginRight: 12 },
  backText: { fontSize: 16, color: Brand.primary },
  title: { fontSize: 20, fontWeight: '700', color: Brand.link },
  scroll: { flex: 1 },
  content: { padding: 20, paddingBottom: 40 },
  h1: { fontSize: 22, fontWeight: '800', color: Brand.link, marginBottom: 20 },
  accordion: {
    backgroundColor: '#f8fcf9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  question: { fontSize: 16, fontWeight: '600', color: '#333' },
  answer: { fontSize: 14, color: '#555', marginTop: 12, lineHeight: 22 },
  footer: { marginTop: 24, alignItems: 'center' },
  footerText: { fontSize: 14, color: '#666', marginBottom: 8 },
  contactLink: { fontSize: 14, color: Brand.accent, marginBottom: 16 },
  cta: {},
});
