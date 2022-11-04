import { motion } from 'framer-motion';

import styles from './menuhover.module.css';

interface ISpring {
  type: string;
  stiffness: number;
  damping: number;
}

const spring: ISpring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

/* eslint-disable-next-line */
export interface MenuHoverProps {}

export function ListHover(props: MenuHoverProps) {
  return (
    <motion.div
      initial={false}
      transition={spring}
      layoutId="hover"
      className="absolute left-0 right-0 rounded-[11px] md:bg-[#D9D9D9] z-10 cursor-pointer"
      style={{
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      }}
    />
  );
}

export default ListHover;
