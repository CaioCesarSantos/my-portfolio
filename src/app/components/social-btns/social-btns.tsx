import { GithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.linkedin.com/in/caio-cesar-santos-586b94165/">
                <LinkedinIcon/>
            </a>
            <a href="https://www.instagram.com/caio.osc/">
                <InstaIcon/>
            </a>
            <a href="https://github.com/CaioCesarSantos">
                <GithubIcon/>
            </a>
            
        </div>
    )
}