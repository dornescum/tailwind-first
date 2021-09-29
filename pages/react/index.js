import React from 'react';
import {server} from "../../config";
import Layout from "../../components/UI/Layout";
import ArticlesList from "../../components/ArticlesList/ArticlesList";

const IndexReact = ({articles}) => {
	const filteredReact = articles.filter((art) => {
		return art.category === 'react';
	});
	return <Layout title="html">

		<ArticlesList articles={filteredReact}/>
	</Layout>;
};

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();
	console.log(articles[0].title);
	return {
		props: {
			articles,
		},
	};
};

export default IndexReact;