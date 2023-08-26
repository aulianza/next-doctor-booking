import ReactDatePicker from "react-datepicker";
import { BsCalendar3 as CalendarIcon } from "react-icons/bs";

interface DatePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
}

const DatePicker = ({ selectedDate, onDateChange }: DatePickerProps) => {
  return (
    <div className="space-y-2">
      <h6 className="text-purple-700">Select a Date:</h6>
      <div className="flex items-center gap-3 border py-1 px-2 rounded-full w-fit">
        <span className="text-purple-900 bg-purple-50 p-3 rounded-full">
          <CalendarIcon size={16} />
        </span>
        <ReactDatePicker
          placeholderText="Select a date"
          selected={selectedDate}
          onChange={onDateChange}
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
        />
      </div>
    </div>
  );
};

export default DatePicker;
