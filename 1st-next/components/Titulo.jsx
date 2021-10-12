export default function Titulo(props) {
  return props.pequeno ? (
    <>
      <h3>{ props.principal }</h3>
      <h4>{ props.detalhe }</h4>
    </>
    ) : (
    <>
      <h1>{ props.principal }</h1>
      <h2>{ props.detalhe }</h2>
    </>
   )
}