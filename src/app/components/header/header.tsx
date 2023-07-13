import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
           <div>
            <h1>Oi, eu sou Caio Cesar!</h1>
            <h2>desenvolvedor de software</h2>
           </div>
           <Image
             src="/CaioCesar2.jpg"
             alt="Vercel Logo"
             width={290}
             height={305}
              priority
            />
        </div>
    )
}