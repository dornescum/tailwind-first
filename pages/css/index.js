import React from 'react';
import Layout from "../../components/UI/Layout";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import {server} from "../../config";

const IndexCss = ({articles}) => {
	const filteredCss = articles.filter((art)=>{
		return art.category ==='css'
	})
	console.log(filteredCss);

	return (
		<div>
			<Layout title='css'>

			<ArticlesList articles={filteredCss}/>
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
// export const getStaticPaths = async () => {
// 	const res = await fetch(`${server}/api/articles`)
//
// 	const articles = await res.json()
//
// 	const ids = articles.map((article) => article.id)
// 	const paths = ids.map((id) => ({ params: { id: id.toString() } }))
//
// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }




export default IndexCss;