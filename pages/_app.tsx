import "reflect-metadata";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { http } from "../services/http.service";
import { SWRConfig } from "swr";

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
// use axios
const fetcher = (url: string) => http.get(url).then((res) => res.data);

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SWRConfig value={{ fetcher: fetcher, refreshInterval: 0 }}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </SWRConfig>
  );
}
