import { useState } from "react";
import Events from "@/src/pages/events/events";


export default function Index() {
  const [date, setDate] = useState(new Date())


  return (
    <Events/>
  );
}

