import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'FANIABELLA LTD',
    url: window.location.origin,
    telephone: '+447508519328',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '70 Spackmans Way',
      addressLocality: 'Slough',
      postalCode: 'SL1 2SB',
      addressCountry: 'UK'
    }
  };
  return (
    <Helmet>
      <title>FANIABELLA LTD — Compassionate Home Care</title>
      <meta name="description" content="Tailored home care in Slough: personal care, medication, dementia and complex needs. Book via WhatsApp." />
      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
}
