import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
const getData = graphql`
	query MyQuery {
		site(siteMetadata: {}) {
			info: siteMetadata {
				data
				description
				title
				person {
					name
					age
				}
			}
		}
	}
`;

const Header = () => {
	//const data = useStaticQuery(getData);
	//console.log(data);
	const { site: { info: { title, person: { name, age } } } } = useStaticQuery(getData);
	return (
		<div>
			<h1>Title:{title}</h1>
			<p>Name:{name}</p>
		</div>
	);
};

export default Header;
