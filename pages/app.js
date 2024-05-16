// pages/_app.js
import { BrowserRouter } from 'react-router-dom';

function MyApp({ Component, pageProps }) {
    return (
        <BrowserRouter>
            <Component {...pageProps} />
        </BrowserRouter>
    );
}

export default MyApp;
