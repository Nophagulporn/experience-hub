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
        grid-cols-1
        gap-4

        sm:grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
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
