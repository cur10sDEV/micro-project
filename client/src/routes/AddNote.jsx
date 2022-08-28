import { Link } from "react-router-dom";
import { useState } from "react";

const AddNote = ({ notes }) => {
	const [newNote, setNewNote] = useState({
		title: "",
		body: "",
	});
	const { title, body } = newNote;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNewNote({ ...newNote, [name]: value });
	};

	const addNote = async () => {
		fetch(`http://127.0.0.1:8000/api/notes/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newNote),
		});
	};

	return (
		<div className="note-page">
			<div className="note-page-header">
				<Link to="/">
					<img
						className="icons"
						src="https://s2.svgbox.net/materialui.svg?ic=arrow_back"
						alt="Back"
					/>
				</Link>
				<Link to="/">
					<img
						className="icons"
						onClick={addNote}
						src="https://s2.svgbox.net/materialui.svg?ic=done"
						alt="Done"
					/>
				</Link>
			</div>
			<div className="note-page-body">
				<h3>Title</h3>
				<input
					type="text"
					plcaeholder="Title"
					name="title"
					value={title}
					onChange={(event) => handleChange(event)}
					spellCheck="false"
				/>
				<h3>Note</h3>
				<textarea
					plcaeholder="Type your note here..."
					autoFocus
					name="body"
					value={body}
					onChange={(event) => handleChange(event)}
					spellCheck="false"
				></textarea>
			</div>
		</div>
	);
};

export default AddNote;
