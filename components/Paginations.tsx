import styles from '@/styles/Home.module.css'

export default function Pagination(props: {
    current: number, 
    maxLimit: number, 
    totItems: number, 
    setCurrentPage: Function}
  ) {
  
  const {current, maxLimit, totItems, setCurrentPage} = props
  const paginations: Array<number> =[]
  
  for(let i=1; i < Math.ceil(totItems/maxLimit); i++)  {
    paginations.push(i)
  }

  return <ul>
      {
        paginations.map((pagination: number) => {
          return <li key={pagination}>
            <a 
              href="#" 
              className={pagination === current ? styles.highlight : styles.pagination}
              onClick={() => setCurrentPage(pagination)}>
                {pagination}
            </a>
          </li>
        })
      }
    </ul>
}
