export default function toEuro(itemPrice) {
	const exchangeRate = 1066.17;
	return (Number(itemPrice) / exchangeRate).toLocaleString('es-ES', {
		style: 'currency',
		currency: 'EUR',
	});
}
