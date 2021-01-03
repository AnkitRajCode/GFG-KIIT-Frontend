import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar from '../img/avatar.png';
import linkedin from '../img/linkedinColor.png';
import instagram from '../img/instagramColor.png';
import twitter from '../img/twitterColor.png';
import github from '../img/githubWhite.png';
import gfglogo from '../img/gfglogo.png';
import '../css/AboutUs.css';
import '../css/swiper.min.css';
import Background from './Background';
import Footer from './Footer';
    class AboutUs extends Component {
    render() {
       return (
           <div className="parent-element">
               <Background clipType="clipping-aboutUs" overlayColor="bgcolor-aboutUs"></Background>
               <div id="aboutUs_body">
                    <div id="cm_title">
                        <div class="cm_title_display">Core Member</div>
                        <div class="cm_title_line"></div>
                    </div>
                        <div class="aboutUs_row">
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Krish Murarka</div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />President
                                </div>
                                <div class="cm_social">
                                    <a href="https://www.linkedin.com/in/krish-murarka-9865a3122/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="https://github.com/krishmurarka" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="https://www.instagram.com/krish_murarka/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                    <a href="https://twitter.com/MurarkaKrish" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                                </div>
                            </div>
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Abhinav Prakash</div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />Secretary
                                </div>
                                <div class="cm_social">
                                    <a href="https://www.linkedin.com/in/itsmeabhinavprakash/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="https://github.com/abhinavprkash" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="https://www.instagram.com/_abhinavprkash_/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                    <a href="https://twitter.com/abhinaprkash" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                                </div>
                            </div>
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Aditya Das</div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />Head of Department
                                </div>
                                <div class="cm_social">
                                    <a href="https://www.linkedin.com/in/aditya-das-619a5019b/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="https://github.com/ThatOneTallKid" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="https://twitter.com/AdityaD14206128?s=08" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                                </div>
                            </div>
                        </div>
                    <div id="lead_title">
                        <div class="lead_title_display">Core Member : Leads </div>
                        <div class="lead_title_line"></div>
                    </div>
                        <div class="aboutUs_row">
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Ankit Raj</div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />Web Dev. Lead
                                </div>
                                <div class="cm_social">
                                    <a href="https://www.linkedin.com/in/ankit-raj-a3405b1b0" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="https://github.com/AnkitRajCode" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="https://www.instagram.com/invites/contact/?i=1c1m4y88f1a1e&utm_content=3e2xm0j" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                    <a href="https://twitter.com/ankit__raj__?s=08" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                                </div>
                            </div>
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Harsh  Dwivedi</div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />Competitive Programming Lead
                                </div>
                                <div class="cm_social">
                                    <a href="https://www.linkedin.com/in/harsh-dwivedi-18224b196/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="https://github.com/HarshCodes-07" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="https://www.instagram.com/_heisenberg.___/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                </div>
                            </div>
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Taranpreet Singh Chabbra</div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />Android Dev. Lead
                                </div>
                                <div class="cm_social">
                                    <a href="https://www.linkedin.com/in/taranpreet-singh-chabbra-27517918a/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="https://github.com/singhtaran1005" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="https://www.instagram.com/taran_3010/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                    <a href="https://twitter.com/Taran17809555" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                                </div>
                            </div>
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Sourav Dash</div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />Ux-UI Lead
                                </div>
                                <div class="cm_social">
                                    <a href="https://www.linkedin.com/in/srv-uxd/" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="https://github.com/kingsrv18" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="https://www.instagram.com/srv_18/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                    <a href="https://twitter.com/theSRV18" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                                </div>
                            </div>
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Ashwani Singh</div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />Content Writing Lead
                                </div>
                                <div class="cm_social">
                                    <a href="https://www.linkedin.com/in/ashwani-singh-542b421b4" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="https://github.com/darthAlgo" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="https://www.instagram.com/_ashwani__singh/" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                    <a href="https://twitter.com/___Ashwani__" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                                </div>
                            </div>
                            <div class="coreMemberCard">
                                <img src={avatar} class="dpcm" />
                                <div class="namecm">Veer </div>
                                <div class="desgcm">
                                    <img src={gfglogo} class="cm_gfglogo" />Marketing Lead
                                </div>
                                <div class="cm_social">
                                    <a href="#" title="Linkedin"><img src={linkedin} class="cm_logo" /></a>
                                    <a href="#" title="Github"><img src={github} class="cm_logo" /></a>
                                    <a href="#" title="Instagram"><img src={instagram} class="cm_logo" /></a>
                                    <a href="#" title="Twitter"><img src={twitter} class="cm_logo" /></a>
                                </div>
                            </div>
                        </div>
                    <div class="member_title_display">Members : Web Developers & Ux-UI </div>
                        <Swiper slidesPerView={4} className="swiper-container">
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                        </Swiper>

                    <div class="member_title_display">Members : Android Developers  </div>
                        <Swiper slidesPerView={4} className="swiper-container">
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                        </Swiper>

                    <div class="member_title_display">Members : Competitive Programming </div>
                        <Swiper slidesPerView={4} className="swiper-container">
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                        </Swiper>
                    
                    <div class="member_title_display">Members : Content Writing & Marketing </div>
                        <Swiper slidesPerView={4} className="swiper-container">
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <img src={avatar} className="dp_cm_member"/>
                                    <div className="name_member">Souvik</div>
                                    <div className="desg_member">Web Developer</div><br/>
                                    <div className="cm_social">
                                    <img src={linkedin} className="cm_logo1" />
                                        <img src={github} className="cm_logo" />
                                        <img src={instagram} className="cm_logo" />
                                        <img src={twitter} className="cm_logo" />
                                    </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
               <Footer bgColor="footer-aboutUs"></Footer>
           </div>
       )
    }
}
export default AboutUs;