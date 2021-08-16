import styled from 'styled-components'
import { Add, Delete } from '@styled-icons/material-outlined'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 120rem;
  row-gap: 2rem;
  position: relative;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
`

export const IconAdd = styled(Add)`
  fill: #fff;
  width: 2rem;
  height: 2rem;
`

export const IconDelete = styled(Delete)`
  fill: #fff;
  width: 2rem;
  height: 2rem;
`
