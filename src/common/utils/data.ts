import { Dayjs } from 'dayjs';

// no-unused-vars
export enum categoryType {
  TV = 'tv', // eslint-disable-line
  RADIO = 'radio', // eslint-disable-line
}

export interface IcategoryArray {
  categoryName: string;
  value: categoryType;
}

export interface IDiaryArray {
  category: categoryType;
  title: string;
  date: Dayjs | null;
}

export const categoryArray: IcategoryArray[] = [
  {
    categoryName: 'テレビ番組',
    value: categoryType.TV,
  },
  {
    categoryName: 'ラジオ番組',
    value: categoryType.RADIO,
  },
];
