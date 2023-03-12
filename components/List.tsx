import Pagination from './Paginations'
import useSWR from 'swr'
import Loader from './Loader'
import Error from './Error'
import { useState } from 'react'
import CoinItem from './CoinItem'
import styles from '@/styles/Home.module.css'
import { Coin } from '@/utils/interfaces'
import * as config from '../utils/config'

export default function List() {
  
  const endPoint = `${config.url}?fsym=${config.crypto}&tsym=${config.valuta}&limit=${config.dayLimit}&api_key=${process.env.NEXT_PUBLIC_APIKEY}`
  const [currentPage, setCurrentPage] = useState(1)

  const { data, error } = useSWR(endPoint)
 
  if (error) {
    return <Error error={error.message} />
  }
  if (!data) {
    return <Loader />
  }
  const endSlice: number = currentPage * config.pageLimit
  const startSlice: number = endSlice - config.pageLimit
 
  const splittedData: Array<Coin> = data?.Data?.Data
    .sort((a: Coin, b: Coin) => {
      return b.time - a.time
    })
    .slice(startSlice, endSlice)

  return <>
    <section>
      <h2 className={styles.h2}>Siste 100 dager verdier</h2>
      <ul className={styles.list}>
        {splittedData.map((coin: Coin) => <CoinItem 
          coin={coin} 
          key={coin.time} />)
        }
      </ul>
    </section>
    <nav>
      <Pagination 
        current={currentPage} 
        maxLimit={config.pageLimit} 
        totItems={data?.Data?.Data.length} 
        setCurrentPage={setCurrentPage} />
    </nav>
  </>  
}
