import React from 'react';
import { Link } from "react-router-dom";

const Portfolio = ({ myRef }) => {
    return (
        <section ref={myRef} id="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <Link className="portfolio-box" to="/">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/1.jpg')} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link className="portfolio-box" to="/">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/2.jpg')} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link className="portfolio-box" to="/">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/3.jpg')} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link className="portfolio-box" to="/">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/4.jpg')} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link className="portfolio-box" to="/">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/5.jpg')} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <Link className="portfolio-box" to="/">
                            <img className="img-fluid" src={require('../assets/img/portfolio/thumbnails/6.jpg')} alt="" />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">
                                    Category
                                </div>
                                <div className="project-name">
                                    Project Name
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;