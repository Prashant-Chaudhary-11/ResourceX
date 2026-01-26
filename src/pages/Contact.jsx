import Iridescence from '../components/Iridescence';
import ShinyText from "./ShinyText";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <>
            <div className="contact-page">

                {/* Background */}
                <div className="contact-bg">
                    <Iridescence
                        speed={1}
                        amplitude={0.1}
                        mouseReact
                    />
                </div>

                {/* Content */}
                <div className="contact-content">
                    <div className="text-center"><Link to="/" className="about-link">Home</Link> / Contact Us</div>
                    <h1 className="main-heading about-heading-main text-center w-75 m-auto my-5">
                        <ShinyText
                            text="Lets Connect With Us"
                            speed={3.5}
                            delay={0}
                            color="#072929"
                            shineColor="#ffffff"
                            spread={120}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                        />
                    </h1>
                    <p>Let's talk about learning together! Send us a message and we'll get back to you as soon as possible.</p>
                    <div className='d-flex gap-4'>
                        <p className='d-flex align-items-center gap-2'><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone" /> 123-456-7890</p>
                        <p className='d-flex align-items-center gap-2'><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/new-post.png" alt="phone" /> contact@mywebsite.com</p>
                    </div>
                </div>
            </div>
            <div className='contact-container'>
                <div className='row mx-0'>
                    <div className='col-12 col-md-6'>
                        <h1 className="blog-title mb-4">Some Of Our Office</h1>
                        <div className='mb-4 gap-4'>
                            <h5 className='office-contact'>India</h5>
                            <p className='contact-info'>Sector 123, Noida, Uttar Pradesh</p>
                        </div>
                        <div className='mb-4 gap-4'>
                            <h5 className='office-contact'>India</h5>
                            <p className='contact-info'>Sector 123, Noida, Uttar Pradesh</p>
                        </div>
                        <div className='mb-4 gap-4'>
                            <h5 className='office-contact'>India</h5>
                            <p className='contact-info'>Sector 123, Noida, Uttar Pradesh</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <img src="/office.jpg" className='rounded-4' width="100%" alt="office" />
                    </div>
                </div>
            </div>
            <section className="about-cta">
          <div className="">
            <div className="about-cta-card d-flex flex-column justify-content-between align-items-center">
              <div className="text-center">
                <h2 className="about-h2">How Helpful Were We Today?</h2>
                <p className="about-p">
                    We’d love to hear your thoughts about our resources and services. Your feedback helps us improve and serve you better.
                </p>
              </div>

              <div className="about-cta-actions">
                <Link className="about-btn primary me-3" to="/resources">
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
