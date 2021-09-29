import React from 'react';
import Layout from "../../components/UI/Layout";
import {server} from "../../config";
import ArticlesList from "../../components/ArticlesList/ArticlesList";

const IndexJs = ({articles}) => {
	const filteredJs = articles.filter((art) => {
		return art.category === 'js';
	});
	return (
		<Layout title='Js'>
			<ArticlesList articles={filteredJs} />
		</Layout>
	);
};
export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();
	// console.log(articles[0].title);
	return {
		props: {
			articles,
		},
	};
};

export default IndexJs;