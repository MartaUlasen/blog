import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Sidebar = () => (
	<StaticQuery 
		query={graphql`
			{
				allSitePage {
					edges {
						node {
							id
							path
						}
					}
				}
			}
		`}
		render={({ allSitePage: { edges } }) => (
			<ul>
				{edges.map(({ node: { id, path } }) => (
					<li key={id}>
						<Link to={path}>{id}</Link>
					</li>
				))}
			</ul>
		)}
	/>
);

export default Sidebar;