import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './Layout';

interface SEOProps {
  titleKey?: string; // Key from translations or direct string
  descriptionKey?: string;
  directTitle?: string; // For blog posts
  directDescription?: string;
}

const SEO: React.FC<SEOProps> = ({ titleKey, descriptionKey, directTitle, directDescription }) => {
  const { t, lang } = useLanguage();

  // Determine Title
  let title = "Dr Khelifa.K.H - Psychiatre Baraki Alger";
  if (directTitle) {
    title = `${directTitle} | Dr Khelifa.K.H`;
  } else if (titleKey) {
    // @ts-ignore
    const translatedTitle = t[titleKey] || titleKey;
    title = `${translatedTitle} | Dr Khelifa.K.H`;
  }

  // Determine Description
  let description = lang === 'fr' 
    ? "Cabinet de psychiatrie à Baraki, Alger. Dr Khelifa.K.H, spécialiste en TCC, anxiété, dépression. RDV au 0665416904."
    : "عيادة الطب النفسي في براقي، الجزائر العاصمة. الدكتور خليفة، مختص في العلاج السلوكي المعرفي، القلق والاكتئاب.";

  if (directDescription) {
    description = directDescription;
  } else if (descriptionKey) {
    // @ts-ignore
    const translatedDesc = t[descriptionKey];
    if (translatedDesc) description = translatedDesc;
  }

  const isRTL = lang === 'ar';

  return (
    <Helmet>
      <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default SEO;