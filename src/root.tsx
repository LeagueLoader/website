// @refresh reload
import { Suspense } from 'solid-js';
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link
} from 'solid-start';

import Footer from '~/components/Footer';

import './root.css';

export default function Root() {

  const title = 'League Loader';
  const desc = 'Better League Client, better experience!';
  const url = 'https://leagueloader.app/';
  const imgurl = 'https://i.imgur.com/9nTdBCN.png';

  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#0A323C" />

        <Title>League Loader</Title>
        <Link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <Meta name="title" content={title} />
        <Meta name="description" content={desc} />

        <Meta property="og:type" content="website" />
        <Meta property="og:url" content={url} />
        <Meta property="og:title" content={title} />
        <Meta property="og:description" content={desc} />
        <Meta property="og:image" content={imgurl} />

        <Meta property="twitter:card" content="summary_large_image" />
        <Meta property="twitter:url" content={url} />
        <Meta property="twitter:title" content={title} />
        <Meta property="twitter:description" content={desc} />
        <Meta property="twitter:image" content={imgurl} />

      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
