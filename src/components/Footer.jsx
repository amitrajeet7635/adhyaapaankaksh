import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Footer() {
    return (
        <>


            <footer class="bg-gray-900 dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0 flex flex-col gap-5">
                            <a href="https://adhyaapankaksh.com/" class="flex items-center">
                                <img src="/footer-logo.svg" class="h-8 me-3" alt="FlowBite Logo" />

                            </a>
                            <p className="text-gray-500 dark:text-gray-400 medium">SCO 12, 2nd Floor, <br />
                                Shree Balaji Golf View, Haibatpur Rd <br /> Ashiana Colony, Dera Bassi, <br />
                                Punjab 140507</p>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Courses</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <HashLink smooth to="/#courses" className="hover:underline">
                                            Maths (8th-12th)
                                        </HashLink>
                                    </li>
                                    <li class="mb-4">
                                        <HashLink smooth to="/#courses" className="hover:underline">
                                            Science (8th-12th)
                                        </HashLink>
                                    </li>
                                    <li >
                                        <HashLink smooth to="/#courses" className="hover:underline">
                                            Maths (BSC, BCA)
                                        </HashLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Notes</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link to="/notes" className="hover:underline ">
                                            Class 8th-10th
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/notes" className="hover:underline ">
                                            Class 11th-12th
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link to="/notes" className="hover:underline ">
                                            B.SC, B.C.A., BTech
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <Link to="/privacypolicy" className="hover:underline">Privacy Policy</Link>

                                    </li>
                                    <li>
                                        <Link to="/termsandconditions" className="hover:underline">Terms &amp; Conditions</Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://adhyaapankaksh.com/" class="hover:underline">Adhyaapan Kaksh</a>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/p/Adhyaapan-kaksh-100090700707763/?locale=ne_NP" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>
                            <a href="https://www.instagram.com/adhyaapankaksh/" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 2476 2476" fill='currentColor' id="instagram">
                                    <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                                </svg>
                                <span class="sr-only">Instagram Page</span>
                            </a>
                            <a href="mailto:adhyaapankaksh@gmail.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg class="w-5 h-5 bottom-[2px] relative" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" id="email">
                                    <path d="M34.05 50 9 66.31V33.69L34.05 50zm31.9 0L91 66.31V33.69L65.95 50zm-3.66 2.39-11.2 7.29c-.33.21-.71.32-1.09.32s-.76-.11-1.09-.32l-11.2-7.29L10.66 70l-1.57 1.02C9.58 73.84 12.04 76 15 76h70c2.96 0 5.42-2.15 5.91-4.98L89.33 70 62.29 52.39zM50 55.61 89.33 30l1.58-1.02C90.42 26.15 87.96 24 85 24H15c-2.96 0-5.42 2.16-5.91 4.98L10.66 30 50 55.61z"></path>
                                </svg>
                                <span class="sr-only">Email Page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;