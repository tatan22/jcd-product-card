import React from 'react';
import { ProductCard } from '../../src/components';
import { render, fireEvent } from '@testing-library/react';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('Debe mostrar el componente correctamente', () => {
    const { container } = render(
      <ProductCard product={product1}>
        {() => <h1>Product Card Content</h1>}
      </ProductCard>
    );
    expect(container.innerHTML).toMatchSnapshot();
  });
  test('Debe incrementar el contador', () => {
    const { asFragment, container } = render(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card Content</h1>
            <span>Count: {count}</span>
            <button onClick={() => increaseBy(1)}>Increment</button>
          </>
        )}
      </ProductCard>
    );

    console.log(asFragment());
    expect(container.querySelector('span')?.textContent).toBe('Count: 0');

    fireEvent.click(container.querySelector('button')!);

    expect(container.querySelector('span')?.textContent).toBe('Count: 1');
  });
});
