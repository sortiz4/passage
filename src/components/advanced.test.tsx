import { render } from '@testing-library/react';
import { Advanced } from './advanced';

describe('Advanced', () => {
  it('should render', () => {
    const { baseElement } = render(<Advanced/>);
    expect(baseElement).toBeDefined();
  });
});
