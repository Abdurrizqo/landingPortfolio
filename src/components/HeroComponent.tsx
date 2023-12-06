import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
function HeroComponent() {
  return (
    <div className="h-screen pt-28 mx-12 md:mx-24 lg:mx-64" id="home">
      <div className="h-40 relative w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
          className="absolute -left-5 md:-left-12 lg:-left-28 "
        >
          <h1 className="text-primary-text text-5xl md:text-7xl font-bold mb-4">
            Hey There,
          </h1>
          <h1 className="text-primary-text text-5xl md:text-7xl font-bold">
            I'm ARRA.
          </h1>
        </motion.div>
      </div>

      <div className="relative text-secondary h-20 w-full">
        <motion.div
          className="absolute -right-5 md:-right-12 lg:-right-28 w-60"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1.2 } }}
        >
          <div className="absolute bg-second-text/40 w-40 h-10 -bottom-3 lef-3 -z-10"></div>
          <p className="text-lg text-right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            non!
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <div className="flex justify-center mt-10 md:mt-20 lg:-mt-20">
          <img src={profileImage} alt="profile" />
        </div>

        <div className="absolute rounded-full px-2 py-3 bg-secondary/30 backdrop-blur bottom-2 left-0 right-0 md:left-20 md:right-20 lg:left-60 lg:right-60">
          <div className="flex justify-center gap-10 md:gap-16 md:text-xl lg:text-2xl text-white">
            <FaGithub className="cursor-pointer hover:-translate-y-1"/>
            <FaLinkedin className="cursor-pointer hover:-translate-y-1" />
            <MdEmail className="cursor-pointer hover:-translate-y-1" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroComponent;
