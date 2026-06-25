type NavigationHeaderType = {
  title: string;
  href: string;
  list?: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
  banners?: {
    title?: string;
    href: string;
    image: string;
  }[];
}[];

export const navigationHeader: NavigationHeaderType = [
  {
    title: "Collection",
    href: "/collection",
    list: [
      {
        title: "Category",
        items: [
          {
            label: "Shop All",
            href: "/collection",
          },
          {
            label: "Blouses & Tops",
            href: "/collection/blouses-tops",
          },
          {
            label: "Pants",
            href: "/collection/pants",
          },
          {
            label: "Dresses & Jumpsuits",
            href: "/collection/dresses-jumpsuits",
          },
          {
            label: "Outwear & Jackets",
            href: "/collection/outwear-jackets",
          },
          {
            label: "Pullovers",
            href: "/collection/pullovers",
          },
          {
            label: "Tees",
            href: "/collection/tees",
          },
          {
            label: "Shorts & Skirts",
            href: "/collection/shorts-skirts",
          },
        ],
      },
      {
        title: "Featured",
        items: [
          {
            label: "New In",
            href: "/new-in",
          },
          {
            label: "Modiweek",
            href: "/modiweek",
          },
          {
            label: "Plus Size",
            href: "/plus-size",
          },
          {
            label: "Best Seller",
            href: "/best-seller",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Bundles",
            href: "/bundles",
          },
          {
            label: "Occasion Wear",
            href: "/occasion-wear",
          },
          {
            label: "Matching Set",
            href: "/matching-set",
          },
          {
            label: "Suiting",
            href: "/suiting",
          },
        ],
      },
    ],
    banners: [
      {
        title: "Blouses",
        href: "/collection/blouses-tops",
        image: "/images/menu/12382.png",
      },
      {
        title: "Plus Size",
        href: "/plus-size",
        image: "/images/menu/12383.png",
      },
    ],
  },
  {
    title: "New In",
    href: "/new-in",
    list: [
      {
        title: "Category",
        items: [
          {
            label: "Shop All",
            href: "/new-in",
          },
          {
            label: "Tops & Blouses",
            href: "/new-in/tops-blouses",
          },
          {
            label: "Tees",
            href: "/new-in/tees",
          },
          {
            label: "Pants",
            href: "/new-in/pants",
          },
          {
            label: "Jackets & Outerwear",
            href: "/new-in/jackets-outerwear",
          },
          {
            label: "Pullovers",
            href: "/new-in/pullovers",
          },
          {
            label: "Dresses & Jumpsuits",
            href: "/new-in/dresses-jumpsuits",
          },
          {
            label: "Shorts & Skirts",
            href: "/new-in/shorts-skirts",
          },
        ],
      },
      {
        title: "Trending",
        items: [
          {
            label: "Plus Size",
            href: "/plus-size",
          },
          {
            label: "Fall Collection",
            href: "/fall-collection",
          },
          {
            label: "Modiweek",
            href: "/modiweek",
          },
        ],
      },
    ],
    banners: [
      {
        title: "Fall Collection",
        href: "/fall-collection",
        image: "/images/menu/12384.png",
      },
      {
        title: "Blouses",
        href: "/new-in/tops-blouses",
        image: "/images/menu/12385.png",
      },
      {
        title: "Dresses",
        href: "/new-in/dresses-jumpsuits",
        image: "/images/menu/12386.png",
      },
    ],
  },
  {
    title: "Modiweek",
    href: "/modiweek",
  },
  {
    title: "Plus Size",
    href: "/plus-size",
    list: [
      {
        title: "Category",
        items: [
          {
            label: "Shop All",
            href: "/plus-size",
          },
          {
            label: "Tops & Blouses",
            href: "/plus-size/tops-blouses",
          },
          {
            label: "Tees",
            href: "/plus-size/tees",
          },
          {
            label: "Pants",
            href: "/plus-size/pants",
          },
          {
            label: "Jackets & Outerwear",
            href: "/plus-size/jackets-outerwear",
          },
          {
            label: "Pullovers",
            href: "/plus-size/pullovers",
          },
          {
            label: "Dresses & Jumpsuits",
            href: "/plus-size/dresses-jumpsuits",
          },
          {
            label: "Shorts & Skirts",
            href: "/plus-size/shorts-skirts",
          },
        ],
      },
    ],
    banners: [
      {
        title: "Pants",
        href: "/plus-size/pants",
        image: "/images/menu/12387.png",
      },
      {
        title: "Dresses",
        href: "/plus-size/dresses-jumpsuits",
        image: "/images/menu/12388.png",
      },
      {
        title: "Blouses",
        href: "/plus-size/tops-blouses",
        image: "/images/menu/12389.png",
      },
    ],
  },
  {
    title: "Sustainability",
    href: "/sustainability",
    list: [
      {
        title: "Category",
        items: [
          {
            label: "Mission",
            href: "/sustainability/mission",
          },
          {
            label: "Processing",
            href: "/sustainability/processing",
          },
          {
            label: "Materials",
            href: "/sustainability/materials",
          },
          {
            label: "Packaging",
            href: "/sustainability/packaging",
          },
          {
            label: "Product Care",
            href: "/sustainability/product-care",
          },
          {
            label: "Our Suppliers",
            href: "/sustainability/our-suppliers",
          },
        ],
      },
    ],
    banners: [
      {
        href: "/sustainability/mission",
        image: "/images/menu/12390.png",
      },
      {
        href: "/sustainability/materials",
        image: "/images/menu/12391.png",
      },
    ],
  },
];
