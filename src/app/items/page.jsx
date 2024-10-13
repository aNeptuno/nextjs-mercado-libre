import { api } from '@/app/api';
import Image from 'next/image';
import Link from 'next/link';

export default async function ItemsPage({ searchParams }) {
	const results = await api.item.search(searchParams.search);
	return (
		<section>
			{results.map(item => (
				<Link
					href={`/items/${item.id}`}
					key={item.id}
					className="flex flex-1 bg-gray-50 p-6"
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
		</section>
	);
}
