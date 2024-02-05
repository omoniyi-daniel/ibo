import { Fragment } from "react";
import Head from "next/head";
import createGlobalStyle from "./styles/global";

createGlobalStyle();

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>IBRAHIM BABAJIDE OBANIKORO</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
