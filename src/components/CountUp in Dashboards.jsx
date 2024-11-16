
import CountUp from 'react-countup';

const DashboardCountUp = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <h3>Users</h3>
        <CountUp end={12345} separator="," />
      </div>
      <div>
        <h3>Revenue</h3>
        <CountUp end={50000} prefix="$" separator="," />
      </div>
    </div>
  );
};

export default DashboardCountUp;
