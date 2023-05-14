import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';
import React, { Fragment, useCallback, useEffect, useState } from 'react';

export const Header: React.FC = () => {
  const [modalOpneFlag, setModalOpneFlag] = useState(false);

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
  const handleModal = useCallback(() => {
    setModalOpneFlag((prevModalOpneFlag) => !prevModalOpneFlag);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link href="/create" className="flex items-center">
          ADD
        </Link>
      </Typography>
    </ul>
  );

  return (
    <header className="mx-auto">
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <h1 className="mb-4 flex justify-between text-3xl font-medium text-gray-900 sm:text-4xl">
            <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
              Journal
            </Typography>
          </h1>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              onClick={handleModal}
              className="inline-flex items-center gap-3 rounded border-0 bg-blue-500 text-sm text-white hover:bg-blue-600 focus:outline-none"
            >
              <Cog6ToothIcon
                strokeWidth={2}
                className="h-5 w-5 transition-transform group-hover:rotate-90"
              />{' '}
              設定
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}

          <Button
            onClick={handleModal}
            className="inline-flex items-center gap-3 rounded border-0 bg-blue-500 text-sm text-white hover:bg-blue-600 focus:outline-none"
          >
            <Cog6ToothIcon
              strokeWidth={2}
              className="h-5 w-5 transition-transform group-hover:rotate-90"
            />{' '}
            設定
          </Button>
        </MobileNav>
      </Navbar>

      <Fragment>
        <Dialog
          open={modalOpneFlag}
          size={'xl'}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.98, y: 0 },
          }}
          handler={handleModal}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody divider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad reprehenderit
            omnis perspiciatis aut odit! Unde architecto perspiciatis, dolorum dolorem iure quia
            saepe autem accusamus eum praesentium magni corrupti explicabo!
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="red" onClick={handleModal} className="mr-1">
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleModal}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </header>
  );
};
