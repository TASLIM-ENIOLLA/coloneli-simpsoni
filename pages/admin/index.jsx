import AdminDash from '../../components/Page/AdminDash'

export default () => {
    return (
        <AdminDash>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                    <a href = '/admin/all-products' className = 'p-5 bg-white shadow rounded-1x a-i-c text-muted flex-h'>
                        <div>
                            <span className = 'bi bi-grid-1x2-fill fa-2x'></span>
                        </div>
                        <div className = 'one-line bold letter-spacing-1 text-capitalize px-3'>all products</div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                    <a href = '/admin/add-product' className = 'p-5 bg-white shadow rounded-1x a-i-c text-muted flex-h'>
                        <div>
                            <span className = 'bi bi-plus-square-fill fa-2x'></span>
                        </div>
                        <div className = 'one-line bold letter-spacing-1 text-capitalize px-3'>add product</div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                    <a href = '/admin/category' className = 'p-5 bg-white shadow rounded-1x a-i-c text-muted flex-h'>
                        <div>
                            <span className = 'bi bi-hdd-stack-fill fa-2x'></span>
                        </div>
                        <div className = 'one-line bold letter-spacing-1 text-capitalize px-3'>category</div>
                    </a>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                    <a href = '/admin/logout' className = 'p-5 bg-white shadow rounded-1x a-i-c text-muted flex-h'>
                        <div>
                            <span className = 'bi bi-door-open-fill fa-2x'></span>
                        </div>
                        <div className = 'one-line bold letter-spacing-1 text-capitalize px-3'>logout</div>
                    </a>
                </div>
            </div>
        </AdminDash>
    )
}

