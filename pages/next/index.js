import React from 'react';
import {server} from "../../config";
import Layout from "../../components/UI/Layout";
import ArticlesList from "../../components/ArticlesList/ArticlesList";

const IndexNext = ({articles}) => {
	const filteredNext = articles.filter((art)=>{
		return art.category ==='next'
	})
	// console.log(filteredNext);
	return (
		<div>
			<Layout title='next'>

				<ArticlesList articles={filteredNext}/>
			</Layout>
		</div>
	);
};
export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`)
	const articles = await res.json()
	console.log(articles[0].title);
	return {
		props: {
			articles,
		},
	};
};
export default IndexNext;