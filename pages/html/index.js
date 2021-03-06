import Layout from "../../components/UI/Layout";
import {server} from "../../config";
import ArticlesList from "../../components/ArticlesList/ArticlesList";

const IndexHtml = ({articles}) => {
	const filteredReact = articles.filter((art) => {
		return art.category === 'html';
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
export default IndexHtml;