import styled, { css } from 'styled-components'

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 46rem;
  width: 100%;
  padding: 1.5rem 2rem;
  background-image: linear-gradient(to right, #CE1A35, #FD5A41);
  border-radius: 0.8rem;
  color: #fff;
  outline: none;
  box-shadow: 0 0.3rem 1rem rgba(26, 45, 90, 0.52);
  border: 0.15rem solid #FD5A41;
  cursor: pointer;

  ${({ disabled }) => disabled ? css`
    opacity: 0.5;
  ` : css`    
    &:hover {
      background-image: linear-gradient(to right, #FD5A41, #FD5A41);
    }

    &:active {
      background-image: linear-gradient(to right, #CE1A35, #CE1A35);
    }

    &:focus {
      border: 0.15rem solid #fff;
    }
  `}
`
