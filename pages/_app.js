import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import RootLayout from "@/components/Layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <RootLayout>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </RootLayout>
    </>
  );
}
