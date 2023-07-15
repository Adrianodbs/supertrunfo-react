import React from 'react'
import * as C from './style'

export default function Card({
  name,
  image,
  subtitle,
  strong,
  intelligence,
  defense,
  onClick,
  disabledAttributes
}) {
  const isAttributeDisabled = attribute => {
    return disabledAttributes.includes(attribute)
  }

  const handleAttributeClick = attribute => {
    if (!isAttributeDisabled(attribute)) {
      onClick(attribute)
    }
  }

  return (
    <C.Card>
      <C.Hero>
        <h3>{name}</h3>
        <C.Image>
          <img src={image} alt={name} />
        </C.Image>
      </C.Hero>
      <C.Info>
        <h4>{subtitle}</h4>
        <p
          onClick={() => handleAttributeClick('strong')}
          className={isAttributeDisabled('strong') ? 'disabled' : ''}
        >
          Força: {strong}
        </p>
        <p
          onClick={() => handleAttributeClick('intelligence')}
          className={isAttributeDisabled('intelligence') ? 'disabled' : ''}
        >
          Inteligência: {intelligence}
        </p>
        <p
          onClick={() => handleAttributeClick('defense')}
          className={isAttributeDisabled('defense') ? 'disabled' : ''}
        >
          Defesa: {defense}
        </p>
      </C.Info>
    </C.Card>
  )
}
