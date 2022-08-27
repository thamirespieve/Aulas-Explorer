import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    font-size: 20px;
    font-weight: 400;
    line-height: 26px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    padding-bottom: 16px;
    margin-bottom: 26px;
  }
`
