import { useState } from "react";
import { Hello } from "../Hello";

export function Helloworld() {
  const [input, setValue] = useState(0);
  return (
    <>
      <Hello name={"world"} frage={"wie gehts?"} />
      <Hello name={"Earth"} />
      <Hello name={"Saturn"} />
    </>
  );
}
