import Lottie from "react-lottie";

const AnimatedIcons = ({ animationData }) => {
  // DEFAUL OPTIONS FOR ANIMATED ICONS
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default AnimatedIcons;
