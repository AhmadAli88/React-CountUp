
import BasicCountUp from './components/Basic';
import PrefixSuffixCountUp from './components/Adding a Prefix and Suffix';
import DurationCountUp from './components/CountUp with Duration';
import SeparatorCountUp from './components/CountUp with Separator';
import FormatCountUp from './components/Custom Formatting';
import HookCountUp from './components/CountUp with React Hooks';
import ScrollTriggerCountUp from './components/Adding Scroll Trigger';
import PauseResumeCountUp from './components/Pausing and Resuming';
import AnimatedCountUp from './components/Combining CountUp with Animations';
import DashboardCountUp from './components/CountUp in Dashboards';
import StyledCountUp from './components/Customizing Styles';
import LiveUpdatingCountUp from './components/CountUp with Live Updating Data';
import RepeatingCountUp from './components/Custom Formatting';
import RangeCountUp from './components/Using start and end Props';

const App = () => {
  return (
    <div>
      <h1>React-CountUp Examples</h1>
      <div>
        <h2>1. Basic CountUp</h2>
        <BasicCountUp />
      </div>
      <div>
        <h2>2. Prefix and Suffix CountUp</h2>
        <PrefixSuffixCountUp />
      </div>
      <div>
        <h2>3. Duration CountUp</h2>
        <DurationCountUp />
      </div>
      <div>
        <h2>4. Range CountUp</h2>
        <RangeCountUp />
      </div>
      <div>
        <h2>5. Separator CountUp</h2>
        <SeparatorCountUp />
      </div>
      <div>
        <h2>6. Format CountUp</h2>
        <FormatCountUp />
      </div>
      <div>
        <h2>7. Repeating CountUp</h2>
        <RepeatingCountUp />
      </div>
      <div>
        <h2>8. Hook CountUp</h2>
        <HookCountUp />
      </div>
      <div>
        <h2>9. Scroll Trigger CountUp</h2>
        <ScrollTriggerCountUp />
      </div>
      <div>
        <h2>10. Pause and Resume CountUp</h2>
        <PauseResumeCountUp />
      </div>
      <div>
        <h2>11. Animated CountUp</h2>
        <AnimatedCountUp />
      </div>
      <div>
        <h2>12. Dashboard CountUp</h2>
        <DashboardCountUp />
      </div>
      <div>
        <h2>13. Styled CountUp</h2>
        <StyledCountUp />
      </div>
      <div>
        <h2>14. Live Updating CountUp</h2>
        <LiveUpdatingCountUp />
      </div>
    </div>
  );
};

export default App;
