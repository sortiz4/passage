import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Advanced } from './advanced.component';

describe('Advanced', () => {
  it('should render', () => {
    const { baseElement } = render(<Advanced/>);
    expect(baseElement).toBeDefined();
  });
});
