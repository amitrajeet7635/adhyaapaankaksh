import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

const Contact = () => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
      });

      // Replace this with your phone number in international format (without '+' or leading zeros)
      const whatsappNumber = "919818075909"; // Example: "919818075909" for +91 9818075909

      const mapLocation = "https://maps.app.goo.gl/imaMr7fyDCHuTTfH8";

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                  ...prevState,
                  [name]: value
            }));
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            const { name, email, phone, subject, message } = formData;

            // Construct WhatsApp message
            const whatsappMessage = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Redirect to WhatsApp
            window.open(whatsappURL, '_blank');

            // Reset form
            setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: ''
            });

            alert('Form submitted successfully! We have redirected you to WhatsApp.');
      };

      const handleMapRedirect = () => {
            window.open(mapLocation, '_blank');
      };

      return (
            <section id='contact'>
                  <div className="bg-[#FFFFF7] font-['Inter'] mt-[3.5rem]">
                        <div className="container mx-auto px-4 py-12 max-w-4xl">
                              <div className="text-center mb-12">
                                    <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">Let's Get In Touch</h1>
                                    <p className="text-gray-600 text-sm md:text-base">
                                          Feel free to contact us? Submit your queries here, and we will get back to you as soon as possible.
                                    </p>
                              </div>

                              {/* Contact Information Cards */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                    <div className="bg-[#ffdb78]   p-6 rounded-lg flex flex-col items-center justify-center group  transition-all duration-300">
                                          <i className="bi bi-geo-alt text-2xl text-gray-700 mb-3 group-hover:text-red-300"></i>
                                          <p className="text-gray-700 text-center ">SCO 12, 2nd Floor,
                                                Shree Balaji Golf View, Haibatpur Rd
                                                Ashiana Colony, Dera Bassi,
                                                Punjab 140507</p>
                                          <button
                                                onClick={handleMapRedirect}
                                                className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-[#f70004] hover:text-white rounded-lg transition-all duration-300"
                                          >
                                                <MapPin size={16} />
                                                View on Map
                                          </button>
                                    </div>

                                    <div className="bg-[#ffdb78] p-6 rounded-lg flex flex-col items-center justify-center  transition-all duration-300">
                                          <Phone />
                                          <i className="bi bi-telephone text-2xl text-white mb-3"></i>
                                          <p className="text-gray-700  text-center">+91-9818075909</p>
                                    </div>

                                    <div className="bg-[#ffdb78]   p-6 rounded-lg flex flex-col items-center justify-center group  transition-all duration-300 ">
                                          <Mail />
                                          <i className="bi bi-envelope text-2xl text-gray-700 mb-3  "></i>
                                          <p className="text-gray-700 text-center">adhyaapankaksh@gmail.com</p>
                                    </div>
                              </div>

                              {/* Contact Form */}
                              <div className="bg-[#FFFFF7] shadow-lg p-4 drop-shadow-lg rounded-lg">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <input
                                                      type="text"
                                                      name="name"
                                                      value={formData.name}
                                                      onChange={handleChange}
                                                      placeholder="Name"
                                                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 hover:border-red-400 transition-colors duration-300"
                                                      required
                                                />
                                                <input
                                                      type="email"
                                                      name="email"
                                                      value={formData.email}
                                                      onChange={handleChange}
                                                      placeholder="Email"
                                                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 hover:border-red-400 transition-colors duration-300"
                                                      required
                                                />
                                          </div>

                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <input
                                                      type="tel"
                                                      name="phone"
                                                      value={formData.phone}
                                                      onChange={handleChange}
                                                      placeholder="Phone"
                                                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 hover:border-red-400 transition-colors duration-300"
                                                      required
                                                />
                                                <select
                                                      name="subject"
                                                      value={formData.subject}
                                                      onChange={handleChange}
                                                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 hover:border-red-400 transition-colors duration-300"
                                                      required
                                                >
                                                      <option value="" disabled>Subject</option>
                                                      <option value="general">General Inquiry</option>
                                                      <option value="support">For Class (8th-12th)</option>
                                                      <option value="sales">For Higher Education</option>
                                                      <option value="other">Other</option>
                                                </select>
                                          </div>

                                          <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write Message . . ."
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 hover:border-red-400 transition-colors duration-300 h-32 resize-none"
                                                required
                                          />

                                          <button
                                                type="submit"
                                                className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                                          >
                                                Submit
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Contact;
