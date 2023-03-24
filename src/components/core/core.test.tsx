import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Core } from './core.component';

describe('Core', () => {
  it('should render', () => {
    const { baseElement } = render(<Core/>);
    expect(baseElement).toBeDefined();
  });
});
