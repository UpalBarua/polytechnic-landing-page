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
  position: string;
  phone?: string;
  imgURL: string;
};
