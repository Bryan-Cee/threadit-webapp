import Document, { Html, Head, Main, NextScript } from 'next/document'
// TODO : Understand each imported component and it's use
class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}

export default MyDocument