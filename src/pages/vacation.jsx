import React, { useState } from "react";
import Offenbachpic from "../pics/offibach.jpeg";
import ChristmasPic from "../pics/christmas.png";

export function Vaca() {
  const [vacationType, setVacationType] = useState(null);

  return (
    <>
      <h1>Choose your dream vacay!</h1>

      <div className="winter">
        <button onClick={() => setVacationType("winter")}>
          Winter Wonderland
        </button>
      </div>

      <div className="offenbach">
        <button onClick={() => setVacationType("offenbach")}>Offenbach</button>

        {vacationType === "offenbach" && (
          <div>
            <img src={Offenbachpic} alt="Offenbach" />
          </div>
        )}

        {vacationType === "winter" && (
          <div>
            <img src={ChristmasPic} alt="Christmas" />
          </div>
        )}
      </div>
    </>
  );
}
