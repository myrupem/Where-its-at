import { useEffect, useState } from "react";
import { fetchData } from "../../services/api.js";

import SearchBar from '../../components/SearchBar/SearchBar'
import EventsList from '../../components/EventsList/EventsList'
import styled from "styled-components";

const EventpageWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
padding: 2rem;
`

const Title = styled.h1`
font-family: 'Sansita One';
font-size: 32px;
font-weight: 400;
color: #F56B9A;
position: absolute;
top: 5%;
`

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchData();
      setEvents(data);
    };
    getEvents();
  }, []);

  return (
    <EventpageWrapper> 
        <Title>Events</Title>
        <SearchBar />
        <EventsList events={events}/>
    </EventpageWrapper>
  )
}

export default EventsPage