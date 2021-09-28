import Layout from "../../components/UI/Layout";
import {server} from "../../config";

const detailsCss =({articles})=>{
	const filteredCss = articles.filter((art)=>{
		return art.category ==='css'
	})
	return <Layout title='Css'>
			<div>
				{filteredCss.map((art)=>{
					return <div key={art.id}>
						<p>{art.category}</p>
					</div>
				})}
			</div>
	</Layout>
}

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`${server}/api/articles?id=${id}`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	};
};

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
export default detailsCss;