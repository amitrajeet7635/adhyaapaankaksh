import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import { HashLink } from 'react-router-hash-link';
import CardCarousel from '../components/Testimonial';
import { ChevronLeft, ChevronRight } from 'lucide-react';



function Home() {

    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'text-black-300' : 'text-black';

    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <>
            <section id='home' className='pt-[0]' >
                <img className='absolute top-[-500px] sm:top-[20%] left-[5%] z-[1] lg:left-[3%] ' src="/Pen.png" alt="pen" />
                <img className='absolute top-[-500px] sm:top-[59%] right-[3%] z-[1] lg:top-[17%] lg:left-[43%]' src="/graph.png" alt="graph-img" />
                <img className='absolute top-[-500px] z-[1]  lg:left-[43%] lg:top-[46%] lg:h-[40px] xl:h-[60px] xl:top-[50%] 2xl:top-[48%] 2xl:left-[40%] 3xl:top-[50%] 3xl:h-[63px] 3xl:left-[42%]' src="/flask.png" alt="flask" />
                <img className='absolute top-[-500px] z-[1] sm:top-[70%]  lg:h-[150px] lg:top-[75%] xl:top-[83%] 2xl:top-[75%] 3xl:top-[75%] 3xl:h-[200px]' src="/Globe.png" alt="globe-img" />


                <div className="hero-section mt-[10rem] flex flex-col gap-[2rem] min-h-[100vh] sm:min-h-[110vh] lg:mt-[5rem] lg:grid lg:grid-cols-[1.3fr_1fr] grid-flow-col m-[30px] content-center lg:min-h-[80vh] xl:h-[120vh] 3xl:h-[100vh]">

                    {/* hero image */}
                    <div className=" h-auto ml-[auto] mr-[auto] mt-[2rem] lg:col-start-2 lg:h-[60vh] lg:mt-0 w-">
                        <img className='w-[300px] h-[300px] relative sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]  top-[-30px] xl:w-[600px] xl:h-[600px] xl:top-[-50px] 2xl:w-[650px] 2xl:h-[650px] 3xl:w-[800px] 3xl:h-[800px] 3xl:top-[-100px]' src="/hero-img.png " alt="" />
                    </div>

                    {/* hero content */}
                    <div className="lg:col-start-1 w-[100%] h-[40vh]">
                        <div className="  flex flex-col gap-4 items-center lg:items-start">
                            <p className="text-center text-[27px] font-montserrat font-bold sm:text-[45px] lg:text-left xl:text-[65px] 3xl:text-[84px]  ">Building Foundations,<br />Shaping Futures!</p>

                            <p className="text-[15px] ml-[10px] mr-[10px] text-center font-medium font-poppins relative sm:text-[15px] w-[80%] lg:text-left lg:ml-0 lg:mr-0 lg:text-[18px] lg:w-[50vw] xl:text-[22px] 3xl:text-[26px] z-10 ">We believe a strong foundation is key to lasting success. Our dedicated teacher provides personalized guidance, helping students build essential skills and knowledge. With focused support and encouragement, students gain the confidence to tackle challenges and are well-prepared to achieve their academic and personal goals.</p>

                            <HashLink smooth to="/#courses" className={`bg-[#EC1F26] flex justify-center items-center font-montserrat font-bold text-[15px] text-white px-4 py-2 rounded-[20px] w-[230px] h-[50px] sm:w-[300px] sm:h-[60px] sm:text-[18px] lg:h-[64px] lg:text-[22px] xl:text-[20px] content-center  3xl:w-[400px] 3xl:h-[80px] 3xl:text-[27px] z-[10] ${ isActive('/#courses')}`}>
                            Discover Our Courses  <ChevronRight /></HashLink>
                        </div>
                    </div>


                </div>
                <div className="feature-sec flex flex-col  m-auto  w-[100%] h-[50vh] sm:items-center md:h-[30vh] lg:h-[50vh] lg:m-[10px] lg:w-[100%] lg:items-start">

                    <div className='flex gap-[5px] justify-center ml-[30px] mr-[30px] sm:w-fit'>
                        <p className='text-[20px] m-auto font-montserrat font-bold sm:text-[25px] sm:w-fit lg:text-[30px] xl:text-[40px]   3xl:text-[50px]'>Facilities In Our Learning Space </p>
                        <img className='book-img relative top-[15px] left-[-4rem] sm:top-[0px] sm:left-[0] sm:scale-[100%] ' src="/book.svg" alt="book" />
                    </div>
                    <div className='features-img scale-[100%] grid grid-cols-2 grid-rows-2 gap-4 place-items-center sm:gap-x-[5rem] sm:scale-[100%] sm:mt-[1rem] md:flex md:justify-center md:gap-4 lg:h-[30vh] lg:gap-[2rem] lg:scale-[120%] lg:m-auto xl:gap-[5rem] xl:scale-[130%] xl:mt-[2rem] 2xl:scale-[150%] 2xl:gap-[7rem] 3xl:scale-[170%] 3xl:gap-[5rem] 3xl:mt-[3rem]'>
                        <img src="/Mentorship.svg" alt="mentorship" />
                        <img src="/Assessment.svg" alt="assessment" />
                        <img src="/Notes.svg" alt="notes" />
                        <img src="/ac-class.svg" alt="acclass" />
                    </div>
                </div>
            </section>


            <section id='about' ref={aboutRef} className='min-h-[100vh] w-[100%] pt-[2.5rem] overflow-hidden'>
                <div className='flex flex-col items-center m-8'>
                    <p className='about-title text-[60px] font-montserrat font-bold sm:text-[70px] 2xl:text-[100px] 3xl:text-[100px]'>About Us</p>
                    <div className='flex flex-col items-center lg:grid lg:grid-cols-2 gap-0'>
                        <img
                            className={`place-self-center w-[100%] sm:w-[300px] lg:w-[500px] 3xl:w-[600px] rounded-[3rem] transform transition-all duration-700 ease-out lg:${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
                            src="/nikita mam.svg"
                            alt="mam"
                        />
                        <p className={`about-content font-bold font-poppins text-justify mt-[1rem]xl:text-[18px] 2xl:text-[19px] 3xl:text-[22px] lg:transform  lg:text-[15px]  lg:transition-all lg:duration-700 lg:ease-out lg:${isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}>
                            Mrs. Nikita Jain is a passionate and dedicated educator with a strong academic foundation. She holds a B.Sc (H) in Mathematics, a B.Ed, and an M.Sc in Mathematics from Delhi University. Her schooling was completed at D.A.V. Public School, Sec-14, Gurugram which instilled in her the values of discipline, curiosity, and a love for learning. <br /><br /> Her goal is to inspire her students, reward their progress, and guide them toward achieving their fullest potential. With her passion for teaching and commitment to continuous improvement, she strives to create a learning experience that nurtures both academic success and a lifelong love of learning. <br /><br />She strives to create a comfortable and supportive learning environment for her students. She believes that learning should be both engaging and enjoyable, which is why she work hard to provide excellent study materials tailored to each student’s needs. With strong time management skills, she ensures that each lesson is both efficient and engaging, allowing room for flexibility to meet the unique needs of her students. <br /><br />While she is friendly and approachable, she also maintains a firm approach to ensure that all revisions are completed on time and the syllabus is covered thoroughly. The syllabus is completed ahead of schedule, allowing plenty of time for revisions and reinforcing the material, which help students feel confident and well-prepared.
                        </p>
                    </div>
                </div>
            </section>

            <section id='achievers' className='min-h-[90vh] sm:min-h-[130vh] md:min-h-[170vh] lg:min-h-[160vh] lg:mt-[5rem] xl:min-h-[150vh] 2xl:min-h-[150vh] 3xl:min-h-[180vh]'>
                <div className='flex flex-col items-center sm:gap-[5rem] min-h-[80vh]'>
                    <p className='achi-head text-[35px] font-montserrat font-bold sm:text-[50px] md:text-[60px] xl:text-[70px] 2xl:text-[80px] 3xl:text-[100px]'>Our Star Achievers</p>

                    <div className='one-achi mt-[1rem] scale-[115%] sm:scale-[150%] md:scale-[200%] xl:scale-[220%] xl:mt-[1rem] 2xl:scale-[250%] xl:hidden'><img src="/achiever1.svg" alt="achiever1" /></div>
                    <div className='four-achi grid place-items-center grid-cols-2 gap-1 mt-[4rem] scale-[115%] sm:scale-[150%] sm:gap-x-4 sm:mt-[5rem] md:scale-[200%] md:mt-[13rem]  xl:scale-[200%] xl:mt-[10%] 2xl:mt-[15%] 2xl:grid-cols-3 2xl:gap-4 2xl:scale-[230%] 3xl:scale-[300%] 3xl:mt-[20%]'>

                        <img className='hidden xl:block' src="/achiever1.svg" alt="achiever1" />
                        <img src="/achiever2.svg" alt="achiever2" />
                        <img src="/achiever3.svg" alt="achiever3" />

                        <div className="col-span-3 flex justify-center gap-4">
                            <img className="w-full" src="/achiever4.svg" alt="achiever4" />
                            <img className="w-full" src="/achiever5.svg" alt="achiever5" />
                        </div>
                    </div>
                </div>
            </section>

            <section id='courses' className='min-h-auto 2xl:min-h-[50vh] 3xl:min-h-[80vh]  '>
                <div className='main-courses relative flex flex-col h-auto m-[10px]'>
                    <div className='courses-title font-montserrat font-bold text-center mt-[10px] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] 2xl:text-[80px] 3xl:text-[80px] 2xl:w-[90vw] 2xl:m-auto  2xl:text-left '>Explore Our Programs</div>
                    <div className='flex flex-col gap-2 items-center  mt-[1rem] sm:flex-row sm:items-center sm:w-[full] sm:justify-evenly 2xl:gap-[5rem] 3xl:gap-[7rem] 2xl:mt-[3rem]  2xl:w-[90vw] 2xl:m-auto'>

                        {/* Card1 */}
                        <div className="course-card relative w-[225px] h-[225px] rounded-[10px] xl:rounded-[20px] bg-black overflow-hidden group sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[270px] lg:h-[270px] xl:w-[290px] xl:h-[290px] 2xl:w-[400px] 2xl:h-[400px] 3xl:w-[500px] 3xl:h-[500px]">
                            {/* Card Background Image */}
                            <img src="/maths-s.svg" alt="maths-school" className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50 " />

                            {/* Default Text and Button */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-0 gap-[1rem] mt-[2rem]">
                                <p className="text-center text-white font-montserrat font-bold text-[30px] 3xl:text-[70px] ">Maths</p>
                                <button className="mt-2 text-black font-poppins font-semibold flex justify-center items-center p-2 bg-[#58CDE4] rounded-[10px] 3xl:text-[20px]" >
                                    Know More
                                    <img className="chevron ml-1" src="/chevron_right.svg" alt="right-arrow" />
                                </button>
                            </div>

                            {/* New Text on Hover */}
                            <div className="h-card absolute inset-0 flex flex-col gap-[1.5rem] justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                                <p className=" text-white font-montserrat font-bold text-center text-[13px]   3xl:text-[25px]">Crack the Maths Code</p>

                                <p className=" text-white font-montserrat font-bold text-center text-[23px] 3xl:text-[40px]">Classes 8th - 12th</p>

                                <p className=" text-white font-montserrat font-bold text-center text-[12px] 3xl:text-[25px]">Master every formula, solve every problem!</p>

                                <button className="mt-2 text-black font-poppins font-semibold flex justify-center items-center p-2 bg-[#58CDE4] rounded-[10px] 3xl:text-[20px]" onClick={() => window.location.href = '/contact'}>
                                    Know More
                                    <img className="chevron ml-1" src="/chevron_right.svg" alt="right-arrow" />
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="course-card relative w-[225px] h-[225px] rounded-[10px] xl:rounded-[20px] bg-black overflow-hidden group sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[270px] lg:h-[270px] xl:w-[290px] xl:h-[290px] 2xl:w-[400px] 2xl:h-[400px] 3xl:w-[500px] 3xl:h-[500px]">
                            {/* Card Background Image */}
                            <img src="/science.svg" alt="science" className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50 " />

                            {/* Default Text and Button */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-0 gap-[1rem] mt-[2rem]">
                                <p className="text-center text-white font-montserrat font-bold text-[30px] 3xl:text-[70px]">Science</p>
                                <button className="mt-2 text-black font-poppins font-semibold flex justify-center items-center p-2 bg-[#58CDE4] rounded-[10px] 3xl:text-[20px]">
                                    Know More
                                    <img className="chevron ml-1" src="/chevron_right.svg" alt="right-arrow" />
                                </button>
                            </div>

                            {/* New Text on Hover */}
                            <div className="h-card absolute inset-0 flex flex-col gap-[2rem] justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                                <p className=" text-white font-montserrat font-bold text-center text-[13px]  3xl:text-[25px]">Science That Clicks</p>

                                <p className=" text-white font-montserrat font-bold text-center text-[23px] 3xl:text-[40px]">Classes 8th - 12th</p>

                                <p className=" text-white font-montserrat font-bold text-center text-[12px] 3xl:text-[25px]">Simplify concepts, amplify results!</p>
                                <button className="mt-2 text-black font-poppins font-semibold flex justify-center items-center p-2 bg-[#58CDE4] rounded-[10px] 3xl:text-[20px]" onClick={() => window.location.href = '/contact'}>
                                    Know More
                                    <img className="chevron ml-1" src="/chevron_right.svg" alt="right-arrow" />
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="course-card relative w-[225px] h-[225px] rounded-[10px] xl:rounded-[20px] bg-black overflow-hidden group sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[270px] lg:h-[270px] xl:w-[290px] xl:h-[290px] 2xl:w-[400px] 2xl:h-[400px] 3xl:w-[500px] 3xl:h-[500px]">
                            {/* Card Background Image */}
                            <img src="/maths-clg.svg" alt="maths-clg" className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50 " />

                            {/* Default Text and Button */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 group-hover:opacity-0 gap-[1rem] mt-[2rem]">
                                <p className="text-center text-white font-montserrat font-bold text-[23px] 3xl:text-[50px]">Maths for Higher Studies</p>
                                <button className="mt-2 text-black font-poppins font-semibold flex justify-center items-center p-2 bg-[#58CDE4] rounded-[10px] 3xl:text-[20px]">
                                    Know More
                                    <img className="chevron ml-1" src="/chevron_right.svg" alt="right-arrow" />
                                </button>
                            </div>

                            {/* New Text on Hover */}
                            <div className="h-card absolute inset-0 flex flex-col gap-[2rem] justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                                <p className=" text-white font-montserrat font-bold text-center text-[13px] 3xl:text-[25px]">Excel in Advanced Maths</p>

                                <p className=" text-white font-montserrat font-bold text-center text-[23px] 3xl:text-[40px]">BSc, BCA, BTech</p>

                                <p className=" text-white font-montserrat font-bold text-center text-[12px] 3xl:text-[25px]">Take the leap to higher learning!</p>
                                <button className="mt-2 text-black font-poppins font-semibold flex justify-center items-center p-2 bg-[#58CDE4] rounded-[10px] 3xl:text-[20px]" onClick={() => window.location.href = '/contact'}>
                                    Know More
                                    <img className="chevron ml-1" src="/chevron_right.svg" alt="right-arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="testimonials" className='flex flex-col  h-[70vh] sm:h-[110vh] md:h-[120vh] lg:h-[100vh] xl:h-[110vh] 2xl:h-[100vh]'>
                <p className='review-title text-center mt-[1rem] mb-4 text-[40px]  font-bold font-montserrat md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[80px] 3xl:text-[90px]'>Testimonials</p>
                <CardCarousel />
            </section> 

           
        </>
    );
}

export default Home;