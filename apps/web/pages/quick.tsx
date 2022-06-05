import type { ReactElement } from 'react';
import { WebLayoutsBaseUi } from '@nuldrive/web/layouts/base/ui';

/* eslint-disable-next-line */
export interface QuickProps {}

export function Quick(props: QuickProps) {
  return (
    <div className="">
      <div className="">
        <h1>Welcome to Quick!</h1>
      </div>
    </div>
  );
}

Quick.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsBaseUi>{page}</WebLayoutsBaseUi>;
};

export default Quick;
