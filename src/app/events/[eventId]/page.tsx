import EventDetailClientPage from "./EventDetailClientPage";

// Using any to bypass Next.js 15 type issues
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page(props: any) {
  const eventId = props.params.eventId;
  return <EventDetailClientPage eventId={eventId} />;
}
