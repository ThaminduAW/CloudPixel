import React from 'react';
import { motion } from "motion/react"
import pravilImg from '../../assets/pravil.JPG';
import seynathImg from '../../assets/seynath.JPG';
import thaminduImg from '../../assets/thamindu.JPG';

const About = () => {
  return (
    <div className="pt-24">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-2 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
              Our Competitive Advantage
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              CloudPixel revolutionizes image management with cutting-edge cloud technology. Our platform combines powerful features with intuitive design, making it the perfect solution for both individuals and businesses. We understand that in today's digital world, efficient image management is crucial for success.<br /><br />
              
              With CloudPixel, you get more than just storage – you get a comprehensive solution that enhances your workflow and protects your valuable digital assets. Our platform is designed to be <a href="#" className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">seamless</a> and intuitive, ensuring you can focus on what matters most.
            </p>

            <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">About Us</h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              CloudPixel was born from a vision to simplify image management in the cloud. We're a team of passionate developers and designers committed to creating the most reliable and user-friendly cloud storage solution for images.
            </p>

            <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
              <li>Enterprise-grade security for your valuable images</li>
              <li>Lightning-fast upload and download speeds</li>
              <li>Intuitive collaboration tools for teams</li>
            </ul>

            <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
              "CloudPixel transforms how businesses and individuals manage their digital assets, making cloud storage simple, secure, and efficient."
            </blockquote>

            {/* <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
              <img 
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350" 
                loading="lazy" 
                alt="Cloud Storage Technology" 
                className="h-full w-full object-cover object-center" 
              />
            </div> */}

            {/* <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div> */}

            {/* <p className="text-gray-500 sm:text-lg">
              Our platform is constantly evolving to meet the needs of our users. We're committed to providing the best possible experience for managing your images in the cloud, with regular updates and new features based on user feedback.
            </p> */}

            {/* Team Section */}
            <div className="mt-16">
              <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>
                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  Our dedicated team of experts is committed to revolutionizing cloud image management with innovative solutions and exceptional service.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                  <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                    <img 
                      src={thaminduImg} 
                      loading="lazy" 
                      alt="Thamindu Abeywardhana Wickramasinghe" 
                      className="h-full w-full object-cover object-center" 
                    />
                  </div>

                  <div>
                    <div className="text-center font-bold text-indigo-500 md:text-lg">Thamindu Abeywardhana Wickramasinghe</div>
                    <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Founder / CEO</p>

                    <div className="flex justify-center">
                      <div className="flex gap-4">
                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                          <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>

                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                          <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                  <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                    <img 
                      src={seynathImg} 
                      loading="lazy" 
                      alt="Seynath Thenura" 
                      className="h-full w-full object-cover object-center" 
                    />
                  </div>

                  <div>
                    <div className="text-center font-bold text-indigo-500 md:text-lg">Seynath Thenura</div>
                    <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Co-Founder / CTO</p>

                    <div className="flex justify-center">
                      <div className="flex gap-4">
                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                          <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>

                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                          <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                  <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                    <img 
                      src={pravilImg} 
                      loading="lazy" 
                      alt="Pravil Wijesinghe" 
                      className="h-full w-full object-cover object-center" 
                    />
                  </div>

                  <div>
                    <div className="text-center font-bold text-indigo-500 md:text-lg">Pravil Wijesinghe</div>
                    <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Frontend Developer</p>

                    <div className="flex justify-center">
                      <div className="flex gap-4">
                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                          <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>

                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                          <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
