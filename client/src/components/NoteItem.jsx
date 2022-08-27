const NoteItem = ({ note }) => {
	const { title, body, updated } = note;
	const noteHighlight = body.substring(0, 50);
	console.log(updated);
	return (
		<div className="note-item">
			<h3 className="note-heading">{title}</h3>
			<p className="note-date">date</p>
			<p className="note-body">{noteHighlight}</p>
		</div>
	);
};

export default NoteItem;
