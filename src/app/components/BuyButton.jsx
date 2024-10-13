'use client';
import confetti from 'canvas-confetti';

export default function BuyButton() {
	const buy = () => {
		confetti();
	};
	return (
		<button
			onClick={buy}
			className="bg-blue-300 hover:bg-blue-500 text-white py-2 mt-6 rounded"
		>
			Comprar
		</button>
	);
}
