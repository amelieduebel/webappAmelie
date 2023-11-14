import { useState, useEffect } from "react";

export function Hooks() {
  const [selectedButton, setselectedButton] = useState(0);
  const [count, setCount] = useState(0); // merkt sich den jetzigen Stand

  useEffect(() => {
    // wird eingesetzt wenn man wissen möchte ob sich ein Wert geändert hat, man kann auf einen State/ eine State änderung reagieren
    if (selectedButton) {
      setCount((count) => count + 1);
    }
  }, [selectedButton]);

  return (
    <div>
      <button onClick={() => setselectedButton(1)}>1</button>
      <button onClick={() => setselectedButton(2)}>2</button>
      <button onClick={() => setselectedButton(3)}>3</button>

      <p>selectedButton: {selectedButton}</p>
      <p> count : {count}</p>
    </div>
  );
}
