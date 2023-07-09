import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info() {
    return(
        <div className="infos">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
              <span>🌎🇺🇸 EN - fluent</span>
              <span>⚓🇧🇷 PT-BR - Native speaker</span>
            </div>
            <SectionTitle text="Education"/>
            <div className="educational-info">
              <span></span>
              <span>Bachelor's Degree Systems Analysis and Development - Universidade Estacio</span>
            </div>
            
          </div>
    )
}