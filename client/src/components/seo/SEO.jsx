import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'CertReady';
const SITE_URL = 'https://www.certready.ca';
const DEFAULT_IMAGE = '/og-default.png';

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  structuredData = null,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Red Seal Exam Prep for Canadian Trades`;
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : null;

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph (Facebook, LinkedIn previews) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />

      {/* Structured Data (JSON-LD) */}
      {structuredData && Array.isArray(structuredData) && structuredData.map((data, index) => (
        data && (
          <script key={index} type="application/ld+json">
            {JSON.stringify(data)}
          </script>
        )
      ))}
      {structuredData && !Array.isArray(structuredData) && structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
