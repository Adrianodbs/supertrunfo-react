import * as C from './style'
import heroCard from '../../../public/img/nautilus.png'
import { heroList } from '../../utils/heroList'

export default function Card() {
  return (
    <C.Card>
      {/* {heroList.map(hero => (
        <>
          <C.Hero>
            <h3>{hero.name}</h3>
            <C.Image>
              <img src={hero.image} alt="Hero" />
            </C.Image>
          </C.Hero>
          <C.Info>
            <h4>{hero.subtitle}</h4>
            <p>Força: {hero.strong}</p>
            <p>Inteligência: {hero.intelligence}</p>
            <p>Defesa: {hero.defense}</p>
          </C.Info>
        </>
      ))} */}
    </C.Card>
  )
}
