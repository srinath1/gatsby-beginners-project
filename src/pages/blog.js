import React, { Component } from 'react';

import Layout from '../components/layout';
import styles from '../components/blog.module.css';

export default class blog extends Component {
	render() {
		return (
			<Layout>
				<div className={styles.page}>
					<h1>this is blog</h1>
					<p className={styles.text}>lorem 25 lorem</p>
				</div>
			</Layout>
		);
	}
}
