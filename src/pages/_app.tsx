/** @jsx h */
import { h, FunctionalComponent } from "preact"

import * as gtag from "@/lib/gtag"
import { useRouter } from "next/router"
import { useEffect } from "preact/hooks"
import "normalize.css"
import "@/styles/global.css"

type Props = {
  Component: FunctionalComponent;
  pageProps: JSX.IntrinsicAttributes;
}

const App: FunctionalComponent<Props> = ({ Component, pageProps }: Props) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />
}

export default App
