import { convertDate } from '@/utils/utils'
import Image from 'next/image'
import { Coin } from '@/utils/interfaces'

export default function CoinItem( props: {coin: Coin}) {

  return <li>
      <span>
        {convertDate(props.coin.time)}
      </span>
      <span>
        <Image src='/down.svg' width={20} height={12} alt='' aria-hidden="true" />
        {props.coin.low}
      </span>
      <span>
      <Image src='/up.svg' width={20} height={12} alt='' aria-hidden="true" />
        {props.coin.high}
      </span>
      <span>
        {props.coin.conversionType}
      </span>
    </li>
}
