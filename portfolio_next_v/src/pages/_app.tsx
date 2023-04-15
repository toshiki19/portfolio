import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import type { AppProps } from 'next/app'
import Layout from '../components/layout';
import Head from "next/head"

const montserrat =Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
export default function App({ Component, pageProps }: AppProps) {
  //return <Component {...pageProps} />
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <navbar />
      <Component {...pageProps} />
    </main>
    </>
  );
}
