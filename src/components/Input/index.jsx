import * as S from './styles'
import { forwardRef, useEffect } from 'react'

const Input = forwardRef(({ placeholder, onChange }, ref) => {
  useEffect(() => ref?.current.focus(), [])

  return (
    <S.TextField ref={ref} placeholder={placeholder} onChange={onChange} />
  )
})

export default Input
