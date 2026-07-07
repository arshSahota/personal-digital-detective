import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";
import AddEntry from "./pages/AddEntry";
import Analytics from "./pages/Analytics";

function App() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("entries");

    return savedEntries
      ? JSON.parse(savedEntries)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "entries",
      JSON.stringify(entries)
    );
  }, [entries]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              entries={entries}
            />
          }
        />

        <Route
          path="/library"
          element={
            <Library
              entries={entries}
              setEntries={setEntries}
            />
          }
        />

        <Route
          path="/add-entry"
          element={
            <AddEntry
              entries={entries}
              setEntries={setEntries}
            />
          }
        />

        <Route
          path="/analytics"
          element={
            <Analytics
              entries={entries}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;