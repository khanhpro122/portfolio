import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My socials</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
      </motion.div>
      <motion.div className='flex flex-row flex-wrap justify-center gap-10'>
        
          {socials.map((social, index) => (
            <Tilt key={social.name}>
              <Link to={social.link} className='w-[112px] h-[112px] rounded-full border-4 border-solid border-[#fff] flex items-center justify-center'  
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                target="_blank" 
              >
                <img 
                  className="w-[90px] h-[90px] object-cover rounded-full"
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  alt={social.name}
                  src={social.icon}
                />
              </Link>
            </Tilt>
          ))}
      </motion.div>
    </Fragment>
  );
};

export default SectionWrapper(Social, "");
