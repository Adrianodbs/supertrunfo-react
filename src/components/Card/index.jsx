import React from 'react'
import * as C from './style'

export default function Card({
  name,
  image,
  subtitle,
  strong,
  intelligence,
  defense,
  onClick
}) {
  return (
    <C.Card>
      <C.Hero>
        <h3>{name}</h3>
        <C.Image>
          <img src={image} alt="Hero" />
        </C.Image>
      </C.Hero>
      <C.Info>
        <h4>{subtitle}</h4>
        <p onClick={() => onClick('strong')}>Força: {strong}</p>
        <p onClick={() => onClick('intelligence')}>
          Inteligência: {intelligence}
        </p>
        <p onClick={() => onClick('defense')}>Defesa: {defense}</p>
      </C.Info>
    </C.Card>
  )
}
