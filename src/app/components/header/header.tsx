import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
           <div>
            <h1>Hi, i'm Caio Cesar!</h1>
            <h2>Software Engineer</h2>
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