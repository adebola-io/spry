export const items: Item.Unit[] = [
   {
      id: "1",
      name: "Men's Denim Jean Blue",
      added: new Date(2022, 8, 6).toString(),
      category: "shirts & trousers",
      description:
         "A classic blue denim jean with five pockets and a button-fly closure. Made of high-quality cotton for durability and comfort.",
      theme: [178, 178, 218],
      imageId: "0000C",
      sales: 500,
      quantity: 100,
      tags: ["denim", "blue", "men's"],
      reviews: [
         {
            userId: "user-1",
            content: "Great fit and quality. Highly recommended.",
            rating: 5,
            date: "2022-02-01",
         },
         {
            userId: "user-2",
            content:
               "The blue color is not as deep as it appears in the pictures.",
            rating: 3,
            date: "2022-02-15",
         },
      ],
      price: {
         value: 59.99,
         currency: "USD",
         discount: {
            name: "Early bird sale",
            percent: 20,
         },
      },
   },
   {
      id: "2",
      name: "Women's Red Evening Gown",
      added: new Date(2022, 12, 6).toString(),
      category: "dresses & gowns",
      description:
         "A stunning red evening gown with a full-length skirt and a lace bodice. Made of luxurious satin and lace for a sophisticated look.",
      theme: [255, 184, 171],
      imageId: "0000D",
      sales: 200,
      quantity: 50,
      tags: ["red", "women's", "gown", "evening"],
      reviews: [
         {
            userId: "user-3",
            content:
               "The fit is perfect and the lace is beautiful. I got so many compliments at the event I wore it to.",
            rating: 5,
            date: "2022-03-01",
         },
         {
            userId: "user-4",
            content:
               "The gown is a bit heavy and the zipper is not very smooth.",
            rating: 4,
            date: "2022-03-15",
         },
      ],
      price: {
         value: 199.99,
         currency: "USD",
         discount: {
            name: "Spring sale",
            percent: 10,
         },
      },
   },
   {
      id: "3",
      name: "Men's Black Leather Oxford Shoes",
      added: new Date(2022, 12, 13).toString(),
      category: "shoes",
      description:
         "A sleek pair of black leather oxford shoes with a cap toe and a lace-up closure. Made of high-quality leather and featuring a cushioned insole for comfort.",
      theme: [176, 176, 176],
      imageId: "0000E",
      sales: 300,
      quantity: 75,
      tags: ["black", "men's", "leather", "oxford"],
      reviews: [
         {
            userId: "user-5",
            content:
               "The shoes are very well-made and look great. Highly recommended.",
            rating: 5,
            date: "2022-04-01",
         },
         {
            userId: "user-6",
            content:
               "The shoes are a bit narrow and I had to break them in before they were comfortable.",
            rating: 4,
            date: "2022-04-15",
         },
      ],
      price: {
         value: 149.99,
         currency: "USD",
         discount: {
            name: "Father's Day sale",
            percent: 15,
         },
      },
   },
   {
      id: "4",
      name: "Women's Pink Hooded Jacket",
      added: new Date(2022, 12, 13).toString(),
      category: "jackets & hoodies",
      description:
         "A cozy pink hooded jacket with a full-zip closure and two front pockets. Made of soft fleece for warmth and comfort.",
      theme: [255, 192, 203],
      imageId: "0000F",
      sales: 400,
      quantity: 100,
      tags: ["pink", "women's", "hooded", "jacket"],
      reviews: [
         {
            userId: "user-7",
            content:
               "The jacket is very soft and warm. I love the color and the fit is perfect.",
            rating: 5,
            date: "2022-05-01",
         },
         {
            userId: "user-8",
            content: "The jacket is a bit thin and not very water-resistant.",
            rating: 3,
            date: "2022-05-15",
         },
      ],
      price: {
         value: 69.99,
         currency: "USD",
         discount: null,
      },
   },
   {
      id: "5",
      name: "Men's Grey Formal Suit",
      added: new Date(2022, 11, 11).toString(),
      category: "formal wear",
      description:
         "A stylish grey formal suit with a two-button jacket and flat-front pants. Made of high-quality wool for a professional look and feel.",
      theme: [150, 150, 150],
      imageId: "0000G",
      sales: 100,
      quantity: 25,
      tags: ["grey", "men's", "formal", "suit"],
      reviews: [
         {
            userId: "user-9",
            content:
               "The suit is well-made and the fit is great. I wore it to a job interview and got the job.",
            rating: 5,
            date: "2022-06-01",
         },
         {
            userId: "user-10",
            content:
               "The jacket sleeves are a bit long and I had to have them shortened.",
            rating: 4,
            date: "2022-06-15",
         },
      ],
      price: {
         value: 399.99,
         currency: "USD",
         discount: {
            name: "Graduation sale",
            percent: 10,
         },
      },
   },
   {
      id: "6",
      name: "Women's Beige Flat Shoes",
      added: new Date(2022, 12, 9).toString(),
      category: "shoes",
      description:
         "A comfortable pair of beige flat shoes with a pointed toe and a bow detail. Made of high-quality leather with a padded insole for all-day wear.",
      theme: [245, 245, 220],
      imageId: "0000H",
      sales: 200,
      quantity: 50,
      tags: ["beige", "women's", "flat"],
      reviews: [
         {
            userId: "user-11",
            content:
               "The shoes are very comfortable and the beige color goes with everything. Highly recommended.",
            rating: 5,
            date: "2022-07-01",
         },
         {
            userId: "user-12",
            content:
               "The shoes are a bit tight across the toes and I had to stretch them out.",
            rating: 3,
            date: "2022-07-15",
         },
      ],
      price: {
         value: 79.99,
         currency: "USD",
         discount: {
            name: "Back to school sale",
            percent: 20,
         },
      },
   },
   {
      id: "0000A",
      name: "3-Piece Suit Mens Formal Dark Blue",
      added: "2022-06-09T09:15:54.000Z",
      category: "formal wear",
      description:
         "This dark blue 3-piece suit is perfect for any formal occasion. Made from high-quality fabric, it is both stylish and comfortable to wear. The jacket features a single-breasted design with a classic lapel collar and three buttons. The trousers have a slim fit with a straight leg and a hook and bar closure. The waistcoat adds a touch of sophistication to the overall look. The suit comes in a range of sizes to ensure a perfect fit for everyone. The fabric is easy to care for, making it a practical choice for busy professionals. With its timeless design, this suit is a must-have for any man's wardrobe.",
      theme: [180, 187, 214],
      imageId: "0000A",
      sales: 20,
      quantity: 50,
      tags: ["blue", "3-piece", "suit", "formal", "professional"],
      reviews: [
         {
            date: new Date(2022, 7, 5).toISOString(),
            content:
               "A good piece of clothing, comfortable and whatnot, but there was a mising button on the suit jacket. I didn't even notice until my wedding day.",
            rating: 4,
            userId: "19203h4",
         },
         {
            date: new Date(2022, 9, 10).toISOString(),
            content: "Excellent suit, 10/10.",
            rating: 5,
            userId: "19e047",
         },
         {
            date: new Date(2022, 10, 3).toISOString(),
            content:
               "Nice suit. Suitable for high-brow parties. Overall good experience",
            rating: 5,
            userId: "19203h4",
         },
      ],
      price: {
         value: 199.99,
         currency: "USD",
         discount: {
            name: "Winter Sale",
            percent: 20,
         },
      },
   },
   {
      id: "0000A",
      name: "Fostello Bag Leather Brown",
      added: "2022-06-09T09:15:54.000Z",
      category: "formal wear",
      description:
         "This stylish leather shoulder bag is the perfect accessory for any outfit. Made from high-quality leather, it is both durable and fashionable. The bag features a single shoulder strap and a zip closure, keeping your belongings safe and secure. The interior has a spacious main compartment and a small zip pocket, providing plenty of storage for all your essentials. The bag also has a small exterior pocket with a flap closure, perfect for quick access to your phone or keys. The classic brown color makes it a versatile choice for any occasion. Whether you're running errands or heading to work, this bag is a must-have for any woman's wardrobe.",
      theme: [234, 210, 189],
      imageId: "0000B",
      sales: 10,
      quantity: 20,
      tags: ["brown", "leather", "female", "bag", "handbag"],
      reviews: [],
      price: {
         value: 89.99,
         currency: "USD",
         discount: null,
      },
   },
   {
      id: "1",
      name: "Women's Stylish and Comfortable High Heel Pumps",
      added: "2022-06-01T00:00:00.000Z",
      category: "shoes",
      description:
         "These high heel pumps are the perfect combination of style and comfort. The soft, cushioned insole and sturdy heel ensure that you can wear them for long periods of time without any discomfort. The sleek and chic design is suitable for both formal and casual occasions, making them a versatile addition to your shoe collection. The patent leather finish adds a touch of sophistication and class. The shoe's size runs true to fit, so you can order your usual size with confidence. Overall, these high heel pumps are a must-have for any fashion-conscious woman.",
      theme: [229, 207, 185],
      imageId: "0000I",
      sales: 0,
      quantity: 50,
      tags: ["women", "high heel", "pumps", "comfortable", "stylish"],
      reviews: [],
      price: {
         value: 89.99,
         currency: "USD",
         discount: null,
      },
   },
   {
      id: "2",
      name: "Men's Premium Quality Leather Dress Shoes",
      added: "2022-07-01T00:00:00.000Z",
      category: "shoes",
      description:
         "These leather dress shoes are the epitome of style and elegance. Made with high-quality leather, they are durable and long-lasting. The sleek design and classic black color make them suitable for formal occasions such as business meetings, weddings, and other events. The cushioned insole and padded collar provide maximum comfort, making them perfect for long days on your feet. The lace-up closure allows you to adjust the fit to your liking. Overall, these leather dress shoes are a must-have for any well-dressed man looking to elevate his style game.",
      theme: [143, 143, 143],
      imageId: "0000J",
      sales: 120,
      quantity: 25,
      tags: ["men", "leather", "dress shoes", "premium quality"],
      reviews: [],
      price: {
         value: 129.99,
         currency: "USD",
         discount: null,
      },
   },
   {
      id: "3",
      name: "Women's Flowy Maxi Dress with Floral Print",
      added: "2022-08-01T00:00:00.000Z",
      category: "dresses & gowns",
      description:
         "This maxi dress is the perfect summer piece. The flowy, lightweight fabric keeps you cool and comfortable, while the bold floral print adds a touch of femininity and romance. The dress features a v-neckline, short sleeves, and a gathered waist, which creates a flattering silhouette. The floor-length hemline makes it suitable for formal events, but it can also be dressed down with a pair of sandals for a casual, bohemian look. The dress comes in a range of sizes, so you can find the perfect fit. Overall, this maxi dress is a must-have for any woman looking to make a statement this season.",
      theme: [183, 205, 196],
      imageId: "0000K",
      sales: 200,
      quantity: 190,
      tags: ["women", "maxi dress", "floral print", "flowy"],
      reviews: [],
      price: {
         value: 59.99,
         currency: "USD",
         discount: null,
      },
   },
   {
      id: "4",
      name: "Men's Suit Jacket Beige Brown Slim Fit ",
      added: "2022-09-01T00:00:00.000Z",
      category: "formal wear",
      description:
         "This slim fit suit jacket is the perfect addition to any man's formal wear collection. Made with high-quality fabric, it is comfortable and breathable, making it suitable for long days at the office. The slim fit cut gives a modern and stylish silhouette, while the classic black color makes it versatile and suitable for any occasion. The jacket features a two-button closure, a notch lapel, and flap pockets, giving it a timeless and polished look. The jacket is available in a range of sizes, so you can find the perfect fit. Overall, this slim fit suit jacket is a must-have for any well-dressed man.",
      theme: [218, 200, 175],
      imageId: "0000L",
      sales: 130,
      quantity: 15,
      tags: ["men", "suit jacket", "slim fit"],
      reviews: [],
      price: {
         value: 199.99,
         currency: "USD",
         discount: {
            name: "Summer Sale",
            percent: 20,
         },
      },
   },
   {
      id: "6",
      name: "Men's Cotton T-Shirt with Graphic Print",
      added: "2022-11-01T00:00:00.000Z",
      category: "shirts & trousers",
      description:
         "This t-shirt is the perfect addition to any casual wardrobe. The soft, breathable cotton fabric keeps you comfortable, while the graphic print adds a touch of personality and style. The t-shirt features a crew neck, short sleeves, and a relaxed fit, making it suitable for a range of body types and comfortable to wear. The t-shirt is available in a range of sizes, so you can find the perfect fit. The bold and vibrant print is suitable for both day and night, making this t-shirt a versatile and essential piece. Overall, this t-shirt is a must-have for any man looking to make a statement with his casual wear.",
      theme: [250, 250, 250],
      imageId: "6",
      sales: 0,
      quantity: 30,
      tags: ["men", "t-shirt", "graphic print", "cotton"],
      reviews: [],
      price: {
         value: 29.99,
         currency: "USD",
         discount: null,
      },
   },
   {
      id: "7",
      name: "Women's Faux Leather Mini Skirt",
      added: "2022-12-01T00:00:00.000Z",
      category: "shirts & trousers",
      description:
         "This mini skirt is the perfect addition to any edgy and stylish wardrobe. The faux leather fabric gives it a cool and rebellious vibe, while the sleek and fitted design creates a flattering silhouette. The skirt features a high waist and a zip-up back closure, making it easy to wear and take off. The mini length makes it suitable for both day and night, making it a versatile and essential piece. The skirt is available in a range of sizes, so you can find the perfect fit. Overall, this mini skirt is a must-have for any woman looking to make a statement with her style.",
      theme: [245, 245, 245],
      imageId: "7",
      sales: 0,
      quantity: 10,
      tags: ["women", "mini skirt", "faux leather"],
      reviews: [],
      price: {
         value: 49.99,
         currency: "USD",
         discount: null,
      },
   },
   {
      id: "8",
      name: "Men's Knit Sweater with Striped Pattern",
      added: "2022-12-15T00:00:00.000Z",
      category: "shirts & trousers",
      description:
         "This knit sweater is the perfect addition to any man's winter wardrobe. The soft and cozy fabric keeps you warm and comfortable, while the striped pattern adds a touch of style and personality. The sweater features a crew neck, long sleeves, and a relaxed fit, making it suitable for a range of body types and comfortable to wear. The sweater is available in a range of sizes, so you can find the perfect fit. The classic black and white color scheme makes it versatile and suitable for any outfit. The sweater can be dressed up with a pair of trousers and dress shoes, or dressed down with a pair of jeans and sneakers. Overall, this knit sweater is a must-have for any man looking to stay warm and stylish this winter.",
      theme: [250, 250, 250],
      imageId: "8",
      sales: 0,
      quantity: 20,
      tags: ["men", "sweater", "striped pattern", "knit"],
      reviews: [],
      price: {
         value: 49.99,
         currency: "USD",
         discount: null,
      },
   },
   {
      id: "5",
      name: "Women's Cropped Denim Jacket",
      added: "2022-10-01T00:00:00.000Z",
      category: "jackets & hoodies",
      description:
         "This cropped denim jacket is the perfect layering piece for the transitional seasons. The cropped fit and distressed details give it a trendy and edgy look, while the classic blue color makes it versatile and suitable for any outfit. The jacket features a button-up front, long sleeves, and chest pockets, giving it a timeless and practical design. The jacket is made with high-quality denim, making it durable and long-lasting. The jacket comes in a range of sizes, so you can find the perfect fit. Overall, this cropped denim jacket is a must-have for any woman looking to add a stylish and practical piece to her wardrobe.",
      theme: [245, 245, 245],
      imageId: "5",
      sales: 0,
      quantity: 15,
      tags: ["women", "cropped denim jacket"],
      reviews: [],
      price: {
         value: 69.99,
         currency: "USD",
         discount: null,
      },
   },
];
