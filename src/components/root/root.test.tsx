import { render } from '@testing-library/react';
import { Root } from './root.component';

describe('Root', () => {
  it('should render', () => {
    const { baseElement } = render(<Root/>);
    expect(baseElement).toBeDefined();
  });
});
