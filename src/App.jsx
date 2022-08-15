import "./App.css";
import Header from "./components/Header";
import NotesList from "./routes/NotesList";
import Note from "./routes/Note";
import { Routes, Route, Link } from "react-router-dom";
import notes from "./assets/data";

const notFoundStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NotesList notes={notes} />} />
        <Route path="/note/:id" element={<Note notes={notes} />} />
        <Route
          path="*"
          element={<h2 style={notFoundStyles}>Page not Found</h2>}
        />
      </Routes>
    </div>
  );
}

export default App;
