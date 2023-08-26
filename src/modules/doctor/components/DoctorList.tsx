import { useEffect, useState } from "react";

import { DoctorProps } from "@/common/types";

import DoctorCard from "./DoctorCard";
import { useGetDoctorList } from "../hooks";

const DoctorList = ({ searchValue }: { searchValue: string }) => {
  const { data, isLoading } = useGetDoctorList();

  const doctorList: DoctorProps[] = data?.data ?? [];

  const [filteredDoctorList, setFilteredDoctorList] = useState<DoctorProps[]>(
    [],
  );

  const filterDoctors = (searchValue: string) => {
    const filteredDoctors = doctorList?.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFilteredDoctorList(filteredDoctors);
  };

  useEffect(() => {
    filterDoctors(searchValue);
  }, [searchValue, data]);

  return (
    <div className="p-6 -mt-8 pb-28 rounded-t-3xl min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {isLoading ? (
        <div className="py-12 text-lg text-center text-neutral-500">
          Loading...
        </div>
      ) : filteredDoctorList.length ? (
        <div className="flex flex-col gap-y-4">
          {filteredDoctorList.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-neutral-500">
          No doctor found
        </div>
      )}
    </div>
  );
};

export default DoctorList;
