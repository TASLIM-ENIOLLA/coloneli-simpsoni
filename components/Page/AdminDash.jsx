export default ({children, title}) => {
    return (
        <section className = 'vh100 vw100 bg-light flex-h'>
            <section className = 'h-100 bg-white min-width-300px col-d-none col-md-d-block shadow'>
                <div className = 'p-3'>
                    <div className = 'py-5'>
                        <img className = 'd-block mx-auto' src="/assets/images/demos/demo-21/logo-name.png" width = '130' />
                    </div>
                    <div className = 'px-3 py-5'>
                        <a href="" className = 'd-block w-100 px-3 py-4 rounded-1x mb-4 letter-spacing-1 text-capitalize text-muted'>home</a>
                        <a href="/admin/all-products" className = 'd-block w-100 px-3 py-4 rounded-1x mb-4 letter-spacing-1 text-capitalize text-muted'>all products</a>
                        <a href="/admin/add-product" className = 'd-block w-100 px-3 py-4 rounded-1x mb-4 letter-spacing-1 text-capitalize text-muted'>add product</a>
                        <a href="" className = 'd-block w-100 px-3 py-4 rounded-1x mb-4 letter-spacing-1 text-capitalize text-muted'>category</a>
                        <a href="" className = 'd-block w-100 px-3 py-4 rounded-1x mb-4 letter-spacing-1 text-capitalize text-muted'>logout</a>
                    </div>
                </div>
            </section>
            <section className = 'h-100 flex-1 overflow-y-auto'>
                <section className = 'po-sticky shadow col-md-d-none top-0 left-0 theme-bg z-index-100'>
                    <div className = 'flex-h a-i-c p-4'>
                        <div>
                            <span className = 'bi bi-filter-left fa-2x'></span>
                        </div>
                        <div className = 'px-3'>
                            <span>COLONELI SIMPSONI - ADMIN</span>
                        </div>
                    </div>
                </section>
                <div className="p-4 p-md-5">
                    <div className = 'py-5 py-xs-4 py-sm-4 text-capitalize'>
                        <h1 className = 'theme-color'>{title ? title : 'Welcome Taslim'}</h1>
                    </div>
                    <div className = 'py-5'>
                        {children}
                    </div>
                </div>
            </section>
            <style jsx>{`
                .min-width-300px{
                    min-width: 300px;
                }
                .z-index-100{
                    z-index: 100;
                }
            `}</style>
        </section>
    )
}