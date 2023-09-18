import clsx from 'clsx';
import Alert from './icons/alert';
import Trash from './icons/trash';
import ChevronLeft from './icons/chevron-left';
import ChevronRight from './icons/chevron-right';
import Menu from './icons/menu';
import Clip from './icons/clip';
import Edit from './icons/edit';

export const icons: any = {
  alert: Alert,
  trash: Trash,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  menu: Menu,
  clip: Clip,
  edit: Edit
};

export default function Icon({ className, name, ...props }: Props) {
  const Component = icons[name];

  if (!Component) return null;

  return <Component className={clsx(className || 'fill-[#A0A8B6]')} {...props} />;
}

type Props = JSX.IntrinsicElements['svg'] & {
    className?: string;
    name?: any;
};
