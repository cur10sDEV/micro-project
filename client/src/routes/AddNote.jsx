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

export default AddNote;
