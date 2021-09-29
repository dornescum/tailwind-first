import React from 'react';
import Link from "next/link";


const ArticleItem = ({article}) => {
	return (<>
			<div className=' bg-gray-100 mx-auto w-full max-w-7xl'>
				<div className=" gap-4 px-4 py-6  ">

						<Link href={`/${article.category}/${article.id}`}>
						{/*<Link href={`/article/${article.id}`}>*/}
							<a>
								<img src={article.img}  alt={article.title} className='object-center h-96 md:w-96 sm:full'/>
								<h3 className='px-1 py-4 capitalize'>{article.title}</h3>
								<p className='px-1 py-4'>Category: <span className='p-1 bg-red-50'>#{article.category}</span></p>
								<p>{article.desc}</p>

								<p className='capitalize font-semibold '>Author :<span className='pl-2'>{article.author}</span> </p>
								<p>{article.id}</p>
							</a>
						</Link>

				</div>


			</div>

		</>

	);
};

export default ArticleItem;