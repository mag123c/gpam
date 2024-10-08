import { Layout } from '@/components/common/Layout';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
