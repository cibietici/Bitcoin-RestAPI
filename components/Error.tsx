export default function Error(props: {error: string | undefined}) {
  return <div className="error">{props.error}</div>
}