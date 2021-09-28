import React from 'react';
import img from '../public/vercel.svg'
// import { server } from '../config'


const content = [
	{
		image: 'https://images.unsplash.com/photo-1610879247468-ba0c12f0d709?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda dicta',
		category: 'technology',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim fuga, fugit, incidunt magnam minus nemo officiis qui quibusdam quos recusandae, soluta suscipit voluptatibus. Enim et facilis quisquam saepe ullam!',
		created_at: 'dec 7',
		author: {
			name: 'viorica',
			photo: 'https://images.unsplash.com/photo-1589655472711-70ccd8bd285f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80'
		}
	},
	{
		image: 'https://images.unsplash.com/photo-1610879247468-ba0c12f0d709?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda dicta',
		category: 'technology',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim fuga, fugit, incidunt magnam minus nemo officiis qui quibusdam quos recusandae, soluta suscipit voluptatibus. Enim et facilis quisquam saepe ullam!',
		created_at: 'dec 7',
		author: {
			name: 'viorica',
			photo: 'https://images.unsplash.com/photo-1589655472711-70ccd8bd285f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80'
		}
	},
	{
		image: 'https://images.unsplash.com/photo-1610879247468-ba0c12f0d709?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda dicta',
		category: 'technology',
		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim fuga, fugit, incidunt magnam minus nemo officiis qui quibusdam quos recusandae, soluta suscipit voluptatibus. Enim et facilis quisquam saepe ullam!',
		created_at: 'dec 7',
		author: {
			name: 'viorica',
			photo: 'https://images.unsplash.com/photo-1589655472711-70ccd8bd285f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80'
		}
	}
];

const Info = () => {
	return (
		<div className='container bg-gray-100 mx-auto w-full max-w-7xl'>
				<div className='md:flex gap-4 px-4 py-6 flex-wrap'>
					{/*sm:flex-row*/}

					<div className="flex-1 bg-red-50 w-full rounded overflow-hidden  shadow-sm hover:shadow-md transition duration-200 ease-in">
						<img
							src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt="" className="h-96 w-full object-cover"/>
						<div className="font-semibold py-6 px-2 m-4">
							<p className="text-green-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Beatae, vero?</p>
							<p className="text-gray-400">test test</p>
						</div>
					</div>


					<div className="flex-1 bg-red-50 w-full rounded overflow-hidden  shadow-sm hover:shadow-md transition duration-200 ease-in">
						<img
							src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt="" className="h-96 w-full object-cover"/>
						<div className="font-semibold py-6 px-2 m-4">
							<p className="text-green-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Beatae, vero?</p>
							<p className="text-gray-400">test test</p>
						</div>
					</div>

					<div className="flex-1 bg-red-50 w-full rounded overflow-hidden  shadow-sm hover:shadow-md transition duration-200 ease-in">
						<img
							src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
							alt="" className="h-96 w-full object-cover"/>
						<div className="font-semibold py-6 px-2 m-4">
							<p className="text-green-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Beatae, vero?</p>
							<p className="text-gray-400">test test</p>
						</div>
					</div>

				</div>



		</div>
	);
};


// export const getStaticProps = async () => {
// 	const res = await fetch(`${server}/api/articles`)
// 	const articles = await res.json()
//
// 	return {
// 		props: {
// 			articles,
// 		},
// 	}
// }


export default Info;
