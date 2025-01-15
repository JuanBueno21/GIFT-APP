// import { prototype }  from "postcss/lib/previous-map"
const GifItem = ({ title, url, id }) => {

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

// GifItem.prototype = {
//   title: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// }

export default GifItem