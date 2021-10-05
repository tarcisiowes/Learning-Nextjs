export default function jsx3() {
  const subtitulo = "Estou usando Js!"
  return (
    <div>
      <h1>Integração do Js e Jsx</h1>
      <h2>{ subtitulo }</h2>
      <h3>{ 3 * 4 }</h3>
      <h4>{ entre(9.6,1,10)}</h4>
    </div>
  )
}

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "Sim"
  } else {
    return "Não"
  }
}