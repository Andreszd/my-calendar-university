import PropTypes from "prop-types";

import "./Picture.css";

//FIXME: change managment prop src

const Picture = ({ src, alt, width, height, isRounded }) => (
    <picture className="img-container" style={{ height: height, width: width }}>
        <img src={src} alt={alt} />
    </picture>
);

Picture.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    isRounded: PropTypes.bool,
};

export default Picture;
