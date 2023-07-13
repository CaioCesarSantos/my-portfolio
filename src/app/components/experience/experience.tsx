import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss"

export function Experience() {
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Desenvolvedor em transição de carreira, em busca de oportunidades como front-end e back-end.</p>
          <div className="experience-time">
          <div className="experience-language">
              <Image
                src="/html5.png"
                alt="HTML5 Logo"
                width={40}
                height={40}
                priority
              />
              <div className="experience-unit">
                <div className="experience-measure measure-3">
                  <span>6 Meses</span>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <Image
                src="/css-3.png"
                alt="CSS Logo"
                width={40}
                height={40}
                priority
              />
              <div className="experience-unit">
                <div className="experience-measure measure-3">
                  <span>6 Meses</span>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <Image
                src="/js.png"
                alt="Javascript Logo"
                width={40}
                height={40}
                priority
              />
              <div className="experience-unit">
                <div className="experience-measure measure-2">
                  <span>2 Meses</span>
                </div>
              </div>
            </div>
            
            <div className="experience-language">
              <Image
              src="/react.png"
                alt="React Logo"
                width={40}
                height={40}
                priority              
              />
              <div className="experience-unit">
                <div className="experience-measure measure-1">
                  <span>1 Mês</span>
                </div>
              </div>
            </div>
            
            <div className="experience-language">
              <Image
                src="/ts1.png"
                alt="Typescript Logo"
                width={40}
                height={40}
                priority
              />
              <div className="experience-unit">
                <div className="experience-measure measure-1">
                  <span>1 Mês</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}