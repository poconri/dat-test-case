import { createEffect, createEvent, createStore } from "effector";

type Store = {
	vectors: string[];
	isLoading: boolean;
	error: string | null;
};

const API_URL = "https://myfailemtions.npkn.net/b944ff/";

export const handleStartLoading = createEvent();

export const updateVectors = createEffect(async (vectors: Store["vectors"]) => {
	const response = fetch(API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(vectors),
	});
	return (await response).json();
});

export const onLoadVectors = createEffect(async () => {
	const request = await fetch(API_URL);
	return request.json();
});

const handleError = (state: Store, message: string) => ({
	...state,
	error: message,
	isLoading: false,
});

const handleVectorsChange = (state: Store, vectors: Store["vectors"]) => ({
	...state,
	vectors,
	error: null,
	isLoading: false,
});

export default createStore<Store>({
	vectors: [],
	error: null,
	isLoading: false,
})
	.on(handleStartLoading, (state) => ({
		...state,
		isLoading: true,
	}))
	.on(onLoadVectors.doneData, handleVectorsChange)
	.on(onLoadVectors.failData, (state) =>
		handleError(
			state,
			"Unable to get current damage points, please try again later."
		)
	)
	.on(updateVectors.doneData, handleVectorsChange)
	.on(updateVectors.failData, (state) =>
		handleError(
			state,
			"Unable to update current damage points, please try again later."
		)
	);
