import React, { useState, useEffect } from "react";

// Dummy images for the carousel and categories
const carouselImages = [
  "/banner1.svg",
  "/Felicitation Day/pic10.png",
  "/Teachers Day/pic1.png",
  "/Felicitation Day/pic18.png",
  "/Our Institute/classroom1.jpg",
];

const galleryCategories = {
  "Our Institute": [
    "/Our Institute/classroom1.jpg",
    "/Our Institute/classroom2.jpg",
    "/Our Institute/classroom3.jpg",
    "/Our Institute/classroom4.jpg",
    "/Our Institute/classroom5.jpg",
    "/Our Institute/classroom6.jpg",
    "/Our Institute/classroom7.jpg",
    "/Our Institute/classroom8.jpg",
  ],
  "Teachers Day Celebration": [
    "/Teachers Day/pic1.png",
    "/Teachers Day/pic2.png",
    "/Teachers Day/pic3.png",
    "/Teachers Day/pic4.png",
    "/Teachers Day/pic5.png",
    "/Teachers Day/pic6.png",
    "/Teachers Day/pic7.png",
  ],
  "Felicitation Day": [
    "/Felicitation Day/pic1.png",
    "/Felicitation Day/pic2.png",
    "/Felicitation Day/pic3.png",
    "/Felicitation Day/pic4.png",
    "/Felicitation Day/pic5.png",
    "/Felicitation Day/pic6.png",
    "/Felicitation Day/pic7.png",
    "/Felicitation Day/pic8.png",
    "/Felicitation Day/pic9.png",
    "/Felicitation Day/pic10.png",
    "/Felicitation Day/pic11.png",
    "/Felicitation Day/pic12.png",
    "/Felicitation Day/pic13.png",
    "/Felicitation Day/pic14.png",
    "/Felicitation Day/pic15.png",
    "/Felicitation Day/pic17.png",
    "/Felicitation Day/pic18.png",
    "/Felicitation Day/pic19.png",
    "/Felicitation Day/pic20.png",
    "/Felicitation Day/pic21.png",
    "/Felicitation Day/pic13.png",
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Carousel auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to handle full-screen image view
  const openFullScreen = (image) => {
    setCurrentImage(image);
    setIsFullScreen(true);
  };

  // Function to navigate through images in full-screen mode
  const handleNavigation = (direction) => {
    const categoryImages = galleryCategories[selectedCategory];
    const totalImages = categoryImages.length;
    let newIndex = categoryImages.indexOf(currentImage);

    if (direction === "next") {
      newIndex = (newIndex + 1) % totalImages; // Move to the next image
    } else if (direction === "prev") {
      newIndex = (newIndex - 1 + totalImages) % totalImages; // Move to the previous image
    }

    setCurrentImage(categoryImages[newIndex]);
  };

  return (
    <main className="bg-[#FFFFF7] font-['Inter'] min-h-screen mt-[3rem]">
      {/* Gallery Heading */}
      <div className="text-center py-8">
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-montserrat font-bold text-gray-900">
          Gallery
        </h1>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={carouselImages[currentImageIndex]}
          alt={`Carousel ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>

      {/* Category Cards Section */}
      {!selectedCategory ? (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(galleryCategories).map((category, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-md overflow-hidden shadow-md"
                onClick={() => setSelectedCategory(category)}
              >
                {/* Background Image */}
                <img
                  src={galleryCategories[category][0]} // First image in the category
                  alt={category}
                  className="w-full h-48 sm:h-60 object-cover"
                />
                {/* Black Tint Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition duration-300"></div>
                {/* Category Name */}
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                  {category}
                </h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Display Selected Category Images
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-blue-500 underline mb-4"
          >
            Back to Categories
          </button>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {selectedCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryCategories[selectedCategory].map((image, index) => (
              <div key={index} onClick={() => openFullScreen(image)}>
                <img
                  src={image}
                  alt={`${selectedCategory} ${index + 1}`}
                  className="w-full h-48 sm:h-60 object-cover rounded-md shadow-md cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full-Screen Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative max-w-full max-h-full">
            <img
              src={currentImage}
              alt="Full-screen view"
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
            {/* Navigation Buttons */}
            <button
              onClick={() => handleNavigation("prev")}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl"
            >
              &lt;
            </button>
            <button
              onClick={() => handleNavigation("next")}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl"
            >
              &gt;
            </button>
            <button
              onClick={() => setIsFullScreen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
