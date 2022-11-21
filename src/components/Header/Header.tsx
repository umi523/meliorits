function Header() {
  return (
    <header
      id="header"
      className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide navbar-scrolled"
    >
      <div className="container">
        <nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
          <a href="/" className="navbar-brand">
            <img className="navbar-brand-logo" src="img/Logo.png" alt="" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-default">
              <i className="bi-list"></i>
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-x"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="navbar-absolute-top-scroller">
              <ul className="navbar-nav">
                <li className="hs-has-mega-menu nav-item">
                  <a href="/services" className="hs-mega-menu-invoker nav-link">
                    services
                  </a>
                </li>
                <li className="hs-has-mega-menu nav-item">
                  <a
                    href="/industries"
                    className="hs-mega-menu-invoker nav-link"
                  >
                    industries we serve
                  </a>
                </li>
                <li className="hs-has-mega-menu nav-item">
                  <a href="/about" className="hs-mega-menu-invoker nav-link">
                    who are we
                  </a>
                </li>
                <li className="hs-has-mega-menu nav-item">
                  <a href="/career" className="hs-mega-menu-invoker nav-link">
                    career
                  </a>
                </li>
                <li className="hs-has-mega-menu nav-item">
                  <a href="/stories" className="hs-mega-menu-invoker nav-link">
                    stories
                  </a>
                </li>
                <li className="hs-has-mega-menu nav-item">
                  <a
                    href="/connect"
                    className="hs-mega-menu-invoker nav-link connectBtn"
                  >
                    connect
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
