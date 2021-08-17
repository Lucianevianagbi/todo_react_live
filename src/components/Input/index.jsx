import * as S from './styles'
import { forwardRef, useEffect } from 'react'

const Input = forwardRef(({ ...props }, ref) => {
  useEffect(() => ref?.current.focus(), [])

  return (
    <S.TextField ref={ref} {...props} />
  )
})

export default Input
