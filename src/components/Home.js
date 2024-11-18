import React from 'react';
import Background from '../Assets/Background.jpg';
import Callicon from '../Assets/Call Icon.svg';
import Section from './Props/Section.js';
import Content from './Props/Content.js';
import About from '../Assets/About.png'
import Testimonial from './Props/Testimonial';
import Test1 from '../Assets/test-1.jpg';
import Test2 from '../Assets/test-2.jpg';
import Test3 from '../Assets/test-3.jpg';
import client1 from '../Assets/01.svg';
import client2 from '../Assets/02.svg';
import client3 from '../Assets/03.svg';
import client4 from '../Assets/04.svg';
import client5 from '../Assets/05.svg';
import Project from './Props/Project';
import p1 from '../Assets/p1.jpg';
import p2 from '../Assets/p2.jpg';
import p3 from '../Assets/p3.jpg';
import p4 from '../Assets/p4.jpg';
import bt from '../Assets/bt.svg';
import Counter from './Props/Counter';
import Line from '../Assets/Line.jpg';
import Blogcontent from './Props/Blogcontent';
import Blog1 from '../Assets/Blog-1.jpg';
import Job from './Props/Job';
import Arrow from '../Assets/Arrow.svg';


function Home() {
    return (
        <div className='Home'>
            <div className='Banner'>
                <div className='img'>
                    <img src={Background} alt="Background" />
                </div>
                <div className='content'>
                    <Content
                        title="Let Your Home Be Unique"
                        description="Bring Style to your place with our designs."
                        name="Get Started"
                    />
                </div>
            </div>
            <div className='Section'>
                <Section
                    title="Project Plan"
                    description="We create a tailored design plan that aligns with your vision, budget, and timeline."
                    link="/services"
                />

                <Section
                    title="Interior Work"
                    description="From materials to execution, we transform spaces to match your style and needs."
                    link="/services"
                />

                <Section
                    title="Realization"
                    description="We bring your design to life with attention to detail and high-quality craftsmanship."
                    link="/services"
                />
            </div>
            <div className='About'>
                <div className='About-post'>
                    <Content
                        title="We Create The Art Of Stylish Living Stylishly"
                        titleClass="about-title-class"
                        description="The right interior transforms a space into an experience. We specialize in crafting functional and beautiful environments that reflect your personality and elevate everyday living."
                        descriptionClass="about-des-class"
                        hideButton={true}
                    />
                    <div className='about-call'>
                        <img className='call' src={Callicon} alt="Call Icon" />
                        <div className='about-text'>
                            <span>012345678</span>
                            <p>Call Us Anytime</p>
                        </div>
                    </div>
                    <Content name="Get Free Estimate" descriptionClass="about-des-class" buttonClass="about-bt-class" />
                </div>
                <div className='about-img'>
                    <img src={About} alt="About" />
                </div>
            </div>
            <div className='testimonial-section'>
                <div>
                    <div className='testimonial-section-span'>
                        <span>What the People Thinks About Us</span>
                    </div>
                    <div className='testimonial'>
                        <Testimonial
                            src={Test1}
                            alt="Testimonial1"
                            title="Nattasha Mith"
                            text="Sydney, USA"
                            description="Working with this team was an absolute pleasure. Their attention to detail and creativity brought my vision to life perfectly." />
                        <Testimonial
                            src={Test2}
                            alt="Testimonial1"
                            title="Raymond Galario"
                            text="Sydney, Australia"
                            description="I was impressed by how efficiently they transformed my space. The designs were both functional and visually stunning." />
                        <Testimonial
                            src={Test3}
                            alt="Testimonial1"
                            title="Benny Roll"
                            text="Sydney, New York"
                            description="Their innovative approach to design exceeded my expectations. Every corner of my home now feels both stylish and comfortable." />
                    </div>
                </div>
            </div>
            <div className='clientLogo'>
                <img src={client1} alt="client" />
                <img src={client2} alt="client" />
                <img src={client3} alt="client" />
                <img src={client4} alt="client" />
                <img src={client5} alt="client" />
            </div>


            <div className='Project-Section'>
                <div className='Project-title'>
                    <span>
                        Follow Our Projects
                    </span>
                    <p>
                    It’s widely recognized that a space’s design and layout can captivate and engage. We focus on creating functional, aesthetically pleasing interiors that make a lasting impression.
                    </p>
                </div>
                <div className="flex flex-wrap justify-between pros">
                    <div>
                        <Project image={p1} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                    </div>
                    <div>
                        <Project image={p2} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                    </div>
                    <div>
                        <Project image={p3} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                    </div>
                    <div>
                        <Project image={p4} name="Modern Kitchen" description="Decor / Artchitecture" buttonText={bt} />
                    </div>
                </div>
            </div>


            <div className='Counter'>
                <Counter
                    name="12"
                    description="Years Of Experience"
                />
                <img className="line" src={Line} alt="Line" />
                <Counter
                    name="85"
                    description="Success Projects"
                />
                <img className="line" src={Line} alt="Line" />
                <Counter
                    name="15"
                    description="Active Projects"
                />
                <img className="line" src={Line} alt="Line" />
                <Counter
                    name="95"
                    description="Happy Customers"
                />
            </div>
            <div className='Blog-Section'>
                <div className='Project-title blog-title'>
                    <span>
                        Articles & News
                    </span>
                    <p>
                    It's well-known that the design and layout of content play a crucial role in engaging readers. Our articles provide valuable insights and updates on the latest trends in interior design, keeping you informed and inspired.
                    </p>
                </div>
                <div className='Blog-Wrapper'>
                    <Blogcontent
                        image={Blog1}
                        name="Let’s Get Solution For Building Construction Work"
                        description="26 December, 2022"
                        btn={bt}
                    />
                    <Blogcontent
                        image={Blog1}
                        name="Low Cost Latest Invented Interior Designing Ideas"
                        description="22 December, 2022"
                        btn={bt}
                    />
                    <Blogcontent
                        image={Blog1}
                        name="Best For Any Office & Business Interior Solution"
                        description="25 December, 2022"
                        btn={bt}
                    />
                </div>
            </div>
            <div className='Join'>
                <Job img={Arrow} />
            </div>
            <div className='Footer-Home'>

            </div>
        </div >
    );
}

export default Home;
