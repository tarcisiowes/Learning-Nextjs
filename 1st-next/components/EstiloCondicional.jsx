export default function EstiloCondicional( props) {

  return (
    <div>
      <h1 style={ {
        backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
      }} >
        Texto #1
      </h1>
    </div>
  )
}