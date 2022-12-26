import { items } from "./items";

export const collections: Collection[] = [
   {
      id: "1",
      name: "Serenity & Style",
      description: `Featuring Serenity & Style - where sophistication and tranquility meet. These items are designed to bring peace and panache to your wardrobe. Subtle hues paired with clean lines and classic silhouettes, creating a sense of calm and polish.`,
      banner:
         "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      items: items,
      isFeatured: true,
   },
   {
      id: "2",
      name: "The Chic & Comfortable Edit",
      description: `Fashion should never have to constrain comfort. These items were designed with the modern woman in mind, and from crisp blouses to cozy sweaters, our line has something for every occasion and every season.`,
      banner:
         "https://c4.wallpaperflare.com/wallpaper/951/999/714/beautiful-woman-vintage-fashion-photography-wallpaper-preview.jpg",
      items: items.filter((item) => item.tags.includes("women")),
      isFeatured: true,
   },
   {
      id: "3",
      name: "Elegance, Effortlessly",
      description:
         "Effortlessly stylish? That's what you'll be with our latest collection! Our pieces are designed to be simple yet bold, allowing you to look put-together without any effort. Explore comfy leggings to stylish tops, this collection has everything you need to create effortless and stylish outfits.",
      banner:
         "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      items: [],
      isFeatured: false,
   },
   {
      id: "4",
      name: "The Couture",
      description:
         "Comfort doesn't have to mean sacrificing style! Our Couture collection features clothing that combines razzle and dazzle. Why not treat yourself to something from this collection to guarantee those compliments?",
      banner: "https://i.imgur.com/PJtIPM7.jpg",
      items: [],
      isFeatured: false,
   },
   {
      id: "5",
      name: "Winter Nights",
      description: `Embrace the season in style. Featuring a range of cozy pieces, this line has everything you need to stay fashionable on even the frostiest nights. Jackets and scarves to sweaters and boots, our collection has got you covered from head to toe.`,
      banner:
         "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      items: items.filter((item) => item.tags.includes("winter")),
      isFeatured: true,
   },
   {
      id: "6",
      name: "Comfortable & Cool",
      description:
         "Looking for clothing that is both comfortable and cool? Our Comfortable & Cool collection is perfect for you! Our pieces are designed to keep you feeling comfortable and looking trendy all at once. From soft t-shirts to cool jeans, this collection has it all. So why not give it a try and add a few pieces to your wardrobe today?",
      banner: "https://i.imgur.com/7sAO6Fe.jpg",
      items: [],
      isFeatured: false,
   },
];
