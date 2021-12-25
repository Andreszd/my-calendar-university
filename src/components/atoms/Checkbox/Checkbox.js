import "./Checkbox.css";

export default function Checkbox({ text }) {
    //TODO handler many checkbox
    return (
        <div className="checkbox">
            <input id="chbx" type="checkbox" className="checkbox__input" />
            <label className="checkbox__label" htmlFor="chbx">
                {text}
            </label>
        </div>
    );
}
