const SeriesCard = ({ data }) => {
  //   const { data } = props;   //Destructuring
  const { img_url, name, rating, description, genre, cast, watch_url } = data; //Destructuring further. Instead of props.data we wrote data cause above we have again destructured the parameter from (props) to ({data})

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    // backgroundColor: "var(--bnt-hover-bg-color)",
    backgroundColor: `${rating >= 8.5 ? "#66c466" : "#ffca00"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const ratingClass = rating >= 8.5 ? "super_hit" : "average";

  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} height="250vh" />
      </div>
      <div className="card-content">
        <h2>Name: {name} </h2>
        <h3>
          Rating:
          <span
            // className={`rating ${rating >= 8.5 ? "super_hit" : "average"} `}
            className={`rating ${ratingClass}`}
          >
            {rating}
          </span>
        </h3>
        <p>Summary: {description} </p>
        <p>Genre: {genre.join(", ")} </p>
        <p>Cast: {cast.join(", ")} </p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
