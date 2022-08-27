import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Note = () => {
	const { id } = useParams();
	const [note, setNote] = useState({
		title: "",
		body: "",
	});
	const { title, body } = note;

	const getNote = async () => {
		const res = await fetch(`http://127.0.0.1:8000/api/notes/${id}`);
		const data = await res.json();
		return data;
	};

	useEffect(() => {
		const effect = async () => {
			const data = await getNote();
			setNote(data);
		};
		effect();
	}, []);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setNote({ ...note, [name]: value });
	};

	const updateNote = async () => {
		fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(note),
		});
	};

	const deleteNote = async () => {
		fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	const handleSubmit = () => {
		updateNote();
	};

	return (
		<div className="note-page">
			<div className="note-page-header">
				<Link to="/">
					<img
						className="icons"
						onClick={handleSubmit}
						src="https://s2.svgbox.net/materialui.svg?ic=arrow_back"
						alt="Back"
					/>
				</Link>
				<Link to="/">
					<img
						className="icons"
						src="https://s2.svgbox.net/materialui.svg?ic=delete"
						onClick={deleteNote}
						alt="Delete"
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

export default Note;
