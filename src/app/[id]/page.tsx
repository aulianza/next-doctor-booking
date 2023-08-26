import Wrapper from "@/common/components/Wrapper";
import DoctorDetail from "@/modules/doctor/components/DoctorDetail";

const DoctorDetailPage = ({ params }: { params: { id: string } }) => {
  const doctorId = params?.id;

  return (
    <Wrapper>
      <DoctorDetail id={doctorId} />
    </Wrapper>
  );
};

export default DoctorDetailPage;
