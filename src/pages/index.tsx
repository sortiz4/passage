import Head from 'next/head';
import { ReactElement } from 'react';
import { Root } from '../components/root/root.component';

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>
          Passage
        </title>
        <base href="/"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover, width=device-width"/>
        <link rel="icon" type="image/png" href="static/icons/favicon-512.png"/>
      </Head>
      <Root/>
    </>
  );
}
