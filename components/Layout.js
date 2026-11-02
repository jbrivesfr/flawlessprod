import Header from './Header';
import Footer from './Footer';
import CustomHead from './Head';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout({
  children,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType,
  schema,
  canonicalUrl,
  hideFloat = false
}) {
  return (
    <>
      <CustomHead
        title={title}
        description={description}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        ogType={ogType}
        schema={schema}
        canonicalUrl={canonicalUrl}
      />

      <div className="layout">
        <Header />

        <main id="main">
          {children}
        </main>

        <Footer />
        {!hideFloat && <WhatsAppFloat />}
      </div>
    </>
  );
}
