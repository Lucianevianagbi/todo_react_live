import { useState } from 'react'
import * as C from '../../components'
import * as S from './styles'
import IconWhatsApp from '../Icon/WhatsApp'

const Todo = ({
  title,
  msg,
  done,
  showModalRemoveTodo,
  showModalShareTodo,
  showModalEditTodo,
  doneTodo,
  setIndexTodo,
  index
}) => {
  const [showActions, setShowActions] = useState(false)

  const showButtons = () => {
    setShowActions(prevState => !prevState)
  }

  const actionRemoveTodo = () => {
    showModalRemoveTodo()
    setIndexTodo(index)
  }

  const actionEditTodo = () => {
    showModalEditTodo()
    setIndexTodo(index)
  }

  const actionShareTodo = () => {
    showModalShareTodo()
    setIndexTodo(index)
  }

  const changeDone = (e) => {
    e.stopPropagation()
    doneTodo(index)
  }

  return (
    <C.CardWrapper onClick={showButtons}>
      <S.WrapperContent showPadding={showActions}>
        <S.Title done={done}>{title}</S.Title>
        <C.Separator />
        <S.Text done={done}>{msg}</S.Text>
      </S.WrapperContent>

      {showActions && (
        <S.WrapperButtons>
          <S.WrapperIcons>
            <C.ButtonIcon onClick={actionRemoveTodo} icon={<S.IconDelete />} />
            <C.ButtonIcon onClick={actionEditTodo} icon={<S.IconEdit />} />
            <C.ButtonIcon onClick={actionShareTodo} icon={<IconWhatsApp />} />
          </S.WrapperIcons>

          <C.Button
            onClick={(e) => changeDone(e)}
            txt={done ? 'Concluído' : 'Concluir'}
            color={done ? 'success' : 'danger'}
            size="small"
          />
        </S.WrapperButtons>
      )}
    </C.CardWrapper>
  )
}

export default Todo
