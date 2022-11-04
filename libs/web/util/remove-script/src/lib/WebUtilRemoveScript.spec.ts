import { webUtilRemoveScript } from './WebUtilRemoveScript';

describe('webUtilRemoveScript', () => {
  it('should work', () => {
    expect(webUtilRemoveScript()).toEqual('web-util-remove-script');
  });
});
