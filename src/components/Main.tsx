'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Button, Card, Dialog, Input, Option, Select, Typography } from '@material-tailwind/react';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { Fragment, useCallback, useState } from 'react';

import { IDiaryArray, IcategoryArray, categoryArray, categoryType } from '@/common/utils/data';

export const Main: React.FC = () => {
  const [category, setCategory] = useState<categoryType>(categoryType.TV);
  const [title, setTitle] = useState('');
  const [diaryArray, setDiaryArray] = useState<IDiaryArray[]>([]);
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));

  const [modalOpneFlag, setModalOpneFlag] = useState(false);

  const handleSelect = useCallback((value: categoryType) => {
    setCategory(value);
  }, []);

  const handleInputTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(() => e.target.value);
  }, []);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    if (category && title && date) {
      setDiaryArray((prevArray) => {
        if (prevArray && prevArray.some((item: IDiaryArray) => item.title === title)) {
          return prevArray;
        }
        return [...prevArray, { category, title, date }];
      });

      setModalOpneFlag((prevModalOpneFlag) => !prevModalOpneFlag);
      setTitle('');
    }

    e.preventDefault();
  };

  const handleModal = useCallback(() => {
    setModalOpneFlag((prevModalOpneFlag) => !prevModalOpneFlag);
  }, []);

  return (
    <main>
      <section className="container mx-auto px-5 py-10 text-gray-600">
        <div className="flex flex-col md:flex-row">
          <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <h2 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Timeline</h2>
            <ul>
              {diaryArray.map((item: IDiaryArray, index: number) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:grow lg:pl-10">
            <h2 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Calendar</h2>
            {/* 
            comment out for feature

            
            <div className="flex md:flex-col lg:flex-row">
              <button className="inline-flex items-center rounded-lg bg-gray-100 px-5 py-3 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex flex-col items-start leading-none">
                  <span className="mb-1 text-xs text-gray-600">GET IT ON</span>
                  <span className="font-medium">Google Play</span>
                </span>
              </button>
              <button className="ml-4 mt-0 inline-flex items-center rounded-lg bg-gray-100 px-5 py-3 hover:bg-gray-200 focus:outline-none md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex flex-col items-start leading-none">
                  <span className="mb-1 text-xs text-gray-600">Download on the</span>
                  <span className="font-medium">App Store</span>
                </span>
              </button>
            </div> */}
          </div>
        </div>
      </section>

      <Fragment>
        <Dialog
          open={modalOpneFlag}
          size={'xl'}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.98, y: 0 },
          }}
          handler={handleModal}
          className="z-10"
        >
          <Card
            color="transparent"
            shadow={false}
            className=" mx-auto my-8 w-11/12
          "
          >
            <Typography variant="h4" color="blue-gray">
              記録をつける
            </Typography>
            <form onSubmit={handleAdd} className="mb-2 mt-8 max-w-screen-lg">
              <div className="mb-4 flex flex-col gap-6">
                <Select
                  value={category}
                  onChange={(value) => handleSelect(value as categoryType)}
                  variant="standard"
                  label="カテゴリ"
                >
                  {categoryArray.map((item: IcategoryArray) => (
                    <Option key={item.value} value={item.value}>
                      {item.categoryName}
                    </Option>
                  ))}
                </Select>
                <Input
                  value={title}
                  onChange={handleInputTitle}
                  size="lg"
                  variant="standard"
                  label="タイトル"
                />
                <DatePicker
                  label="日付"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  className="flex w-full rounded-none border-blue-600 align-top"
                  componentsProps={{
                    popper: {
                      sx: {
                        zIndex: 12500,
                      },
                    },
                  }}
                />
              </div>
              {/*

              comment out for feature
              
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    終日
                  </Typography>
                }
                containerProps={{ className: '-ml-2.5' }}
              /> */}
              <div className="mt-12 flex items-center justify-center">
                <Button type="submit" value="Submit" className="w-80 bg-blue-600">
                  登録
                </Button>
                <Button className="ml-2 w-80  bg-gray-300 text-gray-500" onClick={handleModal}>
                  キャンセル
                </Button>
              </div>
            </form>
          </Card>
        </Dialog>
      </Fragment>
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={handleModal}
          className="z-50 flex max-w-sm items-center justify-center gap-3 rounded-full bg-blue-500 focus:outline-none"
        >
          <PlusIcon strokeWidth={2} className="h-5 w-5" />
        </Button>
      </div>
    </main>
  );
};
