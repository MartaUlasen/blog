import React from 'react';

import Header from './header.js';
import Sidebar from './sidebar.js';

export default ({ children }) => (
	<>
		<Header />
		<div
			style={{ margin: `0 auto`, maxWidth: 650, backgroundColor: `#eeeeee` }}
		>
			<Sidebar />
			{children}
		</div>
	</>
);