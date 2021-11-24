import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#FF3614",
        textDecoration: "underline",
    };
    return (
        <div style={{ backgroundColor: "#061a3a" }} className="text-white">
            <div className="container">
                <div className="row pt-5 pb-2">
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <h2>Codeaxes</h2>
                        <p>
                            Millions of people of all ages and from around the
                            world are improving their lives with us.We work with
                            a passion of taking challenges and creating new ones
                            in advertising sector.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3 text-center">
                        <h4>Quic Links</h4>
                        <NavLink
                            className="text-white text-decoration-none"
                            activeStyle={activeStyle}
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <br />
                        <NavLink
                            className="text-white text-decoration-none"
                            activeStyle={activeStyle}
                            to="/allUsers"
                        >
                            All Users
                        </NavLink>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <h4>Follow us</h4>
                        <p>
                            Subscribe our Youtube channel to get our latest
                            update & news
                        </p>
                        <div className="d-flex justify-content-around mt-4">
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-2x fa-facebook-square text-white"></i>
                            </a>
                            <a href="https://www.linkedin.com/signup">
                                <i className="fab fa-2x fa-linkedin text-white"></i>
                            </a>
                            <a href="https://twitter.com/?lang=en">
                                <i className="fab fa-2x fa-twitter-square text-white"></i>
                            </a>
                            <a href="https://www.youtube.com/">
                                <i className="fab fa-2x fa-youtube text-white"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container pb-3">
                    <h5 className="text-center ">
                        Copyright &copy; 2021 All rights reserved | This Site
                        Developed by <br />{" "}
                        <span
                            style={{ color: "#ff7c5b" }}
                            className=" mt-2 d-inline-block"
                        >
                            {" "}
                            Md. Rownok Jahan
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;
