import type { ReactElement } from 'react';
import { WebLayoutsBaseUi } from '@nuldrive/web/layouts/base/ui';

import styles from './index.module.css';

export interface IndexProps {}

export function Index(props: IndexProps) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return <h1 className="text-xl font-bold">Hello World</h1>;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <WebLayoutsBaseUi>{page}</WebLayoutsBaseUi>;
};

export default Index;
