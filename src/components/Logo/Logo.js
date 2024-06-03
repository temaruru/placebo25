import { motion } from "framer-motion"
import classNames from "classnames";

import logo from "../../assets/images/logo.svg";

function Logo({ className, onClick }) {
  return (
    <motion.div
      drag
      whileHover={{scale: 1.2}}
      whileTap={{scale: 0.9}}
      whileDrag={{rotate: 12}}
      onClick={onClick}
    >
      <img src={logo} alt="Roche" className={classNames('logo', className)} />
    </motion.div>
  );
}

export default Logo;
