import { useEffect, useState } from "react";
import { fetchData } from "../../services/api.js";

import SearchBar from '../../components/SearchBar/SearchBar'
import EventsList from '../../components/EventsList/EventsList'

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchData();
      setEvents(data.events);
      console.log(data.events)
    };
    getEvents();
  }, []);

  return (
    <section className='events-page__wrapper'> 
        <div>Events</div>
        <SearchBar />
        <EventsList events={events}/>
    </section>
  )
}

export default EventsPage