import "@/styles/globals.scss";

import { Roboto } from "@next/font/google";
import { App as AntdApp, ConfigProvider } from "antd";
import type { AppProps } from "next/app";

import { theme } from "@/constants";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: theme.fontFamily,
            colorPrimary: theme.primaryColor,
            colorPrimaryBorder: theme.primaryColor,
            borderRadius: theme.borderRadius,
          },
        }}
      >
        <AntdApp>
          <Component {...pageProps} />
        </AntdApp>
      </ConfigProvider>
    </div>
  );
}
