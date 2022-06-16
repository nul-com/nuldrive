import Document, { Html, Head, Main, NextScript } from 'next/document';

export function MyDocument<Document>() {
  return (
    <Html>
      <Head />
      <body className="bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
