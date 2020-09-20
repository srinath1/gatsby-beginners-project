import React from 'react';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const example = ({ data }) => {
	const { site: { info: { author } } } = data;
	return (
		<Layout>
			<p>This is example page</p>
			<Header />
			<HeaderStatic />
			<h5>author:{author}</h5>
		</Layout>
	);
};
export const data = graphql`
	query MyQuerynew {
		site(siteMetadata: {}) {
			info: siteMetadata {
				data
				description
				title
				author
				person {
					age
					name
				}
			}
		}
	}
`;

export default example;
