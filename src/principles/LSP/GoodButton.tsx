import { ButtonHTMLAttributes, memo, PropsWithChildren, ReactNode } from 'react';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  action: 'undo' | 'redo';
}

const BadButton = ({ children, action, ...props }: PropsWithChildren<IButtonProps>) => (
  <button
    className="border border-1 border-gray-600 px-5 py-2 rounded-md flex gap-2 items-center"
    {...props}>
    {children}
    {action === 'redo' && <HiOutlineArrowNarrowRight />}
    {action === 'undo' && <HiOutlineArrowNarrowLeft />}
  </button>
);

export default memo(BadButton);
