import Cabecalho from './containers/Header'
import { FormCadastro } from './containers/FormCadastro';
import { ListaContatos } from './containers/ListaContatos';
import { Container } from './styles';

function App() {
  return (
    <Container>
      <Cabecalho />
      <FormCadastro />
      <ListaContatos />
    </Container>
  );
}

export default App;
