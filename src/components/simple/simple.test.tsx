import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Simple } from './simple.component';

describe('Simple', () => {
  it('should render', () => {
    const { baseElement } = render(<Simple/>);
    expect(baseElement).toBeDefined();
  });
});
