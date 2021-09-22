import React from 'react';

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
const ContentItem = (props) => {
	// const {image, category, title, content, author} = props;
	return (
		<div className="flex-1 px-6">
			<div className="bg-gray-300 aspect-h-1 aspect-w-1 relative">
				<img src={props.image} alt="" className="object-cover"/>
				<div
					className="absolute w-full h-full left-0 top-0 bg-gradient-to-t from-black hover:opacity-100 opacity-0 transform duration-200">
					<div className="w-full h-full flex items-end p-6">
						<div>
							<div className="bg-red-800 px-2 py-1 text-white uppercase inline-block mb-6" style={{fontSize:'10px'}}>{props.category}</div>
							<h2 className="text-white text-xl font-serif mb-4">
								{props.title}
							</h2>
							<p className='text-white text-xs line-clamp-3 mb-6'>{props.content}</p>
							<div className='flex items-center'>
								<div className='h-8 w-8 rounded-full bg-gray-400 overflow-hidden mr-4'>
									<img src={props.photo} alt="" className='object-cover w-full h-full'/>
								</div>
								<div className='text-xs text-white'>by {props.name} * {props.date}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Content = () => {
	return (
		<div className="w-full border-b">
			<div className="mx-auto max-w-7xl">
				<div className="flex -mx-6 py-6 divide-x">
					{content.map((item, index) => {
						return <ContentItem image={item.image} key={index}
											category={item.category}
											title={item.title}
											content={item.content}
											photo={item.author.photo}
											name={item.author.name}
											date={item.created_at}
						/>;
					})}
				</div>
			</div>

		</div>
	);
};

export default Content;