export default defineEventHandler((event) => {
   const { req } = event;
   if (req.method === "GET") {
      return <HomeSection>{
         heading: "Deals of the Day",
         subHeading: "Get the best deals for the day.",
         items: [
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
         ],
      };
   }
});
