import React from 'react'

function Place() {
return (

<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Sam Codes Estate</title>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
  <link href="style.css" type="text/css" rel="Stylesheet" />
  <div id="header-hero-container">
    <header>
      <div className="flex container">
        <a id="logo" href="#">HOME MARKETPLACE</a>
        <nav>
          <button id="nav-toggle" className="hamburger-menu">
            <span className="strip" />
            <span className="strip" />
            <span className="strip" />
          </button>
          <ul id="nav-menu">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="http://www.google.com" target="_blank">Properties</a></li>
            <li><a href="#">Agents</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
            <li id="close-flyout"><span className="fas fa-times" /></li>
          </ul>
        </nav>
      </div>
    </header>
    <section id="hero">
      <div className="fade" />
      <div className="hero-text">
        <h1>Buy and sell real estate properties</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </section>
  </div>
  <section id="how-it-works">
    <div className="container">
      <h2>How It Works</h2>
      <div className="flex">
        <div>
          <span className="fas fa-home" />
          <h4>Find a Property.</h4>
          <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
        </div>
        <div>
          <span className="fas fa-dollar-sign" />
          <h4>Buy a Property.</h4>
          <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
        </div>
        <div>
          <span className="fas fa-chart-line" />
          <h4>Investing.</h4>
          <p>Lorem ipsum dolor sit amet consectectur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
  <section id="properties">
    <div className="container">
      <h2>Properties</h2>
      <div id="properties-slider" className="slick">
        <div>
          <img src="./img/property-6.jpg" alt="Property 1" />
          <div className="property-details">
            <p className="price">$3,400,000</p>
            <span className="beds">6 beds</span>
            <span className="baths">4 baths</span>
            <span className="sqft">4,250 sqft.</span>
            <address>
              480 12th, Unit 14, San Francisco, CA
            </address>
          </div>
        </div>
        <div>
          <img src="./img/property-7.jpg" alt="Property 1" />
          <div className="property-details">
            <p className="price">$3,400,000</p>
            <span className="beds">6 beds</span>
            <span className="baths">4 baths</span>
            <span className="sqft">4,250 sqft.</span>
            <address>
              480 12th, Unit 14, San Francisco, CA
            </address>
          </div>
        </div>
        <div>
          <img src="./img/property-4.jpg" alt="Property 1" />
          <div className="property-details">
            <p className="price">$3,400,000</p>
            <span className="beds">6 beds</span>
            <span className="baths">4 baths</span>
            <span className="sqft">4,250 sqft.</span>
            <address>
              480 12th, Unit 14, San Francisco, CA
            </address>
          </div>
        </div>
        <div>
          <img src="./img/property-9.jpg" alt="Property 1" />
          <div className="property-details">
            <p className="price">$3,400,000</p>
            <span className="beds">6 beds</span>
            <span className="baths">4 baths</span>
            <span className="sqft">4,250 sqft.</span>
            <address>
              480 12th, Unit 14, San Francisco, CA
            </address>
          </div>
        </div>
        <div>
          <img src="./img/property-3.jpg" alt="Property 1" />
          <div className="property-details">
            <p className="price">$3,400,000</p>
            <span className="beds">6 beds</span>
            <span className="baths">4 baths</span>
            <span className="sqft">4,250 sqft.</span>
            <address>
              480 12th, Unit 14, San Francisco, CA
            </address>
          </div>
        </div>
      </div>
      <button className="rounded">View All Property Listings</button>
    </div>
  </section>
  <section id="agents">
    <div className="container">
      <h2>Agents</h2>
      <p className="large-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
      <div className="flex">
        <div className="card">
          <img src="./img/agent-1.jpg" alt="Realtor 1" />
          <h3>Kaiara Spencer</h3>
          <p>Real Estate Agent</p>
        </div>
        <div className="card">
          <img src="./img/agent-2.jpg" alt="Realtor 1" />
          <h3>Dave Simpson</h3>
          <p>Real Estate Agent</p>
        </div>
        <div className="card">
          <img src="./img/agent-4.jpg" alt="Realtor 1" />
          <h3>Ben Thompson</h3>
          <p>Real Estate Agent</p>
        </div>
        <div className="card">
          <img src="./img/agent-5.jpg" alt="Realtor 1" />
          <h3>Kyla Stewart</h3>
          <p>Real Estate Agent</p>
        </div>
        <div className="card">
          <img src="./img/agent-6.jpg" alt="Realtor 1" />
          <h3>Rich Moffatt</h3>
          <p>Real Estate Agent</p>
        </div>
        <div className="card">
          <img src="./img/agent-7.jpg" alt="Realtor 1" />
          <h3>Stuart Redman</h3>
          <p>Real Estate Agent</p>
        </div>
      </div>
    </div>
  </section>
  <section id="the-best">
    <div className="flex container">
      <img src="./img/post-4.jpg" alt="Property 1" />
      <div>
        <h2>We Are the Best Real Estate Company</h2>
        <p className="large-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.</p>
        <ul>
          <li>Placeat maxime animi minus</li>
          <li>Placeat maxime animi minus</li>
          <li>Placeat maxime animi minus</li>
          <li>Placeat maxime animi minus</li>
          <li>Placeat maxime animi minus</li>
        </ul>
        <button className="rounded">Learn More</button>
      </div>
    </div>
  </section>
  <section id="services">
    <div className="container">
      <h2>Services</h2>
      <div className="flex">
        <div>
          <div className="fas fa-home" />
          <div className="services-card-right">
            <h3>Search Property</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div>
          <div className="fas fa-dollar-sign" />
          <div className="services-card-right">
            <h3>Buy Property</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div>
          <div className="fas fa-chart-line" />
          <div className="services-card-right">
            <h3>Investing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div>
          <div className="fas fa-building" />
          <div className="services-card-right">
            <h3>List a Property</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div>
          <div className="fas fa-search" />
          <div className="services-card-right">
            <h3>Property Locator</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div>
          <div className="fas fa-mobile-alt" />
          <div className="services-card-right">
            <h3>Stated Apps</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="testimonials">
    <div className="container">
      <h2>What Our Clients Are Saying</h2>
      <div id="testimonials-slider">
        <div>
          <blockquote>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium."</p>
          </blockquote>
          <div className="testimonials-caption">
            <img src="https://onclickwebdesign.com/wp-content/uploads/person_7.jpg" alt="Client 7" />
            <p>Nick Andros</p>
          </div>
        </div>
        <div>
          <blockquote>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium."</p>
          </blockquote>
          <div className="testimonials-caption">
            <img src="https://onclickwebdesign.com/wp-content/uploads/person_5.jpg" alt="Client 7" />
            <p>Larry Underwood</p>
          </div>
        </div>
        <div>
          <blockquote>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum vitae explicabo dolore ratione. Quia iure quod ipsa blanditiis sint nulla a nam veritatis ex eos. Dicta molestiae dolorum laudantium."</p>
          </blockquote>
          <div className="testimonials-caption">
            <img src="https://onclickwebdesign.com/wp-content/uploads/person_8.jpg" alt="Client 7" />
            <p>Fran Goldsmith</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div className="container">
      <h2>Contact Us</h2>
      <div className="flex">
        <div id="form-container">
          <h3>Contact Form</h3>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
            <label htmlFor="message">Message</label>
            <textarea id="message" defaultValue={"Write your message here.."} />
            <button className="rounded">Send Message</button>
          </form>
        </div>
        <div id="address-container">
          <label>Address</label>
          <address>
            20377 Evergreen Terrace Mountain View, California, USA 
          </address>
          <label>Phone</label>
          <a href="#">232-232-2323</a>
          <label>Email Address</label>
          <a href="#">ouremail@domain.com</a>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="flex container">
      <div className="footer-about">
        <h5>About Stated</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
      </div>
      <div className="footer-quick-links">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-subscribe">
        <h5>Subscribe to our Newsletter</h5>
        <div id="subscribe-container">
          <input type="text" placeholder="Enter Email" />
          <button className="right-rounded">Send</button>
        </div>
        <h5 className="follow-us">Follow Us</h5>
        <ul>
          <li><a href="#"><span className="fab fa-facebook-f" /></a></li>
          <li><a href="#"><span className="fab fa-twitter" /></a></li>
          <li><a href="#"><span className="fab fa-instagram" /></a></li>
          <li><a href="#"><span className="fab fa-linkedin-in" /></a></li>
        </ul>
      </div>
    </div>
    <small>
      Copyright © 2019 All rights reserved | This template is made with <span className="fa fa-heart" /> by <a href="https://colorlib.com">Colorlib</a>
    </small>
  </footer>
</div>
)
}

export default Place
