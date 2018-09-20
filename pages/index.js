import Link from 'next/link'
import Layout from '../components/Layout';


const Index = () =>  {
	return (
		<Layout>
			<h1>
				Next.js start!!
			</h1>
			<h2>
				<Link href="/About">
					<div style={{background:'black', color:'white'}}>소개</div>
				</Link>
			</h2>
		</Layout>
	)
};

export default Index;