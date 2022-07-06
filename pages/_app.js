import Head from 'next/head'
import {useState, createElement, useEffect} from 'react'
import GlobalStates from '../components/context/GlobalContext'
import Alert from '../components/Popups/Alert'

export default ({Component, pageProps: {userCart, userData, isLoggedIn, ...pageProps}}) => {
    const [cart, updateCart] = useState(userCart || {})
    
    useEffect(() => {
        cookieStore.get('COLSON_ECOMMERCE').then(res => {
            const cookieValue = res ? JSON.parse(res.value) : {}
        
            cookieStore.set({
                name: 'COLSON_ECOMMERCE',
                value: JSON.stringify({
                    ...cookieValue,
                    cart
                }),
                expires: new Date().getTime() + (356 * 24 * 3600),
                path: '/' 
            })
        })
    }, [cart])

    return (
        <>
            <Head>
                <title>Colson E-commerce</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="Coloneli Simpsoni" />
                <meta name="description" content="Coloneli Simpsoni" />
                <meta name="author" content="Coloneli Simpsoni" />
                <link rel="shortcut icon" href="/assets/images/demos/demo-21/logo.png" />
                <meta name="apple-mobile-web-app-title" content="Molla" />
                <meta name="application-name" content="Molla" />
                <meta name="msapplication-TileColor" content="#cc9966" />
                <meta name="msapplication-config" content="assets/images/icons/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />
                {/* Plugins CSS File */}
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                {/* Main CSS File */}
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/skins/skin-demo-21.css" />
                <link rel="stylesheet" href="/assets/css/demos/demo-21.css" />
                <link rel="stylesheet" href="/assets/css/demos/demo-21.css" />
                <link rel="stylesheet" href="/styles/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/styles/css/common.css" />
                <link rel="stylesheet" href="/styles/font-awesome/font-awesome/font-awesome.css" />
                <link rel="stylesheet" href="/styles/font-awesome/animate.css" />
                <link rel="stylesheet" href="/b-icon/font/bootstrap-icons.css" />
            </Head>
            <GlobalStates globalStates = {{
                cart: {
                    state: cart,
                    updater: updateCart
                },
                isLoggedIn: {
                    state: isLoggedIn
                },
                userData: {
                    state: userData,
                },
            }}>
                <Alert>
                    <Component className = "po-rel" style = {{zIndex: 0}} cart = {cart} {...pageProps} />
                </Alert>
            </GlobalStates>
        </>
    )
}
