import EventList from "../components/events/event-list.jsx";
import { getFeaturedEvents } from "../helper/api-util";

export default function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}
