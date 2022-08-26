import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
    return (
        <Html>
            <Head>
                <title>App de Tareas</title>
                <meta
                    name="ViBook"
                    content="Cuaderno de viajes digital"
                />
                <title>ViBook</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
