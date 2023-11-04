import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NewsCard = ({ itemData }) => {
  const { details, image_url,_id } = itemData;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(1, 300)}
            <Link to={`/details/:${_id}`} className="text-lg  text-blue-500"> Read more...</Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}
      
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  itemData: PropTypes.object,
};

export default NewsCard;
