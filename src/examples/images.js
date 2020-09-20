import React from 'react';

import img from '../images/img1.jpeg';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
const getImages = graphql`
	{
		fixed: file(relativePath: { eq: "img2.jpeg" }) {
			childImageSharp {
				fixed(width: 600, grayscale: true) {
					...GatsbyImageSharpFixed
				}
			}
		}
		example: file(relativePath: { eq: "img2.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 100) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		fluid: file(relativePath: { eq: "img2.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const Images = () => {
	const data = useStaticQuery(getImages);
	console.log(data);
	return (
		<section className="images">
			<article className="single-image">
				<h1>basic Image</h1>
				<img src={img} width="100%" />
			</article>
			<article className="single-image">
				<h1>fixed/blur</h1>
				<Image fixed={data.fixed.childImageSharp.fixed} />
			</article>
			<article className="single-image">
				<h1>fluid/svg</h1>
				<Image fluid={data.fluid.childImageSharp.fluid} />
				<div className="small">
					<Image fluid={data.fluid.childImageSharp.fluid} />
				</div>
				<Image fluid={data.example.childImageSharp.fluid} />
			</article>
		</section>
	);
};

export default Images;
