export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      href: '/collections/women',
      featured: [
        {
          name: 'New Arrivals',
          href: '/collections/women',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Dresses',
          href: '/collections/women/dresses',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops',         href: '/collections/women/tops' },
            { name: 'Dresses',      href: '/collections/women/dresses' },
            { name: 'Jeans',        href: '/collections/women/jeans' },
            { name: 'Lengha Choli', href: '/collections/women/lengha-choli' },
            { name: 'Sweaters',     href: '/collections/women/sweaters' },
            { name: 'T-Shirts',     href: '/collections/women/t-shirts' },
            { name: 'Jackets',      href: '/collections/women/jackets' },
            { name: 'Gouns',        href: '/collections/women/gouns' },
            { name: 'Sarees',       href: '/collections/women/sarees' },
            { name: 'Kurtas',       href: '/collections/women/kurtas' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches',    href: '/collections/women/watches' },
            { name: 'Wallets',    href: '/collections/women/wallets' },
            { name: 'Bags',       href: '/collections/women/bags' },
            { name: 'Sunglasses', href: '/collections/women/sunglasses' },
            { name: 'Hats',       href: '/collections/women/hats' },
            { name: 'Belts',      href: '/collections/women/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson',       href: '/brands/full-nelson' },
            { name: 'My Way',            href: '/brands/my-way' },
            { name: 'Re-Arranged',       href: '/brands/re-arranged' },
            { name: 'Counterfeit',       href: '/brands/counterfeit' },
            { name: 'Significant Other', href: '/brands/significant-other' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      href: '/collections/men',
      featured: [
        {
          name: 'New Arrivals',
          href: '/collections/men',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Kurtas',
          href: '/collections/men/kurtas',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt: 'Three shirts in gray, white, and blue arranged on table.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Kurtas',     href: '/collections/men/kurtas' },
            { name: 'Shirts',     href: '/collections/men/shirts' },
            { name: 'Jeans',      href: '/collections/men/jeans' },
            { name: 'Sweaters',   href: '/collections/men/sweaters' },
            { name: 'T-Shirts',   href: '/collections/men/t-shirts' },
            { name: 'Jackets',    href: '/collections/men/jackets' },
            { name: 'Activewear', href: '/collections/men/activewear' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Shoes',      href: '/collections/men/shoes' },
            { name: 'Watches',    href: '/collections/men/watches' },
            { name: 'Wallets',    href: '/collections/men/wallets' },
            { name: 'Bags',       href: '/collections/men/bags' },
            { name: 'Sunglasses', href: '/collections/men/sunglasses' },
            { name: 'Hats',       href: '/collections/men/hats' },
            { name: 'Belts',      href: '/collections/men/belts' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '/brands/re-arranged' },
            { name: 'Counterfeit', href: '/brands/counterfeit' },
            { name: 'Full Nelson', href: '/brands/full-nelson' },
            { name: 'My Way',      href: '/brands/my-way' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '/company' },
    { name: 'Stores',  href: '/stores' },
  ],
};
