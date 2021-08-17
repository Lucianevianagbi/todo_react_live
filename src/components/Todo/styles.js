import styled, { css } from 'styled-components'
import { Delete, Edit, Save } from '@styled-icons/material-outlined'

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: ${({ showPadding }) => showPadding ? '2rem' : '0'};
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  word-break: break-word;
`

export const Text = styled.p`
  font-size: 1.6rem;
  word-break: break-word;
`

export const Separator = styled.div`
  display: flex;
  height: 0.1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  background-color: #b1bcd3;
`

export const WrapperIcons = styled.div`
  flex-wrap: nowrap;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.8rem;
  display: flex;
`

const StylesIcons = css`
  width: 1.5rem;
  height: 1.5rem;
  fill: #fff;
`

export const IconEdit = styled(Edit)`
  ${StylesIcons}
`

export const IconDelete = styled(Delete)`
  ${StylesIcons}
`

export const IconSave = styled(Save)`
  ${StylesIcons}
`
