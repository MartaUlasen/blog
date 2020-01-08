import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const Header = () => (
	<StaticQuery
		query={graphql`
		{
			allFile(filter: { name: { eq: "logo" } }) {
				edges {
					node {
						publicURL
					}
				}
			}}
		`}
		render={({
			allFile: {
				edges: [
					{
						node: { publicURL }
					}
				]
			}
		}) => (
			<header>
				<Link to="/">
					<img src={publicURL} alt="logo" />
				</Link>
			</header>
		)}
	/>
);

export default Header;