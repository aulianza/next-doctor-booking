import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getBookingDetail,
  getBookingList,
  getDoctorDetail,
  getDoctorList,
  patchBooking,
  postBooking,
} from "@/services/api";

export const useGetDoctorList = () => {
  return useQuery(["doctor-list"], getDoctorList);
};

export const useGetDoctorDetail = (id: string) => {
  return useQuery(["doctor-detail", id], () => getDoctorDetail(id));
};

export const useGetBookingList = () => {
  return useQuery(["booking-list"], getBookingList);
};

export const useGetBookingDetail = (id: string) => {
  return useQuery(["booking-detail", id], () => getBookingDetail(id));
};

export const usePostBooking = () => {
  return useMutation(postBooking);
};

export const usePatchBooking = () => {
  return useMutation(patchBooking);
};
