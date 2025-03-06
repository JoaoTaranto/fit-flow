import Image from "next/image";

import calendarIcon from "@/assets/icons/calendar-icon.svg";
import exerciseIcon from "@/assets/icons/exercise-icon.svg";
import timeIcon from "@/assets/icons/time-icon.svg";
import { Flow } from "@/types/flow";

interface FlowCardProps {
  flow: Flow;
}

const FlowCard = ({ flow }: FlowCardProps) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-gray-500">
          <Image src={calendarIcon} alt="Calendar icon" />
        </span>
        {flow.type === "today" ? (
          <span className="text-gray-600">Segunda</span>
        ) : (
          <span className="text-gray-600">{flow.days} dias</span>
        )}
      </div>

      <h3 className="mb-2 text-xl font-semibold">{flow.title}</h3>

      {flow.type === "today" ? (
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">
              <Image src={exerciseIcon} alt="Exercise icon" />
            </span>

            <span>{flow.exercises} exercícios</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">
              <Image src={timeIcon} alt="Time icon" />
            </span>
            <span>{flow.duration} min</span>
          </div>
        </div>
      ) : (
        <span className="text-gray-600">{flow.difficulty}</span>
      )}
    </div>
  );
};

export default FlowCard;
