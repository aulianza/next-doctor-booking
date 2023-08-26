"use client";

import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { format, parse } from "date-fns";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  HiOutlineInformationCircle as InfoIcon,
  HiOutlineTicket as IdIcon,
  HiOutlineUser as PatientIcon,
} from "react-icons/hi";

import Image from "@/common/components/Image";
import { BookingItemProps } from "@/common/types";
import { usePatchBooking } from "@/modules/doctor/hooks";

const AppointmentCard = ({
  date,
  doctorId,
  id,
  name,
  start,
  status,
}: BookingItemProps) => {
  const [isShowAction, setIsShowAction] = useState(false);

  const appointmentDate = parse(date, "yyyy-MM-dd", new Date());
  const formattedDate = format(appointmentDate, "EEE, MMM dd, yyyy");
  const formattedTime = start.toFixed(2).replace(".", ":");
  const formattedStatus = status.charAt(0).toUpperCase() + status.slice(1);

  const queryClient = useQueryClient();
  const { mutate: patchAppointment } = usePatchBooking();

  const handleShowAction = () => {
    setIsShowAction((prev) => !prev);
  };

  const handleUpdateAppointment = () => {
    const newStatus = status === "confirmed" ? "cancelled" : "confirmed";

    patchAppointment(
      {
        params: { id },
        body: { status: newStatus },
      },
      {
        onSuccess: (response) => {
          if (response.status === 200) {
            toast.success(`Appointment status updated!`);
            queryClient.invalidateQueries(["booking-list"]);
            handleShowAction();
          }
        },
        onError: () => {
          toast.error("Something went wrong!");
        },
      },
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-full p-5 border bg-white border-neutral-100 shadow-t-sm space-y-5 rounded-3xl cursor-pointer transition-all duration-300"
        onClick={handleShowAction}
      >
        <div className="flex gap-x-3 items-center pb-3 border-b border-neutral-100">
          <div className="p-1 bg-purple-50 rounded-full">
            <Image
              src="/images/calendar.png"
              width={40}
              height={40}
              alt="doctor"
              rounded="rounded-full"
            />
          </div>
          <div className="space-y-1">
            <h5 className="font-medium">
              {formattedDate}, {formattedTime}
            </h5>
            <div className="text-xs text-blue-950">Doctor ID: {doctorId}</div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2 items-center text-xs">
            <IdIcon size={14} />
            <div>Booking ID: {id}</div>
          </div>
          <div className="flex gap-2 items-center text-xs">
            <PatientIcon size={14} />
            <div>Patient Name: {name}</div>
          </div>
          <div className="flex gap-2 items-center text-xs">
            <InfoIcon size={14} />
            <div className="flex items-center gap-2">
              Status:
              <div
                className={clsx(
                  "py-0.5 px-2 text-white rounded-full text-[11px]",
                  status === "confirmed" ? "bg-green-500" : "bg-red-500",
                )}
              >
                {formattedStatus}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowAction && (
        <div className="bg-white w-max p-3 rounded-b-3xl shadow-b-sm border-neutral-100">
          <button
            className={clsx(
              "px-3 py-2  text-white rounded-full text-sm",
              status === "confirmed" ? "bg-red-500" : "bg-green-500",
            )}
            onClick={handleUpdateAppointment}
          >
            {status === "confirmed" ? "Cancel" : "Confirm"} Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
