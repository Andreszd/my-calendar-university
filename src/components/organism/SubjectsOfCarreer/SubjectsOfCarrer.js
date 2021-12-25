import HeaderSubjects from "../../molecules/HeaderSubjects";
import Accordion from "../../molecules/Accordion";
import Input from "../../atoms/Input";

import "./SubjectsOfCareer.css";
import Checkbox from "../../atoms/Checkbox/Checkbox";

export default function SubjectsOfCarrer({ isShowing, setShow }) {
    return (
        <>
            <HeaderSubjects isShowing={isShowing} setShow={setShow} />
            <Input type="select" defaultOption="Levels" hasFullWidth={true} />
            <div className="subjects__content">
                <Accordion>
                    <Checkbox text="Docente A" />
                    <Checkbox text="Docente A" />
                </Accordion>
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
            </div>
        </>
    );
}
