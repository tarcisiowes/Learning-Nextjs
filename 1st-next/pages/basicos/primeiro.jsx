import Titulo from "../../components/Titulo"

export default function primeiro() {
  return (
    <>
      <Titulo
        principal="Página de cadastro"
        detalhe="Incluir, alterar e excluir coisas!"      
      />
      
      <Titulo
        principal="Página de login"
        detalhe="validar, entrar e visualizar coisas!"
        pequeno
      />
      
      Primeiro componente
    </>
  )
}