import BadButton from './BadButton';
import GoodButton from './GoodButton';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export default function () {
  return (
    <div className="w-full h-full flex items-center justify-center gap-10">
      <BadButton type="undo">Undo</BadButton>
      <BadButton type="redo">Redo</BadButton>

      <GoodButton icon={<HiOutlineArrowNarrowLeft />}>Undo</GoodButton>
      <GoodButton icon={<HiOutlineArrowNarrowRight />}>Redo</GoodButton>
    </div>
  );
}
