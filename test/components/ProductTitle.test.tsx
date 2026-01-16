import React from 'react';
import { ProductTitle, ProductCard } from '../../src/components';
import { render } from '@testing-library/react';
import { product1 } from '../data/products';
// import { ProductCardHandlers } from '../../src/interfaces/interfaces';

describe('ProductTitle', () => {
  test('Debe mostrar el componente correctamente con el titulo personalizado', () => {
    const { container } = render(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(container.innerHTML).toMatchSnapshot();
  });
  test('Debe mostrar el componente con el nombre del producto', () => {
    render(
      <ProductCard product={product1}>
        {() => <ProductTitle title="Custom Product" className="custom-class" />}
      </ProductCard>
    );
  });
});
