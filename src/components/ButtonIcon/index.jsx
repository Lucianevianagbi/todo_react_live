import * as S from './styles'

const ButtonIcon = ({ icon, ...props }) => {
  return (
    <S.Btn {...props}>{icon}</S.Btn>
  )
}

export default ButtonIcon
