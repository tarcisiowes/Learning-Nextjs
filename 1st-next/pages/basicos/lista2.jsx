function gerarLista(final) {
  const lista = []
  for (let i = 1; i <= final; i += 1){
    lista.push(<span key={ i }> { i },</span>)
  }
  return lista
}

export default function lista1() {
  return (
    <div>
      {gerarLista(27)}      
    </div>
  )
}