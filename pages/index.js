import Link from 'next/link'
import Layout from '../components/Layout';
import Head from 'next/head'; //해당 페이지에서 title을 변경해줄 수 있슴.

const Index = () =>  {
	return (
		<Layout>
			<Head>
				<title>
					Index 페이지
				</title>
			</Head>
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
