import clsx from "clsx";

interface AvailableTimeSlotProps {
  timeSlot: string[];
  selectedTimeSlot: string | null;
  onTimeSelect: (time: string) => void;
}

const AvailableTimeSlot = ({
  timeSlot,
  selectedTimeSlot,
  onTimeSelect,
}: AvailableTimeSlotProps) => {
  return (
    <>
      {timeSlot.length > 0 && (
        <div className="space-y-3">
          <h6 className="text-purple-700">Available Time Slots:</h6>
          <div className="flex flex-wrap gap-3">
            {timeSlot.map((time: string, index: number) => (
              <button
                key={index}
                onClick={() => onTimeSelect(time)}
                className={clsx(
                  "text-sm px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white",
                  selectedTimeSlot === time
                    ? "bg-purple-600 text-white"
                    : "bg-purple-100 text-purple-800",
                )}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AvailableTimeSlot;
