import "./row.css";
import { Cell } from "../cell/cell";

interface RowProps {
	row: string[];
}

export const Row = (props: RowProps) => {
	return (
		<div className="row">
			{props.row.map((cell) => (
				<Cell key={cell} cell={cell} />
			))}
		</div>
	);
};
