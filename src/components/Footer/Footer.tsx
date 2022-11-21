function Footer() {
    return (
        <footer className="pt-10">
            <div className="container pb-1 pb-lg-5">
                <div className="row mb-7">
                    <div className="col-sm mb-3 mb-sm-0 pt-3">
                        <p>Copyright © 2022 melior.com</p>
                    </div>
                    <div className="col-sm-auto">
                        <p style={{ color: "#112369" }}>GET IN TOUCH</p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a className="btn btn-soft-light btn-xs btn-icon"
                                    href="https://www.linkedin.com/company/meliorits">
                                    <i className="bi-linkedin"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-soft-light btn-xs btn-icon" href="https://www.facebook.com/meliorits">
                                    <i className="bi-facebook"></i>
                                </a>
                            </li>

                            <li className="list-inline-item">
                                <a className="btn btn-soft-light btn-xs btn-icon" href="">
                                    <i className="bi-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;