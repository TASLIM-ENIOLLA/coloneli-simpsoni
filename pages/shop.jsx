import Header from '../components/Page/Header'
import Footer from '../components/Page/Footer'
import {ProductCard} from '../components/ProductCard'
import {useState, useEffect} from 'react'
import {API_ROUTE} from '../config'

export default ({cart: unrefinedCart}) => {
    const [bestSellers, setBestSellers] = useState([])

    useEffect(async () => {
        const req = await fetch(API_ROUTE.home)
        const {type, data: {bestSellers}} = await req.json()

        const bestSellersList = bestSellers.map(
            e => {
                e['isCarted'] = !!unrefinedCart[e.id]
                return e
            }
        )

        setBestSellers(bestSellersList)
    }, [])

    return (
        <>
            {/* <TopRibbon></TopRibbon> */}
            <Header></Header>
            <section style = {{backgroundImage: `url('assets/images/page-header-bg.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover'}} >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className = 'p-5 flex-v j-c-c a-i-c text-center' style = {{minHeight: '250px'}}>
                                <div className = 'fa-3x bold'>Shop</div>
                                <div className = 'fa-1x text-muted fo-s-16'>Check out our clothes &amp; accesories</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className = 'border-bottom'>
                    <div className = 'container'>
                        <div className="row">
                            <div className="col-12 b">
                                <div className = 'py-4 flex-h a-i-c'>
                                    <div>
                                        <a href="/home">Home</a>
                                        <span className = 'bi bi-chevron-right mx-3'></span>
                                    </div>
                                    <div>
                                        <a href="/shop">Shop</a>
                                        <span className = 'bi bi-chevron-right mx-3'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'container'>
                    <div className="row j-c-space-between a-i-c py-5">
                        <div className="col-xs-12 col-sm-12 col-lg-auto">
                            <div className = 'mb-3 flex-h a-i-c'>
                                <span className = 'bi bi-list fo-s-20 mr-3'></span>
                                <span className="text-uppercase">filter</span>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-auto">
                            <div className = 'mb-3 flex-h a-i-c'>
                                Showing {bestSellers.length} of {bestSellers.length} products
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-auto">
                            <div className = 'mb-3'>
                                <span>Sort by: </span>
                                <select className = 'text-capitalize border rounded p-3 ml-2'>
                                    <option value="">most popular</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row py-5">{(
                        (bestSellers.length > 0)
                        ? (
                            <>
                                {bestSellers.map(
                                    ({name, id, category, isCarted, images, price, type}, key) => (
                                        <ProductCard id = {id} key = {id} type = {type} images = {images.map(e => `${API_ROUTE.product_images}/${id}/${e}`)} price = {price} category = {category} isCarted = {isCarted} name = {name} rating = {Math.floor(((Math.random() * 10) % 5) + 1)} />
                                    )
                                )}
                                <div className="col-12">
                                    <div className="py-5 text-center">
                                        <button className = 'px-5 py-3 d-inline-block text-uppercase border bg-clear rounded'>
                                            <span>more products</span>
                                            <span className = 'bi ml-2 bi-arrow-counterclockwise'></span>
                                        </button>
                                    </div>
                                </div>
                            </>
                            
                        )
                        : (
                            <div className="col-auto mx-auto text-c">
                                <div className = 'animated pulse infinite'>
                                    <span className="fa-5x bi bi-basket text-muted"></span>
                                    <p>Restocking...</p>
                                </div>
                            </div>
                        )
                    )}</div>
                </div>
            </section>
            <Footer></Footer>
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