export type TNotice = {
  id: string;
  title: string;
  description?: string;
  pdfLink: string;
  publishedOn: number;
};

export type TTeacher = {
  id: string;
  name: string;
  imgURL: string;
  position: string;
};

export type TPicture = {
  id: string;
  imageUrl: string;
  createdAt?: number;
};
export type TOnlineAdmission = {
  id: string;
  firstName: string;
  lastName: string;
  fathersName: string;
  fathersOccupation: string;
  mothersName: string;
  mothersOccupation: string;
  guardianName: string;
  guardianPhone: string;
  presentAddress: string;
  permanentAddress: string;
  dateOfBirth: string;
  gender: string;
  religion: string;
  mobile: string;
  rollNo: string;
  registrationNo: string;
  board: string;
  passingYear: string;
  grade: string;
  image: string;
};
