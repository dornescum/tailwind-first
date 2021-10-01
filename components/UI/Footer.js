import React from 'react';
import Link from "next/link";

const Footer = () => {
	return (
		<div className="text-center bg-gray-400 text-white font-serif capitalize py-4">
			<Link href="/">
				<a>
					footer
				</a>
			</Link>
		</div>
	);
};

export default Footer;