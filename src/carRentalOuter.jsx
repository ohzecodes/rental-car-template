/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import man from "./assets/man.jpg";
import woman from "./assets/womsn.jpg";
import car from "./assets/car.png";
import "./carRentalOuter.scss";
import { Rating } from "@mui/material";

const rentalCompany = process.env.REACT_APP_RENTAL_COMPANY;
const email = process.env.REACT_APP_EMAIL;

const Navbar = ({ navLinks }) => {
  return (
    <nav className="navbar navbar-expand-lg pt-1 pb-1 bluedark-bg">
      <div className="container-fluid">
        <a
          className="navbar-brand logo color-white center border border-solid border-white "
          href="#"
        >
          {rentalCompany}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  className="nav-link color-white "
                  style={{ marginRight: 32 }}
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="header-section d-flex  ">
      <div className="left-header-section">
        <div className="left-header-section-content">
          <h3 className="fw-bolder mb-3">{rentalCompany} Car Rental</h3>
          <p className="mb-3">
            Experience the pinnacle of luxury with our fleet of meticulously
            maintained vehicles. From unmatched comfort to exhilarating
            performance, trust in our reliability to elevate every journey.
          </p>
          <a href="#" className="text-white text-decoration-none p-2 green-bg">
            Book Now
          </a>
        </div>
      </div>
      <div className="right-header-section">
        <img src={car} alt="img-car" />
      </div>
    </div>
  );
};

const ServiceItem = ({ service }) => {
  return (
    <li className="point-services">
      <img src="https://i.postimg.cc/d0g8RLn5/checklist-icon.png" alt="" />
      <p>{service}</p>
    </li>
  );
};

const TestimonialCard = ({ testimonial, image, AuthorName, ratingValue }) => {
  return (
    <div className="card-testimonial pb-5 pt-5">
      <div className="left-card-testimonial">
        <img height={90} src={image} alt="Testimonial Author" />
      </div>
      <div className="right-card-testimonial">
        <div className="rating-card-testimonial">
          <Rating value={ratingValue} readOnly />
        </div>
        <p className="desc-card-testimonial">{testimonial}</p>
        <p className="fw-bold">{AuthorName}</p>
      </div>
    </div>
  );
};

const Footer = ({ navLinks }) => {
  return (
    <div className="footer-section bluedark-bg color-white p-5 mb-0 pt-5 pb-5">
      <div className="address-footer-section">
        <h4>Reach us At </h4>
        <p>{email}</p>
      </div>
      <div className="navigation-footer-section">
        <h4>Navigation</h4>
        <ul>
          {navLinks.map((link, index) => (
            <li>
              <a className="color-white" key={index} href={link.href}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="copyright-footer-section">
        <p>Copyright &copy; {rentalCompany} Car Rental 2022</p>
        <p style={{ display: "flex", justifyContent: "center" }}>
          <a
            className="navbar-brand logo-footer color-white center border border-solid border-white "
            href="#"
          >
            {rentalCompany}
          </a>
        </p>
      </div>
    </div>
  );
};

const WhyUsCard = ({ icon, title, description }) => {
  return (
    <div className="why-us-card">
      <img src={icon} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};
const WhyUsSection = () => {
  return (
    <div className="why-us">
      <div className="why-us-upper">
        <h3 className="mb-3">Why Us?</h3>
        <p>Why choose {rentalCompany} Car Rental?</p>
      </div>
      <div className="why-us-lower">
        {[
          {
            icon: "https://i.postimg.cc/pXQPQ4V8/icon-complete.png",
            title: "Complete Vehicles",
            description:
              "Many car options available, still new, clean, and well-maintained"
          },
          {
            icon: "https://i.postimg.cc/g019bHkm/icon-price.png",
            title: "Competitive Prices",
            description:
              "Affordable and competitive prices, compare our prices with other car rentals"
          },
          {
            icon: "https://i.postimg.cc/T2rzBm8v/icon-24hrs.png",
            title: "24-Hour Service",
            description:
              "Ready to serve your needs 24 hours nonstop. We are also available on weekends"
          },
          {
            icon: "https://i.postimg.cc/pXs6tJq4/icon-professional.png",
            title: "Professional Drivers",
            description:
              "Professional, experienced, honest, friendly, and always punctual drivers"
          }
        ].map((reason, index) => (
          <WhyUsCard
            key={index}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </div>
    </div>
  );
};
const CTABanner = () => {
  return (
    <div className="ctabanner-section bluedark-bg">
      <h3>Rent a Car Now</h3>
      <p>
        Book your next adventure with us and experience the freedom of the open
        road. Whether it's a weekend getaway or a business trip, we've got you
        covered.
      </p>
      <a
        href="#"
        className="text-white text-decoration-none p-2 ctabanner-btn green-bg"
      >
        Book Now
      </a>
    </div>
  );
};
const FAQSection = () => {
  return (
    <div className="faq-section">
      <div className="left-faq-section">
        <h3>Frequently Asked Question</h3>
        <p>What People Ask Us?</p>
      </div>
      <div className="right-faq-section">
        <div className="item-faq-section">
          <p>What are the required conditions?</p>
          <img
            src="https://i.postimg.cc/L4Z7bpFD/Vector.png"
            alt="Down Arrow Icon"
          />
        </div>
        <div className="item-faq-section">
          <p>What is the minimum rental period for self-drive cars?</p>
          <img
            src="https://i.postimg.cc/L4Z7bpFD/Vector.png"
            alt="Down Arrow Icon"
          />
        </div>
        <div className="item-faq-section">
          <p>How many days in advance should I book a car rental?</p>
          <img
            src="https://i.postimg.cc/L4Z7bpFD/Vector.png"
            alt="Down Arrow Icon"
          />
        </div>
        <div className="item-faq-section">
          <p>Is there a pick-up and drop-off fee?</p>
          <img
            src="https://i.postimg.cc/L4Z7bpFD/Vector.png"
            alt="Down Arrow Icon"
          />
        </div>
        <div className="item-faq-section">
          <p>What if an accident occurs?</p>
          <img
            src="https://i.postimg.cc/L4Z7bpFD/Vector.png"
            alt="Down Arrow Icon"
          />
        </div>
      </div>
    </div>
  );
};

const CarRentalWebsite = () => {
  const navLinks = [
    { text: "Our Services", href: "#our-services" },
    { text: "Why Us", href: "#why-us" },
    { text: "Testimonial", href: "#testimonial" },
    { text: "FAQ", href: "#faq" }
  ];
  const services = [
    "Rent a Car with Driver for 12 Hours",
    "Rent a Self-Drive Car for 24 Hours",
    "Monthly Long-Term Car Rental",
    "Free Airport Pick-Up and Drop-Off Service",
    "Airport Transfer / Drop In Out Service"
  ];

  return (
    <section className="website-outer">
      <Navbar navLinks={navLinks} />
      <div className="grey-bg">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="container" id="our-services">
        <div className="our-services mx-auto">
          <div className="left-services-section">
            <img
              src="https://cdn.pixabay.com/photo/2018/08/09/12/22/call-center-3594408_1280.png"
              alt="Services Image"
              width={430}
            />
          </div>
          <div className="right-services-section">
            <h4 className="fw-bold mb-4">
              Best Car Rental for any kind of trip
            </h4>
            <div className="content-list-services">
              <p>
                Rent a car with {rentalCompany} Car Rental for guaranteed lower
                prices compared to others, new car conditions, and the best
                service quality for tourism, business, weddings, meetings, etc.
              </p>
              <div className="list-item-services mt-3">
                <ul>
                  {services.map((service, index) => (
                    <ServiceItem key={index} service={service} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="grey-bg" style={{margin:"20px 0px", padding:20}}>
      <div className="container  " id="why-us">
        <WhyUsSection />
      </div>
      </div>

      <div className="testimonial" id="testimonial">
        <div className="upper-testimonial-section text-center">
          <h3>Testimonial</h3>
          <p></p>
        </div>
        <div className="lower-testimonial-section">
          {[
            {
              ratingValue: 5,
              testimonial: `${rentalCompany} Car Rental made our vacation truly unforgettable. From the moment we booked to the drop-off, their service was impeccable. The quality of their vehicles and the professionalism of their team exceeded our expectations. Highly recommend for anyone looking for a stress-free and enjoyable rental experience.`,
              image: man,
              AuthorName: "Ahmed Ali"
            },
            {
              ratingValue: 5,
              testimonial: `${rentalCompany} Car Rental provided an exceptional experience from start to finish. Their fleet of high-quality vehicles, combined with top-notch customer service, ensured a seamless rental process. Highly recommended for reliable and comfortable travels. Don't hesitate to choose ${rentalCompany} Car Rental for your next adventure!`,
              image: woman,
              AuthorName: "Maryam Maryam"
            }
          ].map((testimonial, index) => (
            <TestimonialCard
              key={index}
              ratingValue={testimonial.ratingValue}
              testimonial={testimonial.testimonial}
              image={testimonial.image}
              AuthorName={testimonial.AuthorName}
            />
          ))}
        </div>
        <div className="navigation-testimonial-section">
          <img
            src="https://i.postimg.cc/0NbPBBfs/Left-button.png"
            alt="Left Arrow Icon"
          />
          <img
            src="https://i.postimg.cc/8khD9Whj/Right-button.png"
            alt="Right Arrow Icon"
          />
        </div>
      </div>
      <div className="container">
        <CTABanner />
      </div>
      <div className="grey-bg" style={{marginTop:20, padding:20}}>
      <div className="container" id="faq">
        <FAQSection />
      </div></div>
      <Footer navLinks={navLinks} />
    </section>
  );
};

export default CarRentalWebsite;
