import { useState } from "react"
import { Botao, Campos, Form } from "./styles"
import { contatos } from "../ListaContatos"

export const FormCadastro = () => {

  const [nomeCampo, setNomeCampo] = useState('')

  return(
    <Form>
      <Campos type="text" placeholder="Nome completo" value={nomeCampo} onChange={(e) => setNomeCampo(e.target.value)} />
      <Campos type="tel" placeholder="Telefone"/>
      <Campos type="email" placeholder="Seu email"/>
      <div>
        <Botao type="button" >Cadastrar</Botao>
        <Botao type="button">Cancelar</Botao>
      </div>
    </Form>
  )
}
