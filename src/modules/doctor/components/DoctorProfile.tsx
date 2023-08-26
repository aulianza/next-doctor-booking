"use client";

import { format, getDay, parse } from "date-fns";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineLocationMarker as AddressIcon } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

import "react-datepicker/dist/react-datepicker.css";

import Image from "@/common/components/Image";
import { dayMapping } from "@/common/constant";
import { DoctorProps } from "@/common/types";
import AvailableDays from "@/modules/appointment/components/AvailableDays";
import AvailableTimeSlot from "@/modules/appointment/components/AvailableTimeSlot";
import DatePicker from "@/modules/appointment/components/DatePicker";

import { usePostBooking } from "../hooks";

const DoctorProfile = ({ id, name, address, opening_hours }: DoctorProps) => {
  const doctorId: string = id;

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  const { mutate: createAppointment } = usePostBooking();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    generateAvailableTimeSlots(date);
  };

  const generateAvailableTimeSlots = (date: Date) => {
    const dayOfWeek = getDay(date);

    const selectedTimeSlotInfo = opening_hours.find(
      (schedule) => dayMapping[schedule.day] === dayOfWeek,
    );

    if (selectedTimeSlotInfo && !selectedTimeSlotInfo.isClosed) {
      const startTime = parse(selectedTimeSlotInfo.start, "HH.mm", new Date());
      const endTime = parse(selectedTimeSlotInfo.end, "HH.mm", new Date());
      const timeSlots: string[] = [];

      while (startTime < endTime) {
        const formattedTime = format(startTime, "HH.mm");
        timeSlots.push(formattedTime);
        startTime.setHours(startTime.getHours() + 1);
      }

      setAvailableTimeSlots(timeSlots);
    } else {
      setAvailableTimeSlots([]);
    }
  };

  const handleBookAppointment = () => {
    const floatValue = parseFloat(selectedTimeSlot as string);
    const formattedNumber = floatValue.toFixed(1);

    const payload = {
      doctorId,
      id: uuidv4(),
      name: "Ryan Aulia",
      start: Number(formattedNumber),
      date: format(selectedDate as Date, "yyyy-MM-dd"),
      status: "confirmed",
    };

    createAppointment(payload, {
      onSuccess: (response) => {
        if (response?.status === 200) {
          setSelectedTimeSlot(null);
          toast.success("Appointment booked successfully");
        }
      },
      onError: () => {
        toast.error("Something went wrong!");
      },
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex gap-x-4 items-center px-3 pb-4 border-b border-neutral-100">
        <div className="p-1 bg-purple-50 rounded-full">
          <Image
            src="/images/doctor.png"
            width={60}
            height={60}
            alt="doctor"
            rounded="rounded-full"
          />
        </div>
        <div className="space-y-1">
          <h5 className="font-medium text-lg">dr. {name}</h5>
          <div className="text-sm text-purple-950">ID: {doctorId}</div>
        </div>
      </div>
      <div className="pb-4 border-b border-neutral-100">
        <div className="space-y-2">
          <div className="flex gap-2 text-sm">
            <AddressIcon size={18} />
            {address && (
              <span>
                {address?.line_1}, {address?.line_2}, {address?.district}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-6">
          <h5 className="text-lg font-medium">Book an appointment</h5>
          <AvailableDays opening_hours={opening_hours} />
          <DatePicker
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
          <AvailableTimeSlot
            timeSlot={availableTimeSlots}
            selectedTimeSlot={selectedTimeSlot}
            onTimeSelect={setSelectedTimeSlot}
          />
        </div>

        <button
          className="bg-indigo-700 border-2 border-indigo-700 text-white px-4 py-3 rounded-full w-full transition-all duration-300 hover:bg-white hover:text-indigo-700 disabled:bg-neutral-500 disabled:border-neutral-500 disabled:hover:text-white"
          disabled={!selectedTimeSlot}
          onClick={handleBookAppointment}
        >
          Book Appoinment
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
