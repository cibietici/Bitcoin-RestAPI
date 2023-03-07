import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import List from '@/components/List'
import fetchData from '@/utils/fetcher'
import { SWRConfig } from 'swr'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto-currency</title>
        <meta name="description" content="Cryptocurrency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header><h1>Cryptocurrency</h1></header>
      <main className={styles.main}>
        <SWRConfig value={{ fetcher: fetchData }}>
          <List />
        </SWRConfig>
      </main>
      <footer>footer</footer>
    </>
  )
}
