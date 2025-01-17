import PropTypes from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

// Validación de props con PropTypes
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string, // Opcional, si siempre está presente usa .isRequired
};

export default GifItem;