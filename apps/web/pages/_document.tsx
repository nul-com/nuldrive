import Document, { Html, Head, Main, NextScript } from 'next/document';

export function MyDocument<Document>() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
