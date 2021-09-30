import React, {useState, useEffect} from 'react';
import Layout from "../../components/UI/Layout";
import Link from "next/link";

const IndexNode = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/api/nodeJs').then(respose => respose.json()).then(json => setData(json));
	}, []);
	console.log(data);

	console.log(data);
	return (
		<Layout>
			{/*<ul>*/}
			{/*	{data.map((item)=>{*/}
			{/*		return <li key={item.id}>{item.title} ||{item.desc} || {item.category}|| {item.name}</li>*/}
			{/*	})}*/}
			{/*</ul>*/}


			<div className="flex">
						{data.map((item) => {
							const {id, name, title, desc, category} = item;
							return (<div className=" bg-gray-100 mx-auto w-full max-w-7xl" key={id}>
									<div className=" gap-4 px-4 py-6  ">
										<Link href={`/${category}/${id}`}>
											<a>
												<img src={data.img} alt={data.title}
													 className="object-center h-96 md:w-96 sm:full"/>
												<h3 className="px-1 py-4 capitalize">{title}</h3>
												<p className="px-1 py-4">Category: <span
													className="p-1 bg-red-50">#{category}</span></p>
												<p>{desc}</p>
												<p className="capitalize font-semibold my-2">Author :<span
													className="pl-2">{name}</span></p>
												<p>{id}</p>
											</a>
										</Link>
									</div>
								</div>
							);
						})}
			</div>
		</Layout>
	);
};

export default IndexNode;