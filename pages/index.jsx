export default () => {
    return (
        <>
            <div class="page-wrapper">
                <div class="notification" style={{backgroundImage: 'url(assets/images/demos/demo-21/notification-back.jpg)'}}>
                    <div class="notify-content">
                        <h3>FREE SHIPPING FOR ALL ORDERS OVER $50</h3>
                    </div>
                    <div class="notify-action">
                        <span><i class="icon-close text-white"></i></span>
                    </div>
                </div>
                <header class="header">
                    <div class="header-top">
                        <div class="container">
                            <div class="header-left">
                                <div class="header-dropdown">
                                    <a href="#">Usd</a>
                                    <div class="header-menu">
                                        <ul>
                                            <li><a href="#">Eur</a></li>
                                            <li><a href="#">Usd</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="header-dropdown">
                                    <a href="#">Eng</a>
                                    <div class="header-menu">
                                        <ul>
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Spanish</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="header-right">
                                <ul class="top-menu">
                                    <li>
                                        <a href="#">Links</a>
                                        <ul>
                                            <li><a href="tel:#"><i class="icon-phone"></i>Call: +0123 456 789</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="#signin-modal" data-toggle="modal"><i class="icon-user"></i>Login</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="header-middle sticky-header">
                        <div class="container">
                            <div class="header-left">
                                <button class="mobile-menu-toggler">
                                    <span class="sr-only">Toggle mobile menu</span>
                                    <i class="icon-bars"></i>
                                </button>
                                <a href="https://www.portotheme.com/html/molla/index1.html" class="logo">
                                    <img src="assets/images/demos/demo-21/logo.png" alt="Molla Logo" width="100" height="25" />
                                </a>

                                <nav class="main-nav">
                                    <ul class="menu sf-arrows">
                                        <li class="megamenu-container active">
                                            <a href="/">Home</a>
                                        </li>
                                        <li class="megamenu-container active">
                                            <a href="/shop">Shop</a>
                                        </li>
                                        <li class="megamenu-container active">
                                            <a href="/product">Product</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="header-right">
                                <div class="header-search">
                                    <a href="#" class="search-toggle" role="button" title="Search"><i class="icon-search"></i></a>
                                    <form action="#" method="get">
                                        <div class="header-search-wrapper">
                                            <label for="q" class="sr-only">Search</label>
                                            <input type="search" class="form-control" name="q" id="q" placeholder="Search in..." required />
                                        </div>
                                    </form>
                                </div>
                                <div class="wishlist">
                                    <a href="wishlist.html" title="Wishlist">
                                        <i class="icon-heart-o"></i>
                                        <span class="wishlist-count">3</span>
                                    </a>
                                </div>

                                <div class="dropdown cart-dropdown">
                                    <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                        <i class="icon-shopping-cart"></i>
                                        <span class="cart-count">2</span>
                                    </a>

                                    <div class="dropdown-menu dropdown-menu-right">
                                        <div class="dropdown-cart-products">
                                            <div class="product">
                                                <div class="product-cart-details">
                                                    <h4 class="product-title">
                                                        <a href="product.html">Beige knitted elastic runner shoes</a>
                                                    </h4>

                                                    <span class="cart-product-info">
                                                        <span class="cart-product-qty">1</span>
                                                        x $84.00
                                                    </span>
                                                </div>

                                                <figure class="product-image-container">
                                                    <a href="product.html" class="product-image">
                                                        <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                                                    </a>
                                                </figure>
                                                <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                            </div>

                                            <div class="product">
                                                <div class="product-cart-details">
                                                    <h4 class="product-title">
                                                        <a href="product.html">Blue utility pinafore denim dress</a>
                                                    </h4>

                                                    <span class="cart-product-info">
                                                        <span class="cart-product-qty">1</span>
                                                        x $76.00
                                                    </span>
                                                </div>

                                                <figure class="product-image-container">
                                                    <a href="product.html" class="product-image">
                                                        <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                                    </a>
                                                </figure>
                                                <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                            </div>
                                        </div>

                                        <div class="dropdown-cart-total">
                                            <span>Total</span>

                                            <span class="cart-total-price">$160.00</span>
                                        </div>

                                        <div class="dropdown-cart-action">
                                            <a href="cart.html" class="btn btn-primary">View Cart</a>
                                            <a href="checkout.html" class="btn btn-outline-primary-2"><span>Checkout</span><i class="icon-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="main">
                    <div class="intro-slider-container mb-5 flex-v j-c-c"  style={{backgroundImage: `url(/assets/images/demos/demo-21/slider/slide-1.png)`}}>
                        <div className="container">
                            <div class="row">
                                <div class="intro">
                                    <div class="title">
                                        <h3>WOMEN'S</h3>
                                    </div>
                                    <div class="content">
                                        <h3>RUNNING &amp;</h3>
                                        <h3>TRAINING SHIRTS</h3>
                                    </div>
                                    <div class="price">
                                        <h3>SAVE UP TO 30%</h3>
                                        </div>
                                    <div class="action">
                                        <a href="category.html" class="btn btn-primary">
                                            <span>DISCOVER NOW</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container bestsellers">
                        <div class="heading">
                            <h2 class="title text-center">BEST SELLERS</h2>
                            <p class="content text-center mb-4">The Trends Boutique: The latest fashion trends from top brands!</p>
                        </div>
                        <div className = 'row py-5'>
                            <div className = 'col-lg-3 col-md-4 col-sm-6 col-12'>
                                <div class="product demo21 border rounded-1x">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">Sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-21/bestSellers/product-1-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-21/bestSellers/product-1-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                    </figure>

                                    <div class="product-body text-center">
                                        <div class="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Nike Renew Arena</a></h3>
                                        <div class="product-price">
                                            <span class="new-price">$58.99</span>
                                            <span class="old-price">Was $75.00</span>
                                        </div>
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style={{width: '80%'}}></div>
                                            </div>
                                            <span class="ratings-text">( 2 Reviews )</span>
                                        </div>

                                        <div class="product-nav product-nav-dots">
                                            <a href="#" class="active" style={{background: '#c12f46'}}><span class="sr-only">Color name</span></a>
                                            <a href="#" style={{background: '#d3def0'}}><span class="sr-only">Color name</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart" title="Add to cart"><span>ADD TO CART</span></a>
                                            <a href="#" class="btn-addtolist"><span>&nbsp;Add to Wishlist</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'col-lg-3 col-md-4 col-sm-6 col-12'>
                                <div class="product demo21 border rounded-1x">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">Sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-21/bestSellers/product-2-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-21/bestSellers/product-2-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                    </figure>

                                    <div class="product-body text-center">
                                        <div class="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Nike Renew Arena</a></h3>
                                        <div class="product-price">
                                            <span class="new-price">$58.99</span>
                                            <span class="old-price">Was $75.00</span>
                                        </div>
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style={{width: '80%'}}></div>
                                            </div>
                                            <span class="ratings-text">( 2 Reviews )</span>
                                        </div>

                                        <div class="product-nav product-nav-dots">
                                            <a href="#" class="active" style={{background: '#c12f46'}}><span class="sr-only">Color name</span></a>
                                            <a href="#" style={{background: '#d3def0'}}><span class="sr-only">Color name</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart" title="Add to cart"><span>ADD TO CART</span></a>
                                            <a href="#" class="btn-addtolist"><span>&nbsp;Add to Wishlist</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'col-lg-3 col-md-4 col-sm-6 col-12'>
                                <div class="product demo21 border rounded-1x">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">Sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-21/bestSellers/product-3-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-21/bestSellers/product-3-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                    </figure>

                                    <div class="product-body text-center">
                                        <div class="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Nike Renew Arena</a></h3>
                                        <div class="product-price">
                                            <span class="new-price">$58.99</span>
                                            <span class="old-price">Was $75.00</span>
                                        </div>
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style={{width: '80%'}}></div>
                                            </div>
                                            <span class="ratings-text">( 2 Reviews )</span>
                                        </div>

                                        <div class="product-nav product-nav-dots">
                                            <a href="#" class="active" style={{background: '#c12f46'}}><span class="sr-only">Color name</span></a>
                                            <a href="#" style={{background: '#d3def0'}}><span class="sr-only">Color name</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart" title="Add to cart"><span>ADD TO CART</span></a>
                                            <a href="#" class="btn-addtolist"><span>&nbsp;Add to Wishlist</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'col-lg-3 col-md-4 col-sm-6 col-12'>
                                <div class="product demo21 border rounded-1x">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">Sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-21/bestSellers/product-4-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-21/bestSellers/product-4-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                    </figure>

                                    <div class="product-body text-center">
                                        <div class="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>
                                        <h3 class="product-title"><a href="product.html">Nike Renew Arena</a></h3>
                                        <div class="product-price">
                                            <span class="new-price">$58.99</span>
                                            <span class="old-price">Was $75.00</span>
                                        </div>
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style={{width: '80%'}}></div>
                                            </div>
                                            <span class="ratings-text">( 2 Reviews )</span>
                                        </div>

                                        <div class="product-nav product-nav-dots">
                                            <a href="#" class="active" style={{background: '#c12f46'}}><span class="sr-only">Color name</span></a>
                                            <a href="#" style={{background: '#d3def0'}}><span class="sr-only">Color name</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart" title="Add to cart"><span>ADD TO CART</span></a>
                                            <a href="#" class="btn-addtolist"><span>&nbsp;Add to Wishlist</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container category-banner">
                        <div class="heading pb-5">
                            <h2 class="title text-center">CATEGORY</h2>
                            <p class="content text-center mb-4">Check out our categories of cool wears</p>
                        </div>
                        <div class="row pb-5">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div className = 'rounded-1x shadow overflow-0 po-rel'>
                                    <a href="category.html">
                                        <img src="assets/images/demos/demo-21/banner/footware.jpg" />
                                    </a>
                                    <div class="po-abs top-0 left-0 p-3 overflow-0 flex-v j-c-c h-100 w-100" style = {{background: 'linear-gradient(to right, rgba(255,255,255,.5), rgba(255,255,255,0))'}}>
                                        <a href="category.html"><h3 class="category"> FOOTWEAR </h3></a>
                                        <a href="category.html" class="action">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div className = 'rounded-1x shadow overflow-0 po-rel'>
                                    <a href="category.html">
                                        <img src="assets/images/demos/demo-21/banner/accessories.jpg" />
                                    </a>
                                    <div class="po-abs top-0 left-0 p-3 overflow-0 flex-v j-c-c h-100 w-100" style = {{background: 'linear-gradient(to right, rgba(255,255,255,.5), rgba(255,255,255,0))'}}>
                                        <a href="category.html"><h3 class="category"> ACCESSORIES </h3></a>
                                        <a href="category.html" class="action">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6" >
                                <div className = 'rounded-1x shadow overflow-0 po-rel'>
                                    <a href="category.html">
                                        <img src="assets/images/demos/demo-21/banner/mens.jpg" />
                                    </a>
                                    <div class="po-abs top-0 left-0 p-3 overflow-0 flex-v j-c-c h-100 w-100" style = {{background: 'linear-gradient(to right, rgba(255,255,255,.5), rgba(255,255,255,0))'}}>
                                        <a href="category.html"><h3 class="category"> MEN'S </h3></a>
                                        <a href="category.html" class="action">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div className = 'rounded-1x shadow overflow-0 po-rel'>
                                    <a href="category.html">
                                        <img src="assets/images/demos/demo-21/banner/womens.jpg" />
                                    </a>
                                    <div class="po-abs top-0 left-0 p-3 overflow-0 flex-v j-c-c h-100 w-100" style = {{background: 'linear-gradient(to right, rgba(255,255,255,.5), rgba(255,255,255,0))'}}>
                                        <a href="category.html"><h3 class="category"> WOMEN'S </h3></a>
                                        <a href="category.html" class="action">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container new-arrivals">
                        <div class="heading heading-center mb-3">
                            <h2 class="title">NEW ARRIVALS </h2>

                            <ul class="nav nav-pills justify-content-center" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="arrivals-all-link" data-toggle="tab" href="#arrivals-all-tab" role="tab" aria-controls="arrivals-all-tab" aria-selected="true">All</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="arrivals-women-link" data-toggle="tab" href="#arrivals-women-tab" role="tab" aria-controls="arrivals-women-tab" aria-selected="false">Women</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="arrivals-men-link" data-toggle="tab" href="#arrivals-men-tab" role="tab" aria-controls="arrivals-men-tab" aria-selected="false">Men</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="arrivals-shoes-link" data-toggle="tab" href="#arrivals-shoes-tab" role="tab" aria-controls="arrivals-shoes-tab" aria-selected="false">Shoes</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="arrivals-acc-link" data-toggle="tab" href="#arrivals-acc-tab" role="tab" aria-controls="arrivals-acc-tab" aria-selected="false">Accessories</a>
                                </li>
                            </ul>
                        </div>

                        <div class="">
                            <div class="">
                                <div class="row">
                                    <div class="col-xl-5col col-lg-3 col-md-4 col-6">
                                        <div class="product border rounded-1x demo21">
                                            <figure class="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-21/newArrivals/product-1.jpg" alt="Product image" class="product-image" />
                                                </a>

                                            </figure>

                                            <div class="product-body text-center">
                                                <div class="product-cat">
                                                    <a href="#">Shoes</a>
                                                </div>
                                                <h3 class="product-title"><a href="product.html">UA Spawn Low</a></h3>
                                                <div class="product-price">
                                                    <span class="cur-price">$77.99</span>
                                                </div>
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style={{width: '60%'}}></div>
                                                    </div>
                                                    <span class="ratings-text">( 2 Reviews )</span>
                                                </div>

                                                <div class="product-nav product-nav-dots">
                                                    <a href="#" class="active" style={{background: '#34529d'}}><span class="sr-only">Color name</span></a>
                                                    <a href="#" style={{background: '#333333'}}><span class="sr-only">Color name</span></a>
                                                </div>

                                                <div class="product-action">
                                                    <a href="#" class="btn-product btn-cart" title="Add to cart"><span>ADD TO CART</span></a>
                                                </div>

                                                <a href="#" class="btn-addtolist"><span>&nbsp;Add to Wishlist</span></a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-5 text-center">
                            <a href="category.html" class="btn m-0 btn-viewMore">
                                <span>VIEW MORE PRODUCTS</span>
                                <i class="icon-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    <div class="container-fluid newsletter">
                        <div class="background" style={{backgroundImage: 'url(assets/images/demos/demo-21/newsLetter/banner.jpg)'}}>
                            <div class="subscribe">
                                <div class="subscribe-title text-center">
                                    <h1 class="intro-title2nd">SUBSCRIBE FOR OUR NEWSLETTER</h1>
                                    <h1 class="intro-title1st">Learn about new offers and get more deals by joining our newsletter</h1>
                                </div>
                                <form action="#">
                                    <div class="input-group">
                                        <input type="email" placeholder="Enter your Email Address" aria-label="Email Adress" required="" />
                                        <div class="input-group-append">
                                            <button class="btn btn-subscribe" type="submit"><span>Subscribe</span><i class="icon-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid service my-4 py-4">
                        <div class="col-sm-6 col-lg-3 col-noPadding">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon text-dark">
                                    <i class="icon-truck" style = {{fontSize: '35px'}}></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Payment &amp; Delivery</h3>
                                    <p>Free shipping for orders over $50</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon text-dark">
                                    <i class="icon-rotate-left" style = {{fontSize: '35px'}}></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Return &amp; Refund</h3>
                                    <p>Free 100% money back guarantee</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon text-dark">
                                    <i class="icon-life-ring" style = {{fontSize: '35px'}}></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">Quality Support</h3>
                                    <p>Alway online feedback 24/7</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-lg-3">
                            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon text-dark">
                                    <i class="icon-envelope" style = {{fontSize: '35px'}}></i>
                                </span>

                                <div class="icon-box-content">
                                    <h3 class="icon-box-title">JOIN OUR NEWSLETTER</h3>
                                    <p>10% off by subscribing to our newsletter</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
                <footer class="footer bg-dark pt-5 footer-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-2xl-5col col-md-12">
                                <div class="widget widget-about">
                                    <img src="assets/images/demos/demo-21/logo-footer.png" class="footer-logo m-0" alt="Footer Logo" width="100" height="25" />
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>
                                    
                                    <div class="widget-about-info">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-4 phoneNum">
                                                <span class="widget-about-title">Got Question? Call us 24/7</span>
                                                <a href="tel:123456789">+0123 456 789</a>
                                            </div>
                                            <div class="col-sm-6 col-md-8 payment">
                                                <span class="widget-about-title">Payment Method</span>
                                                <figure class="footer-payments">
                                                    <img src="assets/images/payments.png" alt="Payment methods" width="272" height="20" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-5col col-sm-4 col-md-4">
                                <div class="widget">
                                    <h4 class="widget-title">Information</h4>

                                    <ul class="widget-list">
                                        <li><a href="about.html">About Molla</a></li>
                                        <li><a href="#">How to shop on Molla</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="contact.html">Contact us</a></li>
                                        <li><a href="login.html">Log in</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xl-5col col-sm-4 col-md-6=4">
                                <div class="widget">
                                    <h4 class="widget-title">Customer Service</h4>

                                    <ul class="widget-list">
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back guarantee!</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Terms and conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xl-5col col-sm-4 col-md-4">
                                <div class="widget">
                                    <h4 class="widget-title">My Account</h4>

                                    <ul class="widget-list">
                                        <li><a href="#">Sign In</a></li>
                                        <li><a href="cart.html">View Cart</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">Track My Order</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <div class="container">
                            <p class="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>
                            <ul class="footer-menu">
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>

                            <div class="social-icons social-icons-color">
                                <span class="social-label">Social Media</span>
                                <a href="#" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                <a href="#" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                <a href="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                                <a href="#" class="social-icon social-youtube" title="Youtube" target="_blank"><i class="icon-youtube"></i></a>
                                <a href="#" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}