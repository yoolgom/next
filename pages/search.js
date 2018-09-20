import React from 'react';
import Layout from '../components/Layout';

const Search = ({url}) => {
	return (
		<Layout>
			The keyword is "{url.query.keyword}"
		</Layout>
	)
};

export default Search;