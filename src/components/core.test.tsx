import { render } from '@testing-library/react';
import { Core } from './core';

describe('Core', () => {
  it('should render', () => {
    const { baseElement } = render(<Core/>);
    expect(baseElement).toBeDefined();
  });
});
