/** @jsx h */
import { FunctionComponent, h } from "preact"

import { GA_TRACKING_ID } from "@/lib/gtag"
import Head from "next/head"

const HeadComponent: FunctionComponent = () => (
  <Head>
    <title>0x307e.com</title>
    <meta property="og:title" content="0x307e.com" />
    <meta property="og:description" content="Portfolio" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://0x307e.com" />
    <meta property="og:image" content="https://0x307e.com/ogp.png" />
    <meta property="og:site_name" content="0x307e.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@0x307E" />
    <meta name="twitter:url" content="https://0x307e.com/ogp.png" />
    <meta name="twitter:title" content="0x307e.com" />
    <meta name="twitter:description" content="Portfolio" />
    <meta name="twitter:image" content="https://0x307e.com/ogp.png" />
    {GA_TRACKING_ID && (
      <>
        <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });`,
          }}
        />
      </>
    )}
  </Head>
)

export default HeadComponent
