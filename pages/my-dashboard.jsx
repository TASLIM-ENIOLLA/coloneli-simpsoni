import Header from '../components/Page/Header'
import Footer from '../components/Page/Footer'
import {useState, useContext, createContext, useEffect} from 'react'
import {GlobalContext} from '../components/context/GlobalContext'
import {API_ROUTE} from '../config'

const PageContext = createContext()

const Orders = () => true
const UserInfo = () => {
    const {globalStates: {userData: {state: {id}}}} = useContext(GlobalContext)
    const [isUpdated, setIsUpdated] = useState(false)
    const [formData, setFormData] = useState({
        f_name: '', l_name: '', email: '', phone: '', country: '', town_or_city: '', state_or_region: '', postal_code: '', address: ''
    })
    useEffect(async () => {
        const req = await fetch(`${API_ROUTE.get_user_data}?id=${id}`)
        const {type, data} = await req.json()
        
        setFormData({...formData, ...data})
    }, [])
    return (
        <div className = 'row'>
            <div className="col-lg-6 col-sm-12 pb-4">
                <p className = 'mb-2'>First Name</p>
                <input type="text" value = {formData.f_name} onChange = {(e) => {
                    setFormData({...formData, f_name: e.target.value})
                    setIsUpdated(true)
                }} className = 'p-3 text-capitalize rounded d-block w-100 border outline-0 bg-light' />
            </div>
            <div className="col-lg-6 col-sm-12 pb-4">
                <p className = 'mb-2'>Last Name</p>
                <input type="text" value = {formData.l_name} onChange = {(e) => {
                    setFormData({...formData, l_name: e.target.value})
                    setIsUpdated(true)
                }} className = 'p-3 text-capitalize rounded d-block w-100 border outline-0 bg-light' />
            </div>
            <div className="col-lg-6 col-sm-12 pb-4">
                <p className = 'mb-2'>Phone number</p>
                <input type="phone" value = {formData.phone} onChange = {(e) => {
                    setFormData({...formData, phone: e.target.value})
                    setIsUpdated(true)
                }} className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
            </div>
            <div className="col-lg-6 col-sm-12 pb-4">
                <p className = 'mb-2'>Email Address</p>
                <input type="email" value = {formData.email} onChange = {(e) => {
                    setFormData({...formData, email: e.target.value})
                    setIsUpdated(true)
                }} className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
            </div>
            <div className="col-lg-6 col-sm-12 pb-4">
                <p className = 'mb-2'>Country</p>
                <input type="text" value = {formData.country} onChange = {(e) => {
                    setFormData({...formData, country: e.target.value})
                    setIsUpdated(true)
                }} readOnly = {true} value = 'Nigeria' className = 'p-3 text-capitalize user-select-0 disabled rounded d-block w-100 border outline-0 bg-light' />
            </div>
            <div className="col-lg-6 col-sm-12 pb-4">
                <p className = 'mb-2'>Town / City</p>
                <input type="text" value = {formData.town_or_city} onChange = {(e) => {
                    setFormData({...formData, town_or_city: e.target.value})
                    setIsUpdated(true)
                }} className = 'p-3 text-capitalize rounded d-block w-100 border outline-0 bg-light' />
            </div>
            <div className="col-lg-6 col-sm-12 pb-4">
                <p className = 'mb-2'>State / Region</p>
                <input type="text" value = {formData.state_or_region} onChange = {(e) => {
                    setFormData({...formData, state_or_region: e.target.value})
                    setIsUpdated(true)
                }} className = 'p-3 text-capitalize rounded d-block w-100 border outline-0 bg-light' />
            </div>
            <div className="col-lg-6 col-sm-12 pb-4">
                <p className = 'mb-2'>Postal Code / ZIP</p>
                <input type="text" value = {formData.postal_code} onChange = {(e) => {
                    setFormData({...formData, postal_code: e.target.value})
                    setIsUpdated(true)
                }} className = 'p-3 rounded d-block w-100 border outline-0 bg-light' />
            </div>
            <div className="col-sm-12 pb-4">
                <p className = 'mb-2'>Address</p>
                <textarea rows = '4' type="text" value = {formData.address || ''} onChange = {(e) => {
                    setFormData({...formData, address: e.target.value})
                    setIsUpdated(true)
                }} className = 'p-3 rounded resize-0 d-block w-100 border outline-0 bg-light'></textarea>
            </div>
            <div className = 'col-12 pt-5'>
                <a href = '#place-order' className={`text-uppercase transit p-3 border-choco text-center text-choco bg-clear rounded ${isUpdated ? '' : 'disabled'}`}>update data</a>
            </div>
        </div>
    )
}
const Logout = () => {
    const {updater} = useContext(PageContext)

    return (
        <div style = {{maxWidth: '500px'}} className = 'shadow my-5 animated slideInTop mx-auto rounded-2x p-5 bg-white'>
            <p className = 'text-center text-muted'>Are you sure you want to logout?</p>
            <div className="row mt-5">
                <div className="col-6">
                    <button onClick = {() => updater('orders')} className = 'border border-danger outline-0 rounded-1x bg-clear text-capitalize text-danger py-4 px-3 d-block w-100'>cancel</button>
                </div>
                <div className="col-6">
                    <button onClick = {() => {
                        if(confirm('Are you sure you want to logout?')){
                            cookieStore.get('COLSON_ECOMMERCE').then(
                                res => {
                                    if(res){
                                        let {value: existingCookieValue} = res
                                        existingCookieValue = JSON.parse(existingCookieValue)
                                        const {cart} = existingCookieValue
        
                                        cookieStore.set({
                                            name: 'COLSON_ECOMMERCE',
                                            value: JSON.stringify({cart}),
                                            expires: new Date().getTime() + (356 * 24 * 3600),
                                            path: '/' 
                                        })
                                        setTimeout(() => {
                                            window.location.reload()
                                        }, 500)
                                    }
                                    else{
                                        cookieStore.set({
                                            name: 'COLSON_ECOMMERCE',
                                            value: '',
                                            expires: new Date().getTime() + (356 * 24 * 3600),
                                            path: '/' 
                                        })
                                        setTimeout(() => {
                                            window.location.reload()
                                        }, 500)
                                    }
                                }
                            )
                        }
                    }} className = 'border border-success outline-0 rounded-1x bg-clear text-capitalize text-success py-4 px-3 d-block w-100'>logout</button>
                </div>
            </div>
        </div>
    )
}

export default () => {
    const PageContent = {
        'orders': <Orders />,
        'user info': <UserInfo />,
        'logout': <Logout />,
    }

    const [pageTab, setPageTab] = useState('orders')

    return (
        <PageContext.Provider value = {{state: pageTab, updater: setPageTab}}>
            <Header />
            <section style = {{backgroundImage: `url('assets/images/page-header-bg.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover'}} >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className = 'p-5 flex-v j-c-c a-i-c text-center' style = {{minHeight: '250px'}}>
                                <div className = 'fa-3x bold'>My Dashboard</div>
                                <div className = 'fa-1x text-muted fo-s-16'>Check out your transactions and personal data</div>
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
                                        <a href="/about">Shop</a>
                                        <span className = 'bi bi-chevron-right mx-3'></span>
                                    </div>
                                    <div>
                                        <a>My Dashboard</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5">
                    <div className="row">
                        <div className = 'col-lg-3'>
                            <div className = 'row p-4'>{
                                Object.keys(PageContent).map(
                                    (each, key) => (
                                        <a key = {key} onClick = {() => setPageTab(each)} className = {`${pageTab === each ? 'bg-light border shadow-sm rounded' : 'bg-clear'} d-block cursor-pointer text-uppercase text-left w-100 py-4 col-12`}>{each}</a>
                                    )
                                )
                            }</div>
                        </div>
                        <div className = 'col-lg-9'>
                            {PageContent[pageTab]}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </PageContext.Provider>
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