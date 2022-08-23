import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  border-radius: 10px;
  margin-top: 16px;
  font-family: 500;

  &:disabled {
    opacity: 0.5;
  }
`
