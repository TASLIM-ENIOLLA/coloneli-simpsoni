import {useState} from 'react'

export default () => {
    const [cartDropDown, toggleCartDropDown] = useState(false)
    const [searchDropDown, toggleSearchDropDown] = useState(false)

    return (
        <header>
            <div className = 'container px-4'>
                <div className = 'row border-bottom'>
                    <div className="col-auto ml-auto">
                        <div className = 'py-4'>
                            <a href="tel://5732021737" className = 'mx-3 text-uppercase'>
                                <span className = 'bi bi-telephone mx-2'></span>
                                5732021737
                            </a>
                            <a href="/login" className = 'mx-3 text-uppercase'>
                                <span className = 'bi bi-person mx-2'></span>
                                login
                            </a>
                        </div>
                    </div>
                </div>
                <div className = 'user-select-0 row py-5 px-3 j-c-space-between a-i-c'>
                    <div className = 'flex-h a-i-c'>
                        <div className = 'col-md-d-none pr-4'>
                            <span className = 'bi fa-3x bi-filter-left'></span>
                        </div>
                        <div>
                            <a href="/home">
                                <img width = '130' src="/assets/images/demos/demo-21/logo-name.png"  />
                            </a>
                        </div>
                        <div className = 'col-d-none col-md-d-block px-5'>
                            <a href="/home" className = 'text-uppercase mx-5'>home</a>
                            <a href="/shop" className = 'text-uppercase mx-5'>shop</a>
                            <a href="/about" className = 'text-uppercase mx-5'>about us</a>
                            <a href="/contact" className = 'text-uppercase mx-5'>contact us</a>
                        </div>
                    </div>
                    <div>
                        <div className="d-inline-block po-rel px-4 cursor-pointer">
                            <span onClick = {() => {
                                toggleCartDropDown(false)
                                toggleSearchDropDown(!searchDropDown)
                            }} className="bi bi-search fo-s-18"></span>
                            <div className={`po-abs z-index-1000 animated fadeIn p-3 rounded-2x min-width-300px border bg-white shadow top-150pcent right-0 ${searchDropDown ? '' : 'd-none'}`}>
                                <div className="">
                                    <input type="search" className = 'd-block w-100 p-3 border outline-0 rounded-2x' placeholder = 'Search here...' />
                                </div>    
                            </div>
                        </div>
                        <div className="d-inline-block px-4 cursor-pointer po-rel">
                            <span className="bi bi-suit-heart fo-s-18"></span>
                            <span style = {{transform: 'scale(.85)', top: '-50%', width: '18px', height: '18px'}} className = 'po-abs flex-v j-c-c a-i-c text-white text-c right-0 rounded-circle theme-bg'>3</span>
                        </div>
                        <div className="d-inline-block px-4 po-rel">
                            <div onClick = {() => {
                                toggleSearchDropDown(false)
                                toggleCartDropDown(!cartDropDown)
                            }} className = 'cursor-pointer'>
                                <span className="bi bi-cart2 fo-s-18"></span>
                                <span style = {{transform: 'scale(.85)', top: '-50%', width: '18px', height: '18px'}} className = 'po-abs flex-v j-c-c a-i-c text-white text-c right-0 rounded-circle theme-bg'>3</span>
                            </div>
                            <div className = {`po-abs top-150pcent right-0 bg-white z-index-1000 animated fadeIn rounded shadow min-width-300px p-3 ${cartDropDown ? '' : 'd-none'}`}>
                                <div>
                                    <div className="flex-h border-bottom a-i-c px-3 py-4">
                                        <div>
                                            <p className = 'double-line text-dark'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolorem ad sit vero animi.
                                            </p>
                                            <p className = 'm-0 text-muted'>1 x $80</p>
                                        </div>
                                        <div>
                                            <div className = 'border' style = {{width: '70px', height: '70px', backgroundImage: 'url(/assets/images/products/cart/product-1.jpg)', backgroundSize: 'cover'}}></div>
                                        </div>
                                    </div>
                                    <div className="flex-h a-i-c mb-3 px-3 py-4">
                                        <div>
                                            <p className = 'double-line text-dark'>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolorem ad sit vero animi.
                                            </p>
                                            <p className = 'm-0 text-muted'>1 x $80</p>
                                        </div>
                                        <div>
                                            <div className = 'border' style = {{width: '70px', height: '70px', backgroundImage: 'url(/assets/images/products/cart/product-1.jpg)', backgroundSize: 'cover'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'border-top'>
                                    <div className = 'flex-h px-3 py-4 a-i-c j-c-space-between'>
                                        <p>TOTAL</p>
                                        <p>$160.00</p>
                                    </div>
                                </div>
                                <div>
                                    <div className = 'pb-3'>
                                        <a href = '/my-cart' className = 'shadow rounded text-uppercase d-block w-100 btn btn-warning bold letter-spacing-1 p-3 mb-3'>View Cart</a>
                                        <a href = '/checkout' className = 'shadow rounded text-uppercase d-block w-100 btn btn-success bold letter-spacing-1 p-3 mb-3'>Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .top-150pcent{
                    top: 150%;
                }
                .min-width-300px{
                    min-width: 300px;
                }
                .z-index-1000{
                    z-index: 1000;                    
                }
            `}</style>
        </header>
    )
}