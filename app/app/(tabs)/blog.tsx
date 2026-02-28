import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { BLOGS, WEBSITE_URL } from '@/constants/Content';
import { Brand } from '@/constants/Colors';

export default function BlogScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Blogs</Text>
        <Text style={styles.subtitle}>Read our latest articles on sustainability and carbon investing.</Text>
      </View>
      {BLOGS.map((blog, i) => (
        <Link
          key={i}
          href={{ pathname: '/webview', params: { url: `${WEBSITE_URL}/${blog.slug}` } }}
          asChild>
          <View style={styles.card}>
            <Image source={{ uri: blog.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{blog.title}</Text>
            <Text style={styles.cardExcerpt} numberOfLines={2}>{blog.excerpt}</Text>
            <Text style={styles.readMore}>Read more →</Text>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, paddingTop: 60, paddingBottom: 40 },
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: '800', color: Brand.link, marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666' },
  card: {
    marginBottom: 20,
    backgroundColor: '#f8fcf9',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardImage: { width: '100%', height: 180, backgroundColor: '#eee' },
  cardTitle: { fontSize: 16, fontWeight: '700', color: Brand.link, padding: 16, paddingBottom: 4 },
  cardExcerpt: { fontSize: 14, color: '#555', paddingHorizontal: 16 },
  readMore: { fontSize: 14, color: Brand.accent, fontWeight: '600', padding: 16, paddingTop: 8 },
});
