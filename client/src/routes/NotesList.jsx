import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NotesList = () => {
	const [notes, setNotes] = useState([]);

	const getNotes = async () => {
		const res = await fetch("http://127.0.0.1:8000/api/notes");
		const data = await res.json();
		return data;
	};

	useEffect(() => {
		const effect = async () => {
			const data = await getNotes();
			setNotes(data);
		};
		effect();
	}, []);

	return (
		<div className="notes-list">
			<div className="sub-header">
				<h2>Notes</h2>
				<h3>{notes.length}</h3>
			</div>
			<div className="notes-container">
				{notes.map((note) => {
					const path = `/note/${note.id}`;
					return (
						<Link to={path} key={note.id}>
							<NoteItem note={note} />
						</Link>
					);
				})}
			</div>
			<Link to="/note/addnote">
				<div className="add-button">
					<h2>+</h2>
				</div>
			</Link>
		</div>
	);
};

export default NotesList;
