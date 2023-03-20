import Pagination from './Paginations'
import useSWR from 'swr'
import Loader from './Loader'
import Error from './Error'
import { useEffect, useState } from 'react'
import CoinItem from './CoinItem'
import styles from '@/styles/Home.module.css'
import { Coin } from '@/utils/interfaces'
import * as config from '../utils/config'
import { Welcome } from '@/utils/interfaces'

export default function List() {
  
  const endPoint = `${config.url}?fsym=${config.crypto}&tsym=${config.valuta}&limit=${config.dayLimit}&api_key=${process.env.NEXT_PUBLIC_APIKEY}`
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(20)

  const { data, error } = useSWR<Welcome>(endPoint)
 
  if (error) {
    return <Error error={error.message} />
  }
  if (!data) {
    return <Loader />
  }
  const endSlice: number = currentPage * limit
  const startSlice: number = endSlice - limit
 
  const splittedData: Array<Coin> = data.Data.Data
    .sort((a, b) => {
      return b.time - a.time
    })
    .slice(startSlice, endSlice)

  return <>
    <section>
      <h2 className={styles.h2}>Siste 100 dager verdier</h2>
      <select name='limit' onChange={(e) => setLimit(parseInt(e.target.value))}>
        <option selected value="choose limit">velg limit</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
      </select>
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
        maxLimit={limit} 
        totItems={data?.Data?.Data.length} 
        setCurrentPage={setCurrentPage} />
    </nav>
  </>  
}
