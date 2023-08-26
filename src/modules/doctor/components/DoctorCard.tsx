import Link from "next/link";
import {
  HiOutlineClock as ClockIcon,
  HiOutlineLocationMarker as AddressIcon,
} from "react-icons/hi";

import Image from "@/common/components/Image";
import { DoctorProps } from "@/common/types";

const DoctorCard = ({ id, name, address }: DoctorProps) => {
  return (
    <Link href={`/${id}`}>
      <div className="p-5 border bg-white border-neutral-100 shadow-sm space-y-5 rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
        <div className="flex gap-x-3 items-center pb-3 border-b border-neutral-100">
          <div className="p-1 bg-purple-50 rounded-full">
            <Image
              src="/images/doctor.png"
              width={40}
              height={40}
              alt="doctor"
              rounded="rounded-full"
            />
          </div>
          <div className="space-y-1">
            <h5 className="font-medium">dr. {name}</h5>
            <div className="text-xs text-purple-950">ID: {id}</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2 text-xs">
            <AddressIcon size={14} />
            <span>
              {address?.line_1}, {address?.line_2}, {address?.district}
            </span>
          </div>
          <div className="flex gap-2 text-xs">
            <ClockIcon size={13} />
            <span>Available: Today</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
