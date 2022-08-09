import AdminPageTemplate from '../../../components/Admin/Page/AdminPageTemplate'
import {API_ROUTE} from '../../../config'
import {useState, useEffect} from 'react'
import currency from '../../../components/currency'
import {notify} from '../../../components/Popups'
import {useRouter} from 'next/router'

export default () => {
    const [ordersData, setOrdersData] = useState()
    const router = useRouter()

    useEffect(async () => {
        const req = await fetch(`${API_ROUTE.admin_get_order_data}?orderID=${router.query.orderID}`)
        const {data} = await req.json()

        setOrdersData(data)
    }, [])

    return (
        <AdminPageTemplate title = 'Order Data'>{(
            (ordersData)
            ? (
                <div className = 'table-responsive border shadow-s rounded-1x overflow-y-0'>
                <table className = 'table m-0 table-borderless'>
                        <thead>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom' colSpan="2">
                                    <div className = 'theme-color letter-spacing-1 bold text-uppercase p-3'>customer data</div>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>first name</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{ordersData.f_name}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>last name</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{ordersData.l_name}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>phone</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{ordersData.phone}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>email</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{ordersData.email}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>country</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{ordersData.country}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>full address</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{ordersData.address}, {ordersData.town_or_city}, {ordersData.state_or_region}. POSTAL CODE - {ordersData.postal_or_zipcode}</div></td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom' colSpan="2">
                                    <div className = 'theme-color letter-spacing-1 bold text-uppercase p-3'>order data</div>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>status</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{ordersData.status}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>notes</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{ordersData.notes.length > 0 ? ordersData.notes : '--- No note available ---'}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>timestamp</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{new Date(ordersData.timestamp).toDateString()} {new Date(ordersData.timestamp).toLocaleTimeString()}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>product list</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase text-muted p-3">{(
                                    (ordersData.order_data.length > 0)
                                    ? (
                                        <div>{
                                            ordersData.order_data.map(({price, is_existing, name, quantity, id}, key) => (
                                                <ul title = {!is_existing ? `Product '${name}' seems to have been delete from database.` : undefined} key = {key} className = {`pl-4 pb-4 m-0`}>
                                                    <li>
                                                        <div className = 'pb-2'>{(
                                                            (is_existing)
                                                            ? (
                                                                <a className = 'theme-color' href = {`/admin/all-products/${id}`}>
                                                                    {name}
                                                                    <span className="bi bi-box-arrow-up-right ml-3"></span>
                                                                </a>
                                                            )
                                                            : (
                                                                <span className = 'text-muted'>{name}</span>
                                                            )
                                                        )}</div>
                                                        <ul className = 'pb-2 pl-4 m-0'>
                                                            <li>Price: {currency}{new Intl.NumberFormat().format(price)}</li>
                                                            <li>Quantity: {new Intl.NumberFormat().format(quantity)}</li>
                                                            <li>Total: {currency}{new Intl.NumberFormat().format(price * quantity)}</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            ))
                                        }</div>
                                    )
                                    : (
                                        <div className="p-5 text-center">
                                            Order list seems to be empty!
                                        </div>
                                    )
                                )}</div></td>
                            </tr>
                            <tr className = 'bg-white'>
                                <td className = 'border-bottom col-3 border-right'><div className = 'bold text-uppercase text-muted p-3'>price total</div></td>
                                <td className = 'border-bottom col-9 border-left'><div className="bold text-uppercase p-3">{(
                                    (ordersData.order_data.length > 0)
                                    ? (
                                        (!!ordersData.order_data.map(({is_existing}) => is_existing).reduce((a, b) => Number(a) * Number(b)))
                                        ? (
                                            <span className = 'theme-color'>{currency}{
                                                ordersData.order_data.map(({price, quantity}) => price * quantity).reduce((a, b) => +a + +b)
                                            }</span>
                                        )
                                        : (
                                            <>
                                                <span title = 'Price is obsolete because one or more ordered products have been deleted!' className = 'text-muted' style = {{textDecoration: 'line-through'}}>{currency}{
                                                    ordersData.order_data.map(({price, quantity}) => price * quantity).reduce((a, b) => +a + +b)
                                                }</span>
                                                <span className="bi bi-arrow-right fo-s-15 mx-2"></span>
                                                <span className = 'theme-color'>{currency}{
                                                    ordersData.order_data.filter(({is_existing}) => is_existing).map(({price, quantity}) => price * quantity).reduce((a, b) => +a + +b)
                                                }</span>
                                            </>
                                        )
                                    )
                                    : '0'
                                )}</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
            : (
                (ordersData === undefined)
                ? <></>
                : (
                    <section>
                        <div className="error-content text-center" style={{backgroundImage: `url(/assets/images/backgrounds/error-bg.jpg)`}}>
                            <div className="container">
                                <h1 className="error-title">Error 404</h1>
                                <p>We are sorry, the product you requested might have been deleted.</p>
                                <a onClick = {() => router.back()} className="btn btn-warning p-4">
                                    <span>GO BACK</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </section>
                )
            )
        )}</AdminPageTemplate>
    )
}

export async function getServerSideProps(context){
    const {req: {cookies}, query: {orderID}} = context
    const cookie = cookies['COLSON_ECOMMERCE_ADMIN'] || undefined

    if(!cookie){
        return {
            redirect: {
                destination: '/admin/login'
            }
        }
    }

    return {
        props: {
            orderID,
            adminData: cookie ? JSON.parse(cookie) : null,
            isLoggedIn: cookie && JSON.parse(cookie).id ? true : false,
        }
    }
}