import { YStack } from "@/shared/components/Stack";

export type EventCardType = {
  id: string | number;
  title: string;
  university: string;
  date: string;
  time: string;
  location: string;
  status: string;
  statusColor?: "emerald" | "blue";
  isSponsored?: boolean;
  image?: string;
};

type EventCardProps = {
  event: EventCardType;
  onClick?: () => void;
};

export function EventCard({ event, onClick }: EventCardProps) {
  const statusColorClass =
    event.statusColor === "emerald" ? "text-emerald-600" : "text-blue-600";

  return (
    <div
      onClick={onClick}
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-gray-200
        bg-white
        cursor-pointer
        hover:shadow-lg
        transition-shadow
      "
    >
      {/* Image */}
      <div className="h-[160px] bg-gradient-to-br from-gray-300 to-gray-400 relative flex items-center justify-center">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white text-2xl font-bold">{event.id}</span>
        )}
        {event.isSponsored && (
          <span className="absolute top-2 right-2 px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold">
            Sponsored
          </span>
        )}
      </div>

      {/* Content */}
      <YStack className="gap-3 p-4">
        <YStack className="gap-1">
          <h3 className="font-semibold text-sm line-clamp-2">{event.title}</h3>
          <span className="text-xs text-gray-500">{event.university}</span>
        </YStack>

        <YStack className="gap-2 text-xs text-gray-500">
          <span>📅 {event.date}</span>
          <span>⏰ {event.time}</span>
          <span>📍 {event.location}</span>
        </YStack>

        <span className={`text-xs font-medium ${statusColorClass}`}>
          {event.status}
        </span>
      </YStack>
    </div>
  );
}
