import { useRef, useState, useEffect } from 'react'
import * as C from './components'
import * as S from './styles/app'
import IconWhatsApp from './components/Icon/WhatsApp'
import validation from './utils/validation'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {
  const [todos, setTodos] = useState([])
  const [modalAddTodo, setModalAddTodo] = useState(false)
  const [modalRemoveTodo, setModalRemoveTodo] = useState(false)
  const [modalShareTodo, setModalShareTodo] = useState(false)
  const [modalEditTodo, setModalEditTodo] = useState(false)
  const [indexTodo, setIndexTodo] = useState(null)
  const [activeButtonShare, setActiveButtonShare] = useState(true)

  const inputRef = useRef(null)
  const textRef = useRef(null)
  const editInputRef = useRef(null)
  const editTextFieldRef = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    if(getLocalStorage('listTodos') !== null) {
      setTodos(getLocalStorage('listTodos'))
    }
  }, [])

  useEffect(() => setLocalStorage('listTodos', todos), [todos])

  const showModalAddTodo = () => setModalAddTodo(prevState => !prevState)
  const showModalRemoveTodo = () => setModalRemoveTodo(prevState => !prevState)
  const showModalShareTodo = () => setModalShareTodo(prevState => !prevState)
  const showModalEditTodo = () => setModalEditTodo(prevState => !prevState)

  const doneTodo = (i) => {
    const newTodo = [...todos]
    newTodo[i].done = !todos[i].done
    setTodos(newTodo)
  }

  const clearTextField = () => {
    inputRef.current.value = ''
    textRef.current.value = ''
  }

  const addTodo = () => {
    if (textRef.current.value === '' || inputRef.current.value === '') return

    const todo = { title: inputRef.current.value, msg: textRef.current.value, done: false }

    setTodos([...todos, todo])

    clearTextField()

    inputRef.current.focus()
  }

  const editTodo = () => {
    const newTodo = [...todos]
    newTodo[indexTodo].title = editInputRef.current.value
    newTodo[indexTodo].msg = editTextFieldRef.current.value
    setTodos(newTodo)

    setModalEditTodo(prevState => !prevState)
  }


  const removeTodo = (i) => {
    const newTodos = [...todos]
    newTodos.splice(i, 1)
    setTodos(newTodos)

    setModalRemoveTodo(prevState => !prevState)
  }

  const shareWhatsApp = () => {
    const phone = validation(phoneRef.current.value)
    const linkBase = `https://api.whatsapp.com/send?phone=55${phone}&text=`
    const redirect = `${linkBase}*${todos[indexTodo].title}*%0a%0a${todos[indexTodo].msg}`

    window.open(
      redirect,
      '_blank'
    )
  }

  const validatePhone = () => {
    console.log('antes', phoneRef.current.value)
    if(validation(phoneRef.current.value).length >= 11) {
      console.log('if', phoneRef.current.value)
      setActiveButtonShare(false)
    }
    else !activeButtonShare && setActiveButtonShare(true)
  }

  const verifyCompleteTodos = () => {
    return todos.filter(({ done }) => done === true).length
  }

  return (
    <S.Container>
      <C.CardWrapper as="header">
        <S.WrapperHeader>
          <h1>Bem vindo!</h1>

          <C.Button
            onClick={showModalAddTodo}
            txt="Adicionar Tarefa"
            icon={<S.IconAdd />}
          />
        </S.WrapperHeader>
      </C.CardWrapper>

      <C.CardWrapper>
        <C.CompleteTodos completeTodos={verifyCompleteTodos()} TotalTodos={todos.length} />
      </C.CardWrapper>

      <S.Main>
        {todos.map(({ title, msg, done }, i) => (
          <C.Todo
            key={i}
            setIndexTodo={setIndexTodo}
            index={i}
            showModalRemoveTodo={showModalRemoveTodo}
            showModalEditTodo={showModalEditTodo}
            showModalShareTodo={showModalShareTodo}
            title={title}
            msg={msg}
            done={done}
            doneTodo={doneTodo}
          />
        ))}
      </S.Main>

      {modalAddTodo && (
        <C.Modal title="Atenção" onClick={showModalAddTodo}>
          <C.Input ref={inputRef} placeholder="Escreva o título do seu todo..." />

          <C.TextField ref={textRef} />

          <C.Button
            fullWidth={true}
            center={true}
            onClick={addTodo}
            txt="Adicionar Todo"
            icon={<S.IconAdd />}
          />
        </C.Modal>
      )}

      {modalEditTodo && (
        <C.Modal title="Atenção" onClick={showModalEditTodo}>
          <C.Input
            defaultValue={todos[indexTodo].title}
            ref={editInputRef}
            placeholder="Escreva o título do seu todo..."
          />

          <C.TextField
            defaultValue={todos[indexTodo].msg}
            ref={editTextFieldRef}
          />

          <C.Button
            fullWidth={true}
            center={true}
            onClick={editTodo}
            txt="Salvar Alterações"
            icon={<S.IconSave />}
          />
        </C.Modal>
      )}

      {modalRemoveTodo && (
        <C.Modal title="Atenção" onClick={showModalRemoveTodo}>
         <p>Deseja realmente excluir o todo?</p>

          <C.Button
            onClick={() => removeTodo(indexTodo)}
            txt="Excluir o Todo"
            icon={<S.IconDelete />}
            fullWidth={true}
            center={true}
          />
        </C.Modal>
      )}

      {modalShareTodo && (
        <C.Modal title="Compartilhar" onClick={showModalShareTodo}>
         <p>
           Insira o número do celular com DDD para o qual deseja compartilhar o todo:
         </p>

          <C.Input
            ref={phoneRef}
            placeholder="(XX) 9 XXXX-XXXX"
            onChange={validatePhone}
          />

          <C.Button
            onClick={shareWhatsApp}
            txt="Compartilhar Agora"
            icon={<IconWhatsApp size="2rem" />}
            disabled={activeButtonShare}
            fullWidth={true}
            center={true}
          />
        </C.Modal>
      )}
    </S.Container>
  )
}

export default App;
