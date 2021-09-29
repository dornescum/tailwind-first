import React from 'react';
import {server} from "../../config";
import ArticleItem from "../../components/ArticleItem/ArticleItem";
import Layout from "../../components/UI/Layout";

const HtmlId = ({article}) => {
	return (
		<Layout>
			<ArticleItem article={article}/>
		</Layout>
	);
};
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`${server}/api/articles/${id}`);

	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/articles`);

	const articles = await res.json();

	const ids = articles.map((article) => article.id);
	const paths = ids.map((id) => ({params: {id: id.toString()}}));

	return {
		paths,
		fallback: false,
	};
};
export default HtmlId;