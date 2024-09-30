import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata = {
	title: 'OpenMercado App',
	description: 'MercadoLibre front-edn test with nextjs',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<header className="h-16 bg-yellow-200 px-16 flex">
					<form
						action="/items"
						className="m-auto max-w-screen-xl flex-1 flex items-center"
					>
						<Link href="/" className="text-center pr-4">
							OpenMercado
						</Link>
						<input
							type="text"
							name="search"
							className="h-8 flex-1 text-slate-700 px-4"
						/>
						<button
							type="submit"
							className="text-slate-700 px-2 py-1 bg-gray-300"
						>
							Search
						</button>
					</form>
				</header>
				<main className="max-w-screen-xl px-16 py-10">{children}</main>
			</body>
		</html>
	);
}
