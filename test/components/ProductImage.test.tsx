import React from 'react';
import {ProductCard, ProductImage } from '../../src/components';
import { render } from '@testing-library/react';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe mostrar el componente correctamente con la imagen personalizada', () => {
    const { container } = render(
      <ProductImage img="https://via.placeholder.com/300x200?text=No+Image"/>
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('Debe mostrar el componente con la imagen del producto', () => {
    render(
      <ProductCard product={product2}>
        {() => <ProductImage />}
      </ProductCard>
    );
  });
});
