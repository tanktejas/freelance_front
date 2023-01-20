import React from "react";
import { Link } from "react-router-dom";

import "../main.css";

function AboutUs() {
  return (
    <div style={{ backgroundImage: 'url("pattern-bg.jpg")' }}>
      <div class="parallax about-top-slide" id="parallax">
        <div class="container">
          <div class="row">
            <div class="top-slide-con">
              <div class="col-md-12 text-left">
                <h1 class="section-title">
                  A Single Portal of <br />
                  All types of projects{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container  pb-50">
        <div class="row">
          <div class="col-lg-12 col-md-12 text-left">
            <div class="about-story-con">
              <div class="soln-heading">
                <h2 class="text-left">What does our website do?</h2>
              </div>

              <p>
                Our website is helpful to all the Developers to do freelancing
                work. They can pick some project which is posted by some client
                and can work on that and client can post their project which has
                to do.{" "}
              </p>

              <p>
                Our main goal is to make big impact to freelancing work across
                the glob.
                <Link style={{ textDecoration: "none" }} to="/">
                  <a class="internal-links" href="#">
                    freelancing Hub
                  </a>
                </Link>{" "}
                is all about ‘doing things innovatively’ and ‘never giving up’.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="parallax solution-main pricing-main"
        id="parallax"
        data-color="#ffffff"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-7">
              <div class="text-left food-top-content">
                <div class="pc-homeimg-main hom-hero become2 food-new-img mobile-about-img">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/What-is-a-Digital-Marketing-Strategy.png"
                    src="img/What-is-a-Digital-Marketing-Strategy.png"
                    alt="Food Delivery App Development"
                    title="Food Delivery App Development"
                    width="451"
                    height="500"
                  />
                </div>
                <h1 class="section-title mb-30 aos-init aos-animate">
                  Who We Are ?
                </h1>
                <p>
                  India’s largest freelancing network with the vision to make
                  all Connected.
                </p>

                {/* <Link style={{ textDecoration: "none" }} to="/Team">
                  <a class=" button2 get-a-demo" href="#">
                    Meet Our Team
                  </a>
                </Link> */}
              </div>
            </div>
            <div class="col-xs-12 col-sm-5 col-md-5 food-top-img food-top-img-n desktop-about-img">
              <div class="become2">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/What-is-a-Digital-Marketing-Strategy.png"
                  src="img/What-is-a-Digital-Marketing-Strategy.png"
                  alt="Medicine Delivery App Development"
                  title="Medicine Delivery App Development"
                  width="451"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        class="parallax we-are-main"
        style={{ backgroundColor: "rgb(220 236 251 / 71%)" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 text-left">
              <div class="soln-heading">
                <h2>Innovation meets endless opportunity At FreelanceHUB.</h2>
              </div>
              <p>
                As a developer we are always enthusiastic to build projects. As
                a client we always see to grow our business by making projects
                from best class developer.
              </p>
              <a class="button2" href="#">
                Explore
              </a>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12">
              <div class="we-are">
                <div class="col-md-12 col-sm-12 left">
                  <div class="we-are-box" style={{ padding: "30px" }}>
                    <div class="counter-box">
                      <h2 class="count">1000</h2>
                      <span>
                        <h2>+</h2>
                      </span>
                    </div>
                    <h5>Client Benefited</h5>
                  </div>
                </div>
                <div class="col-md-12 col-sm-12 right">
                  <div class="row">
                    <div
                      class="col-md-6 col-sm-6"
                      style={{
                        borderTop: "1px solid black",
                        borderRight: "1px solid black",
                        padding: "30px",
                      }}
                    >
                      <div class="we-are-box">
                        <div class="counter-box">
                          <h2 class="count">65</h2>
                          <span>
                            <h2>+</h2>
                          </span>
                        </div>
                        <h5>Developer Connected</h5>
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-sm-6"
                      style={{ borderTop: "1px solid black", padding: "30px" }}
                    >
                      <div class="we-are-box">
                        <div class="counter-box">
                          <h2 class="count">99</h2>
                          <span>
                            <h2>%</h2>
                          </span>
                        </div>
                        <h5>Project uploaded/done</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container pt-100">
        <div class="row">
          <div class="col-lg-12 col-md-12 text-center">
            <div class="about-story-con">
              <div class="soln-heading">
                <h2 class="text-center">Vision and Mission</h2>
              </div>

              <p>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a class="internal-links" href="#">
                    freelancing Hub
                  </a>
                </Link>{" "}
                's mission is to spread freelancing across the glob and grow
                every developer skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-100">
        <div class="row">
          <div class="col-lg-12 col-md-12 text-center">
            <div class="about-story-con">
              <div class="soln-heading">
                <h2 class="text-center">Goal</h2>
              </div>

              <p>
                {" "}
                <Link style={{ textDecoration: "none" }} to="/">
                  <a class="internal-links" href="#">
                    freelancing Hub
                  </a>
                </Link>{" "}
                's Goal is to help 100000+ client to get their project done and
                developer to grow their skill and earn money.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        class="food-client-video  home-food-client-video pb-5"
        style={{ backgroundColor: "rgb(220 236 251 / 71%)" }}
      >
        {/* <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="client-video-head text-center">
                <div class="soln-heading">
                  <h2 style={{ textAlign: "left" }}>
                    Right from the Client Corner!
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="testi-loding-main">
            <div class="testi-loding-box bgafter1">
              <div class="testi-loding-img">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/david-c1.png"
                  src="img/david-c1.png"
                  alt="David Koganti"
                  title="David Koganti"
                />
              </div>

              <p>
                <span class="quote-sign">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/quote-sign.png"
                    src="img/quote-sign.png"
                  />
                </span>
                " We have been using Ashish and his team for over 3 years now.
                We have posted several projects, each worth a few thousand
                dollars, and they have delivered them punctually every single
                time! I guess that pretty much sums up the excellent experience
                we have had with iCoderz (Ashish and Team)! They have excellent
                communication skills in English, very prompt in replying and
                extremely hard working as a team. I have been in IT for over 25
                years now and this team has been a lucky find for us. I have a
                few more projects lined up and will be using them again. Highly
                recommended! "
              </p>
              <h5 class="testimonial-author">
                David Koganti - <small>CEO</small>
              </h5>
            </div>
            <div class="testi-loding-box bgafter2">
              <div class="testi-loding-img">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/dag-c1.png"
                  src="img/dag-c1.png"
                  alt="Dag Gårdheim"
                  title="Dag Gårdheim"
                />
              </div>

              <p>
                <span class="quote-sign">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/quote-sign.png"
                    src="img/quote-sign.png"
                  />
                </span>
                " The app has seen a substantial profit. iCoderz Solutions was a
                particularly valuable partner during the ideation phase,
                offering advice and sharing honest opinions about the product.
                The team's straight-forward communication style complements
                their excellent technical skills. "
              </p>
              <h5 class="testimonial-author">
                Dag Gårdheim - <small>(Director)</small>
              </h5>
            </div>
            <div class="testi-loding-box bgafter1">
              <div class="testi-loding-img">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/omar-c1.png"
                  src="img/omar-c1.png"
                  alt="Omar"
                  title="Omar"
                />
              </div>

              <p>
                <span class="quote-sign">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/quote-sign.png"
                    src="img/quote-sign.png"
                  />
                </span>
                " Great Guys to work with! Always listened to what I instructed
                and came up with innovative design ideas. Prompt communication
                and the dedicated team made the entire project very easy on our
                part. No second thoughts about hiring them for future projects.
                "
              </p>
              <h5 class="testimonial-author">
                Omar - <small>CEO</small>
              </h5>
            </div>
            <div class="testi-loding-box">
              <div class="testi-loding-img">
                <img
                  class=""
                  loading="lazyload"
                  data-src="img/jason-m-coles-c1.png"
                  src="img/jason-m-coles-c1.png"
                  alt="Jason"
                  title="Jason"
                />
              </div>

              <p>
                <span class="quote-sign">
                  <img
                    class=""
                    loading="lazyload"
                    data-src="img/quote-sign.png"
                    src="img/quote-sign.png"
                  />
                </span>
                " Working with iCoderz has been a great experience. They have
                helped me with my first app project and have been very
                professional and responsive to my needs. Even when i needed to
                alter my initial plans for the app, they were understanding and
                had the skillset needed to accommodate my request. I would
                highly recommend them to anyone who is looking to have a great
                application built. "
              </p>
              <h5 class="testimonial-author">
                Jason - <small>CEO</small>
              </h5>
            </div>
          </div>
        </div>
        <div class="container ">
          <div className=" col-md-12 ml-0 ml-lg-3 my-2 my-lg-0 text-center">
            <a className=" button2 " href="#">
              view more
            </a>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default AboutUs;
