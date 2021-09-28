import React from 'react';
// import {articles} from "../data";
import {server} from "../config";
import ArticlesList from "./ArticlesList/ArticlesList";


const Test2 = ({articles}) => {
	console.log(articles);
	return (
		<div>
			<p>trwst</p>
			{/*<ArticlesList articles={articles} />*/}
			{/*{articles.map((article)=>{*/}
			{/*	return <h3 key={article.id}>{article.title}</h3>*/}
			{/*})}*/}
		</div>
	);
};

// export const getStaticProps = async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
// 	const articles = await res.json()
// 	console.log(articles);
// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };


// export const getStaticProps = async () => {
// 	const res = await fetch(`${server}/api/articles`)
// 	const articles = await res.json()
// 	console.log(articles[0].title);
// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };


export default Test2;