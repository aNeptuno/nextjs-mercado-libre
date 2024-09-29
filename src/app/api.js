const API = `https://api.mercadolibre.com/sites/MLA/search?q=`;
const OPTIONS = `&limit=4#json`;
const URL = `https://api.mercadolibre.com/items/`;

export const api = {
	item: {
		search: async query => {
			let results = [];
			try {
				const response = await fetch(`${API}${query}${OPTIONS}`);
				if (!response.ok) {
					throw new Error(`Error fetching data: ${response.status}`);
				}
				const data = await response.json();
				results = data.results || [];
			} catch (error) {
				console.error(`Error fetching data: ${error.message}`);
				throw new Error(`Error fetching data: ${error.message}`);
			}
			return results;
		},
		fetch: async id => {
			const item = await fetch(`${URL}${id}`).then(res => res.json());
			const { plain_text } = await fetch(`${URL}${id}/description`).then(res =>
				res.json()
			);
			return { item, plain_text };
		},
	},
};
