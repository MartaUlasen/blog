import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import style from './index.module.css';

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
			<header className={style.header}>
				<Link to="/">
					<img  className={style.logo} src={publicURL} alt="logo" />
				</Link>
			</header>
		)}
	/>
);

export default Header;