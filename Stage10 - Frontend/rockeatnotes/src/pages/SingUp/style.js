import styled from 'styled-components'
import backgroundImg from '../../Assets/background.png'

export const Container = styled.div`
  display: flex;
  height: 100vh;

  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 0 136px;

  > h1 {
    font-weight: 700;
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    padding: 48px 0;
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > a {
    margin-top: 26px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
