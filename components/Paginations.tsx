export default function Pagination(props) {
  
  const {current, maxlimit, totItems, setCurrentPage} = props
  return <ul>
        <li>
          <a href="#" onClick={() => setCurrentPage(1)}>1</a>
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage(2)}>2</a>
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage(3)}>3</a>
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage(4)}>4</a>
        </li>
        <li>
          <a href="#" onClick={() => setCurrentPage(5)}>5</a>
        </li>
    </ul>
}