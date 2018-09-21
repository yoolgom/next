import Layout from '../components/Layout';
import {Component} from 'react';
import fetch from 'isomorphic-unfetch'; //next.js에서는 SSR을 지원하므로 isomorphic-unfetch를 사용해야함.


class SSRTest extends Component {
	static async getInitialProps ({req}){ //리턴하는 값이 컴포넌트의 props로 전달됨.
		const response = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
		return {
			req : req? {from:'server'} : {from : 'client'},
			users : response
		}
	}

	render() {
		const {users, req} = this.props;
		const userList = users.map((user)=>{
			return <li key={user.id}>{user.username}</li>
		});
		return (
			<Layout>
				{req.from} 에서 실행되었슴.
				<ul>
					{userList}
				</ul>
			</Layout>
		)
	}
}

export default SSRTest;