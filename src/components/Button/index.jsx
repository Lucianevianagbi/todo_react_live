import * as S from './styles'

const Button = ({ txt, icon, ...props }) => {
  return (
    <S.Btn {...props}>{icon}{txt}</S.Btn>
  )
}

export default Button
