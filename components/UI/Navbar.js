import React from 'react';
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="w-full border-b-2 border-black">
			<div className="mx-auto max-w-7xl">
				<div className="flex items-center h-16 justify-center divide-x">
					<Link href="/">
						<a className="font-semibold uppercase px-6 text-red-800">Fashion </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Beauty </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Fashion </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Beauty </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Fashion </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Beauty </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Fashion </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Beauty </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Fashion </a>
					</Link>
					<Link href="/">
						<a className="font-semibold uppercase px-6">Beauty </a>
					</Link>



				</div>
			</div>
		</div>
	);
};

export default Navbar;