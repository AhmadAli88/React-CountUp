
import { useCountUp } from 'react-countup';

const PauseResumeCountUp = () => {
  const { start, pauseResume, reset, update } = useCountUp({   //The useCountUp hook provides full control over the counter through the methods start, pauseResume, reset, and update.
    ref: 'countup', // ID reference for the counter
    end: 1000,
    duration: 10,
    startOnMount: false,
  });

  return (
    <div>
      <div id="countup" /> {/* This div will display the counter */}
      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => update(2000)}>Update to 2000</button> {/* Optional update */}
    </div>
  );
};

export default PauseResumeCountUp;



// import{ useRef } from 'react';           //The issue with your code is that the ref prop does not directly expose the control methods (start, pauseResume, reset) as they are not available in the ref of the CountUp component. Instead, you can use the useCountUp hook provided by react-countup for full control over these functionalities.        
// import CountUp from 'react-countup';

// const PauseResumeCountUp = () => {
//   const countUpRef = useRef();

//   return (
//     <div>
//       <CountUp
//         ref={countUpRef}
//         end={1000}
//         duration={10}
//         startOnMount={false}
//         preserveValue
//       />
//       <button onClick={() => countUpRef.current.start()}>Start</button>
//       <button onClick={() => countUpRef.current.pauseResume()}>Pause/Resume</button>
//       <button onClick={() => countUpRef.current.reset()}>Reset</button>
//     </div>
//   );
// };

// export default PauseResumeCountUp;

