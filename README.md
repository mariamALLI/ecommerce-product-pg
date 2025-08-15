# Ecommerce Product Page

A modern ecommerce product page built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- Product image gallery with modal/lightbox
- Add to cart functionality
- Custom cart context and hook
- Responsive design (mobile & desktop)
- Custom colors and fonts via Tailwind config

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Shadcn
- Framer Motion

## Getting Started

1. **Install dependencies:**
  ```sh
  pnpm install
  ```

2. **Run the development server:**
  ```sh
  pnpm run dev
  ```

3. **Build for production:**
  ```sh
  pnpm run build
  ```

## Project Structure

```
src/
 components/
  product/
   productCard.tsx
  ui/
   button.tsx
   ...
  navbar/
   navbar.tsx
 context/
  cartcontext.tsx
 hooks/
  useCart.ts
 assets/
  images/
   ...
  design/
   ...
 App.tsx
 main.tsx
 index.css
public/
 vite.svg
```

## Customization

- **Colors & Fonts:**  
 Edit `tailwind.config.ts` to change theme colors and fonts.

## License

MIT
