import React from 'react';
import Head from 'next/head'
import NavabarTc from "./NavabarTC";
import Footer from './Footer'

const Layout = (props) => {
	return (
		<div>
			<Head>
				<title>{props.title} || Next.js</title>
				<meta name="description" content={props.description}/>
			</Head>
			<NavabarTc />
			<main>{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;