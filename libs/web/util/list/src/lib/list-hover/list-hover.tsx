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
      className="absolute left-0 right-0 rounded-md bg-slate-700 bg-opacity-40 z-10 backdrop-blur-sm"
      style={{
        top: -7,
        bottom: -7,
        left: 0,
        right: 0,
      }}
    />
  );
}

export default ListHover;
