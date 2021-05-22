import {Provider} from 'react-redux'
import Router from 'next/router'
import {store} from '../app/store'
import '../styles/globals.css'
import {Provider as AuthProvider} from 'next-auth/client'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({Component, pageProps}) => {

    return (
        <AuthProvider session={pageProps.session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AuthProvider>
    )
}

export default MyApp
