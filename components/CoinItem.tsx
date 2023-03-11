import { convertDate } from '@/utils/utils'
import Image from 'next/image'
import { Coin } from '@/utils/interfaces'

export default function CoinItem( props: {coin: Coin}) {

  return <li>
      <time aria-label='verdi dato'>
        {convertDate(props.coin.time)}
      </time>
      <span aria-label='tap verdi'>
        <Image src='/down.svg' width={20} height={12} alt='' aria-hidden="true" />
        {props.coin.low}
      </span>
      <span aria-label='opptjent verdi'>
      <Image src='/up.svg' width={20} height={12} alt='' aria-hidden="true" />
        {props.coin.high}
      </span>
      <span aria-label='konverteringstype'>
        {props.coin.conversionType}
      </span>
    </li>
}
