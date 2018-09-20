import Layout from '../components/Layout';
import {Component} from 'react';


class SSRTest extends Component {
	static async getInitialProps ({req}){
		return req? {from:'server'} : {from : 'client'}
	}

	render() {
		return (
			<Layout>
				{this.props.from} 에서 실행되었슴.
			</Layout>
		)
	}
}

export default SSRTest;