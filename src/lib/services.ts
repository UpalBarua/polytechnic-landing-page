import { type TNotice } from '@/types';
import { db } from '@/firebase/firebase.config';
import { getDocs, doc, getDoc, collection, query } from 'firebase/firestore';

export const getAllNotices = async () => {
  let notices: TNotice[] = [];
  const querySnapshot = await getDocs(collection(db, 'notices'));

  querySnapshot.forEach((doc) => {
    notices.push({ id: doc.id, ...doc.data() } as TNotice);
  });

  return notices;
};

export const getNoticeById = async (id: string) => {
  const querySnapshot = await getDoc(doc(db, 'notices', id));

  if (!querySnapshot.exists) {
    throw new Error('No document found');
  }

  return querySnapshot.data();
};
