import styled from 'styled-components'

export const TextField = styled.input`
  border-radius: 0.8rem;
  border: 0.1rem solid #b1bcd3;
  width: 100%;
  outline: none;
  padding: 2rem;
  min-height: 6rem;
  height: 100%;
  transition: border 0.2s linear;
  word-break: break-word;
  
  &:focus {
    border: 0.1rem solid #1a2d5a;
  }
`
