import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Timeline() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className="hidden sm:block md:block lg:block">
        <img
          src={
            theme === "dark"
              ? "/images/odos_timeline_black.jpg"
              : "/images/odos_timeline_red.jpg"
          }
          alt="ODOS_Timeline"
        />
      </div>
      <div className="sm:hidden">
        <img
          src={
            theme === "dark"
              ? "/images/odos_timeline_mobile_dark_0.png"
              : "/images/odos_timeline_mobile_light_0.png"
          }
          alt="ODOS_Timeline"
        />
      </div>
    </div>
  );
}

export default Timeline;
