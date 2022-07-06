import AdminDash from '../../components/Page/AdminDash'

export default () => {
    return (
        <AdminDash title = 'logout'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <div className="bg-white animated slideInDown p-4 shadow rounded-2x mx-auto max-width-500px">
                            <div className = 'py-5 text-c'>
                                <p className = 'pt-5'>Are you sure you really want to logout?</p>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button className = 'd-block w-100 theme-border bg-clear rounded-1x text-capitalize theme-color p-4 flicker'>cancel</button>
                                </div>
                                <div className="col-6">
                                    <button className = 'd-block w-100 theme-bg rounded-1x text-capitalize text-white p-4 flicker border shadow'>logout</button>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
            <style jsx>{`
                .max-width-500px{
                    max-width: 500px;
                }
            `}</style>
        </AdminDash>
    )
}