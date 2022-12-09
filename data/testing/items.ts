export const items: Item.Unit[] = [
   {
      id: "1",
      name: "Men's Blue Denim Jean",
      added: "2022-01-01",
      category: "shirts & trousers",
      description:
         "A classic blue denim jean with five pockets and a button-fly closure. Made of high-quality cotton for durability and comfort.",
      theme: [0, 0, 255],
      imageId: "image-1",
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
      added: "2022-01-05",
      category: "dresses & gowns",
      description:
         "A stunning red evening gown with a full-length skirt and a lace bodice. Made of luxurious satin and lace for a sophisticated look.",
      theme: [255, 0, 0],
      imageId: "image-2",
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
      added: "2022-01-10",
      category: "shoes",
      description:
         "A sleek pair of black leather oxford shoes with a cap toe and a lace-up closure. Made of high-quality leather and featuring a cushioned insole for comfort.",
      theme: [0, 0, 0],
      imageId: "image-3",
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
      added: "2022-01-15",
      category: "jackets & hoodies",
      description:
         "A cozy pink hooded jacket with a full-zip closure and two front pockets. Made of soft fleece for warmth and comfort.",
      theme: [255, 192, 203],
      imageId: "image-4",
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
      added: "2022-01-20",
      category: "formal wear",
      description:
         "A stylish grey formal suit with a two-button jacket and flat-front pants. Made of high-quality wool for a professional look and feel.",
      theme: [128, 128, 128],
      imageId: "image-5",
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
      added: "2022-01-25",
      category: "shoes",
      description:
         "A comfortable pair of beige flat shoes with a pointed toe and a bow detail. Made of high-quality leather with a padded insole for all-day wear.",
      theme: [245, 245, 220],
      imageId: "image-6",
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
];
