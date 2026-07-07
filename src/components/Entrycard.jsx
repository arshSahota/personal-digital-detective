const EntryCard = ({
  entry,
  onDelete
}) => {
  return (
    <div className="card">

      <h2>
        {entry.title}
      </h2>

      <br />

      <p>
        Type:
        {" "}
        {entry.type}
      </p>

      <p>
        Category:
        {" "}
        {entry.category}
      </p>

      <p>
        Rating:
        {" "}
        {entry.rating}/5
      </p>

      <br />

      <p>
        {entry.notes}
      </p>

      <br />

      <button
        className="button"
        onClick={() =>
          onDelete(entry.id)
        }
      >
        Delete
      </button>

    </div>
  );
};

export default EntryCard;