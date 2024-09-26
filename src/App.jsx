import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List Of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  );
};
