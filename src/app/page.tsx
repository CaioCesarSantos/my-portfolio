import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <Experience/>
          <div className="infos">
            <h3>languages</h3>
            <div className="languages-infos">
              <span>🌎🇺🇸 EN - fluent</span>
              <span>⚓🇧🇷 PT-BR - Native speaker</span>
            </div>
            <h3>Education</h3>
            <div className="educational-info">
              <span></span>
              <span>Bachelor's Degree Systems Analysis and Development - Universidade Estacio</span>
            </div>
            
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button>contact me</button>
          </div>
    </main>
  )
}
