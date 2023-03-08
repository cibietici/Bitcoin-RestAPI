import styles from '@/styles/Home.module.css'

export default function Error(props: {error: string | undefined}) {
  return <div className="error">{props.error}</div>
}
