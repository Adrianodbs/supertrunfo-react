import * as C from './style'
import heroCard from '../../../public/img/nautilus.png'

export default function Card() {
  return (
    <C.Card>
      <C.Hero>
        <h3>Personagem teste</h3>
        <C.Image>
          <img src={heroCard} alt="Hero" />
        </C.Image>
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
