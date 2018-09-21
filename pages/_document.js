import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';


export default class MyDocument extends Document {
	// static getInitialProps ({renderPage}){
	// 	const {html, head} = renderPage();
	// 	const styles = flush();
	// 	return {html, head, styles};
	// }

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return {...initialProps}
	}

	render() {
		return (
			<html>
				<Head>
					<style>{`body {margin:0}`}</style>
					<title>Next.js test</title>
				</Head>
				<body className="custom_class">
					<Main />
					<NextScript/>
				</body>
			</html>
		)
	}
}