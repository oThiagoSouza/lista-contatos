import { Contato, Props } from "../../components/Contato"
import { Container } from "../../styles"
import { ContainerCard } from "./styles"


export const contatos = [
  {
    nome: 'Thiago',
    telefone: 11968653386,
    email: 'teste@teste.com'
  },
  {
    nome: 'Ana',
    telefone: 11930641277,
    email: 'teste@text.com'
  }
]

export const ListaContatos = () => {
  return (
    <Container>
      <ContainerCard>
        {contatos.map((c) => (
          <li>
            <Contato nome={c.nome} email={c.email} telefone={c.telefone}/>
          </li>
        ))}
      </ContainerCard>
    </Container>
  )
}
