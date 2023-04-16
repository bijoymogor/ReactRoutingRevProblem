import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Event 1'
  },
  {
    id: 'e2',
    title: 'Event 2'
  },
  {
    id: 'e3',
    title: 'Event 3'
  },
  {
    id: 'e4',
    title: 'Event 4'
  },
  {
    id: 'e5',
    title: 'Event 5'
  },
];

function EventsPage() {
  return (
    <>
    <h1>EventsPage</h1>
    {DUMMY_EVENTS.map((events)=> 
          <li key={events.id}>
            <Link to={`/events/${events.id}`}>{events.title}</Link>
          </li>)}
    </>
  );
}

export default EventsPage