import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html>
      <Head>
        <meta
          name='keywords'
          content='недвижимость, аренда, продажа, купить, снять, квартиры, дома, бани, сауны, усадьбы, автомобили'></meta>
        <meta name='yandex-verification' content='450c81f3f76860bd' />
        <Script
          id='yandex-metrika'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='https://mc.yandex.ru/watch/92361745'
              style={{ position: 'absolute', left: '-9999px' }}
              alt=''
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
};

export default Document;
