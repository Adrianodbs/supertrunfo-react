import * as C from './style'
import heroCard from '../../../public/img/hero1.jpg'

export default function Card() {
  return (
    <C.Card>
      <C.Hero>
        <h3>Personagem teste</h3>
        <img src={heroCard} alt="Hero" />
      </C.Hero>
      <C.Info>
        <h4>Lutador</h4>
        <span>Planeta X</span>
        <p>Força</p>
        <p>Inteligência</p>
        <p>Velocidade</p>
      </C.Info>
    </C.Card>
  )
}
