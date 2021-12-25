import { useState } from "react";
import HeaderAccordion from "../../atoms/HeaderAccordion";
import Input from "../../atoms/Input";

import "./Accordion.css";

export default function ItemAccordion({ children }) {
    const [isActive, setActive] = useState(false);
    //TODO refactor name
    //Question: is necesary to have a atom that only contains a html tag ??
    return (
        <>
            <div className="accordion">
                <HeaderAccordion
                    isActive={isActive}
                    onClick={() => setActive(!isActive)}
                >
                    Quimica
                </HeaderAccordion>
                {isActive && <ul className="accordion__list">{children}</ul>}
            </div>
        </>
    );
}
