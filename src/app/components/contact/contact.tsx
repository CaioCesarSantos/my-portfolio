import { EmailIcon } from "../icons/email-icon";
import { SocialBtns } from "../social-btns/social-btns";

import "./contact.scss"

export function Buttons() {
    return(
        <div className="buttons">
            <SocialBtns/>
            <a className="btn-primary" href="mailto:caiocesar15790@gmail.com">
              contact me
              <EmailIcon/>
            </a>
        </div>
    )
}