import * as S from './styles'

const CardWrapper = ({ children, ...props }) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default CardWrapper
