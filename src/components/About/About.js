import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TabTitle } from "../../utils/General";
import { Slide } from 'react-slideshow-image';
import { isEmpty } from "../../utils";
import ReactLoading from 'react-loading';

import './About.css';
import slider1 from '../../assets/images/about/1.png'
import BottomImg from '../../assets/images/about/bottom.jpg';
import MapImg from '../../assets/images/about/map.png';
import OneSVG from '../../components/Electron/about/1.svg';
import TwoSVG from '../../components/Electron/about/2.svg';
import ThreeSVG from '../../components/Electron/about/3.svg';
import FourSVG from '../../components/Electron/about/4.svg';
import FiveSVG from '../../components/Electron/about/5.svg';

import ContactMap from "../ContactMap/ContactMap";
import { FadeInSection } from "../FadeInSection/FadeInSection";
import Footer from "../Footer/Footer";
const About = () => {

    TabTitle("ABOUT - PROQURE");
    const [fadeIn, setFadeIn] = useState(false);
    const [loading, setLoading ] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setTimeout(() => {
                setFadeIn(true);
                // window.scrollTo(0, 0);    
            }, 500);
          }, 1500);
    },[]);

    const slideImages = [slider1];
    // const slideImages = [temp, temp];
    const slideProperties = {
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        // indicators: true,
        // arrows: true,
        autoplay: true, // Set autoplay to true
        interval: 3000, // Set the interval between slides to 5000ms (5 seconds)
    };
    return (
      <>
        {loading ? (
          <ReactLoading type="balls" className="m-auto entire-loading" />
        ) : (
          <>
            <div className={`fade-in ${fadeIn ? "active" : ""}`} id="partbody">
              <div
                className="about_banner"
                style={{ backgroundImage: `url(${slider1})` }}
              ></div>
              <FadeInSection>
                {/* <div className="aboutcontainer">
                  <div className="abut_beginning">
                    <span className="we_R">We Are</span>
                    <h1 className="heading">Lenos</h1>
                    <span className="abut_beginning_p">
                        We believe in honesty, simplicity, and transparency. Our goal is to provide individuals
                        with the highest quality products that are created with them in mind. Welcome to our brand,
                        where our goal is to lighten the body and free the spirit.
                    </span>
                  </div>
                </div> */}
              </FadeInSection>
              <FadeInSection>
                <div className="aboutcontainer">
                  <div className="abut_beginning">
                    <h2 className="heading">We Are Lenos</h2>
                    <div className="subcontent">
                      We believe in honesty, simplicity, and transparency. Our goal is to provide individuals
                      with the highest quality products that are created with them in mind. Welcome to our brand,
                      where our goal is to lighten the body and free the spirit.
                    </div>
                  </div>
                  <div className="platform_row">
                    {/* <div className="col_left">
                      <div className="plat_option">
                        <img className="BBB leftimg" src={LeftImg} alt="BBB" />
                        <span className="title AAA">Brands</span>
                      </div>
                    </div> */}
                    <div className="omnibiz_platform">
                      <div className="title">
                        <img className="icon" src={OneSVG} alt="onesvg" />
                        <h4>WHAT MAKES The LENOS PLATFORM UNIQUE</h4>
                      </div>
                      <div className="platform_toppy">
                        <div className="item">
                          <div className="item_icon">
                            <img src={TwoSVG} alt="twosvg" />
                          </div>
                          <div className="describe">
                            <h5>CONSISTENT EVALUATION</h5>
                            <span>
                              A rigorous application of data-driven science informs our cultivation approach.
                            </span>
                          </div>
                        </div>
                        {/* <div className="item">
                          <div className="item_icon">
                            <img src={ThreeSVG} alt="threesvg" />
                          </div>
                          <div className="describe">
                            <h5>Crowdsourced Logistics</h5>
                            <span>
                              Utilize the capacity of regional logistics
                              companies on demand
                            </span>
                          </div>
                        </div> */}
                      </div>
                      <div className="platform_toppy">
                        <div className="item">
                          <div className="item_icon">
                            <img src={FourSVG} alt="foursvg" />
                          </div>
                          <div className="describe">
                            <h5>INNOVATIVE TECHNIQUES</h5>
                            <span>
                              Leading horticultural methods enable our master growers to push the limits of traditional cannabis practices.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="platform_toppy">
                        <div className="item">
                          <div className="item_icon">
                            <img src={FiveSVG} alt="fivesvg" />
                          </div>
                          <div className="describe">
                            <h5>ADVANCING WELLNESS</h5>
                            <span>
                              Through constant curation of our prized genetic library, we push the limits of well-being toward a brighter future.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col_right">
                      <div className="plat_option mt-5-mb">
                        <img
                          className="BBB rightimg"
                          src={RightImg}
                          alt="rightimg"
                        />
                        <span className="title AAA">Retailers</span>
                      </div>
                    </div> */}
                  </div>
                  <div className="abt_white">
                    <div className="container">
                      <div className="mvsion_row">
                        <div className="mvsion_grid">
                          <div className="mvsion_warp">
                            <h3 className="heading">Our Vision</h3>
                            <span className="descibe">
                              
                            </span>
                            <hr
                              color="#D0D0D0"
                              style={{ margin: "30px 0px" }}
                            />
                            <h3 className="heading">Our Mission</h3>
                            <span className="descibe">
                              Our mission is to provide ...
                            </span>
                          </div>
                        </div>
                        <div className="mvsion_grid">
                          <img
                            className="mvsion_img"
                            src={BottomImg}
                            alt=""
                            data-xblocker="passed"
                            style={{ visibility: "visible" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="bottom_option mt-5-mb">
                                    <img className="BBB" src={BottomImg} alt="rightimg" />
                                    <span className="title AAA">Retailers</span>
                                </div> */}
                </div>
              </FadeInSection>
              {/* <FadeInSection>
                <div className="sec_space team_sec">
                  <div className="container">
                    <div className="abt_heading_warp">
                      <h2 style={{ marginBottom: "20px" }}>OmniBiz Team</h2>
                    </div>
                    <div className="team_card">
                      <div className="team_row">
                        <div>
                          <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="team"
                          >
                            <div className="img_link">
                              <img
                                src={ManImg1}
                                alt=""
                                data-xblocker="passed"
                                style={{ visibility: "visible" }}
                              />
                              <i className="linkedin" target="_blank">
                                <LinkedSVG />
                              </i>
                            </div>
                            <span className="name">Ify Iyadi</span>
                            <span className="designation">
                              Head of People &amp; Culture
                            </span>
                          </a>
                        </div>
                        <div>
                          <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="team"
                          >
                            <div className="img_link">
                              <img
                                src={ManImg2}
                                alt=""
                                data-xblocker="passed"
                                style={{ visibility: "visible" }}
                              />
                              <i className="linkedin" target="_blank">
                                <LinkedSVG />
                              </i>
                            </div>
                            <span className="name">Ify Iyadi</span>
                            <span className="designation">
                              Head of People &amp; Culture
                            </span>
                          </a>
                        </div>
                        <div>
                          <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="team"
                          >
                            <div className="img_link">
                              <img
                                src={ManImg3}
                                alt=""
                                data-xblocker="passed"
                                style={{ visibility: "visible" }}
                              />
                              <i className="linkedin" target="_blank">
                                <LinkedSVG />
                              </i>
                            </div>
                            <span className="name">Ify Iyadi</span>
                            <span className="designation">
                              Head of People &amp; Culture
                            </span>
                          </a>
                        </div>
                        <div>
                          <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="team"
                          >
                            <div className="img_link">
                              <img
                                src={ManImg4}
                                alt=""
                                data-xblocker="passed"
                                style={{ visibility: "visible" }}
                              />
                              <i className="linkedin" target="_blank">
                                <LinkedSVG />
                              </i>
                            </div>
                            <span className="name">Ify Iyadi</span>
                            <span className="designation">
                              Head of People &amp; Culture
                            </span>
                          </a>
                        </div>
                        <div>
                          <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="team"
                          >
                            <div className="img_link">
                              <img
                                src={ManImg5}
                                alt=""
                                data-xblocker="passed"
                                style={{ visibility: "visible" }}
                              />
                              <i className="linkedin" target="_blank">
                                <LinkedSVG />
                              </i>
                            </div>
                            <span className="name">Ify Iyadi</span>
                            <span className="designation">
                              Head of People &amp; Culture
                            </span>
                          </a>
                        </div>
                        <div>
                          <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="team"
                          >
                            <div className="img_link">
                              <img
                                src={ManImg6}
                                alt=""
                                data-xblocker="passed"
                                style={{ visibility: "visible" }}
                              />
                              <i className="linkedin" target="_blank">
                                <LinkedSVG />
                              </i>
                            </div>
                            <span className="name">Ify Iyadi</span>
                            <span className="designation">
                              Head of People &amp; Culture
                            </span>
                          </a>
                        </div>
                        <div>
                          <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="team"
                          >
                            <div className="img_link">
                              <img
                                src={AtmosphereImg}
                                alt=""
                                data-xblocker="passed"
                                style={{ visibility: "visible" }}
                              />
                              <i className="linkedin" target="_blank">
                                <LinkedSVG />
                              </i>
                            </div>
                            <span className="name">Ify Iyadi</span>
                            <span className="designation">
                              Head of People &amp; Culture
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection> */}
              <FadeInSection>     
                <div className="container">
                  {/* <div className="traction_plate">
                    <span className="tag">TRACTION</span>
                  </div>
                  <div className="traction_plate_mb">
                    <span className="tag">TRACTION</span>
                  </div>
                  <div className="container">
                    <div className="traction_row">
                      <div className="col_left">
                        <div className="traction_grid">
                          <span className="count">120,000+</span>
                          <span className="describe">
                            Retailers doing business the smarter way
                          </span>
                        </div>
                        <div className="traction_grid">
                          <span className="count">1,500+</span>
                          <span className="describe">
                            Field Agents across Nigeria
                          </span>
                        </div>
                        <div className="traction_grid">
                          <span className="count">135+</span>
                          <span className="describe">
                            Local government areas covered across Nigeria and
                            Ghana
                          </span>
                        </div>
                      </div>
                      <div className="col_right">
                        <img className="map" src={MapImg} alt="" />
                      </div>
                    </div>
                  </div> */}
                    <ContactMap />
                </div>
              </FadeInSection>
            </div>
            <Footer />
          </>
        )}
      </>
    );
}

export default About;