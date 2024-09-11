import { useState } from "react";
import UserProfile from "@/src/pages/user/UserProfile";


export default function Index() {
  const [date, setDate] = useState(new Date())

  return (
    <UserProfile/>
  );
}
