import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SectionB } from './section-b.component';

describe('SectionB', () => {
  it('should render', () => {
    const { baseElement } = render(<SectionB/>);
    expect(baseElement).toBeDefined();
  });
});
