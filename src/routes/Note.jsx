import { Link, useParams } from "react-router-dom";
import { useState } from "react";
// import { ReactComponenet as LeftArrow } from "../assets/arrow-left.svg";

const Note = ({ notes }) => {
	const { id } = useParams();
	const fetchedNote = notes.find((note) => note.id === parseInt(id));
	const [note, setNote] = useState({
		title: fetchedNote.title,
		body: fetchedNote.body,
	});
	const { title, body } = note;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNote({ ...note, [name]: value });
	};

	return (
		<div className="note-page">
			<div className="note-page-header">
				<Link to="/">Back</Link>
			</div>
			<div className="note-page-body">
				<h3>Title</h3>
				<input
					type="text"
					plcaeholder="Title"
					name="title"
					value={title}
					onChange={(event) => handleChange(event)}
				/>
				<h3>Note</h3>
				<textarea
					plcaeholder="Type your note here..."
					autoFocus
					name="body"
					value={body}
					onChange={(event) => handleChange(event)}
				></textarea>
			</div>
		</div>
	);
};

export default Note;
