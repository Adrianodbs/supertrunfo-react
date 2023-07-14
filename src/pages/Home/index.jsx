import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import * as C from './style'
import { heroList } from '../../utils/heroList'
import blankImage from '../../assets/interrogacao.png'
import cruz from '../../assets/cruz.png'

const blankCard = {
  name: '?????',
  image: blankImage,
  subtitle: '???',
  strong: '??',
  intelligence: '??',
  defense: '??'
}

export default function Home() {
  const [card1, setCard1] = useState(null)
  const [card2, setCard2] = useState(blankCard)
  const [selectedAttribute, setSelectedAttribute] = useState(null)
  const [result, setResult] = useState(null)
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [round, setRound] = useState(1)
  const [attributeDisabled, setAttributeDisabled] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    selectRandomCards()
  }, [])

  const selectRandomCards = () => {
    const randomIndex1 = Math.floor(Math.random() * heroList.length)
    let randomIndex2
    do {
      randomIndex2 = Math.floor(Math.random() * heroList.length)
    } while (randomIndex2 === randomIndex1)

    setCard1(heroList[randomIndex1])
    setCard2(blankCard)
    setSelectedAttribute(null)
    setResult(null)
    setAttributeDisabled(false)
    setGameOver(false)
  }

  const handleAttributeSelection = attribute => {
    setSelectedAttribute(attribute)
    setAttributeDisabled(true)

    const randomIndex = Math.floor(Math.random() * heroList.length)
    const randomCard = heroList[randomIndex]

    const computerCard = {
      ...randomCard,
      image: randomCard.image || blankCard.image
    }

    setCard2(computerCard)

    if (card1[attribute] > computerCard[attribute]) {
      setResult('Você venceu!')
      setPlayerScore(prevScore => prevScore + 1)
    } else if (card1[attribute] < computerCard[attribute]) {
      setResult('O computador venceu!')
      setComputerScore(prevScore => prevScore + 1)
    } else {
      setResult('Empate!')
    }

    setTimeout(() => {
      setRound(prevRound => prevRound + 1)
      if (round >= 3) {
        setGameOver(true)
      } else {
        selectRandomCards()
      }
    }, 3000)
  }

  const handleRestartGame = () => {
    setPlayerScore(0)
    setComputerScore(0)
    setRound(1)
    selectRandomCards()
  }

  return (
    <C.Container>
      <C.Content>
        <h1>Escolha um atributo da sua carta para batalhar:</h1>
        <C.Scoreboard>
          <C.Score>
            Jogador: <span>{playerScore}</span>
          </C.Score>
          <C.Score>
            Computador: <span>{computerScore}</span>
          </C.Score>
        </C.Scoreboard>
        {!gameOver ? (
          <C.Table>
            {card1 && (
              <Card
                {...card1}
                onClick={
                  attributeDisabled
                    ? null
                    : attribute => handleAttributeSelection(attribute)
                }
              />
            )}
            {round <= 3 && <img src={cruz} alt="Versus" className="versus" />}
            {card2 && round <= 3 && (
              <Card
                {...card2}
                onClick={
                  attributeDisabled
                    ? null
                    : attribute => handleAttributeSelection(attribute)
                }
                showImage={!selectedAttribute}
              />
            )}
          </C.Table>
        ) : (
          <C.Result>
            Placar final: Jogador {playerScore} - {computerScore} Computador
            <C.RestartButton onClick={handleRestartGame}>
              Jogar Novamente
            </C.RestartButton>
          </C.Result>
        )}
        {!gameOver && round <= 3 && <C.Result>{result}</C.Result>}
      </C.Content>
    </C.Container>
  )
}
