import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ComponentName = () => (
	<StaticQuery
		query={graphql`
			{
				site(siteMetadata: {}) {
					info: siteMetadata {
						data
						description
						title
						person {
							age
							name
						}
					}
				}
			}
		`}
		render={(data) => <h4>{data.site.info.description}</h4>}
	/>
);

export default ComponentName;
