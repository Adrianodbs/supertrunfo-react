import { styled } from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 280px;
  height: 350px;

  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  box-shadow: -10px 11px 0px 1px rgba(0, 0, 0, 1);
  -webkit-box-shadow: -10px 11px 0px 1px rgba(0, 0, 0, 1);
  -moz-box-shadow: -10px 11px 0px 1px rgba(0, 0, 0, 1);
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f75aae;
  width: 100%;
  height: 60%;
  border-radius: 8px;
  padding: 4px;

  h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    padding: 4px 0;
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 18px;
    margin-bottom: 2px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    border: 2px solid #fabc01;
    margin-bottom: 4px;
    padding: 2px 4px;
    cursor: pointer;
  }
`
