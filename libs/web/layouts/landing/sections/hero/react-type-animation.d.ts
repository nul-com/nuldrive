declare module 'react-type-animation' {
  interface TypicalProps {
    sequence: (string | number)[];
    cursor: boolean;
    loop?: number;
    className?: string;
    wrapper?: string;
  }

  declare const Typical: React.FC<TypicalProps>;

  export default Typical;
}
