import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  coverPage: {
    padding: 40,
    backgroundColor: '#0f172a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  coverTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  coverSubtitle: {
    color: '#10b981',
    fontSize: 14,
    marginBottom: 40,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    color: '#0f172a',
    fontWeight: 'bold',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#10b981',
    paddingBottom: 10,
  },
  productBlock: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  productTitle: {
    fontSize: 18,
    color: '#0f172a',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: 220, /* Increased height to allow the square to fit well */
    objectFit: 'contain', /* THE FIX: Stops the cropping and shows 100% of the image */
    marginBottom: 12,
    borderRadius: 4,
    backgroundColor: '#f8fafc', /* Subtle frame behind the contained image */
  },
  text: {
    fontSize: 10,
    color: '#334155',
    lineHeight: 1.5,
    marginBottom: 6,
  },
  boldLabel: {
    fontWeight: 'bold',
    color: '#0f172a',
  },
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 10,
  },
  tag: {
    fontSize: 8,
    backgroundColor: '#f1f5f9',
    padding: '4 8',
    borderRadius: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 8,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 10,
  }
});

export default function CatalogPDF({ products }) {
  return (
    <Document>
      <Page size="A4" style={styles.coverPage}>
        <Text style={styles.coverTitle}>ARAVVAT INTERNATIONAL P</Text>
        <Text style={styles.coverSubtitle}>2026 GLOBAL EXPORT CATALOG</Text>
        <Text style={{ color: '#94a3b8', fontSize: 10, textAlign: 'center', marginTop: 50 }}>
          100% Traceable Farm-to-Market Supply Chain
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Product Portfolio</Text>
        
        {products.map((product) => (
          <View key={product.id} style={styles.productBlock} wrap={false}>
            <Text style={styles.productTitle}>{product.title}</Text>
            
            {/* The image is now styled to contain 100% of its content */}
            {product.image && <Image src={product.image} style={styles.productImage} />}
            
            <Text style={styles.text}>{product.description}</Text>
            
            <View style={styles.tagContainer}>
              {product.keyProducts.map((item, idx) => (
                <Text key={idx} style={styles.tag}>{item}</Text>
              ))}
            </View>

            <Text style={styles.text}>
              <Text style={styles.boldLabel}>Quality Parameters: </Text>
              {product.quality}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldLabel}>Certifications: </Text>
              {product.certifications.join(" • ")}
            </Text>
          </View>
        ))}

        <Text style={styles.footer} fixed>
          ARAVVAT INTERNATIONAL P • Pune, Maharashtra, India • Export Catalog
        </Text>
      </Page>
    </Document>
  );
}