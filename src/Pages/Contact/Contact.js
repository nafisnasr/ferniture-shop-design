import React, { useState } from 'react'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallBold } from "react-icons/pi";
import { TfiTime } from "react-icons/tfi";
import "./Contact.css"
import ServicesSection from '../../Components/ServicesSection/ServicesSection';

export default function Contact() {

    const [emailValue, setEmailValue] = useState("")
    const [userNameValue, setUserNameValue] = useState("")
    const [subjectValue, setSubjectValue] = useState("")
    const [messageValue, setMessageValue] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }


    return (
        <>
            <HeaderSection
                title={"Contact"}
                link={"/contact"}
            />
            <section className="contact">
                <div className="container">

                    <div className="contact-text">
                        <h2>Get in Touch With Us</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ea maxime, ab minus ipsum voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>

                    <div className="contact-wrapper row">
                        <div className="col-lg-6 col-11">
                            <div className="left-sec">
                                <div className="contact-box">
                                    <span ><FaLocationDot className="icon" /></span>
                                    <div className="text">
                                        <h3 className="title">Address</h3>
                                        <p>236 5th SE Avenue, </p>
                                        <p>New York NY10000,</p>
                                        <p> United states</p>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <span ><PiPhoneCallBold className="icon" /></span>
                                    <div className="text">
                                        <h3 className="title">Phone</h3>
                                        <p>Mobile: +(84) 546-6789</p>
                                        <p>Hotline:+(84) 458-6789</p>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <span ><TfiTime className="icon" /></span>
                                    <div className="text">
                                        <h3 className="title">Working Time</h3>
                                        <p>Monday-Friday: 9-22</p>
                                        <p>Saturday-Sunday: 9-21</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6 col-11">
                            <form className="right-sec">
                                <div className="input-box">
                                    <label>Your Name</label>
                                    <input value={userNameValue} onChange={event => setUserNameValue(event.target.value)} type="text" placeholder='ABC' />
                                </div>
                                <div className="input-box">
                                    <label>Your Email</label>
                                    <input value={emailValue} onChange={event => setEmailValue(event.target.value)} type="text" placeholder='ABC@gmail.com' />
                                </div>
                                <div className="input-box">
                                    <label>Subject</label>
                                    <input value={subjectValue} onChange={event => setSubjectValue(event.target.value)} type="text" placeholder='this is optional' />
                                </div>
                                <div className="input-box">
                                    <label>Message</label>
                                    <textarea value={messageValue} onChange={event => setMessageValue(event.target.value)} cols="30" rows="10" placeholder='Hi i like to...'></textarea>
                                </div>
                                <div className="input-box">
                                    <button
                                        className={`submit-btn ${submitted && `submitted`}`}
                                        onClick={(event) => submitHandler(event)}
                                        disabled={submitted ? true : false}
                                    >
                                        {submitted ? "submitted!" : "submit"}
                                    </button>
                                </div>
                                {submitted && (
                                    <div
                                        className="w-100 mt-1 alert alert-success alert-dismissible fade show"
                                        role="alert"
                                    >
                                        <strong>Thanks!</strong> Your Feedback Sent Successfuly. .
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ServicesSection />
        </>
    )
}
