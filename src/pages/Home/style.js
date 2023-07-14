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
  }
`

export const Table = styled.div`
  display: flex;
  margin: 10px;
  gap: 20px;
`

export const Result = styled.div`
  height: 30px;
  padding: 10px;
`
export const Attributes = styled.div``
