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

  return <ul className={styles.pagination}>
      {
        paginations.map((page: number) => {
          return <li key={page}>
            <a 
              href="#top" 
              className={page === current ? styles.highlight : styles.page}
              onClick={() => setCurrentPage(page)}
              aria-label={`side ${page} av ${takes}`}>
                { page }
            </a>
          </li>
        })
      }
    </ul>
}
