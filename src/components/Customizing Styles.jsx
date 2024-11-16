
import CountUp from 'react-countup';

const StyledCountUp = () => {
  return (
    <div style={{ fontSize: '24px', color: 'blue', fontWeight: 'bold' }}>
      <CountUp end={9999} />
    </div>
  );
};

export default StyledCountUp;
