export default function CoinItem(props: any) {

  return <li>
      <span>{props.coin.low}</span>
      <span>{props.coin.high}</span>
      <span>{props.coin.time}</span>
      <span>{props.coin.conversionType}</span>
    </li>
}