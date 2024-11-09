import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Hero() {
      return (
            <div className=" text-white bg-black text-my_white font-montserrat flex flex-col">
                <script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js"></script>
                  <div className="flex flex-col h-full flex-1">
                        <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1 }}
                              className="relative z-5 text-center p-2 h-[23.5rem] bg-lightblue text-white"
                        >
                              <h1 className="text-4xl p-2 mt-2 md:text-6xl font-buffalo mb-8">
                                    Refugee Hope Bridge
                              </h1>
                              <p className="text-xl mt-2 p-2 md:text-2xl mb-10">
                                    Bringing Hope to Refugees' Lives
                              </p>
                              <div className="flex flex-col justify-center items-center md:w-lvw gap-4">
                                    <Button
                                          type="primary"
                                          text="DONATE"
                                          border="white"
                                          hoverColor="primary"
                                          zeffy-form-link="https://www.zeffy.com/embed/donation-form/022a820f-0464-4b80-9643-1053c300f7d9?modal=true"
                                    />

                                    <Link to="/services">
                                          <Button
                                                type="primary"
                                                href="#services"
                                                text="Discover Our Services"
                                                border="bright"
                                          />
                                    </Link>
                              </div>
                        </motion.div>
                  </div>
                  <img
                        src="/images/hug.png"
                        className="h-[22rem] md:h-full"
                        alt="home"
                  />
            </div>
      );
}

export default Hero;
