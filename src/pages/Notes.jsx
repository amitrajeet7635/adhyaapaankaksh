import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Notes = () => {
    const [activeCard, setActiveCard] = useState(null);

    const classes = [
        {
            name: "Class 8th",
            link: "https://drive.google.com/drive/folders/1EplzTfQL9mjZul7cRRl4zTpO3_iaXqUD?usp=sharing",
            image: "/class8.svg",
            bgColor: "#f4a242",
            subjects: [
                { name: "Math", link: "https://drive.google.com/drive/folders/1dZNoeR8a1uvPg3es6qn1T6nq-YcaC24r?usp=sharing" },
                { name: "Science", link: "https://drive.google.com/drive/folders/1SZMpXsWra43bE6zFpD0Clb3mCrwYlPnb?usp=sharing" },
            ],
        },

        {
            name: "Class 9th",
            link: "https://drive.google.com/drive/folders/1Wf9plqKpAI7sYGH-5F3i_RDXR6mlWpaP?usp=sharing",
            image: "/class9.svg",
            bgColor: "#C2F0C2",
            subjects: [
                { name: "Math", link: "https://drive.google.com/drive/folders/1rJcLpSSLz1-P-Qc8oMaV7Q0uF2pdyr00?usp=sharing" },
                { name: "Science", link: "https://drive.google.com/drive/folders/1m55Xvu_p3MoB8rC_ZT90wjudNXRyJVEB?usp=sharing" },
            ],
        },
        {
            name: "Class 10th",
            link: "https://drive.google.com/drive/folders/1btmEMeLevTUw2hMkKlzHrVvczAG9ch4G?usp=sharing",
            image: "/class10.svg",
            bgColor: "#FFD700",
            subjects: [
                { name: "Math", link: "https://drive.google.com/drive/folders/1lHK41Wbc3dd56CFNbX0dTnrv-ZSIiTLu?usp=sharing" },
                { name: "Science", link: "https://drive.google.com/drive/folders/1BSXqxYVQl2laxqzEVbHyT40E7oLQYBFW?usp=sharing" },
            ],
        },
        {
            name: "Class 11th",
            link: "https://drive.google.com/drive/folders/1xqTLMqd-P63OAJ4Y3vnO1DIDMFpvK0QR?usp=sharing",
            image: "/class11.svg",
            bgColor: "#ffb4b4",
            subjects: [
                { name: "Math", link: "https://drive.google.com/drive/folders/1OvGx9Ln_voCP1spKBduiRxAs9lMXYvIA?usp=sharing" },
                { name: "Science", link: "https://drive.google.com/drive/folders/1m2s3ePAGYc76zG4-YQRYfPW0SWOGZeEx?usp=sharing" },
            ],
        },
        {
            name: "Class 12th",
            link: "https://drive.google.com/drive/folders/163Q67MFulW3LootfGITMQdl8_LLT-8o7?usp=sharing",
            image: "/class12.svg",
            bgColor: "#90CAF9",
            subjects: [
                { name: "Math", link: "https://drive.google.com/drive/folders/1paVNn6q7kREGJCNn1OYyKaUj5lR7eVTi?usp=sharing" },
                { name: "Science", link: "https://drive.google.com/drive/folders/1Zc74CoiX8_z9IC5znlZeeiayVJTHQsOP?usp=sharing" },
            ],
        },
        {
            name: "BSc, BCA, BTech",
            link: "https://drive.google.com/drive/folders/1DGmjp6vRGjugDHPySgNwZjCtKQeiWD1D?usp=sharing",
            image: "/highclass.svg",
            bgColor: "#FFB74D",
            subjects: [
                { name: "Math", link: "https://drive.google.com/drive/folders/1CN0ftEao-SvLY90D4QA-KXvT34uQa4Ib?usp=sharing" },
            ],
        },
        // Additional class objects here...
    ];

    const handleDropdownClick = (index) => {
        setActiveCard(index === activeCard ? null : index);
    };

    const handleSubjectClick = (link) => {
        window.open(link, "_blank");
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".dropdown-card")) {
                setActiveCard(null);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <main className="bg-[#fffff7] font-['Inter'] min-h-screen pt-[120px] relative z-0">
            <div className="container mx-auto px-4 max-w-7xl py-8 md:py-12">
                <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-montserrat font-bold text-center text-gray-900 mb-8 md:mb-12">
                    Notes
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
                    {classes.map((classItem, index) => (
                        <div
                            key={index}
                            className={`dropdown-card bg-white shadow-lg rounded-lg overflow-visible md:w-full sm:max-w-xs md:max-w-sm transition-all duration-300 relative ${activeCard !== null && activeCard !== index
                                    ? "opacity-50 scale-95 pointer-events-none"
                                    : "opacity-100 scale-100 pointer-events-auto z-10"
                                }`}
                            style={{ backgroundColor: classItem.bgColor }} // Apply dynamic background color
                        >
                            <img
                                src={classItem.image} // Use dynamic image URL from the classItem
                                alt={`Note ${index + 1}`}
                                className="w-full object-cover"
                            />

                            <div className="flex items-center justify-between p-4">
                                <span className="text-gray-700 font-medium text-sm md:text-[20px]">
                                    {classItem.name}
                                </span>

                                <div className="relative">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent click propagation to the document
                                            handleDropdownClick(index);
                                        }}
                                        className="flex items-center gap-1 text-gray-500 hover:text-gray-700 focus:outline-none text-sm md:text-base"
                                    >
                                        <span>Subjects</span>
                                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                                    </button>

                                    {activeCard === index && (
                                        <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 border z-50">
                                            {classItem.subjects.map((subject, subjectIndex) => (
                                                <li
                                                    key={subjectIndex}
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Prevent closing the dropdown when clicking inside it
                                                        handleSubjectClick(subject.link);
                                                    }}
                                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    {subject.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Notes;
