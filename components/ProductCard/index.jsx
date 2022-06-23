import {useState} from 'react'
import currency from '../currency';

export const ProductCard = ({id = null, type = 'hot', images, rating, price, category, name}) => {
    const [shadow, setShadow] = useState(false)
    const [imageFlip, setImageFlip] = useState(0)

    images = images ? images : [
        'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
        'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
    ]

    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className={`border transit rounded-1x po-rel pb-4 mb-5 ${shadow ? 'shadow' : ''}`} onMouseOver = {() => setShadow(true)} onMouseLeave = {() => setShadow(false)}>
                <div className="po-abs top-0 left-0 p-4">
                    <div className = {`px-3 py-2 text-capitalize rounded bg-${type === 'hot' ? 'danger' : 'warning'} text-white`}>{type}</div>
                </div>
                <div className = 'p-2'>
                    <a href={`/product/${id}`} onMouseOver = {() => setImageFlip(1)} onMouseLeave = {() => setImageFlip(0)} className = 'd-block w-100'>
                        <img src={images[imageFlip]} alt="Product image" className="product-image transit" />
                    </a>
                    <div className = 'text-center pt-3'>
                        <p className = 'text-capitalize text-muted mb-1'>{category}</p>
                        <p className = 'text-capitalize text-dark'>
                            <a href={`/product/${id}`}>{name}</a>
                        </p>
                        <p className = 'text-capitalize text-danger'>
                            <span>{currency}{new Intl.NumberFormat().format(price)}</span>
                        </p>
                        <div className = 'text-capitalize mb-4'>
                            <Rating rating = {rating} />
                        </div>
                        <p>
                            <button className = 'btn text-uppercase p-3 btn-warning d-block col-10 mx-auto'>
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

export const ShopProductCard = ({id = null, type = 'hot', images, rating, price, category, name}) => {
    const [shadow, setShadow] = useState(false)
    const [imageFlip, setImageFlip] = useState(0)

    images = images ? images : [
        'assets/images/demos/demo-21/bestSellers/product-1-1.jpg',
        'assets/images/demos/demo-21/bestSellers/product-1-2.jpg'
    ]

    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className={`border transit rounded-1x po-rel pb-4 mb-5 ${shadow ? 'shadow' : ''}`} onMouseOver = {() => setShadow(true)} onMouseLeave = {() => setShadow(false)}>
                <div className="po-abs z-index-100 top-0 left-0 p-4">
                    <div className = {`px-3 py-2 text-capitalize rounded bg-${type === 'hot' ? 'danger' : 'warning'} text-white`}>{type}</div>
                </div>
                <div className={`po-abs z-index-100 top-0 right-0 p-4`}>
                    <div title = 'Add to wishlist' style = {{width: '35px', height: '35px'}} className = {`text-capitalize animated fadeIn flex-h a-i-c j-c-c rounded-circle border ${shadow ? '' : 'd-none'}`}>
                        <span className = 'bi bi-heart fo-s-15'></span>
                    </div>
                </div>
                <div className = 'p-2'>
                    <a href={`/product/${id}`} className = 'product-image d-block w-100 border-bottom po-rel' style = {{height: '260px'}}>
                        {/* Product Image Placeholder */}
                    </a>
                    <div className = 'po-rel'>
                        <div className = {`po-abs bottom-0 left-0 w-100 p-4 flex-h animated fadeIn bg-faded-white ${shadow ? '' : 'd-none'}`}>
                            <div title = 'Add to cart' className = 'cursor-pointer col-6 px-1 flex-v border-right j-c-c a-i-c'>
                                <span className = 'bi bi-cart2'></span>
                                <span className = 'text-capitalize one-line'>add to cart</span>
                            </div>
                            <div title = 'Quick view' className = 'cursor-pointer col-6 px-1 flex-v j-c-c a-i-c'>
                                <span className = 'bi bi-binoculars'></span>
                                <span className = 'text-capitalize one-line'>quick view</span>
                            </div>
                        </div>
                    </div>
                    <div className = 'px-3 pt-4'>
                        <p className = 'text-capitalize text-muted mb-1'>{category}</p>
                        <p className = 'text-capitalize text-dark'>
                            <a href={`/product/${id}`}>{name}</a>
                        </p>
                        <p className = 'text-capitalize text-danger'>
                            <span>{currency}{new Intl.NumberFormat().format(price)}</span>
                        </p>
                        <div className = 'text-capitalize mb-4'>
                            <Rating rating = {rating} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .product-image{
                    background-size: cover;
                    background-position: top;
                    background-image: url(${images[imageFlip]});
                }
                .product-image:hover{
                    animation: upDown 2s ease-in-out alternate infinite;
                }
                .z-index-100{
                    z-index: 100;
                }
                .bg-faded-white{
                    background: rgba(255, 255, 255, .6)
                }
                @keyframes upDown{
                    from{
                        background-position: top;
                    }
                    to{
                        background-position: bottom;
                    }
                }
            `}</style>
        </div>
    )
}

export const Rating = ({rating}) => {
    return (
        <>
            <div>{
                [true, true, true, true, true].map(
                    (each, index) => (
                        <span key = {index} className = {`bi bi-star-fill mx-1 text-${index < rating ? 'warning' : 'muted'}`}></span>
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
