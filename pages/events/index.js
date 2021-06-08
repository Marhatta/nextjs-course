import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList.component';
import EventsSearch from '../../components/events/EventsSearch.component';
import { Fragment } from 'react';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEvents(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEvents} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
