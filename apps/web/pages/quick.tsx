import type { ReactElement } from 'react';

/* eslint-disable-next-line */
export interface QuickProps {}

export function Quick(props: QuickProps) {
  return (
    <div className="">
      <h1>Welcome to Quick!</h1>
    </div>
  );
}

Quick.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Quick;
