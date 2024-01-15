import { Sidebar } from "./Components/Sidebar/Sidebar";
import type { AppProps } from 'next/app';

type ComponentWithPageLayout = AppProps & {
    Component: AppProps['Component'] & {
        PageLayout?: React.ComponentType
    }
}

export default function MyApp({ Component, pageProps }: AppProps) {
    
    return <Component {...pageProps} />
  }