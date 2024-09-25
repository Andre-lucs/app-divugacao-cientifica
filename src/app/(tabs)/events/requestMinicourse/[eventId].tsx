import MinicourseCreate from "@/src/pages/events/MinicourseCreate";
import { useLocalSearchParams } from "expo-router";

export default function(){
  const { eventId } = useLocalSearchParams();

  return (
    <MinicourseCreate eventId={String(eventId)} />
  )
}