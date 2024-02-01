import React from 'react'
import "./Advertisment.css"

export default function Advertisment() {
    return (
        <div className='advertisment'>
            <div className="advertisment-wrapper row">

                <section className="col-lg-6 col-md-7 col-11">
                    <div className="left-sec ad-sec">
                        <div className="text-container">

                            <h2 className="title">50+ beautiful rooms</h2>
                            <h2 className="title">inspiration</h2>
                            <p className="text">
                                Our designer already made a lot of beautiful prototipe of rooms that inspire you
                            </p>
                            <button>Explore more</button>
                        </div>
                    </div>
                </section>

                <section className="col-lg-6 col-md-5 rightsection">
                    <div className="right-sec ad-sec">
                        <img
                            src="/images/advertisment-img.png"
                            alt="BedRoom"
                            className='ad-img'
                        />
                        <div className="text-container">
                            <p className='upper-text'>Bed Room</p>
                            <h3 className="main-text">Inner Peace</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
