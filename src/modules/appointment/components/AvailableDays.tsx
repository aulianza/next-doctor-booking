import { DoctorProps } from "@/common/types";

export type AvailableDaysProps = Pick<DoctorProps, "opening_hours">;

const AvailableDays = ({ opening_hours }: AvailableDaysProps) => {
  return (
    <div className="space-y-3">
      <h6 className="text-purple-700">Available Days and Hours:</h6>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-t border-b">
            <th className="py-2 px-4 text-left">Day</th>
            <th className="py-2 px-4 text-left">Hours</th>
          </tr>
        </thead>
        <tbody>
          {opening_hours.map((schedule, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{schedule.day}</td>
              <td className="py-2 px-4">
                {schedule.isClosed
                  ? "Closed"
                  : `${schedule.start} - ${schedule.end}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableDays;
