# JCD-Product-Card

Este es un paquete de pruebas de despliegue de NPM

## Jhonatan Cardona Duarte

## Ejemplos

```tsx
import { ProductCard , ProductImage, ProductTitle, ProductButtons} from 'jcd-product-card';
 ```

```tsx
<ProductCard
     product={product}
     initialValues={{
      count: 4,
      maxCount: 10,
     }}
    >
     {({ reset, count, increaseBy, isMaxCountReached }) => (
      <>
       <ProductCard.Image />
       <ProductCard.Title />
       <ProductCard.Buttons />
        
      </>
     )}
    </ProductCard>
        ```
