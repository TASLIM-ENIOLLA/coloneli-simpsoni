export default ({year}) => {
    return (
        <footer className = 'pt-5 border-top'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className = 'pb-3'>
                            <a href="/home" className = 'd-inline-block w-auto'>
                                <img width = '130' src="/assets/images/demos/demo-21/logo-name.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-6">
                        <div className = 'mb-5'>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed non maiores et? In quaerat temporibus dignissimos doloremque corporis perspiciatis labore qui inventore quia fugiat libero repudiandae illo odio est hic aliquam id, praesentium totam necessitatibus repellendus ullam dicta illum ipsa! Ipsa earum quod voluptate nesciunt sequi cum debitis voluptas!
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-3">
                        <div className = 'mb-5'>
                            <p className = 'h3 bold text-dark'>Information</p>
                            <div className = 'py-3'>
                                <a className = 'd-block mb-4' href="/about">About Us</a>
                                <a className = 'd-block mb-4' href="/contact">Contact Us</a>
                                <a className = 'd-block mb-4' href="/">Facebook Page</a>
                                <a className = 'd-block mb-4' href="/">Instagram Page</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-3">
                        <div className = 'mb-5'>
                            <p className = 'h3 bold text-dark'>My Account</p>
                            <div className = 'py-3'>
                                <a className = 'd-block mb-4' href="/login">Sign In</a>
                                <a className = 'd-block mb-4' href="/my-cart">View Cart</a>
                                <a className = 'd-block mb-4' href="/help">Help</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 border-top py-4">
                        <div className="text-center">Coloneli Simpsoni &copy; {new Date().getFullYear()}. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}