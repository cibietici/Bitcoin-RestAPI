import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import List from '@/components/List'
import fetchData from '@/utils/fetcher'
import { SWRConfig } from 'swr'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitcoin - siste 100 dager</title>
        <meta name="description" content="Cryptocurrency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header} id="top">
        <figure>
          <Image src='./logo.svg' alt="Logo Bitcoin" width={80} height={80}  />
        </figure>
        <h1 className={styles.h1}>Bitcoin</h1>
      </header>
      <main className={styles.main}>
        <SWRConfig value={{ fetcher: fetchData }}>
          <List />
        </SWRConfig>
      </main>
      <footer className={styles.footer}>
        <p>{new Date().getFullYear()} - &copy; Bitcoin valuta</p>
      </footer>
    </>
  )
}
