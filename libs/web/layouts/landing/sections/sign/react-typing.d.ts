declare module 'react-typing' {
  interface TypingProps {
    steps: (string | number)[];
    loop?: number;
    wrapper?: string;
  }

  declare const Typing: React.FC<TypingProps>;

  export default Typing;
}
