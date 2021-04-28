/** @jsx h */
import { h, FunctionalComponent } from "preact"
import "normalize.css"
import "@/styles/global.css"

type Props = {
  Component: FunctionalComponent;
  pageProps: JSX.IntrinsicAttributes;
}

const App: FunctionalComponent<Props> = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />
}

export default App
