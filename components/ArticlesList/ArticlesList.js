import React from 'react';
import ArticleItem from "../ArticleItem/ArticleItem";


const ArticlesList = ({articles}) => {
	console.log(articles);
	return (
		<div className='container bg-gray-50 mx-auto w-full max-w-7xl'>
			<div className='mt-3 grid md:grid-cols-3 gap-4'>
				{articles.map((article)=>{
					return <ArticleItem article={article} key={article.id}/>
				})}
			</div>
		</div>

	);
};

export default ArticlesList;
