import { EventCard, type EventCardType } from './EventCard';

type EventGridProps = {
  events: EventCardType[];
  onEventClick?: (event: EventCardType) => void;
};

export function EventGrid({ events, onEventClick }: EventGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4

        lg:grid-cols-4
        xl:grid-cols-5
      "
    >
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onClick={() => onEventClick?.(event)}
        />
      ))}
    </div>
  );
}
