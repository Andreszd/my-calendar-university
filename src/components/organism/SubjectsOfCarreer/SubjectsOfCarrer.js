import HeaderSubjects from "../../molecules/HeaderSubjects";
import Accordion from "../../molecules/Accordion";
import ItemAccordion from "../../atoms/ItemAccordion";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Input from "../../atoms/Input";

import "./SubjectsOfCareer.css";

export default function SubjectsOfCarrer({ isShowing, setShow }) {
    return (
        <>
            <HeaderSubjects isShowing={isShowing} setShow={setShow} />
            <Input type="select" defaultOption="Levels" hasFullWidth={true} />
            <div className="subjects__content">
                <Accordion>
                    <ItemAccordion>
                        <Checkbox text="Docente A" />
                    </ItemAccordion>
                    <ItemAccordion>
                        <Checkbox text="Docente A" />
                    </ItemAccordion>
                </Accordion>
            </div>
        </>
    );
}
