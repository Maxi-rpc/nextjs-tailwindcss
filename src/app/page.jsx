import Image from "next/image";

export default function HomePage() {
	return (
		<main>
			<header className="border bg-sky-100 py-6 px-6 display: flex justify-between items-center">
				<div className="display: flex items-center justify-between">
					<button className="p-2 border rounded border-black">iconOpenMenu</button>
					<nav className="px-2">Logo</nav>
				</div>
				<nav>Branding</nav>
				<div className="display: flex col-auto justify-between">
					<nav>avatar</nav>
					<nav>options icon</nav>
				</div>
			</header>
			<div className="px-4">
				<h1>HomePage</h1>
			</div>
		</main>
	);
}
