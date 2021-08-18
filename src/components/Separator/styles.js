import styled from 'styled-components'

export const Separator = styled.div`
  display: flex;
  width: 100%;
  height: 0.1rem;
  margin: ${({ margin }) => margin || '0.5rem 0'};
  border-radius: 0.5rem;
  background-color: #b1bcd3;
`
