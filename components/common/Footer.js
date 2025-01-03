import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

// Fade-in animation for the entire footer and its elements
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible" // Triggers the animation when the element comes into view
      viewport={{ once: false, amount: 0.2 }} // Ensures animation happens each time
    >
      <div className="container">
        <div className="grid-4">
          <motion.div className="logo" variants={fadeIn} initial="hidden" animate="visible">
            <TitleLogo title="creative" caption="7" className="logobg" />
            <span>
              Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
            </span>
            <h3 className="footernumber">+91 9834070695</h3>
            <button className="button-primary footerbtn">Request for quote</button>
          </motion.div>

          <motion.ul className="footercorrection" variants={fadeIn} initial="hidden" animate="visible">
            <h3>COMPANY</h3>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/services">Services</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/agency">About Us</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/showcase">Showcase</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/contact">Contact</Link>
            </motion.li>
          </motion.ul>

          <motion.ul className="footercorrection" variants={fadeIn} initial="hidden" animate="visible">
            <h3>SERVICES</h3>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Web Development
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">E-Commerce</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Responsive Design</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Hosting & Domain
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Link href="/">Maintenance & Support
              </Link>
            </motion.li>
          </motion.ul>

          <motion.ul className="footercorrection" variants={fadeIn} initial="hidden" animate="visible">
            <h3>CONNECT</h3>
            <motion.div className="connect" variants={fadeIn} initial="hidden" animate="visible">
              <motion.li className="socialicon" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <BsFacebook size={25} />
                </Link>
              </motion.li>
              <motion.li className="socialicon" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <AiFillBehanceCircle size={25} />
                </Link>
              </motion.li>
              <motion.li className="socialicon" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <AiFillInstagram size={25} />
                </Link>
              </motion.li>
              <motion.li className="socialicon" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                <Link href="/">
                  <AiFillLinkedin size={25} />
                </Link>
              </motion.li>
            </motion.div>
          </motion.ul>
        </div>

        <motion.div className="legal connect py" variants={fadeIn} initial="hidden" animate="visible">
          <div className="text">
            <span>© 2025 THE SEVEN. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="connect">
            <span>WEBHUB TECHNOLOGIES</span>
            <span> &nbsp; | &nbsp; </span>
            <span>TERMS & CONDITIONS</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
