import { useContext } from "react";
import { EventContext } from "../contexts/EventContext";

export default function useEvents () {
    return useContext(EventContext);
}