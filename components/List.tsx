import Pagination from "./Paginations";
import useSWR from 'swr'
import Loader from "./Loader";
import Error from "./Error";

export default function List() {
  const endPoint = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=${process.env.APIKEY}`
  
  const { data, error } = useSWR(endPoint)
  if (error) {
    <Error error={error.message} />
  }
  if (!data) {
    <Loader />
  }
  console.log(data?.Data?.Data)
  return <>
      <p>list</p>
      <Pagination />
    </>
}
