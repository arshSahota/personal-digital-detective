import detective from "../assets/detective.svg";
const Dashboard = ({ entries = [] }) => {

  const books = entries.filter(
    entry => entry.type === "Book"
  ).length;

  const movies = entries.filter(
    entry => entry.type === "Movie"
  ).length;

  const courses = entries.filter(
    entry => entry.type === "Course"
  ).length;

  return (
    <div className="page">

      <div className="hero">

        <div className="hero-left">

          <p className="hero-badge">
            Knowledge Intelligence Platform
          </p>

          <h1>
            Personal Digital Detective
          </h1>

          <p>
            Discover patterns in your
            books, movies, courses,
            articles and learning habits.
          </p>

        </div>

        <div className="hero-right">

          <img
            src={detective}
            alt="Detective"
          />

        </div>

      </div>

      <div className="stats">

        <div className="stat-card">
          <h2>{entries.length}</h2>
          <p>Total Entries</p>
        </div>

        <div className="stat-card">
          <h2>{books}</h2>
          <p>Books</p>
        </div>

        <div className="stat-card">
          <h2>{movies}</h2>
          <p>Movies</p>
        </div>

        <div className="stat-card">
          <h2>{courses}</h2>
          <p>Courses</p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;