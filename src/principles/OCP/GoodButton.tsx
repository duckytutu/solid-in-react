import { memo, PropsWithChildren, ReactNode } from 'react';
interface IButtonProps {
  children: string | ReactNode;
  icon: ReactNode;
}

const GoodButton = ({ children, icon, ...props }: PropsWithChildren<IButtonProps>) => (
  <button
    className="border border-1 border-gray-600 px-5 py-2 rounded-md flex gap-2 items-center"
    {...props}>
    {children}
    {icon}
  </button>
);

export default memo(GoodButton);
