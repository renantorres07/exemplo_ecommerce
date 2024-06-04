import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src={'/img/logo.svg'}
      alt={'Imagem de um átomo e React Avançado escrito ao lado'}
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src={'/img/hero-illustration.svg'}
      alt={'Um desenvolvedor em frente á uma tela com um código'}
    />
  </S.Wrapper>
)

export default Main
