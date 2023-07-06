import Header from '../components/Page/Header'
import Footer from '../components/Page/Footer'
import {ProductCard} from '../components/ProductCard'
import {API_ROUTE} from '../config'
import {useEffect, useState, useContext} from 'react'
import {GlobalContext} from '../components/context/GlobalContext'
import {notify} from '../components/Popups'

export default ({cart: unrefinedCart}) => {
    const {globalStates: {cart: {state: refinedCart}}} = useContext(GlobalContext)
    const [bestSellers, setBestSellers] = useState([])
    const [newArrivals, setNewArrivals] = useState([])
    const [NL, setNL] = useState('')
    
    useEffect(async () => {
        const req = await fetch(API_ROUTE.home)
        const {data: {bestSellers, newArrivals}} = await req.json()

        setBestSellers(bestSellers.map(
            (each) => ({
                ...each,
                isCarted: !!unrefinedCart[each.id]
            })
        ))
        setNewArrivals(newArrivals.map(
            (each) => ({
                ...each,
                isCarted: !!unrefinedCart[each.id]
            })
        ))
    }, [])

    return (
        <>
            {/* <TopRibbon></TopRibbon> */}
            <Header></Header>
            <section>
                <div className="container-fluid">
                    <div className="row" style = {{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(/assets/images/demos/demo-21/slider/slide-1.png)`}}>
                        <div className="px-5 col-12">
                            <div style={{minHeight: '600px'}} className = 'container flex-v a-i- j-c-c'>
                                <div className = 'intro'>
                                    <div className="content">
                                        <h3 className  = 'h3-sm'>CLOTHES &amp; ACCESSORIES FOR</h3>
                                    </div>
                                    <div className="price">
                                        <h3 className  = 'h3-sm'>MEN AND WOMEN</h3>
                                    </div>
                                    <div className="action">
                                        <a href="/shop" className="btn btn-warning fo-s-16">
                                            SHOP NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className = 'py-5'>
                <div className="p-5">
                    <div className="fa-3x bold text-center">BEST SELLERS</div>
                    <p className="content text-center">The Trends Boutique: The latest fashion trends from top brands!</p>
                </div>
                <div className="container py-4">
                    <div className="row">{(
                        (bestSellers.length > 0)
                        ? (
                            bestSellers.map(
                                ({name, id, category, isCarted, images, price, type}, key) => (
                                    (++key < 6)
                                    ? (
                                        <ProductCard id = {id} key = {id} type = {type} images = {images.map(e => `${API_ROUTE.product_images}/${id}/${e}`)} price = {price} category = {category} isCarted = {isCarted} name = {name} rating = {Math.floor(((Math.random() * 10) % 5) + 1)} />
                                    )
                                    : undefined
                                )
                            )
                        )
                        : (
                            <div className="col-auto mx-auto text-c">
                                <div className = 'animated pulse infinite'>
                                    <span className="fa-5x bi bi-basket text-muted"></span>
                                    <p>Oops! We are currently restocking. Please check again soon.</p>
                                </div>
                            </div>
                        )
                    )}</div>
                </div>
            </section>
            <section className = 'py-5'>
                <div className="p-5">
                    <div className="fa-3x bold text-center">CATEGORY</div>
                    <p className="content text-center">Check out our categories of cool wears!</p>
                </div>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-3 pb-5 col-md-4 col-sm-6 col-xs-12">
                            <div className="rounded-2x flex-v j-c-c shadow p-3" style = {{minHeight: '150px', backgroundImage: 'url(assets/images/demos/demo-21/banner/footware.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                <h4 className = 'text-uppercase text-dark'>foot wear</h4>
                                <p>
                                    <a href="/shop?category=shoes" className = 'fo-s-15 text-capitalize'>
                                        shop now 
                                        <span className = 'bi ml-2 bi-arrow-right'></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 pb-5 col-md-4 col-sm-6 col-xs-12">
                            <div className="rounded-2x flex-v j-c-c shadow p-3" style = {{minHeight: '150px', backgroundImage: 'url(assets/images/demos/demo-21/banner/accessories.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                <h4 className = 'text-uppercase text-dark'>accessories</h4>
                                <p>
                                    <a href="/shop?category=accessories" className = 'fo-s-15 text-capitalize'>
                                        shop now 
                                        <span className = 'bi ml-2 bi-arrow-right'></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 pb-5 col-md-4 col-sm-6 col-xs-12">
                            <div className="rounded-2x flex-v j-c-c shadow p-3" style = {{minHeight: '150px', backgroundImage: 'url(assets/images/demos/demo-21/banner/mens.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                <h4 className = 'text-uppercase text-dark'>men's</h4>
                                <p>
                                    <a href="/shop?category=mens" className = 'fo-s-15 text-capitalize'>
                                        shop now 
                                        <span className = 'bi ml-2 bi-arrow-right'></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 pb-5 col-md-4 col-sm-6 col-xs-12">
                            <div className="rounded-2x flex-v j-c-c shadow p-3" style = {{minHeight: '150px', backgroundImage: 'url(assets/images/demos/demo-21/banner/womens.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                <h4 className = 'text-uppercase text-dark'>women's</h4>
                                <p>
                                    <a href="/shop?category=womens" className = 'fo-s-15 text-capitalize'>
                                        shop now 
                                        <span className = 'bi ml-2 bi-arrow-right'></span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className = 'py-5'>
                <div className="p-5">
                    <div className="fa-3x bold text-center">NEW ARRIVALS</div>
                </div>
                <div className="container py-4">
                    <div className="row">{(
                        (newArrivals.length > 0)
                        ? (
                            newArrivals.map(
                                ({name, id, category, isCarted, images, price, type}, key) => (
                                    (++key < 4)
                                    ? (
                                        <ProductCard id = {id} key = {id} type = {type} images = {images.map(e => `${API_ROUTE.product_images}/${id}/${e}`)} price = {price} category = {category} isCarted = {isCarted} name = {name} rating = {Math.floor(((Math.random() * 10) % 5) + 1)} />
                                    )
                                    : undefined
                                )
                            )
                        )
                        : (
                            <div className="col-auto mx-auto text-c mb-5">
                                <div className = 'animated pulse infinite'>
                                    <span className="fa-5x bi bi-basket text-muted"></span>
                                    <p>Oops! We are currently restocking. Please check again soon.</p>
                                </div>
                            </div>
                        )
                    )}</div>
                    <div className = 'text-center'>
                        <a href="/shop" className = 'px-5 py-3 d-inline-block text-uppercase border rounded'>
                            <span>view more products</span>
                            <span className = 'bi ml-2 bi-arrow-right'></span>
                        </a>
                    </div>
                </div>
            </section>
            <section style = {{minHeight: '0', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(assets/images/demos/demo-21/newsLetter/banner.jpg)`}} className = 'py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-5">
                            <p className = 'pb-3'>
                                <span className = 'bi text-white  bi-envelope-paper fa-3x'></span>
                            </p>
                            <div className = 'h1 bold text-white text-uppercase letter-spacing-1'>subscribe to our newsLetter</div>
                            <div className = 'text-white mb-5 fo-s-15'>Learn about new offers and get more deals by joining our newsletter</div>
                            <div className = 'col-md-6 col-sm-9 col-lg-7 mx-auto'>
                                <form onSubmit = {async (e) => {
                                    e.preventDefault()

                                    if(NL.length < 1){
                                        notify({
                                            message: 'Email address cannot be empty!',
                                            theme: 'danger'
                                        })
                                    }
                                    else{
                                        const FORM = new FormData()
                                        FORM.append('email', NL)
                                        const req = await fetch(`${API_ROUTE.newsletter}`, {method: 'POST', body: FORM})
                                        const {type, data} = await req.json()

                                        if(type === 'success'){
                                            setNL('')
                                        }

                                        notify({
                                            message: data,
                                            theme: type === 'success' ? type : 'danger'
                                        })
                                    }
                                }} className = 'flex-h rounded overflow-0 bg-white'>
                                    <input onChange = {(e) => setNL(e.target.value)} value = {NL} type="email" className = 'p-4 bg-clear border-0 outline-0 flex-1' />
                                    <input type="submit" value="SUBSCRIBE" className = 'px-4 py-3 text-white border-0 outline-0 bg-warning '/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
            <style jsx>{`
                @media screen and (max-width: 576px){
                    .h3-sm{
                        font-size: 4rem !important;
                    }
                }
            `}</style>
        </>
    )
}

export async function getServerSideProps(context){
    const {req: {cookies}} = context
    const cookie = cookies['COLSON_ECOMMERCE'] || undefined

    return {
        props: {
            userData: cookie ? JSON.parse(cookie) : null,
            isLoggedIn: cookie && JSON.parse(cookie).id ? true : false,
            userCart: cookie && JSON.parse(cookie).cart ? JSON.parse(cookie).cart : {}
        }
    }
}