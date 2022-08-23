import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/global";
import { CartContextProvider } from "../contexts/cart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartContextProvider>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
