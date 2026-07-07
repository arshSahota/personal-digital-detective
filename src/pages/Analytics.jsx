const Analytics = ({
  entries,
}) => {
  const books =
    entries.filter(
      (entry) =>
        entry.type === "Book"
    ).length;

  const movies =
    entries.filter(
      (entry) =>
        entry.type === "Movie"
    ).length;

  const courses =
    entries.filter(
      (entry) =>
        entry.type === "Course"
    ).length;

  return (
    <div>
      <h1>Analytics</h1>

      <p>
        Books: {books}
      </p>

      <p>
        Movies: {movies}
      </p>

      <p>
        Courses: {courses}
      </p>

      <p>
        Total Entries:
        {" "}
        {entries.length}
      </p>
    </div>
  );
};

export default Analytics;