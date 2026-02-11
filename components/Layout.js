import Header from './Header';
import Footer from './Footer';
import CustomHead from './Head';

export default function Layout({
  children,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType,
  schema,
  canonicalUrl
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

        <main>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
