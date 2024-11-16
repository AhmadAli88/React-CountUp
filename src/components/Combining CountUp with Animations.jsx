
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const AnimatedCountUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <CountUp end={100} duration={5} />
    </motion.div>
  );
};

export default AnimatedCountUp;
