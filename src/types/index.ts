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
  department: string;
};

export type TPicture = {
  id: string;
  imageUrl: string;
  createdAt: number;
};
