import Pagination from './Paginations'
import useSWR from 'swr'
import Loader from './Loader'
import Error from './Error'
import { useState } from 'react'
import CoinItem from './CoinItem'
import styles from '@/styles/Home.module.css'
import { Coin } from '@/utils/interfaces'

export default function List() {
  const endPoint = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=${process.env.APIKEY}`
  
  const [currentPage, setCurrentPage] = useState(1)
  const maxLimit = 20

  const { data, isValidating, error } = useSWR(endPoint)
  console.log(error)
  if (error) {
    return <Error error={error.message} />
  }
  if (!data) {
    return <Loader />
  }
  const endSlice: number = currentPage * maxLimit
  const startSlice: number = endSlice - maxLimit
 
  const splittedData: Array<Coin> = data?.Data?.Data
    .sort((a: Coin, b: Coin) => {
      return b.time - a.time
    })
    .slice(startSlice, endSlice)

  return <>
    <section>
      <h2 className={styles.h2}>Siste veksling verdi</h2>
      <ul className={styles.list}>
        {splittedData.map((coin: Coin) => <CoinItem 
          coin={coin} 
          key={coin.time} />) }
      </ul>
    </section>
    <nav>
      <Pagination 
        current={currentPage} 
        maxLimit={maxLimit} 
        totItems={data?.Data?.Data.length} 
        setCurrentPage={setCurrentPage} />
    </nav>
  </>  
}
