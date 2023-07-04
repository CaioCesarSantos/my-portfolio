import { Header } from './components/header/header'

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
        <Header/>
        <div className="experience">
          <h3>Experience</h3>
          <p>Developer in career transition, looking for opportunities as front-end and back-end.</p>
          <div className="experience-time">            
          </div>
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
        </div>
    </main>
  )
}
