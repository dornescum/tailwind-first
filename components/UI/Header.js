import React from 'react';

const Header = () => {
	return (
		<div className="w-full border-b">
			<div className="mx-auto max-w-7xl">
				<div className="flex justify-between items-center h-20">
					<div className='flex'>
						<div className='mr-4'>
							<svg aria-hidden="true" role="img" width="2em" height="4em"
								 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="currentColor"/>
							</svg>
						</div>
						<div>
							<svg aria-hidden="true" role="img" width="2em" height="4em"
								 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<path
									d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5z"
									fill="currentColor"/>
							</svg>
						</div>
					</div>


					<div className="text-4xl font-serif text-gray-400 font-semibold">Magazine</div>
					<div className='flex'>
						<div className='ml-4'>
							<svg aria-hidden="true" role="img" width="2em" height="4em" className='text-gray-400' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" fill="currentColor"/></svg>
						</div>
						<div>
							<svg aria-hidden="true" role="img" width="2em" height="4em" className='text-gray-400 mx-1' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73z" fill="currentColor"/></svg>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Header;