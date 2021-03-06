import React, { Component, Fragment } from 'react'
import "./css/main.css"

export class Index extends Component {
  
  render() {
    return (
        <Fragment>
            <div id="carouselExampleControls" className="carousel slide carouselStyle" data-ride="carousel">
                <div className="carousel-inner height-70">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fbg_2.jpg?alt=media&token=55ec4eaa-a298-4c8d-81d2-58cb8971779d" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fbg_1.jpg?alt=media&token=774c39f0-dca2-4dbe-a628-1770b7b19d3d" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fbg_3.jpg?alt=media&token=8b38bbbb-5195-423e-8783-c731314a5245" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <section className="parallax-img">
                <div className="overlay">
                    <div className="row">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                </div>
            </section>



            <section style={{marginTop: "20px"}}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h3>Our Satisfied Guests say</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="item text-center">
                                <div className="testimony-wrap p-4 pb-5">
                                    <div className="user-img mb-4" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fperson_1.jpg?alt=media&token=f11a0564-42bd-424a-a236-a05e90a7f39a)", border: "1px solid #ccc"}}></div>
                                    <div className="text">
                                        <p className="star-rate"><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star-half-full"></span></p>
                                        <p className="mb-5">Love their service. Wonderful. They somehow delivered my food instantly? *dab*</p><br />
                                        <p className="name">Dennis Green</p>
                                        <span className="position">Guests from Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item text-center">
                                <div className="testimony-wrap p-4 pb-5">
                                    <div className="user-img mb-4" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fjordan.jpeg?alt=media&token=3a386abf-c5c2-4318-8147-81a1d2d52a15)", border: "1px solid #ccc"}}></div>
                                    <div className="text">
                                        <p className="star-rate"><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star-half-full"></span></p>
                                        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Jordan Kutz</p>
                                        <span className="position">Guests from Canada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item text-center">
                                <div className="testimony-wrap p-4 pb-5">
                                    <div className="user-img mb-4" style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2FIMG_1795.JPG?alt=media&token=d12126c4-bc95-4fcd-bc76-7130b206fb3c)", border: "1px solid #ccc"}}></div>
                                    <div className="text">
                                        <p className="star-rate"><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star-half-full"></span></p>
                                        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Aish Ghimire</p>
                                        <span className="position">Guests from Nepal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="item text-center">
                                <div className="testimony-wrap p-4 pb-5">
                                    <div className="user-img mb-4" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/csci387.appspot.com/o/img%2Fperson_4.jpg?alt=media&token=721fb284-4fc3-4f20-b0d5-3166eede1678)", border: "1px solid #ccc"}}></div>
                                    <div className="text">
                                        <p className="star-rate"><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star"></span><span className="icon-star-half-full"></span></p>
                                        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        <p className="name">Dennis Green</p>
                                        <span className="position">Guests from Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>

    )
  }
}

export default Index;