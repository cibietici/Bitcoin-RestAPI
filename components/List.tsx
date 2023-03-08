import Pagination from './Paginations'
import useSWR from 'swr'
import Loader from './Loader'
import Error from './Error'
import { useState } from 'react'
import CoinItem from './CoinItem'
import styles from '@/styles/Home.module.css'

export default function List() {
  const endPoint = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=${process.env.APIKEY}`
  
  const [currentPage, setCurrentPage] = useState(1)
  const maxLimit = 20

  const { data, error } = useSWR(endPoint)
  if (error) {
    return <Error error={error.message} />
  }
  if (!data) {
    return <Loader />
  }
  const endSlice = currentPage * maxLimit
  const startSlice = endSlice - maxLimit
 
  const reducedData = data?.Data?.Data.slice(startSlice, endSlice)

  return <>
    <ul>
      {reducedData.map((item: any) => <CoinItem 
        coin={item} 
        key={item.high} />) }
    </ul>
    <Pagination 
      current={currentPage} 
      maxLimit={maxLimit} 
      totItems={data?.Data?.Data.length} 
      setCurrentPage={setCurrentPage} />
    </>
}
