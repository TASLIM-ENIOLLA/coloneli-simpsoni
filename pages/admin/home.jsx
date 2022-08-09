import AdminPageTemplate from '../../components/Admin/Page/AdminPageTemplate'

const urlAndTitle = [
    {url: "/admin/home", title: "Home", icon: <span className = 'fa-2x mr-3 bi bi-house-fill'></span>},
    {url: "/admin/add-product", title: "Add Product", icon: <span className = 'fa-2x mr-3 bi bi-calendar-plus-fill'></span>},
    {url: "/admin/all-products", title: "All Products", icon: <span className = 'fa-2x mr-3 bi bi-collection'></span>},
    {url: "/admin/orders", title: "Orders", icon: <span className = 'fa-2x mr-3 bi bi-receipt-cutoff'></span>},
    {url: "/admin/payments", title: "Payments", icon: <span className = 'fa-2x mr-3 bi bi-credit-card-2-back-fill'></span>},
    {url: "/admin/logout", title: "Logout", icon: <span className = 'fa-2x mr-3 bi bi-door-open-fill'></span>},
]

export default () => {
    return (
        <AdminPageTemplate>
            <div className="row py-5">{
                urlAndTitle.map(({url, title, icon}, key) => (
                    <div key = {key} className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-5">
                        <a href = {url} className="bg-white text-muted border shadow d-block rounded-1x w-100 px-4 py-5">
                            <div className="row a-i-c">
                                <div className="col-auto">
                                    {icon}
                                </div>
                                <div className = 'text-capitalize bold'>
                                    {title}
                                    <span className="bi bi-box-arrow-up-right ml-3"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }</div>
            <div className = 'row my-4'>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <div style = {{height: '170px'}} className = 'my-3 p-4 flex-v rounded-1x shadow bg-light-purple'>
                        <div className = 'flex-1'>
                            <h4 title = 'Total users' className = 'text-muted one-line'>Total customers</h4>
                            <h1 title = '200,000' className = 'text-dark one-line pt-3'>200,000</h1>
                        </div>
                        <div>
                            <p className = 'text-muted flex-h a-i-c m-0'>
                                <span className = 'flex-1 one-line'>3% weekly increase</span>
                                <span className = 'bi bi-graph-up-arrow'></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <div style = {{height: '170px'}} className = 'my-3 p-4 flex-v rounded-1x shadow bg-light-creame'>
                        <div className = 'flex-1'>
                            <h4 title = 'Total creators' className = 'text-muted one-line'>Total orders</h4>
                            <h1 title = '200' className = 'text-dark one-line pt-3'>200</h1>
                        </div>
                        <div>
                            <p className = 'text-muted flex-h a-i-c m-0'>
                                <a href = '/admin/orders' className = 'underline-0 flex-1 one-line text-action'>See orders</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <div style = {{height: '170px'}} className = 'my-3 p-4 flex-v rounded-1x shadow bg-light-green'>
                        <div className = 'flex-1'>
                            <h4 title = 'Total views' className = 'text-muted one-line'>Total payments</h4>
                            <h1 title = '6,746,800' className = 'text-dark one-line pt-3'>6,746,800</h1>
                        </div>
                        <div>
                            <p className = 'text-muted flex-h a-i-c m-0'>
                                <a href = '/admin/payments' className = 'flex-1 one-line'>See payments</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6">
                    <div style = {{height: '170px'}} className = 'my-3 p-4 flex-v rounded-1x shadow bg-light-blue'>
                        <div className = 'flex-1'>
                            <h4 title = 'All contents' className = 'text-muted one-line'>All products</h4>
                            <h1 title = '8,000' className = 'text-dark one-line pt-3'>8,000</h1>
                        </div>
                        <div>
                            <p className = 'text-muted flex-h a-i-c m-0'>
                                <a href = '/admin/all-products' className = 'underline-0 flex-1 one-line text-action'>See products</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .bg-light-purple{
                    background: #e9d6f3bd;
                }
                .bg-light-creame{
                    background: #f3efd5bd;
                }
                .bg-light-green{
                    background: #cdf3e3bd;
                }
                .bg-light-blue{
                    background: #cde7f3bd;
                }
                .text-light-purple{
                    color: #ac21f5;
                }
                .text-light-wine{
                    color: #e84444;
                }
                .text-light-creame{
                    color: #f1d625;
                }
                .text-light-green{
                    color: #1fef97;
                }
                .text-light-blue{
                    color: #25acea;
                }
            `}</style>
        </AdminPageTemplate>
    )
}

export async function getServerSideProps(context){
    const {req: {cookies}} = context
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
            adminData: cookie ? JSON.parse(cookie) : null,
            isLoggedIn: cookie && JSON.parse(cookie).id ? true : false,
        }
    }
}