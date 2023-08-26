"use client";

import PageHeader from "@/common/components/PageHeader";
import PageWrapper from "@/common/components/PageWrapper";
import { DoctorProps } from "@/common/types";

import DoctorProfile from "./DoctorProfile";
import { useGetDoctorDetail } from "../hooks";

const DoctorDetail = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetDoctorDetail(id);
  const docterData = data?.data ?? ({} as DoctorProps);

  return (
    <>
      <PageHeader title="Doctor Profile" isBackButton />
      <PageWrapper>
        {!isLoading ? (
          <>{docterData?.id ? <DoctorProfile {...docterData} /> : null}</>
        ) : (
          <div className="py-12 text-lg text-center text-neutral-500">
            Loading...
          </div>
        )}
      </PageWrapper>
    </>
  );
};

export default DoctorDetail;
