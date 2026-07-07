import { useState } from "react";

import EntryCard from "../components/EntryCard";

const Library = () => {
  const [entries, setEntries] =
    useState([
      {
        id: 1,
        title: "Atomic Habits",
        type: "Book",
        category: "Productivity",
        rating: 5,
        notes:
          "Amazing book on habits",
      },
      {
        id: 2,
        title: "Interstellar",
        type: "Movie",
        category: "Sci-Fi",
        rating: 5,
        notes:
          "One of my favourite movies",
      },
    ]);

  const deleteEntry = (id) => {
    setEntries(
      entries.filter(
        (entry) => entry.id !== id
      )
    );
  };

  return (
    <div>
      <h1>Library</h1>

      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onDelete={deleteEntry}
        />
      ))}
    </div>
  );
};

export default Library;