import * as S from './styles'
import * as C from '../../components'

const Modal = ({ children, title, onClick }) => {
  return (
    <S.Overlay>
      <S.Modal>
        <S.ContainerClose onClick={onClick}>
          <S.IconClose />
        </S.ContainerClose>

        <h2>{title}</h2>

        <C.Separator margin="2rem 0" />

        <S.Content>
          {children}
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}

export default Modal
