export interface Email {
  _id: string;
  name: string;
  email: string;
  subject: string;
  date: string;
  teaser: string;
}
// const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?: TMeta;
  data: T;
};

export enum offerLetterStatus {
  ALL = "all",
  DRAFT = "draft",
  SENT = "send",
  FAILED = "failed",
}
export interface IOfferLetter {
  employeeName: string;
  employeeEmail: string;
  employeeAddress: string;
  employeeDesignation: string;
  employeeDateOfJoin: string;
  employeeCtc: string;
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  offerLetterDate: string;
  companyContactName: string;
  companyPersonTitle: string;
  companyContactNumber: string;
  companyPersonalEmail: string;
  emailSubject: string;
  emailMessage: string;
  status: offerLetterStatus;
  generateByUser: string;
  createdAt: string;
  _id: string;
}
