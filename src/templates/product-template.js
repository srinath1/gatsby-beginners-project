import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Image from 'gatsby-image';

const ComponentName = ({ data }) => {
	const { product: { price, title, image: { fixed }, info } } = data;
	return (
		<Layout>
			<div style={{ textAlign: 'center' }}>
				<Link to="/products">Back to Products</Link>
				<h1>Single Product:{title}</h1>
			</div>
			<section className="single-product">
				<article>
					<Image fixed={fixed} alt={title} />
				</article>
				<article>
					<h1>{title}</h1>
					<h3>${price}</h3>
					<p>{info}</p>
					<button>add to cart</button>
				</article>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query GetSingleProduct($slug: String) {
		product: contentfulProduct(slug: { eq: $slug }) {
			title
			price
			info
			image {
				fixed(width: 300) {
					...GatsbyContentfulFixed
				}
			}
		}
	}
`;

export default ComponentName;
