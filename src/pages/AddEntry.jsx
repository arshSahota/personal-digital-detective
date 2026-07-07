import { useState } from "react";

const AddEntry = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] =
    useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      title,
      type,
      category,
      rating,
      notes,
    };

    console.log(newEntry);

    setTitle("");
    setType("");
    setCategory("");
    setRating("");
    setNotes("");
  };

  return (
    <div>
      <h1>Add Entry</h1>

      <form onSubmit={handleSubmit}>
        <input
        className = "input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br />
        <br />

        <input
        className = "input"
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
        />

        <br />
        <br />

        <input
        className = "input"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <br />
        <br />

        <input
        className="input"
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
        />

        <br />
        <br />

        <textarea
        className = "input"
          placeholder="Notes"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
        />

        <br />
        <br />

        <button 
        className = "button"
        type="submit">
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AddEntry;