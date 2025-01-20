import { useState } from "react";

import "./light-dark-mode.css";

export default function LightAndDarkMode() {
  const [switchMode, setSwitchMode] = useState(true);

  const switchModeFun = () => {
    setSwitchMode(!switchMode);
  };

  const setMode = switchMode ? "light" : "dark";

  return (
    <div className={setMode}>
      <button className={`button-${setMode}`} onClick={switchModeFun}>Switvh</button>
      <p className={`p-${setMode}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis fugiat, ipsa perspiciatis quod possimus nemo necessitatibus, facere dolore illum ipsum aperiam nulla minus debitis quia fuga tempore. Repudiandae, voluptatum.</p>
    </div>
  );
}
