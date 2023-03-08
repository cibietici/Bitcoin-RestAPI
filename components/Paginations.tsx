import styles from '@/styles/Home.module.css'

export default function Pagination(props: {
    current: number, 
    maxLimit: number, 
    totItems: number, 
    setCurrentPage: Function}
  ) {
  
  const {current, maxLimit, totItems, setCurrentPage} = props
  const takes: number = Math.ceil(totItems/maxLimit)

  let paginations: Array<number> = Array
    .from({ length: takes }, (value: number, index: number) => index + 1);

  return <ul>
      {
        paginations.map((pagination: number) => {
          return <li key={pagination}>
            <a 
              href="#" 
              className={pagination === current ? styles.highlight : styles.pagination}
              onClick={() => setCurrentPage(pagination)}>
                { pagination }
            </a>
          </li>
        })
      }
    </ul>
}
