import { useState } from 'react'
import * as C from '../../components'
import * as S from './styles'
import IconWhatsApp from '../Icon/WhatsApp'

const Todo = ({
  title,
  msg,
  showModalRemoveTodo,
  showModalShareTodo,
  setIndexTodo,
  index
}) => {
  const [showActions, setShowActions] = useState(false)

  const showButtons = () => {
    setShowActions(prevState => !prevState)
  }

  const ActionRemoveTodo = () => {
    showModalRemoveTodo()
    setIndexTodo(index)
  }

  const ActionShareTodo = () => {
    showModalShareTodo()
    setIndexTodo(index)
  }

  return (
    <S.Wrapper onClick={showButtons}>
      <S.WrapperContent showPadding={showActions}>
        <S.Title>{title}</S.Title>
        <S.Separator />
        <S.Text>{msg}</S.Text>
      </S.WrapperContent>

      {showActions && (
        <S.WrapperIcons>
          <C.ButtonIcon onClick={ActionRemoveTodo} icon={<S.IconDelete />} />
          <C.ButtonIcon icon={<S.IconEdit />} />
          <C.ButtonIcon
            onClick={ActionShareTodo}
            icon={<IconWhatsApp />}
          />
        </S.WrapperIcons>
      )}
    </S.Wrapper>
  )
}

export default Todo
