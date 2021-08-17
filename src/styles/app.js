import styled, { css } from 'styled-components'
import { Add, Delete, Save } from '@styled-icons/material-outlined'
import T from '../theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
  row-gap: 3rem;
  position: relative;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
`

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
  
  ${T.breakPoints(490)} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const styledIcons = css`
  fill: #fff;
  width: 2rem;
  height: 2rem;
`

export const IconAdd = styled(Add)`
  ${styledIcons}
`

export const IconDelete = styled(Delete)`
  f${styledIcons}
`

export const IconSave = styled(Save)`
  ${styledIcons}
`
