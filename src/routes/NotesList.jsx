import NoteItem from "../components/NoteItem";
import AddNote from "../components/AddNote";

const NotesList = () => {
	return (
		<div className="notes-list">
			<div className="sub-header">
				<h2>Notes</h2>
				<h3>3</h3>
			</div>
			<div className="notes-container">
				<NoteItem />
				<NoteItem />
				<NoteItem />
				<NoteItem />
				<NoteItem />
				<NoteItem />
			</div>
			<AddNote />
		</div>
	);
};

export default NotesList;
