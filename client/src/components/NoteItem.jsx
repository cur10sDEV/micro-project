const NoteItem = ({ note }) => {
	const { title, body, updated } = note;
	const noteHighlight = body.substring(0, 50);
	const date = updated.substring(0, 10);
	return (
		<div className="note-item">
			<h3 className="note-heading">{title}</h3>
			<p className="note-date">{date}</p>
			<p className="note-body">{noteHighlight}</p>
		</div>
	);
};

export default NoteItem;
