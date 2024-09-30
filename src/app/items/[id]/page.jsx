import { api } from '@/app/api';
import Image from 'next/image';

export default async function ItemPage({ params: { id } }) {
	const { item, plain_text } = await api.item.fetch(id);
	return (
		<section className="flex flex-col flex-1 p-4 bg-slate-100">
			<div className="flex flex-1 p-4 md:flex-row flex-col">
				<Image
					width={600}
					height={600}
					src={item.pictures[0].secure_url}
					alt={item.title}
				/>
				<div className="flex flex-col md:px-5 pt-5 md:pt-0">
					<p className="capitalize">{item.condition}</p>
					<h2 className="font-bold py-2">{item.title}</h2>
					<p className="text-2xl">
						{Number(item.price).toLocaleString('es-AR', {
							style: 'currency',
							currency: item.currency_id,
						})}
					</p>
					<button className="bg-blue-500 text-white py-2 mt-6 rounded">
						Comprar
					</button>
				</div>
			</div>
			<div className="flex flex-col p-4">
				<h3>Descripción del producto</h3>
				<p className="opacity-60 py-2">{plain_text}</p>
			</div>
		</section>
	);
}
