import { useState } from "react";

export default function Accordion(props) {
    const {title, content} = props;
    const [isActive, setIsActive] = useState(false);


    return (
        <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
              </div>
              {isActive && <div className="accordion-content">{content}</div>}
            </div>
          </div>
    )

}
