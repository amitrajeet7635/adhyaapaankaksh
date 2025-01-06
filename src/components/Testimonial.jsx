import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CardCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const allCards = [
        { id: 1, review: '“A great instructor, organized, responsive, patient and able to clearly explain complex topics. Thank you so much”', name: 'Baldeep Kaur', stars: 5, image: 'greencard.svg' },

        { id: 2, review: '“I have been studying maths in here since my 9th standard and now am in 12th standard and my average score is 97.The best guide for science and maths and would provide you with all the material you need.”', name: 'Shruti Wadhawan', stars: 5, image: 'purplecard.svg' },

        { id: 3, review: '“We appreciate you ma’am.You saw something in my child that he didn’t see in himself . You truly care about your students.you made everything easy to understand.It has been four years my child Sarosh Haroon joined you. Thank you so much ma’am Nikita Jain.”', name: 'Shagufta Tabassum', stars: 5, image: 'bluecard.svg' },

        { id: 4, review: '“I know the teacher and her teachings. Ms. Nikita Jain Sharma becomes the source of knowledge in Mathematics and Science for my children. As they are her students since last year n she teaches them to love Math and Science not to learn the subjects itself. Satisfied till now hoping for the future also.”', name: 'Arti Sharma', stars: 5, image: 'greencard.svg' },

        { id: 5, review: '“It was very nice studying here. Amazing teacher with passion to teach , really enjoyed her classes. The concepts get cleared quite well and a lot of practice papers were provided in order to prepare for exams. Looking forward to join for next semester also:)', name: 'Khushneet Kaur', stars: 5, image: 'purplecard.svg' },

        { id: 6, review: '“Ma’am not only works hard and makes her students understand the subject along with related concepts but also helps them to achieve their targets.She is a blessing   for maths and science students under one roof.”', name: 'Parshith', stars: 5, image: 'bluecard.svg' },

        { id: 7, review: '“I enjoyed the method of teaching and the atmosphere. Teacher is brilliant and class is interesting as always.Excellent notes are provided as well as assignments which played a huge rule in clarifying concepts”', name: 'Risheet Ray', stars: 5, image: 'greencard.svg' },

        { id: 8, review: '“Best teacher... Really enjoyed studying with mam and learned alot not only in academics but life lessons too... Mam played a vital role in passing my maths paper in +2😅😅... So i surely recommend to every student to enroll and feel the difference.. Regards', name: 'Mohit Mehra', stars: 5, image: 'purplecard.svg' },

        { id: 9, review: '“Best way of teaching, with each and every concept clearity, excellent material provided with regular assignments,and tests.The experience has been quite endeavoring and memorable, learnt lot of things, and i really like the way she shows several methods to solve problem when possible .', name: 'Tanu Sharma', stars: 5, image: 'bluecard.svg' },
    ];

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 1024;

    const getCardGroups = () => {
        if (isMobile) {
            return allCards.map(card => [card]); // Single card per group for mobile
        }
        const groups = [];
        for (let i = 0; i < allCards.length; i += 3) {
            groups.push(allCards.slice(i, Math.min(i + 3, allCards.length)));
        }
        return groups;
    };

    const cardGroups = getCardGroups();

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, isAutoPlaying]);

    const handleNext = () => {
        setActiveIndex((current) =>
            current === cardGroups.length - 1 ? 0 : current + 1
        );
    };

    const handlePrev = () => {
        setActiveIndex((current) =>
            current === 0 ? cardGroups.length - 1 : current - 1
        );
    };

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (Math.abs(distance) < minSwipeDistance) return;

        if (distance > 0) {
            handleNext();
        } else {
            handlePrev();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div className="relative w-full max-w-[90vw] 2xl:h-auto  mx-auto px-4">
            {/* Navigation Buttons */}
            <button
                onClick={() => {
                    handlePrev();
                    setIsAutoPlaying(false);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 md:left-0"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <button
                onClick={() => {
                    handleNext();
                    setIsAutoPlaying(false);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 md:right-0"
                aria-label="Next slide"
            >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            {/* Carousel Container */}
            <div
                className="overflow-hidden mx-8 md:mx-12"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform 2xl:h-[500px] duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {cardGroups.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className="w-full flex-none flex gap-4 2xl:h-[700px]"
                        >
                            {group.map(card => (
                                <div
                                    key={card.id}
                                    className={`${isMobile ? 'w-full' : 'w-1/3'}`}
                                >
                                    <div
                                        className="review-card  rounded-xl   h-[350px] w-full sm:h-[700px] lg:h-[500px] 3xl:h-[600px] "
                                        style={{
                                            backgroundImage: `url(${card.image})`,
                                            backgroundSize: 'cover',      // Make the background image cover the entire card
                                            backgroundPosition: 'center', // Center the background image
                                            backgroundRepeat: 'no-repeat', // Prevent repeating the background image
                                        }}
                                    >
                                        <div className="p-4 md:p-6 h-full flex flex-col rounded-xl gap-[2rem]  md:gap-[12rem] lg:gap-[3rem] 2xl:h-[700px] 2xl:gap-[8rem] 3xl:gap-[10rem]">
                                            <p className="test-review text-[12px] h-[150px] sm:h-[400px] md:h-[200px] lg:h-[250px] 2xl:h-[170px] 3xl:h-[150px] md:text-2xl text-wrap text-gray-800 italic  text-center mb-4 mt-[3rem] sm:text-[20px] sm:mt-[5rem] sm:p-10 md:mt-[7rem] md:text-[20px] lg:leading-3 lg:text-[12px] lg:mt-10 xl:text-[20px] xl:leading-none xl:pt-4 xl:p-0 2xl:p-6 2xl:pt-[4rem]  3xl:text-[20px]">
                                                {card.review}
                                            </p>
                                            <div className="flex flex-col items-center justify-center gap-2 mb-4 ">
                                                <span className="text-sm font-semibold text-black sm:text-[30px] md:text-[40px] lg:text-[23px]">{card.name}</span>
                                                <div className="flex items-center sm:text-[30px] lg:text-[25px]">
                                                    {[...Array(card.stars)].map((_, i) => (
                                                        <span key={i} className="text-yellow-500">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {cardGroups.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                            setIsAutoPlaying(false);
                        }}
                        className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-8 bg-blue-500' : 'w-2 bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;
