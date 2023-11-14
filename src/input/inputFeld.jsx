import { useState } from "react";
export function InputFeld({ number, text }) {
  const [input, setValue] = useState(0);
  return (
    <div>
      {" "}
      <input onChange={(e) => setValue(e.target.value)} />
      <div>
        {" "}
        You entered {input}. Multiplied by 2, that equals {input * 2}
      </div>{" "}
    </div>
  );
}
