import { Container } from "../../styles"
import { BarraAcoes, Botao, Card, EmailContato, NomeContato, TelefoneContato } from "./styles"

export type Props = {
  nome: string
  telefone: number
  email: string
}

export const Contato = ( { nome, telefone, email }: Props ) => {

  return (
    <Container>
        <Card>
        <NomeContato>{nome}</NomeContato>
        <TelefoneContato>{telefone}</TelefoneContato>
        <EmailContato>{email}</EmailContato>
        <BarraAcoes>
          <Botao>Editar</Botao>
          <Botao>Remover</Botao>
        </BarraAcoes>
      </Card>
    </Container>
  )
}
