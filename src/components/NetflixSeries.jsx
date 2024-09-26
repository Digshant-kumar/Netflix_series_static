// const NetflixSeries = () => {
//   const name = "Queen Of Tears";
//   const rate = "8.2";
//   const summary =
//     "Queen of Tears is a K-drama about a couple, Hong Hae-in and Baek Hyun-woo, whose marriage is in crisis and is rekindled when they discover that one of them has a life-threatening illness.";

//   const returnGenre = () => {
//     const genre = "RomCom";
//     return genre;
//   };

//   let age = 18;

//   // let canWatch = "Watch Now";
//   // if (age < 18) {
//   //   canWatch = "Not Available";
//   // }

//   const canWatch = () => {
//     if (age >= 18) return "Watch Now";
//     return "Not Available";
//   };

//   return (
//     <>
//       <div>
//         <img src="qot.jpg" alt="qot_image" width="40%" height="40%" />
//       </div>
//       <h2>Name : {name} </h2>
//       <h3>Rating : {rate} </h3>
//       <p>Summary : {summary} </p>
//       <p>Genre : {returnGenre()} </p>
//       {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
//       {/* <button> {canWatch} </button> */}
//       <button> {canWatch()} </button>
//     </>
//   );
// };

// export default NetflixSeries;

import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  //NetflixSeries is Parent and SeriesCard component is child where we are sending data to
  return (
    <>
      <ul className="grid grid-three--cols">
        {seriesData.map((curElem) => {
          return (
            //here it is single line so no need to write return
            <SeriesCard key={curElem.id} data={curElem} /> //curElem(Props)
          );
        })}
      </ul>
    </>
  );
};

export default NetflixSeries;
