import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";

const NotesList = ({ notes }) => {
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
						<Link to={path}>
							<NoteItem key={note.id} note={note} />
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
