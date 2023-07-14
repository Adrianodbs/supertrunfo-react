import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import * as C from './style'
import { heroList } from '../../utils/heroList'

export default function Home() {
  const [card1, setCard1] = useState(null)
  const [card2, setCard2] = useState(null)
  const [selectedAttribute, setSelectedAttribute] = useState(null)
  const [result, setResult] = useState(null)

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
    setCard2(heroList[randomIndex2])
    setSelectedAttribute(null)
    setResult(null)
  }

  const handleAttributeSelection = attribute => {
    setSelectedAttribute(attribute)

    if (card1[attribute] > card2[attribute]) {
      setResult('Você venceu!')
    } else if (card1[attribute] < card2[attribute]) {
      setResult('O computador venceu!')
    } else {
      setResult('Empate!')
    }
  }

  return (
    <C.Container>
      <C.Content>
        <h1>Super Trunfo</h1>
        <C.Table>
          {card1 && (
            <Card
              {...card1}
              onClick={attribute => handleAttributeSelection(attribute)}
            />
          )}
          {card2 && (
            <Card
              {...card2}
              onClick={attribute => handleAttributeSelection(attribute)}
            />
          )}
        </C.Table>
        <C.Result>{result}</C.Result>
      </C.Content>
    </C.Container>
  )
}
