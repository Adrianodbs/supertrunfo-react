import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 90%;
  height: 90vh;

  background-color: #5359f9;
  box-shadow: 0px 1px 8px 3px rgba(134, 157, 202, 0.71);
  -webkit-box-shadow: 0px 1px 8px 3px rgba(134, 157, 202, 0.71);
  -moz-box-shadow: 0px 1px 8px 3px rgba(134, 157, 202, 0.71);

  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 25px;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;

    @media screen and (max-width: 620px) {
      font-size: 20px;
    }
  }
`

export const Table = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  gap: 20px;

  @media screen and (max-width: 620px) {
    gap: 12px;
  }

  @media screen and (max-width: 425px) {
    gap: 20px;
  }

  .versus {
    width: 80px;
    height: 80px;

    @media screen and (max-width: 620px) {
      width: 40px;
      height: 40px;
    }

    @media screen and (max-width: 425px) {
      display: none;
    }
  }
`

export const Result = styled.div`
  height: 30px;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const RestartButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #fff;
  color: #5359f9;
  font-size: 20px;
  font-weight: bold;
`
