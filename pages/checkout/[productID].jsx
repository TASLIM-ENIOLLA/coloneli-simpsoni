import {useState, useEffect, useContext} from 'react'
import Header from '../../components/Page/Header'
import Footer from '../../components/Page/Footer'
import currency from '../../components/currency'
import {GlobalContext} from '../../components/context/GlobalContext'
import {API_ROUTE} from '../../config'
import {useRouter} from 'next/router'
import Component404 from '../../components/Page/404'

export default () => {
    let {globalStates: {cart: {state: cart}}} = useContext(GlobalContext)
    const [productData, setProductData] = useState({})
    const {query: {productID}} = useRouter()
    const [is404, set404] = useState()
    const [formData, setFormData] = useState({
        f_name: '',
        l_name: '',
        phone: '',
        email: '',
        country: 'nigeria',
        address: '',
        town_or_city: '',
        state_or_region: '',
        zip_code: '',
        notes: '',
    })

    useEffect(async () => {
        const req = await fetch(`${API_ROUTE.product_data}?productID=${productID}`)
        const {type, data: productData} = await req.json()

        if(type === 'success'){
            set404(false)
            productData['isCarted'] = !!cart[productData?.id]
            setProductData(productData)
        }
        else{
            set404(true)
        }
    }, [])

    return (
        <>
            <Header />{(
                (is404)
                ? <Component404 title = 'product' />
                : (
                    (is404 === false)
                    ? (
                        <>
                            <section style = {{backgroundImage: `url('/assets/images/page-header-bg.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover'}} >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className = 'p-5 flex-v j-c-c a-i-c text-center' style = {{minHeight: '250px'}}>
                                                <div className = 'fa-3x bold'>Checkout</div>
                                                <div className = 'fa-1x text-muted fo-s-16'>Place your order &amp; make payment</div>
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
                                                        <a href="/checkout">Checkout</a>
                                                        <span className = 'bi bi-chevron-right mx-3'></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="container">
                                    <div className="pt-5">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="row py-5">
                                        <div className="col-lg-8 col-sm-12">
                                            <div className = 'row'>
                                                <div className="col-lg-6 col-sm-12 pb-4">
                                                    <p className = 'mb-2'>First Name *</p>
                                                    <input value = {formData.email} onChange = {() => setFormData({...formData, f_name: e.target.value})} type="text" className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-lg-6 col-sm-12 pb-4">
                                                    <p className = 'mb-2'>Last Name *</p>
                                                    <input value = {formData.l_name} onChange = {() => setFormData({...formData, l_name: e.target.value})} type="text" className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-sm-12 pb-4">
                                                    <p className = 'mb-2'>Country</p>
                                                    <input value = {formData.country} onChange = {() => setFormData({...formData, country: e.target.value})} type="text" readOnly = {true} value = 'Nigeria' className = 'p-3 user-select-0 disabled rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-sm-12 pb-4">
                                                    <p className = 'mb-2'>Address *</p>
                                                    <input value = {formData.address} onChange = {() => setFormData({...formData, address: e.target.value})} type="text" className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-lg-6 col-sm-12 pb-4">
                                                    <p className = 'mb-2'>Town / City *</p>
                                                    <input value = {formData.town_or_city} onChange = {() => setFormData({...formData, town_or_city: e.target.value})} type="text" className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-lg-6 col-sm-12 pb-4">
                                                    <p className = 'mb-2'>State / Region *</p>
                                                    <input value = {formData.state_or_region} onChange = {() => setFormData({...formData, state_or_region: e.target.value})} type="text" className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-lg-6 col-sm-12 pb-4">
                                                    <p className = 'mb-2'>Postal Code / ZIP *</p>
                                                    <input value = {formData.zip_code} onChange = {() => setFormData({...formData, zip_code: e.target.value})} type="text" className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-lg-6 col-sm-12 pb-4">
                                                    <p className = 'mb-2'>Phone number *</p>
                                                    <input value = {formData.phone} onChange = {() => setFormData({...formData, phone: e.target.value})} type="phone" className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-sm-12 pb-4">
                                                    <p className = 'mb-2'>Email Address *</p>
                                                    <input value = {formData.email} onChange = {() => setFormData({...formData, email: e.target.value})} type="email" className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
                                                </div>
                                                <div className="col-sm-12 pb-4">
                                                    <p className = 'mb-2'>Order Notes (optional)</p>
                                                    <textarea value = {formData.notes} onChange = {() => setFormData({...formData, notes: e.target.value})} rows = '5' className = 'p-3 resize-0 rounded d-block w-100 border outline-0 bg-light'></textarea>
                                                </div>
                                                {/* <div className = 'col-12 pt-5'>
                                                    <a href = '#place-order' className="d-block text-uppercase p-3 w-100 border-choco text-center text-choco bg-clear rounded">place order</a>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <div className = 'border rounded bg-light p-4'>
                                                <div>
                                                    <div className = 'text-capitalize bold letter-spacing-1 px-3 pb-4 border-bottom text-muted'>
                                                        Your order
                                                    </div>
                                                </div>
                                                <div className = 'py-4'>
                                                    <div>
                                                        <div className = 'flex-h j-c-space-between bold letter-spacing-1 text-muted a-i-c py-4'>
                                                            <div className = 'flex-h px-3'>
                                                                Product
                                                            </div>
                                                            <div className = 'flex-h px-3'>
                                                                Subtotal
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className = 'flex-h j-c-space-between text-muted py-4 border-bottom mb-3'>
                                                                <div className = 'px-3 double-line text-capitalize'>
                                                                    {productData?.name}
                                                                    <p className="mb-0 mt-2 theme-color">1 unit</p>
                                                                </div>
                                                                <div className = 'px-3'>
                                                                    {currency}{new Intl.NumberFormat().format(productData?.price)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className = 'flex-h j-c-space-between bold letter-spacing-1 text-muted a-i-c py-4'>
                                                            <div className = 'flex-h px-3'>
                                                                Total
                                                            </div>
                                                            <div className = 'flex-h px-3'>
                                                                {currency}{new Intl.NumberFormat().format(productData?.price)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className = 'pt-3'>
                                                        <a href = '#place-order' className="d-block text-uppercase p-3 w-100 border-choco text-center text-choco bg-clear rounded">place order</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = 'pt-5'>
                                                <a href = '/shop' className="d-block text-center text-uppercase p-3 w-100 border bg-clear rounded">continue shopping</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                    : <></>
                )
            )}<Footer />
        </>
    )
}

export async function getServerSideProps(context){
    const {req: {cookies}, query: {productID}} = context
    const cookie = cookies['COLSON_ECOMMERCE'] || undefined

    return {
        props: {
            userData: cookie ? JSON.parse(cookie) : null,
            isLoggedIn: cookie && JSON.parse(cookie).id ? true : false,
            userCart: cookie && JSON.parse(cookie).cart ? JSON.parse(cookie).cart : {}
        }
    }
}