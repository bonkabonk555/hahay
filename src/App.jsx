import './App.css';

function App() {
  return (
    <>
      <header>
        <a href="" className="brand" data-aos="zoom-in" data-aos-duration="1000">SERACILRY</a>
        <div className="menu-btn"></div>
        <div className="navigation">
          <a href="#main" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Home</a>
          <a href="#about" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">About</a>
          <a href="#fees" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Pricelist</a>
          <a href="#contact" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">Contact</a>
        </div>
      </header>

      <section className="main" id="main">
        <div className="content">
          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800">
            We're <br /><span>SERACILRY</span>
          </h2>
          <div className="animated-text" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">
            <h3>Designer</h3>
            <h3>Editor</h3>
          </div>
          <a href="#" className="btn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1000">See Our Work</a>
          <div className="media-icons">
            <a href="https://www.instagram.com/seracilry/" target="_blank" rel="noopener noreferrer" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/seracilry" target="_blank" rel="noopener noreferrer" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1400">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://t.me/seracilry" target="_blank" rel="noopener noreferrer" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1400">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="title reveal">
            <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000">About SERACILRY</h2>
        </div>
        <div className="content">
            <div className="column col-left reveal">
            </div>
            <div className="column col-right reveal">
                <h2 className="content-title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">Hey There! This is SERACILRY</h2>
                <p className="paragraph-text" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400">We believe that every design tells a story—and we’re here to make yours unforgettable. Specializing in Canva editing services, Seracilry delivers designs that are fast, visually stunning, and tailored exactly to your vision. Whether you need a sleek presentation, an eye-catching social media post, or a beautifully crafted poster, we bring your ideas to life with precision and creativity. What sets Seracilry apart is our commitment to excellence. We don’t just work quickly—we work smart, ensuring that every detail aligns with your expectations. Your satisfaction is our priority, and we take pride in creating results that not only meet but exceed your goals. Fast, high-quality, and exactly the way you want it—Seracilry isn’t just an editing service, it’s your creative partner. Let’s make something amazing together. </p>
                <a href="#" className="btn" data-aos="zoom-out-left" data-aos-duration="1000" data-aos-delay="600">See more</a>
            </div>
        </div>
      </section>
    </>
  );
}

export default App
