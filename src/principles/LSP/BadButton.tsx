import { memo, PropsWithChildren, ReactNode } from 'react';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
interface IButtonProps {
  children: ReactNode;
  type: 'undo' | 'redo';
}

const BadButton = ({ children, type, ...props }: PropsWithChildren<IButtonProps>) => (
  <button
    className="border border-1 border-gray-600 px-5 py-2 rounded-md flex gap-2 items-center"
    {...props}>
    {children}
    {type === 'redo' && <HiOutlineArrowNarrowRight />}
    {type === 'undo' && <HiOutlineArrowNarrowLeft />}
  </button>
);

export default memo(BadButton);
