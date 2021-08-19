import PropTypes from "prop-types";

const Picture = ({ src, alt, width, height, isRounded }) => (
    <picture>
        <img src={src} alt={alt} style={{ width, height }} />
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
