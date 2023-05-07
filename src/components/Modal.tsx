import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import { Fragment, useCallback, useState } from 'react';

export const Modal: React.FC = () => {
  const [modalOpneFlag, setModalOpneFlag] = useState(false);

  const handleModal = useCallback(() => {
    setModalOpneFlag((prevModalOpneFlag) => !prevModalOpneFlag);
  }, []);

  return (
    <>
      <Button
        onClick={handleModal}
        className="inline-flex items-center gap-3 rounded border-0 bg-indigo-500 text-sm text-white hover:bg-indigo-600 focus:outline-none"
      >
        <Cog6ToothIcon strokeWidth={2} className="h-5 w-5" /> settings
      </Button>
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
    </>
  );
};
