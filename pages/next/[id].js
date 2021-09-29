import React from 'react';
import {server} from "../../config";
import ArticleItem from "../../components/ArticleItem/ArticleItem";
import Layout from "../../components/UI/Layout";

const NextId = ({article}) => {
	console.log(article);
	// const filteredNext = article.filter((art)=>{
	// 	return art.category ==='next'
	// })
	return (
		<Layout>
			<ArticleItem article={article} />

		</Layout>
	);
};

export const getStaticProps = async (context) => {
	const res = await fetch(`${server}/api/articles/${context.params.id}`)

	const article = await res.json()

	return {
		props: {
			article,
		},
	}
}

export const getStaticPaths = async () => {
	const res = await fetch(`${server}/api/articles`)

	const articles = await res.json()

	const ids = articles.map((article) => article.id)
	const paths = ids.map((id) => ({ params: { id: id.toString() } }))

	return {
		paths,
		fallback: false,
	}
}



	export default NextId;