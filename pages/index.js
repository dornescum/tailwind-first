import React from "react";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import {server} from "../config";
// import NavabarTc from "../components/UI/NavabarTC";
import Layout from "../components/UI/Layout";


export default function Home({articles}) {
	console.log(articles);
	return (
		<Layout title='Learn'>
			<ArticlesList articles={articles} />
		</Layout>
	);
}

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