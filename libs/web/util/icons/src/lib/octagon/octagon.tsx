import styles from './octagon.module.css';

/* eslint-disable-next-line */
export interface OctagonProps {}

export function Octagon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="auto"
        d="m21.71 7.57-5.27-5.28a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.57a1 1 0 0 0-.29.7v7.46a1 1 0 0 0 .29.7l5.27 5.28a1.05 1.05 0 0 0 .71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.28a1 1 0 0 0 .29-.7V8.27a1 1 0 0 0-.29-.7ZM20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69Z"
      />
    </svg>
  );
}

export default Octagon;
