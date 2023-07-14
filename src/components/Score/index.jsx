import { styled } from 'styled-components'

export default function Score({ playerScore, computerScore }) {
  return (
    <Scoreboard>
      <ScoreStyle>
        Jogador: <span>{playerScore}</span>
      </ScoreStyle>
      <ScoreStyle>
        Computador: <span>{computerScore}</span>
      </ScoreStyle>
    </Scoreboard>
  )
}

const Scoreboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  gap: 4px;
  padding: 4px;
  border-radius: 4px;
`

const ScoreStyle = styled.div`
  font-size: 16px;
  font-weight: 500;
`
