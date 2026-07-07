const EntryCard = ({ entry, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <h3>{entry.title}</h3>

      <p>Type: {entry.type}</p>

      <p>Category: {entry.category}</p>

      <p>Rating: {entry.rating}/5</p>

      <p>{entry.notes}</p>

      <button
        onClick={() => onDelete(entry.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default EntryCard;