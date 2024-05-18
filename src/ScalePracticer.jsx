import DroneChordsPlayer from "./DroneChordPlayer";
import ScalePlayer from "./ScalePlayer";

const ScalePracticer = () => {
  return (
    <div>
      <ScalePlayer startNote="G3" />
      <DroneChordsPlayer note="G3" />
    </div>
  );
};

export default ScalePracticer;
