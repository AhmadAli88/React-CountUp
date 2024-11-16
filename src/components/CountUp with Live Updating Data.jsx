import { useState } from 'react';
import CountUp from 'react-countup';

const LiveUpdatingCountUp = () => {
  const [value, setValue] = useState(1000);

  const updateValue = () => setValue((prev) => prev + 500);

  return (
    <div>
      <CountUp end={value} />
      <button onClick={updateValue}>Increase</button>
    </div>
  );
};

export default LiveUpdatingCountUp;
