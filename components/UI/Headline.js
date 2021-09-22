import React from 'react';
const headlineContent = [
	{
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
		title: 'Some article'
	},
	{
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
		title: 'Some article'
	},
	{
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
		title: 'Some article'
	},
	{
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
		title: 'Some article'
	},
	{
		image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
		title: 'Some article'
	},

]
const HeadlineItem=(props)=>{
	return <div className='flex items-center'>
		<div className='mr-4' >
			<div className='h-20 w-20 bg-gray-400'>
				<img src={props.image} alt="girl" className='object-cover w-full h-full'/>
			</div>
		</div>
		<div>{props.title}</div>
	</div>
}

const Headline = () => {
	return (
		<div className='w-full border-b'>
			<div className='mx-auto max-w-7xl py-4'>
				<div className='grid grid-cols-5 gap-6 '>
					{headlineContent.map((data, index)=>{
						return (
							<HeadlineItem title={data.title} image={data.image} key={index}/>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Headline;