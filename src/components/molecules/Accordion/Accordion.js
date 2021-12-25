import { useState } from "react";
import HeaderItemAccordion from "../../atoms/HeaderItemAccordion";
import Input from "../../atoms/Input";

import "./Accordion.css";

export default function ItemAccordion({ children }) {
    const [isActive, setActive] = useState(false);
    //TODO refactor name
    //Question: is necesary to have a atom that only contains a html tag ??
    return (
        <>
            <div className="item-accordion">
                <HeaderItemAccordion
                    isActive={isActive}
                    onClick={() => setActive(!isActive)}
                >
                    Quimica
                </HeaderItemAccordion>
                {isActive && (
                    <ul className="item-accordion__list">{children}</ul>
                )}
            </div>
        </>
    );
}
