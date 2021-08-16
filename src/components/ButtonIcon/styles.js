import styled from 'styled-components'

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #CE1A35, #FD5A41);
  border-radius: 50%;
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  box-shadow: 0 0.2rem 0.8rem #1A2D5A66;
  border: 0.1rem solid #FD5A41;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to right, #FD5A41, #FD5A41);
  }

  &:active {
    background-image: linear-gradient(to right, #CE1A35, #CE1A35);
  }

  &:focus {
    border: 0.15rem solid #fff;
  }
`
