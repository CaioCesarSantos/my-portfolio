import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return(
        <div className="infos">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
              <span>🌎 EN - iniciante muito dedicado</span>
              <span>⚓ PT-BR - Falante nativo</span>
            </div>
            <SectionTitle text="Education"/>
            <div className="educational-info">
              <span>📖Olá, Tenho 31 anos. Estou focado de carreira para programador, estudando análise e desenvolvimento de sistema de software e trabalhando com algumas linguagem de dados como HTML5, CSS, JAVACRIPT, REACT e NODEjs.</span>
            </div>
            
          </div>
    )
}