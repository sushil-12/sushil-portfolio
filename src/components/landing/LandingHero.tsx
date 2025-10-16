// NAVIGATION, HEADER, HERO DATA ARRAYS
const cssLinks = [
    "https://ex-coders.com/html/niotech/assets/css/bootstrap.min.css",
    "https://ex-coders.com/html/niotech/assets/css/all.min.css",
    "https://ex-coders.com/html/niotech/assets/css/animate.css",
    "https://ex-coders.com/html/niotech/assets/css/magnific-popup.css",
    "https://ex-coders.com/html/niotech/assets/css/meanmenu.css",
    "https://ex-coders.com/html/niotech/assets/css/swiper-bundle.min.css",
    "https://ex-coders.com/html/niotech/assets/css/nice-select.css",
    "https://ex-coders.com/html/niotech/assets/css/main.css"
  ];
  
  const socialIcons = [
    { href: "#", icon: "fa-facebook-f" },
    { href: "#", icon: "fa-twitter" },
    { href: "#", icon: "fa-youtube" },
    { href: "#", icon: "fa-linkedin-in" }
  ];
  
  // Extend and nest for actual menu/submenu structure (partial starter sample)
  const navItems = [
    { text: "Home", href: "index.html", active: true, subMenu: [
      { title: "Home 01", menus: [
        { label: "Multi Page", href: "index.html" },
        { label: "One Page", href: "index-one-page.html" }
      ], thumb: "https://ex-coders.com/html/niotech/assets/images/header/home-1.png" },
      { title: "Home 02", menus: [
        { label: "Multi Page", href: "index2.html" },
        { label: "One Page", href: "index-two-page.html" }
      ], thumb: "https://ex-coders.com/html/niotech/assets/images/header/home-2.png" },
      { title: "Home 03", menus: [
        { label: "Multi Page", href: "index3.html" },
        { label: "One Page", href: "index-three-page.html" }
      ], thumb: "https://ex-coders.com/html/niotech/assets/images/header/home-3.png" }
    ] },
    { text: "About Us", href: "about.html", active: false }
    // add other nav items as needed, structure with submenus by nesting further
  ];
  
  export default function LandingHero() {
    return (
      <>
        {/* HEAD SECTION */}
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Gramentheme" />
          <meta name="description" content="Niotech - App Landing HTML Template Page" />
          <title>Niotech - App Landing HTML Template</title>
          <link rel="shortcut icon" href="https://ex-coders.com/html/niotech/assets/images/favicon.png" />
          {cssLinks.map(href => (
            <link key={href} rel="stylesheet" href={href} />
          ))}
        </head>
  
        {/* HEADER & NAVIGATION */}
        <header className="header-section-1">
          <div className="container">
            <nav>
              <ul>
                {navItems.map((item, idx) => (
                  <li key={idx} className={item.active ? "active" : ""}>
                    <a href={item.href}>{item.text}</a>
                    {item.subMenu && item.subMenu.length > 0 && (
                      <ul className="submenu has-homemenu">
                        {item.subMenu.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <div className="homemenu-items">
                              <div className="homemenu">
                                <div className="homemenu-thumb">
                                  <img src={sub.thumb} alt="img" />
                                </div>
                                <div className="demo-button">
                                  {sub.menus.map((btn, btnIdx) => (
                                    <a className="theme-btn" href={btn.href} key={btnIdx}>{btn.label}</a>
                                  ))}
                                </div>
                                <div className="homemenu-content text-center">
                                  <h4 className="homemenu-title">{sub.title}</h4>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header-social">
              {socialIcons.map((icon, i) => (
                <a href={icon.href} key={i}><i className={`fab ${icon.icon}`}></i></a>
              ))}
            </div>
            <div className="header-button ms-4">
              <a href="contact.html" className="theme-btn">
                <span>Get Started <i className="fa-solid fa-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </header>
  
        {/* HERO/INTRO SECTION */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-wrapper style1 fix">
              <div className="row">
                <div className="col-xl-7 order-2 order-xl-1">
                  <div className="intro-content">
                    <div className="intro-section-title">
                      <div className="intro-subtitle"><span>News!</span> Find Your Solution <img src="https://ex-coders.com/html/niotech/assets/images/icon/fireIcon.svg" alt="icon" /></div>
                      <h1 className="intro-title wow fadeInUp" data-wow-delay=".2s">
                        We Develop Websites, Applications, and Brands.
                      </h1>
                      <p className="intro-desc wow fadeInUp" data-wow-delay=".4s">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration by injected humour, or randomised words.
                      </p>
                    </div>
                    <div className="btn-wrapper style1 wow fadeInUp" data-wow-delay=".6s">
                      <a className="theme-btn" href="contact.html">
                        Get Started Now
                        {/* SVG Arrow here */}
                      </a>
                      <a className="theme-btn style2 wow fadeInUp" data-wow-delay=".2s" href="about.html">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 order-1 order-xl-2">
                  <div className="intro-thumb">
                    <img className="main-thumb img-custom-anim-right wow fadeInUp" data-wow-delay=".4s" src="https://ex-coders.com/html/niotech/assets/images/intro/introThumb11.png" alt="thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  