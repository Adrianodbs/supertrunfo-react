import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import * as C from './style'
import { heroList } from '../../utils/heroList'
import blankImage from '../../assets/interrogacao.png'

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
  }

  const handleAttributeSelection = attribute => {
    setSelectedAttribute(attribute)

    const randomIndex = Math.floor(Math.random() * heroList.length)
    const randomCard = heroList[randomIndex]

    setCard2({
      ...randomCard,
      image: randomCard.image || blankCard.image
    })

    if (card1[attribute] > randomCard[attribute]) {
      setResult('Você venceu!')
    } else if (card1[attribute] < randomCard[attribute]) {
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
