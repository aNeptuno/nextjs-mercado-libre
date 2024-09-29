import Image from 'next/image';
import Link from 'next/link';

const API = `https://api.mercadolibre.com/sites/MLA/search?q=`;
const OPTIONS = `&limit=4#json`;

export default async function ItemsPage({ searchParams }) {
	const { search } = searchParams;
	let results = [];
	try {
		const response = await fetch(`${API}${search}${OPTIONS}`);
		if (!response.ok) {
			throw new Error(`Error fetching data: ${response.status}`);
		}
		const data = await response.json();
		results = data.results || [];
	} catch (error) {
		console.error(`Error fetching data: ${error.message}`);
		throw new Error(`Error fetching data: ${error.message}`);
	}
	return (
		<section>
			<article>
				{results.map(item => (
					<Link
						href={`/items/${item.id}`}
						key={item.id}
						className="flex flex-1 bg-gray-50"
					>
						<Image
							src={item.thumbnail}
							alt={item.title}
							width={200}
							height={200}
							className="p-4"
						/>
						<div className="px-3 py-6">
							<p className="font-bold">
								{Number(item.price).toLocaleString('es-AR', {
									style: 'currency',
									currency: item.currency_id,
								})}
							</p>
							<p>{item.title}</p>
						</div>
					</Link>
				))}
			</article>
		</section>
	);
}
