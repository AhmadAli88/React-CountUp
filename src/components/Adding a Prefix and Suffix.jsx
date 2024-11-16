
import CountUp from 'react-countup';

const PrefixSuffixCountUp = () => {
  return <CountUp start={0} end={1000} prefix="$" suffix=" USD" />;
};

export default PrefixSuffixCountUp;
