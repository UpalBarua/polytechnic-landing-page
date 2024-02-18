import { db, storage } from "@/firebase/firebase.config";
import { TPicture, TTeacher, type TNotice, TOnlineAdmission } from "@/types";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export const getAllNotices = async () => {
  let notices: TNotice[] = [];

  const q = query(collection(db, "notices"), orderBy("publishedOn", "desc"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    notices.push({ id: doc.id, ...doc.data() } as TNotice);
  });

  return notices;
};

export const getAllTeachers = async () => {
  let teachers: TTeacher[] = [];

  const querySnapshot = await getDocs(collection(db, "teachers"));

  querySnapshot.forEach((doc) => {
    teachers.push({ id: doc.id, ...doc.data() } as TTeacher);
  });

  return teachers;
};

export const getLatestNotices = async () => {
  let notices: TNotice[] = [];

  const q = query(
    collection(db, "notices"),
    orderBy("publishedOn", "desc"),
    limit(4),
  );
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    notices.push({ id: doc.id, ...doc.data() } as TNotice);
  });

  return notices;
};

export const getAllPictures = async () => {
  let gallery: TPicture[] = [];

  const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    gallery.push({ id: doc.id, ...doc.data() } as TPicture);
  });

  return gallery;
};

export const getNoticeById = async (id: string) => {
  const querySnapshot = await getDoc(doc(db, "notices", id));

  if (!querySnapshot.exists) {
    throw new Error("No document found");
  }

  console.log(querySnapshot.data());
  return querySnapshot.data();
};

export const deleteNoticeById = async (id: string) => {
  const querySnapshot = await getDoc(doc(db, "notices", id));
  const document = querySnapshot.data();

  const docRef = ref(storage, document?.pdfLink);
  await deleteObject(docRef);

  await deleteDoc(doc(db, "notices", id));
};

export const deletePictureById = async (id: string) => {
  const querySnapshot = await getDoc(doc(db, "gallery", id));
  const document = querySnapshot.data();

  const docRef = ref(storage, document?.imageUrl);
  await deleteObject(docRef);

  await deleteDoc(doc(db, "gallery", id));
};

export const deleteTeacherById = async (id: string) => {
  const querySnapshot = await getDoc(doc(db, "teachers", id));
  const document = querySnapshot.data();

  const docRef = ref(storage, document?.imgURL);
  await deleteObject(docRef);

  await deleteDoc(doc(db, "teachers", id));
};

export const addNewNotice = async (newNotice: Omit<TNotice, "id">) => {
  await addDoc(collection(db, "notices"), newNotice);
};

export const addNewTeacher = async (newTeacher: Omit<TTeacher, "id">) => {
  await addDoc(collection(db, "teachers"), newTeacher);
};

export const addNewPicture = async (picture: Omit<TPicture, "id">) => {
  await addDoc(collection(db, "gallery"), picture);
};

export const addNewOnlineAdmission = async (
  newOnlineAdmission: Omit<TOnlineAdmission, "id">,
) => await addDoc(collection(db, "OnlineAdmission"), newOnlineAdmission);

export const getAllOnlineAdmission = async () => {
  let onlineAdmission: TOnlineAdmission[] = [];
  const q = query(
    collection(db, "OnlineAdmission"),
    orderBy("createdAt", "desc"),
  );
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    onlineAdmission.push({ id: doc.id, ...doc.data() } as TOnlineAdmission);
  });
};
