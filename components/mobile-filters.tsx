'use client';

import { Color, Size } from '@/types';
import { useState } from 'react';
import Button from './ui/button';
import { Plus, X } from 'lucide-react';
import { Dialog, DialogPanel } from '@headlessui/react';
import IconButton from './ui/icon-button';
import Filter from '@/app/(route)/category/[categoryId]/components/filter';

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button className='flex items-center gap-x-2 lg:hidden' onClick={onOpen}>
        Filters <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as='div'
        className='relative z-40 lg:hidden'
        onClose={onClose}
      >
        {/* Background */}
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        {/* Dialog */}
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            {/* close button */}
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>
            {/* render filters */}
            <div className='p-4'>
              <Filter valueKey='sizeId' name='Sizes' data={sizes} />
              <Filter valueKey='colorId' name='Colors' data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
