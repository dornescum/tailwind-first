import React, {useEffect, useState} from 'react';

const IdNode = ({id}) => {
	const [info, setInfo] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/api/node').then(respose => respose.json()).then(json => setInfo(json));
	}, []);
	const filterRoute = info.filter(r => r.id === `${id}`)
	console.log(filterRoute);
	return (
		<div style={{display: 'flex', padding: '1rem', margin: '1rem', flexDirection:'column'}}>
			{filterRoute.map((item) => {
				return <a key={item.id} href={`/node/${item.id}`}>{item.title}</a>;
			})}
		</div>
	);
};

export default IdNode;