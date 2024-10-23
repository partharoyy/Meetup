import { Stack } from 'expo-router';

import event from '~/assets/events.json';
import EventListItem from '~/components/EventListItem';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <EventListItem event={event[0]} />
      <EventListItem event={event[1]} />
    </>
  );
}
