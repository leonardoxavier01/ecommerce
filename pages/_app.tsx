import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../styles/global";
import { CartContextProvider } from "../contexts/cart";
import { CategoriesClientProvider } from "../contexts/CategoriesClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CategoriesClientProvider>
        <CartContextProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </CartContextProvider>
      </CategoriesClientProvider>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
