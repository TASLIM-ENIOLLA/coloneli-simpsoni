import {useState} from 'react'
import {useRouter} from 'next/router'
import SideBar, {SideBarContext} from '../Page/SideBar'
import URL from '../../data/URL'

export default () => {
    const {route} = useRouter()
    const [searchDropDown, toggleSearchDropDown] = useState(false)

    return (
        <header>
            <SideBar>
                <div className = 'container px-4'>
                    <div className = 'row'>
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
                </div>
                <hr className = 'm-0 border-top' />
                <div className = 'container px-4'>
                    <div className = 'user-select-0 row py-5 px-3 j-c-space-between a-i-c'>
                        <div className = 'flex-h a-i-c'>
                            <div className = 'col-lg-d-none pr-4'>
                                <SideBarContext.Consumer>{({state, updater}) => (
                                    <span onClick = {() => updater(true) && alert()} className = 'bi fa-3x bi-filter-left'></span>
                                )}</SideBarContext.Consumer>
                            </div>
                            <div>
                                <a href="/home">
                                    <img width = '130' src="/assets/images/demos/demo-21/logo-name.png"  />
                                </a>
                            </div>
                            <div className = 'col-d-none col-lg-d-block px-5'>{
                                URL.map(
                                    ({href, name}, index) => (
                                        <a key = {index} href={href} className = {`text-uppercase mx-5 ${route === href ? 'active-link': ''}`}>{name}</a>
                                    )
                                )
                            }
                            </div>
                        </div>
                        <div className = ''>
                            <div className="d-inline-block px-4 po-rel">
                                <div className="flex-h a-i-c ttt-parent rounded-2x">
                                    <a href = '' onClick = {(e) => e.preventDefault()} className = 'ttt cursor-pointer'>
                                        <span className="bi ml-3 bi-search fo-s-18"></span>
                                    </a>
                                    <div className="ttt-menu">
                                        <input type="search" className = 'd-none border-0 w-100 p-3 outline-0 bg-clear' placeholder = 'Search here...' />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="d-inline-block po-rel px-4 cursor-pointer">
                                <span onClick = {() => toggleSearchDropDown(!searchDropDown)} className="bi bi-search fo-s-18"></span>
                                <div className={`po-abs z-index-1000 animated fadeIn p-3 rounded-2x min-width-300px border bg-white shadow top-150pcent right-0 ${searchDropDown ? '' : 'd-none'}`}>
                                    <div className="">
                                        <input type="search" className = 'd-block w-100 p-3 border outline-0 rounded-2x' placeholder = 'Search here...' />
                                    </div>    
                                </div>
                            </div> */}
                            <div className="d-inline-block px-4 cursor-pointer po-rel">
                                <span className="bi bi-suit-heart fo-s-18"></span>
                                <span style = {{transform: 'scale(.85)', top: '-50%', width: '18px', height: '18px'}} className = 'po-abs flex-v j-c-c a-i-c text-white text-c right-0 rounded-circle theme-bg'>3</span>
                            </div>
                            <div className="d-inline-block px-4 po-rel">
                                <a href = '' onClick = {(e) => e.preventDefault()} className = 'ttt cursor-pointer'>
                                    <span className="bi bi-cart2 fo-s-18"></span>
                                    <span style = {{transform: 'scale(.85)', top: '-50%', width: '18px', height: '18px'}} className = 'po-abs flex-v j-c-c a-i-c text-white text-c right-0 rounded-circle theme-bg'>5</span>
                                </a>
                                <div className = {`po-abs top-150pcent right-0 bg-white z-index-1000 animated fadeIn rounded shadow vw80 max-width-400px p-3 ttt-more`}>
                                    <div>
                                        <div className="flex-h border-bottom a-i-c px-3 py-4">
                                            <div className = 'mr-3'>
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
                                            <div className = 'mr-3'>
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
            </SideBar>
            <style jsx>{`
                .top-150pcent{
                    top: 150%;
                }
                .max-width-400px{
                    max-width: 400px;
                }
                .vw80{
                    width: 80vw;
                }
                .z-index-1000{
                    z-index: 1000;                    
                }
                .active-link{
                    color: #c96 !important;
                }
                .ttt-more, .ttt-menu{
                    display: none;
                }
                .ttt:focus~.ttt-more, .ttt-more:hover{
                    display: block;
                }
                .ttt:focus~.ttt-menu, .ttt-menu:hover{
                    display: block;
                }
                .ttt:focus .ttt-parent{
                    border: 1px solid #dee2e6!important;
                }
            `}</style>
        </header>
    )
}
