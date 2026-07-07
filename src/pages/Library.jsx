import { useState } from "react";
import EntryCard from "../components/EntryCard";

const Library = ({
  entries,
  setEntries,
}) => {
  const [search, setSearch] =
    useState("");

  const [selectedType, setSelectedType] =
    useState("All");

  const deleteEntry = (id) => {
    setEntries(
      entries.filter(
        (entry) =>
          entry.id !== id
      )
    );
  };

  let filteredEntries =
    entries.filter((entry) =>
      entry.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (selectedType !== "All") {
    filteredEntries =
      filteredEntries.filter(
        (entry) =>
          entry.type === selectedType
      );
  }

  return (
    <div className="page">

      <h1>
        📚 My Collection
      </h1>

      <br />

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Search entries..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          className="input"
          value={selectedType}
          onChange={(e) =>
            setSelectedType(
              e.target.value
            )
          }
        >
          <option value="All">
            All Types
          </option>

          <option value="Book">
            Books
          </option>

          <option value="Movie">
            Movies
          </option>

          <option value="Course">
            Courses
          </option>

          <option value="Article">
            Articles
          </option>
        </select>
      </div>

      <p
        style={{
          marginBottom: "20px",
          color: "#94a3b8",
        }}
      >
        {filteredEntries.length}
        {" "}
        entries found
      </p>

      {filteredEntries.length === 0 ? (
        <div className="card">
          <h3>
            No entries found
          </h3>

          <p>
            Try adding a new entry or
            adjusting your search.
          </p>
        </div>
      ) : (
        filteredEntries.map(
          (entry) => (
            <EntryCard
              key={entry.id}
              entry={entry}
              onDelete={
                deleteEntry
              }
            />
          )
        )
      )}

    </div>
  );
};

export default Library;