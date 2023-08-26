import PageHeader from "@/common/components/PageHeader";
import PageWrapper from "@/common/components/PageWrapper";

import AppointmentList from "./AppointmentList";

const Appointment = () => {
  return (
    <>
      <PageHeader title="Appointment List" />
      <PageWrapper className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <AppointmentList />
      </PageWrapper>
    </>
  );
};

export default Appointment;
