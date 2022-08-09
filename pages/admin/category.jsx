import AdminDash from '../../components/Page/AdminDash'

export default () => {
    return (
        <AdminDash title = 'category'>
            <div className = 'row'>
                <div className="col-lg-9 mb-4">
                    <span className = 'd-block text-muted letter-spacing-1 pb-2'>Search</span>
                    <div className="bg-white shadow-sm rounded-1x overflow-0 border">
                        <input type="text" className = 'px-3 py-4 outline-0 d-block w-100 border-0' placeholder = 'Search here...' />
                    </div>
                </div>
            </div>
            <div className = 'pt-3'>
                <p>Showing 1 of 5 categories</p>
            </div>
            <div>
                <div className="table-responsive border rounded-1x">
                    <table className="table text-center m-0 table-hover table-bordered table-striped rounded-1x overflow-0">
                        <thead className = 'bg-light border-bottom'>
                            <tr className = 'text-capitalize'>
                                <th className = 'py-4'>S/N</th>
                                <th className = 'py-4'>name</th>
                                <th className = 'py-4'>description</th>
                                <th className = 'py-4'>date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </AdminDash>
    )
}