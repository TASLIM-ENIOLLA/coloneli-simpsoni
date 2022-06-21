import {useState} from 'react'

export default () => {
    return (
        <>
            <section style = {{backgroundImage: 'url(assets/images/demos/demo-21/notification-back.jpg)'}}>
                <div className = 'p-3 text-c'>
                    <span className="text-white text-capitalize">FREE SHIPPING FOR ALL ORDERS OVER $50</span>
                </div>
            </section>
            <header>
                <div className = 'container px-4'>
                    <div className = 'row border-bottom'>
                        <div className="col-auto ml-auto">
                            <div className = 'py-4'>
                                <a href="/login" className = 'mx-3 text-uppercase'>
                                    <span className = 'bi bi-telephone mx-2'></span>
                                    +1 (404) 54894
                                </a>
                                <a href="/login" className = 'mx-3 text-uppercase'>
                                    <span className = 'bi bi-person mx-2'></span>
                                    login
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className = 'row py-5 px-3 j-c-space-between a-i-c'>
                        <div className = 'flex-h a-i-c'>
                            <div className = 'col-md-d-none pr-4'>
                                <span className = 'bi fa-3x bi-filter-left'></span>
                            </div>
                            <div>
                                <img src="/assets/images/demos/demo-21/logo.png"  />
                            </div>
                            <div className = 'col-d-none col-md-d-block px-5'>
                                <a href="/home" className = 'text-uppercase mx-5'>home</a>
                                <a href="/shop" className = 'text-uppercase mx-5'>shop</a>
                                <a href="/product" className = 'text-uppercase mx-5'>product</a>
                            </div>
                        </div>
                        <div>
                            <div className="d-inline-block px-4 cursor-pointer">
                                <span className="bi bi-search fo-s-18"></span>
                            </div>
                            <div className="d-inline-block px-4 cursor-pointer po-rel">
                                <span className="bi bi-suit-heart fo-s-18"></span>
                                <span style = {{transform: 'scale(.85)', top: '-50%', width: '18px', height: '18px'}} className = 'po-abs flex-v j-c-c a-i-c text-white text-c right-0 rounded-circle bg-primary'>3</span>
                            </div>
                            <div className="d-inline-block px-4 cursor-pointer po-rel">
                                <span className="bi bi-cart2 fo-s-18"></span>
                                <span style = {{transform: 'scale(.85)', top: '-50%', width: '18px', height: '18px'}} className = 'po-abs flex-v j-c-c a-i-c text-white text-c right-0 rounded-circle bg-primary'>3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="container-fluid">
                    <div className="row" style = {{background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url(/assets/images/demos/demo-21/slider/slide-1.png)`}}>
                        <div className="px-5 col-xs-12 col-md-6">
                            <div style={{minHeight: '600px'}} className = 'container intro flex-v a-i- j-c-c'>
                                <div class="content">
                                    <h3>CLOTHES &amp; ACCESSORIES FOR</h3>
                                </div>
                                <div class="price">
                                    <h3>MEN AND WOMEN</h3>
                                    </div>
                                <div class="action">
                                    <a href="/shop" class="btn btn-primary">
                                        SHOP NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className = 'py-5'>
                <div class="p-5">
                    <div class="fa-3x bold text-center">BEST SELLERS</div>
                    <p class="content text-center">The Trends Boutique: The latest fashion trends from top brands!</p>
                </div>
                <div className="container py-4">
                    <div className="row">
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                    </div>
                </div>
            </section>
            <section className = 'py-5'>
                <div class="p-5">
                    <div class="fa-3x bold text-center">CATEGORY</div>
                    <p class="content text-center">Check out our categories of cool wears!</p>
                </div>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-3 pb-5 col-md-4 col-sm-6 col-xs-12">
                            <div className="rounded-2x flex-v j-c-c shadow p-3" style = {{minHeight: '150px', backgroundImage: 'url(assets/images/demos/demo-21/banner/footware.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                <h4 className = 'text-uppercase text-dark'>foot wear</h4>
                                <p>
                                    <a href="/" className = 'fo-s-15 text-capitalize'>
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
                                    <a href="/" className = 'fo-s-15 text-capitalize'>
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
                                    <a href="/" className = 'fo-s-15 text-capitalize'>
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
                                    <a href="/" className = 'fo-s-15 text-capitalize'>
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
                <div class="p-5">
                    <div class="fa-3x bold text-center">NEW ARRIVALS</div>
                    <div className = 'text-center pt-3'>
                        <div className = 'px-3 py-2 text-capitalize rounded bg-primary d-inline-block cursor-pointer mx-3 text-white mb-3'>all</div>
                        <div className = 'px-3 py-2 text-capitalize rounded bg-danger d-inline-block cursor-pointer mx-3 text-white mb-3'>men</div>
                        <div className = 'px-3 py-2 text-capitalize rounded bg-danger d-inline-block cursor-pointer mx-3 text-white mb-3'>women</div>
                        <div className = 'px-3 py-2 text-capitalize rounded bg-danger d-inline-block cursor-pointer mx-3 text-white mb-3'>shoes</div>
                        <div className = 'px-3 py-2 text-capitalize rounded bg-danger d-inline-block cursor-pointer mx-3 text-white mb-3'>accessories</div>
                    </div>
                </div>
                <div className="container py-4">
                    <div className="row">
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                        <ProductCard images = {[
                            'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
                            'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
                        ]} price = '13595.34' category = 'shoes' name = 'nike renew arena' rating = '3' />
                    </div>
                    <div className = 'text-center'>
                        <a href="/" className = 'px-5 py-3 d-inline-block text-uppercase border rounded'>
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
                                <div className = 'flex-h rounded overflow-0 bg-white'>
                                    <input type="email" className = 'p-3 bg-clear outline-0 flex-1' />
                                    <input type="submit" value="SUBSCRIBE" className = 'px-4 py-3 text-white border-0 outline-0 bg-primary '/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className = 'py-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className = 'my-4 border-bottom flex-h a-i-c'>
                                <div>
                                    <span className = 'bi bi-truck fo-s-22 mx-4'></span>
                                </div>
                                <div>
                                    <div className = 'h4 bold letter-spacing-1 text-dark'>Payment &amp; Delivery</div>
                                    <p>Free shipping for orders over $50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className = 'my-4 border-bottom flex-h a-i-c'>
                                <div>
                                    <span className = 'bi bi-arrow-counterclockwise fo-s-22 mx-4'></span>
                                </div>
                                <div>
                                    <div className = 'h4 bold letter-spacing-1 text-dark'>Return &amp; Refund</div>
                                    <p>Free 100% money back guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className = 'my-4 border-bottom flex-h a-i-c'>
                                <div>
                                    <span className = 'bi bi-coin fo-s-22 mx-4'></span>
                                </div>
                                <div>
                                    <div className = 'h4 bold letter-spacing-1 text-dark'>Quality Support</div>
                                    <p>Alway online feedback 24/7</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className = 'my-4 border-bottom flex-h a-i-c'>
                                <div>
                                    <span className = 'bi bi-envelope-open-fill fo-s-22 mx-4'></span>
                                </div>
                                <div>
                                    <div className = 'h4 bold letter-spacing-1 text-dark'>Newsletter</div>
                                    <p>10% off by subscribing to our newsletter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className = ''>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-6">
                            <div className = 'mb-5'>
                                <div className = 'pb-3'>
                                    <img src="/assets/images/demos/demo-21/logo-footer.png" alt=""/>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed non maiores et? In quaerat temporibus dignissimos doloremque corporis perspiciatis labore qui inventore quia fugiat libero repudiandae illo odio est hic aliquam id, praesentium totam necessitatibus repellendus ullam dicta illum ipsa! Ipsa earum quod voluptate nesciunt sequi cum debitis voluptas!
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-3">
                            <div className = 'mb-5'>
                                <p className = 'h3 bold text-dark'>Information</p>
                                <div className = 'py-3'>
                                    <a className = 'd-block mb-4' href="/">About Us</a>
                                    <a className = 'd-block mb-4' href="/">Contact Us</a>
                                    <a className = 'd-block mb-4' href="/">Facebook Page</a>
                                    <a className = 'd-block mb-4' href="/">Instagram Page</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-3">
                            <div className = 'mb-5'>
                                <p className = 'h3 bold text-dark'>My Account</p>
                                <div className = 'py-3'>
                                    <a className = 'd-block mb-4' href="/">Sign In</a>
                                    <a className = 'd-block mb-4' href="/">View Cart</a>
                                    <a className = 'd-block mb-4' href="/">Help</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}



const Rating = ({rating}) => {
    return (
        <>
            <div>{
                [true, true, true, true, true].map(
                    (each, index) => (
                        <span className = {`bi bi-star-fill mx-1 text-${index < rating ? 'warning' : 'muted'}`}></span>
                    )
                )
            }
            </div>
            <div>
                <span>{rating} star rating</span>
            </div>
        </>
    )
}

const ProductCard = ({images, rating, price, category, name}) => {
    const [shadow, setShadow] = useState(false)
    const [imageFlip, setImageFlip] = useState(0)

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className={`border transit rounded-1x po-rel pb-4 mb-5 ${shadow ? 'shadow' : ''}`} onMouseOver = {() => setShadow(true)} onMouseLeave = {() => setShadow(false)}>
                <div className="po-abs top-0 left-0 p-4">
                    <div className = 'px-3 py-2 text-capitalize rounded bg-danger text-white'>sale</div>
                </div>
                <div className = 'p-2'>
                    <a href="/" onMouseOver = {() => setImageFlip(1)} onMouseLeave = {() => setImageFlip(0)} className = 'd-block w-100'>
                        <img src={images[imageFlip]} alt="Product image" class="product-image transit" />
                    </a>
                    <div className = 'text-center pt-3'>
                        <p className = 'text-capitalize text-muted mb-1'>{category}</p>
                        <p className = 'text-capitalize text-dark'>
                            <a href="">{name}</a>
                        </p>
                        <p className = 'text-capitalize text-danger'>
                            <span>${new Intl.NumberFormat().format(price)}</span>
                        </p>
                        <p className = 'text-capitalize mb-4'>
                            <Rating rating = {rating} />
                        </p>
                        <p>
                            <button className = 'btn text-uppercase p-3 btn-primary d-block col-10 mx-auto'>
                                <span className="bi bi-cart2 mx-2"></span>
                                add to cart
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}