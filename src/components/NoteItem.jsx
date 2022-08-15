const NoteItem = ({ note }) => {
	const { title, body } = note;
	const date = new Date();
	const newDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	const noteHighlight = body.substring(0, 50);
	return (
		<div className="note-item">
			<h3 className="note-heading">{title}</h3>
			<p className="note-date">{newDate}</p>
			<p className="note-body">{noteHighlight}</p>
		</div>
	);
};

export default NoteItem;
