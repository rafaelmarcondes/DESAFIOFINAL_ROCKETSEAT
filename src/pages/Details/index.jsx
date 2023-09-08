import { Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Trabalho Final
          </h1>

          <p>
            Neste desafio, vamos desenvolver o food explorer, um menu interativo para um restaurante fictício.

            Você deverá construir uma aplicação de ponta a ponta com front-end e back-end, utilizando as teconologias aprendidas no Explorer, simulando um restaurante de acordo com o layout disponibilizado no Figma. O link do Figma possui o layout de uma aplicação completa que vai desde a visualização de um prato até o pagamento do mesmo, bem como a versão mobile do projeto.

            O food explorer terá duas personas: o admin e o usuário;

            O admin é a pessoa responsável pelo restaurante, logo, poderá criar, visualizar, editar e apagar um prato a qualquer momento. Cada prato deve conter uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o seu preço. Ao clicar em adicionar prato, o admin receberá uma mensagem de sucesso e será redirecionado para a página principal;

            O usuário irá visualizar todos os pratos cadastrados e, quando clicar em um prato, será redirecionado para uma nova tela com informações mais detalhadas sobre ele.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://app.rocketseat.com.br/explorer/final-challenge</a>
              </li>
              <li>
                <a href="#">https://app.rocketseat.com.br/me/rafael-marcondes-07622</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}