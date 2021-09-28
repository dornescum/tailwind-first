import React from 'react';
import ArticleItem from "../ArticleItem/ArticleItem";


const ArticlesList = ({articles}) => {
	return (
		<div className='container bg-gray-50 mx-auto w-full max-w-7xl'>
			<div className='mt-3 grid md:grid-cols-3 gap-4'>
				{articles.map((article)=>{
					// return <h3 key={article.id}>{article.title}</h3>
					return <ArticleItem article={article} key={article.id}/>
				})}
			</div>
		</div>

	);
};

export default ArticlesList;
