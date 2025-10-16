import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Types
interface HomePage {
  title: string;
  img: string;
  multiHref: string;
  oneHref: string;
}

interface SubmenuItem {
  href: string;
  text: string;
}

interface DropdownItem extends SubmenuItem {
  hasDropdown: boolean;
  icon: string;
  subSubmenu?: SubmenuItem[];
}

interface PricingFeature {
  text: string;
  enabled: boolean;
}

interface PricingPlan {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  features: PricingFeature[];
}

interface BlogPost {
  img: string;
  tag: string;
  title: string;
  author: string;
  date: string;
}

interface FooterLink {
  href: string;
  text: string;
}

// Data
const cssLinks = [
  "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css",
  "/css/all.min.css",
  "/css/animate.css",
  "/css/magnific-popupp.css",
  "/css/menu.css",
  "/css/swiper.css",
  "/css/nice-select.css",
  "/css/main.css"
];

const homePages: HomePage[] = [
  {
    title: 'Home 01',
    img: 'https://ex-coders.com/html/niotech/assets/images/header/home-1.png',
    multiHref: 'index.html',
    oneHref: 'index-one-page.html'
  },
  {
    title: 'Home 02',
    img: 'https://ex-coders.com/html/niotech/assets/images/header/home-2.png',
    multiHref: 'index2.html',
    oneHref: 'index-two-page.html'
  },
  {
    title: 'Home 03',
    img: 'https://ex-coders.com/html/niotech/assets/images/header/home-3.png',
    multiHref: 'index3.html',
    oneHref: 'index-three-page.html'
  }
];

const servicesSubmenu: SubmenuItem[] = [
  { href: 'services.html', text: 'Services' },
  { href: 'service-details.html', text: 'Service Details' }
];

const pagesSubmenu: DropdownItem[] = [
  {
    hasDropdown: true,
    text: 'Project',
    icon: 'fas fa-angle-down',
    href: 'project1.html',
    subSubmenu: [
      { href: 'project1.html', text: 'Project 01' },
      { href: 'project2.html', text: 'Project 02' },
      { href: 'project-details.html', text: 'Project Details' }
    ]
  },
  {
    hasDropdown: true,
    text: 'Team',
    icon: 'fas fa-angle-down',
    href: 'team.html',
    subSubmenu: [
      { href: 'team.html', text: 'Team' },
      { href: 'team-details.html', text: 'Team Details' }
    ]
  },
  { hasDropdown: false, href: 'faq.html', text: "Faq's", icon: '' }
];

const blogsSubmenu: SubmenuItem[] = [
  { href: 'blog.html', text: 'Blog' },
  { href: 'blog-standard.html', text: 'Blog Standard' },
  { href: 'blog-left-sidebar.html', text: 'Blog Left Sidebar' },
  { href: 'blog-details.html', text: 'Blog Details' }
];

const brandLogos = [
  'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_1.png',
  'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_2.png',
  'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_3.png',
  'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_4.png',
  'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_5.png',
  'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_3.png'
];

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Plan',
    priceMonthly: '$14.99',
    priceYearly: '$34.99',
    features: [
      { text: '7 days free access', enabled: true },
      { text: 'Maximum of 5 collaborators', enabled: true },
      { text: 'Cloud backup 1GB', enabled: true },
      { text: 'Maximum 50 tasks per week', enabled: false },
      { text: '100+ HTML UI Elements', enabled: false },
      { text: 'Updates for 1 Year', enabled: false }
    ]
  },
  {
    name: 'Standard Plan',
    priceMonthly: '$19.99',
    priceYearly: '$64.99',
    features: [
      { text: '7 days free access', enabled: true },
      { text: 'Maximum of 5 collaborators', enabled: true },
      { text: 'Cloud backup 1GB', enabled: true },
      { text: 'Maximum 50 tasks per week', enabled: true },
      { text: '100+ HTML UI Elements', enabled: true },
      { text: 'Updates for 1 Year', enabled: true }
    ]
  },
  {
    name: 'Premium Plan',
    priceMonthly: '$24.99',
    priceYearly: '$84.99',
    features: [
      { text: '7 days free access', enabled: true },
      { text: 'Maximum of 5 collaborators', enabled: true },
      { text: 'Cloud backup 1GB', enabled: true },
      { text: 'Maximum 50 tasks per week', enabled: true },
      { text: '100+ HTML UI Elements', enabled: true },
      { text: 'Updates for 1 Year', enabled: false }
    ]
  }
];

const blogPosts: BlogPost[] = [
  {
    img: 'https://ex-coders.com/html/niotech/assets/images/blog/blogThumb1_1.jpg',
    tag: 'Workplace',
    title: 'Services that printing at you is important',
    author: 'Admin',
    date: 'Sep 30, 2024'
  },
  {
    img: 'https://ex-coders.com/html/niotech/assets/images/blog/blogThumb1_2.jpg',
    tag: 'Coding',
    title: 'A checklist to improve your daily routine',
    author: 'Admin',
    date: 'Sep 30, 2024'
  },
  {
    img: 'https://ex-coders.com/html/niotech/assets/images/blog/blogThumb1_1.jpg',
    tag: 'Technology',
    title: 'That will help you get 1% better every day',
    author: 'Admin',
    date: 'Sep 30, 2024'
  }
];

const footerPages: FooterLink[] = [
  { href: 'index.html', text: 'Home' },
  { href: 'about.html', text: 'About Us' },
  { href: 'project1.html', text: 'Integrations' },
  { href: 'services.html', text: 'Features' },
  { href: 'pricing.html', text: 'Pricing' },
  { href: 'contact.html', text: 'Contact Us' }
];

const utilityPages: FooterLink[] = [
  { href: 'project1.html', text: 'Project' },
  { href: 'blog.html', text: 'Blog' },
  { href: 'contact.html', text: 'Contact' },
  { href: 'pricing.html', text: 'Pricing' },
  { href: 'project-details.html', text: 'Project details' },
  { href: 'team.html', text: 'Our Team' }
];

// Components
const Offcanvas: React.FC = () => (
  <>
    {cssLinks.map((href, index) => (
      <link key={index} rel="stylesheet" href={href} />
    ))}
    <div className="fix-area">
      <div className="offcanvas__info">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo">
                <img src="/src/assets/dark-logo.png" alt="logo-img" />
              </div>
              <div className="offcanvas__close">
                <button>
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <p className="text d-none d-xl-block">
              Professional full-stack developer specializing in modern web applications, mobile apps, and AI-powered solutions.
            </p>
            <div className="mobile-menu fix mb-3" />
            <div className="offcanvas__contact">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="offcanvas__contact-text">
                    <a target="_blank" href="#" rel="noopener noreferrer">Melbourne, Australia</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="mailto:sushil@example.com">
                      <span>sushil@example.com</span>
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="fal fa-clock" />
                  </div>
                  <div className="offcanvas__contact-text">
                    <a target="_blank" href="#" rel="noopener noreferrer">Mon-Friday, 09am -05pm</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="offcanvas__contact-icon mr-15">
                    <i className="far fa-phone" />
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="tel:+1234567890">+1234567890</a>
                  </div>
                </li>
              </ul>
              <div className="header-button mt-4">
                <Link to="/contact" className="theme-btn text-center">
                  <span>
                    Get A Quote
                    <i className="fa-solid fa-arrow-right-long" />
                  </span>
                </Link>
              </div>
              <div className="social-icon d-flex align-items-center">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="offcanvas__overlay" />
  </>
);

const Header: React.FC = () => {
  const renderSubmenuItem = (item: DropdownItem, index: number) => {
    if (item.hasDropdown) {
      return (
        <li key={index} className="has-dropdown">
          <a href={item.href}>
            {item.text}
            <i className={item.icon} />
          </a>
          <ul className="submenu">
            {item.subSubmenu?.map((subItem, subIndex) => (
              <li key={subIndex}>
                <a href={subItem.href}>{subItem.text}</a>
              </li>
            ))}
          </ul>
        </li>
      );
    }
    return (
      <li key={index}>
        <a href={item.href}>{item.text}</a>
      </li>
    );
  };

  return (
    <header className="header-section-1">
      <div id="header-sticky" className="header-1">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link to="/" className="header-logo">
                    <img src="/src/assets/dark-logo.png" alt="logo-img" className='w-100 h-12' />
                  </Link>
                </div>
              </div>
              <div className="header-middle">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <a href="#">
                            Home
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu has-homemenu">
                            <li>
                              <div className="homemenu-items">
                                {homePages.map((page, index) => (
                                  <div key={index} className="homemenu">
                                    <div className={`homemenu-thumb ${index < homePages.length - 1 ? 'mb-15' : ''}`}>
                                      <img src={page.img} alt="img" />
                                      <div className="demo-button">
                                        <Link className="theme-btn" to="/">Main Portfolio</Link>
                                        <Link className="theme-btn" to="/showcase">Showcase</Link>
                                      </div>
                                    </div>
                                    <div className="homemenu-content text-center">
                                      <h4 className="homemenu-title">{page.title}</h4>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown active d-xl-none">
                          <Link to="/" className="border-none">
                            Home
                            <i className="fa-regular fa-plus" />
                          </Link>
                          <ul className="submenu">
                            {homePages.map((page, index) => (
                              <li key={index}>
                                <a href={page.multiHref}>{page.title}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li><Link to="/about">About Us</Link></li>
                        <li>
                          <a href="services.html">
                            Services
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            {servicesSubmenu.map((item, index) => (
                              <li key={index}>
                                <a href={item.href}>{item.text}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li className="has-dropdown">
                          <a href="#">
                            Pages
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            {pagesSubmenu.map((item, index) => renderSubmenuItem(item, index))}
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">
                            Blogs
                            <i className="fas fa-angle-down" />
                          </a>
                          <ul className="submenu">
                            {blogsSubmenu.map((item, index) => (
                              <li key={index}>
                                <a href={item.href}>{item.text}</a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a href="#0" className="search-trigger search-icon">
                  <i className="fal fa-search" />
                </a>
                <div className="header-button ms-4">
                  <Link to="/contact" className="theme-btn">
                    <span>
                      Get Started
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </Link>
                </div>
                <div className="header__hamburger d-block d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const SearchArea: React.FC = () => (
  <div className="search-wrap">
    <div className="search-inner">
      <i className="fas fa-times search-close" id="search-close" />
      <div className="search-cell">
        <form method="get">
          <div className="search-field-holder">
            <input type="search" className="main-search-input" placeholder="Search..." />
          </div>
        </form>
      </div>
    </div>
  </div>
);

const IntroSection: React.FC = () => (
  <section className="intro-section">
    <div className="intro-container-wrapper style1">
      <div className="container">
        <div className="intro-wrapper style1 fix">
          <div className="shape1">
            <img src="https://ex-coders.com/html/niotech/assets/images/shape/introShape1_1.png" alt="shape" />
          </div>
          <div className="shape2">
            <img src="https://ex-coders.com/html/niotech/assets/images/shape/introShape1_2.png" alt="shape" />
          </div>
          <div className="shape3 d-none d-xxl-block cir36">
            <img src="https://ex-coders.com/html/niotech/assets/images/shape/introShape1_3.png" alt="shape" />
          </div>
          <div className="shape4 d-none d-xxl-block cir36">
            <img src="https://ex-coders.com/html/niotech/assets/images/shape/introShape1_4.png" alt="shape" />
          </div>
          <div className="shape5 d-none d-xxl-block cir36">
            <img src="https://ex-coders.com/html/niotech/assets/images/shape/introShape1_5.png" alt="shape" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-7 order-2 order-xl-1">
                <div className="intro-content">
                  <div className="intro-section-title">
                    <div className="intro-subtitle">
                      <span>News!</span>Find Your Solution{" "}
                      <img src="https://ex-coders.com/html/niotech/assets/images/icon/fireIcon.svg" alt="icon" />
                    </div>
                    <h1 className="intro-title wow fadeInUp" data-wow-delay=".2s">
                      We Develop Websites, Applications, and Brands.
                    </h1>
                    <p className="intro-desc wow fadeInUp" data-wow-delay=".4s">
                      Professional full-stack developer specializing in modern web applications, mobile apps, and AI-powered solutions. 
                      With years of experience in full-stack development, I deliver high-quality, scalable solutions that drive business growth.
                    </p>
                  </div>
                  <div className="btn-wrapper style1 wow fadeInUp" data-wow-delay=".6s">
                    <Link to="/contact" className="theme-btn">
                      Get Started Now
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_11_22)">
                          <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_11_22">
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Link to="/" className="theme-btn style2 wow fadeInUp" data-wow-delay=".2s">
                      Visit Portfolio
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_11_27)">
                          <path d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z" fill="#282C32" />
                        </g>
                        <defs>
                          <clipPath id="clip0_11_27">
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                  <div className="fancy-box-wrapper style1">
                    <div className="fancy-box style1 wow fadeInUp" data-wow-delay=".2s">
                      <div className="item">
                        <img src="https://ex-coders.com/html/niotech/assets/images/intro/introProfileThumb1_1.png" alt="thumb" />
                      </div>
                      <div className="item">
                        <h6>50+</h6>
                        <p>Happy Clients</p>
                      </div>
                    </div>
                    <div className="fancy-box style5 wow fadeInUp" data-wow-delay=".4s">
                      <h6>4.9/5</h6>
                      <div className="rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width={77} height={13} viewBox="0 0 77 13" fill="none">
                          <g clipPath="url(#clip0_20_34)">
                            <path d="M12.3738 4.23335L8.62048 3.8926L7.13714 0.419814C7.02762 0.164672 6.77843 0 6.50107 0C6.22371 0 5.97442 0.164672 5.8656 0.419814L4.38226 3.8926L0.62834 4.23335C0.353159 4.25875 0.120139 4.44515 0.0340334 4.70793C-0.0515761 4.9712 0.0274862 5.25997 0.235608 5.4425L3.07282 7.93034L2.23627 11.6148C2.17506 11.8857 2.28022 12.1659 2.505 12.3284C2.62583 12.4162 2.76778 12.46 2.91023 12.46C3.03265 12.46 3.15516 12.4275 3.26458 12.362L6.50107 10.4268L9.73697 12.362C9.97436 12.5038 10.2728 12.4909 10.4971 12.3284C10.7219 12.1659 10.8271 11.8857 10.7659 11.6148L9.92932 7.93034L12.7665 5.4425C12.9746 5.25997 13.0537 4.9718 12.9681 4.70793C12.8825 4.44465 12.649 4.25825 12.3738 4.23335Z" fill="#ECC132" />
                          </g>
                          <defs>
                            <clipPath id="clip0_20_34">
                              <rect width="77.0099" height="12.46" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        Rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 order-1 order-xl-2">
                <div className="intro-thumb">
                  <div className="thumbShape1">
                    <img src="https://ex-coders.com/html/niotech/assets/images/shape/introThumbShape1_1.png" alt="thumbShape" />
                  </div>
                  <div className="thumbShape2">
                    <img src="https://ex-coders.com/html/niotech/assets/images/shape/introThumbShape1_2.png" alt="thumbShape" />
                  </div>
                  <img className="main-thumb img-custom-anim-right wow fadeInUp" data-wow-delay=".4s" src="https://ex-coders.com/html/niotech/assets/images/intro/introThumb1_1.png" alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BrandSliderSection: React.FC = () => (
  <div className="brand-slider-section section-padding fix">
    <div className="brand-slider-container-wrapper style1">
      <div className="container">
        <div className="brand-slider-wrapper style1">
          <h2 className="single-section-title wow fadeInUp" data-wow-delay=".2s">
            Trusted by leading companies worldwide.
          </h2>
          <div className="row">
            <div className="slider-area brandSliderOne">
              <div className="swiper gt-slider" id="brandSliderOne" data-slider-options='{"loop": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2,"centeredSlides":true},"768":{"slidesPerView":3},"1025":{"slidesPerView":4},"1400":{"slidesPerView":5}}}'>
                <div className="swiper-wrapper">
                  {brandLogos.map((src, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="brand-logo">
                        <img src={src} alt="logo" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PricingCard: React.FC<{ plan: PricingPlan; isMonthly: boolean }> = ({ plan, isMonthly }) => {
  const price = isMonthly ? plan.priceMonthly : plan.priceYearly;
  return (
    <div className="pricing-card style1">
      <div className="pricing-card-header">
        <h6>{plan.name}</h6>
        <div className="price-wrapper">
          <span className="price">{price}</span>
          <span className="text"> / Per Month</span>
        </div>
        <p className="text">
          Professional development services tailored to your business needs
        </p>
      </div>
      <div className="pricing-card-body">
        <ul className="checklist">
          {plan.features.map((feature, index) => (
            <li key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
                <path opacity="0.992" fillRule="evenodd" clipRule="evenodd" d="M7.22393 0C10.1444 0.0048682 12.3871 1.22628 13.952 3.66423C15.1321 5.76513 15.3168 7.95136 14.5062 10.2229C13.3721 12.8859 11.3758 14.4614 8.51719 14.9495C5.62984 15.2424 3.28454 14.2622 1.48125 12.0088C-0.0776275 9.77987 -0.406074 7.37811 0.495906 4.80353C1.26674 2.9139 2.5754 1.53341 4.42187 0.662026C5.31983 0.270692 6.25384 0.0500183 7.22393 0ZM11.2269 4.43403C11.6225 4.43526 11.7508 4.62002 11.6118 4.98829C9.90797 6.93843 8.20413 8.8886 6.50032 10.8387C6.34295 10.9814 6.17359 10.9968 5.99226 10.8849C5.24811 9.89445 4.50399 8.904 3.75985 7.91352C3.63052 7.68883 3.67671 7.50922 3.89841 7.37466C3.99079 7.35412 4.08316 7.35412 4.17554 7.37466C4.74004 7.75441 5.30458 8.1342 5.86909 8.51396C6.02234 8.62678 6.18659 8.64729 6.36176 8.57554C7.97994 7.1872 9.60165 5.80667 11.2269 4.43403Z" fill={feature.enabled ? "#1AD079" : "#858585"} />
              </svg>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/contact" className="theme-btn style5">Get Your Free Plan</Link>
    </div>
  );
};

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="blog-card style1 wow fadeInUp">
    <div className="thumb">
      <img src={post.img} alt="thumb" />
    </div>
    <div className="body">
      <div className="tag-meta">
        <img src="https://ex-coders.com/html/niotech/assets/images/icon/FolderIcon.svg" alt="icon" />
        {post.tag}
      </div>
      <h3>
        <a href="blog-details.html">{post.title}</a>
      </h3>
      <div className="blog-meta">
        <div className="item child1">
          <span className="icon">
            <img src="https://ex-coders.com/html/niotech/assets/images/icon/userIcon.svg" alt="icon" />
          </span>
          <span className="text">By {post.author}</span>
        </div>
        <div className="item">
          <span className="icon">
            <img src="https://ex-coders.com/html/niotech/assets/images/icon/calendar.svg" alt="icon" />
          </span>
          <span className="text">{post.date}</span>
        </div>
      </div>
    </div>
  </div>
);

const FooterLinkList: React.FC<{ title: string; links: FooterLink[] }> = ({ title, links }) => (
  <div className="single-footer-widget">
    <div className="widget-head">
      <h3>{title}</h3>
    </div>
    <ul className="list-area">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => (
  <footer className="footer-section position-relative">
    <div className="footer-widgets-wrapper style1 fix">
      <div className="shape1">
        <img src="https://ex-coders.com/html/niotech/assets/images/shape/footerShape1_1.png" alt="shape" />
      </div>
      <div className="shape2">
        <img src="https://ex-coders.com/html/niotech/assets/images/shape/footerShape1_2.png" alt="shape" />
      </div>
      <div className="shape3">
        <img src="https://ex-coders.com/html/niotech/assets/images/shape/footerShape1_3.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <div className="single-footer-widget">
              <div className="widget-head">
                <Link to="/">
                  <img src="https://ex-coders.com/html/niotech/assets/images/logo/logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="footer-content">
                <p>
                  Professional full-stack developer specializing in modern web applications, mobile apps, and AI-powered solutions.
                </p>
                <div className="store-links">
                  <div className="apple">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width={19} height={17} viewBox="0 0 19 17" fill="none">
                        <path d="M13.9741 0.148438C11.9982 0.148438 11.1631 1.09311 9.78702 1.09311C8.37612 1.09311 7.29994 0.155311 5.58766 0.155311C3.91164 0.155311 2.12437 1.1805 0.989386 2.92696C-0.604303 5.38978 -0.333787 10.0282 2.24738 13.9797C3.17066 15.3942 4.40366 16.9806 6.02087 16.9978H6.05028C7.45578 16.9978 7.87332 16.0757 9.8076 16.0649H9.837C11.7424 16.0649 12.1246 16.9924 13.5242 16.9924H13.5536C15.1709 16.9752 16.47 15.2175 17.3933 13.8083C18.0578 12.7949 18.3048 12.2863 18.8145 11.1398C15.0807 9.71985 14.4809 4.41664 18.1735 2.38344C17.0463 0.969377 15.4624 0.150401 13.9692 0.150401L13.9741 0.148438Z" fill="white" />
                      </svg> App Store
                    </a>
                  </div>
                  <div className="play">
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width={26} height={17} viewBox="0 0 26 17" fill="none">
                        <path d="M18.8732 5.50779L20.9775 1.64735C21.0339 1.54372 21.0493 1.42066 21.0204 1.30505C20.9914 1.18943 20.9204 1.09065 20.8229 1.03026C20.7748 1.00032 20.7215 0.980802 20.6661 0.97283C20.6108 0.964858 20.5545 0.968593 20.5005 0.983821C20.4466 0.999048 20.396 1.02546 20.3517 1.06154C20.3075 1.09761 20.2704 1.14263 20.2427 1.19398L18.1122 5.10427C16.4855 4.31717 14.6547 3.87902 12.6857 3.87902C10.7167 3.87902 8.88588 4.3177 7.25923 5.10427L5.12868 1.19398C5.07191 1.09044 4.97863 1.01502 4.86936 0.984319C4.76008 0.953616 4.64377 0.970142 4.546 1.03026C4.44823 1.09038 4.37702 1.18917 4.34803 1.3049C4.31904 1.42062 4.33464 1.54381 4.39141 1.64735L6.49075 5.50779C2.86386 7.58782 0.405796 11.4776 0 16.0313H25.3684C24.9626 11.4776 22.5046 7.58782 18.8732 5.50779ZM6.85988 12.2584C6.64958 12.2584 6.444 12.1924 6.26914 12.0687C6.09429 11.9449 5.958 11.7691 5.87752 11.5633C5.79705 11.3575 5.77599 11.1311 5.81702 10.9127C5.85804 10.6942 5.95931 10.4936 6.10802 10.3361C6.25672 10.1786 6.44618 10.0714 6.65244 10.0279C6.8587 9.98449 7.07249 10.0068 7.26678 10.092C7.46108 10.1772 7.62714 10.3216 7.74398 10.5068C7.86081 10.6919 7.92317 10.9097 7.92317 11.1324C7.92304 11.431 7.81097 11.7173 7.6116 11.9285C7.41222 12.1396 7.14184 12.2583 6.85988 12.2584ZM18.5036 12.2584C18.2935 12.2575 18.0883 12.1907 17.9141 12.0664C17.7398 11.9421 17.6042 11.7659 17.5244 11.56C17.4446 11.3542 17.4242 11.1279 17.4657 10.9098C17.5073 10.6917 17.6089 10.4915 17.7578 10.3345C17.9066 10.1775 18.0961 10.0707 18.3022 10.0276C18.5084 9.98453 18.7219 10.0071 18.916 10.0925C19.11 10.1778 19.2758 10.3222 19.3924 10.5073C19.5091 10.6923 19.5713 10.9099 19.5713 11.1324C19.5713 11.2804 19.5436 11.4271 19.49 11.5638C19.4364 11.7006 19.3579 11.8248 19.2589 11.9294C19.1599 12.034 19.0424 12.1169 18.9132 12.1733C18.7839 12.2298 18.6454 12.2587 18.5056 12.2584H18.5036Z" fill="#242331" />
                      </svg> Play Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
            <FooterLinkList title="Pages" links={footerPages} />
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <FooterLinkList title="Utility Pages" links={utilityPages} />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <div className="contact-box">
                <div className="subtitle">Address</div>
                <div className="widget-head">Ready to get started?</div>
                <div className="text">
                  Let's discuss how I can help bring your ideas to life with cutting-edge technology.
                </div>
                <div className="info">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={23} viewBox="0 0 22 23" fill="none">
                      <path d="M3.66671 4.16699H18.3334C19.3417 4.16699 20.1667 4.99199 20.1667 6.00033V17.0003C20.1667 18.0087 19.3417 18.8337 18.3334 18.8337H3.66671C2.65837 18.8337 1.83337 18.0087 1.83337 17.0003V6.00033C1.83337 4.99199 2.65837 4.16699 3.66671 4.16699Z" stroke="#5236FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.1667 6L11 12.4167L1.83337 6" stroke="#5236FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="link">
                    <a href="mailto:sushil@example.com">sushil@example.com</a> <br />
                    <a href="mailto:info@sushil.com">info@sushil.com</a>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={23} viewBox="0 0 22 23" fill="none">
                      <path d="M21 16.5V18.5C21.0011 19.0304 20.7951 19.5391 20.42 19.9142C20.0449 20.2893 19.5362 20.4953 19.0058 20.4964H2.9942C2.4638 20.4953 1.9551 20.2893 1.58 19.9142C1.2049 19.5391 0.9989 19.0304 1 18.5V16.5M16.5 7.5L11 12.5L5.5 7.5M11 12.5V1" stroke="#5236FF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="link">
                    <a href="tel:+1234567890">+1234567890</a> <br />
                    <a href="tel:+0987654321">+0987654321</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom style1">
      <div className="container">
        <div className="footer-wrapper d-flex align-items-center justify-content-between">
          <p className="wow fadeInLeft" data-wow-delay=".3s">
            Copyright © Sushil Hub All rights reserved
          </p>
          <ul className="social-links" data-wow-delay=".5s">
            <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

// Main Component
const ShowcasePage: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  useEffect(() => {
    // Add external JS files
    const addExternalJS = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    // Add JS files
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/meanmenu/2.0.8/jquery.meanmenu.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/swiper/8.3.2/swiper-bundle.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/isotope/3.0.6/isotope.pkgd.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/imagesloaded/4.1.4/imagesloaded.pkgd.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/jquery.nice-select/1.1.0/js/jquery.nice-select.min.js');
    addExternalJS('https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js');
    addExternalJS('https://ex-coders.com/html/niotech/assets/js/main.js');

    return () => {
      // Cleanup external resources
      const externalScripts = document.querySelectorAll('script[src*="ex-coders.com"]');
      externalScripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <Offcanvas />
      <Header />
      <SearchArea />
      <IntroSection />
      <BrandSliderSection />
      
      {/* Pricing Section */}
      <section className="pricing-section section-padding pt-0 fix">
        <div className="container">
          <div className="section-title text-center mxw-685 mx-auto">
            <div className="subtitle">
              Our Pricing <img src="https://ex-coders.com/html/niotech/assets/images/icon/fireIcon.svg" alt="icon" />
            </div>
            <h2 className="title">Choose The Plans That Suits You!</h2>
            <p className="text">
              Professional development services tailored to your business needs and budget.
            </p>
          </div>
          <div className="pricing-wrapper style1">
            <div className="tab-section d-flex justify-content-center align-items-center">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${isMonthly ? 'active' : ''}`} onClick={() => setIsMonthly(true)}>
                    Monthly
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${!isMonthly ? 'active' : ''}`} onClick={() => setIsMonthly(false)}>
                    Yearly
                  </button>
                </li>
              </ul>
            </div>
            <div className="row gy-5">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="col-xl-4 col-md-6">
                  <PricingCard plan={plan} isMonthly={isMonthly} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section section-padding fix">
        <div className="container">
          <div className="blog-wrapper style1">
            <div className="section-title text-center mxw-685 mx-auto">
              <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                Our Blog <img src="https://ex-coders.com/html/niotech/assets/images/icon/fireIcon.svg" alt="icon" />
              </div>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                Recent Articles And Latest Blog
              </h2>
            </div>
            <div className="row gy-5">
              {blogPosts.map((post, index) => (
                <div key={index} className="col-xl-4 col-md-6">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ShowcasePage;