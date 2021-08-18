import * as S from './styles'

const Button = ({ txt, icon, color = 'default', size = 'default', ...props }) => {
  return (
    <S.Btn {...props} color={color} size={size}>{icon}{txt}</S.Btn>
  )
}

export default Button
