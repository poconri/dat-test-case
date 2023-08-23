import "./cell.css";
import $store, { handleStartLoading, updateVectors } from "../../store/index";
import { useStore } from "effector-react";
interface CellProps {
	cell: string;
}

export const Cell = (props: CellProps) => {
	const store = useStore($store);

	const handleClick = () => {
		handleStartLoading();
		updateVectors(
			store.vectors.includes(props.cell)
				? store.vectors.filter((vector) => vector !== props.cell)
				: store.vectors.concat(props.cell)
		);
	};

	return (
		<div className="cell">
			<div
				className={`dot ${
					store.vectors.includes(props.cell) ? "selected" : ""
				}`}
				onClick={() => handleClick()}
			/>
		</div>
	);
};
