import { createMatrix } from "./tools/create-matrix";
import { onLoadVectors, handleStartLoading } from "./store";
import { useEffect } from "react";
import { Row } from "./components/row/row";
import { Spinner } from "./components/spinner/spinner";
import { Warning } from "./components/warning/warning";
import "./App.css";

const App = () => {

	useEffect(() => {
		handleStartLoading();
		onLoadVectors();
	}, []);

	return (
		<div className="app">
			<Spinner/>
			<div className="car">
				{createMatrix(3, 4, { B: 1 }).map((row, rowIndex) => (
					<Row key={rowIndex} row={row} />
				))}
			</div>
			<h1 className="title">Rapporto danni</h1>
			<Warning />
		</div>
	);
};

export default App;
