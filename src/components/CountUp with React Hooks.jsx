import { useRef } from 'react';
import { useCountUp } from 'react-countup';

const HookCountUp = () => {
  const countUpRef = useRef(null);

  const { start, reset, update } = useCountUp({
    ref: countUpRef, // Attach to the ref
    start: 0,
    end: 100,
    duration: 2,
    startOnMount: false, // Do not auto-start
  });

  return (
    <div>
      {/* Attach animation to this div */}
      <div ref={countUpRef}></div>
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => update(200)}>Update to 200</button>
    </div>
  );
};

export default HookCountUp;

{
  /* <div>                 //The error "Cannot read properties of undefined (reading 'current')" occurs when the useCountUp hook is used improperly. This happens when the ref for the useCountUp hook is not provided, as it requires a ref to attach the animation to an HTML element or uses countUp directly without rendering an animation.
<div>{countUp}</div>
<button onClick={start}>Start</button>
<button onClick={reset}>Reset</button>
<button onClick={() => update(200)}>Update to 200</button>
</div> */
}
