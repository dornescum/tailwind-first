import React, {useEffect, useState} from 'react';
import {server} from '../config';
import cors from 'cors';
// import {articles} from "../data";
import Articles from '../articles.json';


const Test = ({articles}) => {
	// const info = articles.map((item)=>{
	// 	return <div key={item.id}>{item.title}</div>
	// })
	// console.log(Articles);
	const [data, setData] = useState(Articles);

	// console.log(data);
	// console.log(articles);
	// const Info = ({title, desc, category}) => {
	// 	return <div>
	// 		<p>{title}</p>
	// 		<p>{desc}</p>
	// 		<p>{category}</p>
	// 	</div>;
	// };

	// useEffect(()=>{
	// 	fetch(`${server}/api/articles`)
	// 		.then(response => response.json())
	// 		.then(info => setData(info.articles))
	// }, [setData])

	return (
		<> {data.map((item) => {
			return <div key={item.id}>
				<h1>{item.title}</h1>
				<p>{item.desc}</p>
				<p>{item.category}</p>
			</div>;
		})}
		</>
	);
};


export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	};
};

export default Test;