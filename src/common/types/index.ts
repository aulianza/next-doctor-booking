export type DoctorProps = {
  id: string;
  name: string;
  description: string;
  address: {
    line_1: string;
    line_2: string;
    district: string;
  };
  opening_hours: {
    start: string;
    end: string;
    isClosed: boolean;
    day: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
  }[];
};

export interface BookingItemProps {
  date: string;
  doctorId: string;
  id: string;
  name: string;
  start: number;
  status: string;
}

export type PatchBookingProps = {
  params: {
    id: string;
  };
  body: {
    status: string;
  };
};
