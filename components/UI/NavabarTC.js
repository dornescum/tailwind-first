import React, {useState} from 'react';
import Link from "next/link";

const NavabarTc = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link href='/'>
							<a
								className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
							>
								Learn Front Web Development
							</a>

						</Link>

						<button onClick={() => setNavbarOpen(!navbarOpen)}>
							<div className='mr-4 lg:hidden' >
								<svg aria-hidden="true" role="img" width="2em" height="2em"
									 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
									<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="currentColor"/>
								</svg>
							</div>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							{/*<li className="nav-item">*/}
							{/*	<a*/}
							{/*		className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"*/}
							{/*		href="/html"*/}
							{/*	>*/}
							{/*		<i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Html</span>*/}
							{/*	</a>*/}
							{/*</li>*/}
							<Link href="/html">
								<a
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
									<i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Html</span>
								</a>

							</Link>
							<Link href="/css">
								<a
									className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
									<i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Css</span>
								</a>

							</Link>
							<li className="nav-item">
								<Link href="/js">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
										<i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Js</span>
									</a>

								</Link>

							</li>
							<li className="nav-item">
								<Link href="/react">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
										<i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">React</span>
									</a>

								</Link>

							</li>
							<li className="nav-item">
								<Link href="/next">
									<a
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
										<i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Next</span>
									</a>

								</Link>

							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavabarTc;