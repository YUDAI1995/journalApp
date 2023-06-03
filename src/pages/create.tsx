import { Button, Card, Input, Option, Select, Typography } from '@material-tailwind/react';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useState } from 'react';

import { IDiaryArray, IcategoryArray, categoryArray, categoryType } from '@/common/utils/data';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import type { NextPage } from 'next';

const Create: NextPage = () => {
  const [category, setCategory] = useState<categoryType>(categoryType.TV);
  const [title, setTitle] = useState('');
  const [diaryArray, setDiaryArray] = useState<IDiaryArray[]>([]);
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));

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

      setTitle('');
    }

    e.preventDefault();
  };

  return (
    <div>
      <Header />
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
          <div className="mt-12 flex items-center justify-center">
            <Button type="submit" value="Submit" className="w-80 bg-blue-600">
              登録
            </Button>
          </div>
        </form>
      </Card>
      <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
        <h2 className="mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">Timeline</h2>
        <ul>
          {diaryArray.map((item: IDiaryArray, index: number) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
