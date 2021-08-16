import * as S from './styles'

const Modal = ({ children, title, onClick }) => {
  return (
    <S.Overlay>
      <S.Modal>
        <S.ContainerClose onClick={onClick}>
          <S.IconClose />
        </S.ContainerClose>

        <h1>{title}</h1>

        <S.Separator />

        <S.Content>
          {children}
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}

export default Modal
