import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import style from './index.module.scss';

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
			<div className={style.sidebar}>
				{
					edges.map(({
						node: {
							id,
							path
						}
					}) => (
						<Link to={path} key={id} className={style.navItem} >{id}</Link>
					))
				}
			</div>
		)}
	/>
);

export default Sidebar;