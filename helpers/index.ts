// Run with Deno.
import { convertToRGB } from "../utils/index.ts";
import { writeJsonSync } from "https://deno.land/std@0.50.0/fs/write_json.ts";

const items: Item.Unit[] = [
   {
      id: "20",
      name: "American Flag Trucker Hat - Snapback Hat, Baseball Cap for Men Women - Breathable Mesh Side, Adjustable Fit - for Casual Wear",
      added: "2022-01-14T09:00:00.000Z",
      category: "accessories",
      images: "0000U",
      quantity: 112,
      sales: 458,
      description: `SHOW OFF YOUR PATRIOTIC SIDE - Wear your love for country with pride with these American flag hats for men and women. The front of this USA hat features a printed blacked out American flag design.
WELL-VENTILATED AMERICA HAT - Not a fan of closed caps that make your head all wet and sweaty? This American flag hat features mesh on its side and back panels to maximize airflow and ventilation.
A SNUG, ADJUSTABLE FIT - A hat that fits too tight can feel uncomfortable to wear. Each of these USA hats for women and men has a snap adjustment feature at the back that can easily be adjusted.
A DURABLE AMERICAN HAT - This American flag cap makes an excellent piece of headgear to wear daily. Made of 65% cotton and 35% polyester, it won't easily tear, fade, or rip with frequent use.
AN EPIC GIFT - Know someone who always wears a cap or a hat? Make a friend or a loved one smile by giving them these American flag accessories as Christmas, Thanksgiving, or birthday presents!`,
      tags: ["hat", "cap", "unisex", "casual", "mesh"],
      variants: [
         {
            name: "Dark Gray",
            color: convertToRGB("#242424"),
         },
         {
            name: "US",
            color: convertToRGB("#d62e30"),
         },
         {
            name: "White",
            color: convertToRGB("#101010"),
         },
      ],
      price: {
         currency: "USD",
         discount: null,
         value: 16.99,
      },
      reviews: [
         {
            userId: "12345",
            content: "Bought this for my husbands birthday he loves it.",
            date: "2022-01-14T11:24:24.000Z",
            rating: 4,
         },
         {
            userId: "12345",
            content: `The title says it all. It's adustable, so it fits very well. It has very firm look, which I like. Overall,, it's a very cap. It's a bit pricey, though.`,
            date: "2022-01-15T01:45:00.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `My dad loved his gift for fathers day, sorry for so the late review. But he loved it`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 5,
         },
      ],
   },
   {
      id: "21",
      name: "Classics Retro Trucker Cap",
      added: "2022-01-10T09:00:00.000Z",
      category: "accessories",
      images: "0000V",
      quantity: 2,
      sales: 1000,
      description: `Trucker cap with premium mesh panels
Esteemed since 1974
6-Panel, mid profile, structured. Matching plastic snapback closure
Curved visor, Matching undervisor, 8-row stitching on visor
Made in Vietnam or Bangladesh.`,
      tags: ["hat", "cap", "retro", "unisex", "casual", "trucker", "mesh"],
      variants: [
         {
            name: "Camo",
            color: convertToRGB("#a5a18c"),
         },
         {
            name: "Brown/Khaki",
            color: convertToRGB("#705d57"),
         },
         {
            name: "Caramel",
            color: convertToRGB("#d62e30"),
         },
         {
            name: "Evergreen",
            color: convertToRGB("#3c6251"),
         },
      ],
      price: {
         currency: "USD",
         discount: null,
         value: 9.67,
      },
      reviews: [
         {
            userId: "12345",
            content:
               "Hat came exactly as I hoped for. What packaged securely so no there was no bends seams or damages when it arrived. I ordered the white hat and it was pure white with no stains! I would recommend if you are looking for a basic hat.",
            date: "2022-01-14T11:24:24.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `I use these for my engraving business to make personalized hats & they are perfect. Plus for that price you really can’t beat it! They are durable and have the adjustable back to fit any size head.`,
            date: "2022-01-15T01:45:00.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `This item is nice, definitely a quality cap. Certainly worth the $10 you pay for it. That said, the fit is a little strange in a way I can't quite put my finger on, though this comes with the territory of buying hats on the internet. Decent item overall.`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 4,
         },
      ],
   },
   {
      id: "22",
      name: "Security Fitall Soft Low Profile Men's Women's Baseball Cap Security Guard Equipment Trucker Cool California Snapback Cap",
      added: "2022-01-10T09:00:00.000Z",
      category: "accessories",
      images: "0000W",
      quantity: 120,
      sales: 1000,
      description: `Trucker cap with premium mesh panels
Esteemed since 1974
6-Panel, mid profile, structured. Matching plastic snapback closure
Curved visor, Matching undervisor, 8-row stitching on visor
Made in Vietnam or Bangladesh.`,
      tags: ["hat", "cap", "low-profile", "sports", "unisex", "snapback"],
      variants: [
         {
            name: "Black",
            color: convertToRGB("#514858"),
         },
         {
            name: "Brownish",
            color: convertToRGB("#96918a"),
         },
      ],
      price: {
         currency: "USD",
         discount: {
            name: "Sale",
            percent: 8.55,
         },
         value: 19.67,
      },
      reviews: [
         {
            userId: "12345",
            content:
               "The mesh too feels like hard plastic to touch. I haven’t wore it at work but in the house it didn’t feel comfortable. Might not be an issue for customers with hair.",
            date: "2022-01-14T11:24:24.000Z",
            rating: 3,
         },
         {
            userId: "12345",
            content: `want to strike fear into punk kids while you ride around the mall on your segway?! look no further than this trucker hat!`,
            date: "2022-01-15T01:45:00.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `Looks good. Nice looking cap.`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 5,
         },
      ],
   },
   {
      id: "23",
      name: "Fitted Flat-Bill Preppy Hat Solid Colors Baseball Cap Flexfit Stretch Flat Brim Caps for Men or Women or Unisex",
      added: "2022-01-10T09:00:00.000Z",
      category: "accessories",
      images: "0000X",
      quantity: 120,
      sales: 1000,
      description: `🧢 MATERIAL: 97% Cotton 3% spandex round with foam at the back of the crown to ensure comfort. mesh back for ventilation. round top button. inner of cap is lined with sweatband for optimal wearing comfort
🧢 ADJUSTABLE: One size fits Most, adjustable fit with easy-to-use Flex Fit closure, Great Fit Preppy Hat for All Head Sizes
🧢 LIGHTWEIGHT: Durable, smooth, light weight suitable for both daily look and outdoor activities, perfect for traveling, daily life, hiking, climbing, camping, cycling, and other sports
🧢 SUMMER SUN PROTECTION: Stop risking your health and safety by walking outdoors without adequate sun protection. Protect your skin from harmful UV rays and keep your hair out of your face and eyes by wearing this comfortable cap during all your outdoor activities. Made of breathable, it is the perfect companion for your active lifestyle.
🧢 SATISFACTION GUARANTEE: Datoni was established in 1999, We focus on offering high quality products to our customers as well as bringing the latest trends and fashion to your daily life.100% money back if you are not satisfied with our Datoni Flexfit Cap Thinking Cap.`,
      tags: [
         "hat",
         "cap",
         "low-profile",
         "sports",
         "unisex",
         "men",
         "women",
         "stretch",
         "flat",
      ],
      variants: [
         {
            name: "Red",
            color: convertToRGB("#e74857"),
         },
         {
            name: "Sky Blue",
            color: convertToRGB("#d3ecfa"),
         },
         {
            name: "Pink",
            color: convertToRGB("#f18ccf"),
         },
      ],
      price: {
         currency: "USD",
         discount: {
            name: "Sale",
            percent: 23,
         },
         value: 15.99,
      },
      reviews: [
         {
            userId: "12345",
            content:
               "This is a one size all fitted baseball cap that is made of 97% cotton and 3% spandex. First thing I noticed after putting this cap on is its lightness. I'm used to wearing new era fitted caps and this is definitely lighter. The cotton fabric is on the thinner side but it looks and feels like it will hold up. The hat looks great with its two tone color scheme, all black and green on the underside of the bill. The bill feels firm yet flexible similar to a new era baseball fitted. So my only issue with this cap is the fact that it's on the taller side. I wear a 7 1/4 fitted and the dome on this thing is definitely on the taller side. I'm not exactly swimming in the hat, but I'd say its a relaxed fit and there is a lot of empty space at the top of the cap. There is a slight gap on the sides as well but I'm sure that will change as I break the cap in. I plan on running this thru the washer and dryer to see if I can get the cap to shrink a bit. Will update if anything changes.",
            date: "2022-01-14T11:24:24.000Z",
            rating: 4,
         },
         {
            userId: "12345",
            content: `I got this for a meme costume party where I'm going as the "how do you do, fellow kids?" meme. This hat is perfect for that because it's the correct color and it doesn't have a cutout on the back. It's pretty difficult to find a red hat nowadays (because, y'know) so I was glad to find one that matches the meme perfectly. It fits well so it doesn't ride up with my hair. Doesn't seem like it will move around too much. It also feels thick and well made. The bill is a bit flatter than I expected, but it does look like that in the picture so that one's on me. It still works great though and I'm happy!`,
            date: "2022-01-15T01:45:00.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `I was hesitant to order a hat at this price range but it turns out it is high quality, and a great fit! Plus very inexpensive for the quality of hat. I highly recommend it!`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 5,
         },
      ],
   },
   {
      id: "24",
      name: "Snapback Hats for Men Flat Bill Hat Hip Hop Style Originales Print Adjustable Flat Brim Baseball Cap",
      added: "2022-01-10T09:00:00.000Z",
      category: "accessories",
      images: "0000Y",
      quantity: 120,
      sales: 1000,
      description: `🧢 MATERIAL: 97% Cotton 3% spandex round with foam at the back of the crown to ensure comfort. mesh back for ventilation. round top button. inner of cap is lined with sweatband for optimal wearing comfort
🧢 ADJUSTABLE: One size fits Most, adjustable fit with easy-to-use Flex Fit closure, Great Fit Preppy Hat for All Head Sizes
🧢 LIGHTWEIGHT: Durable, smooth, light weight suitable for both daily look and outdoor activities, perfect for traveling, daily life, hiking, climbing, camping, cycling, and other sports
🧢 SUMMER SUN PROTECTION: Stop risking your health and safety by walking outdoors without adequate sun protection. Protect your skin from harmful UV rays and keep your hair out of your face and eyes by wearing this comfortable cap during all your outdoor activities. Made of breathable, it is the perfect companion for your active lifestyle.
🧢 SATISFACTION GUARANTEE: Datoni was established in 1999, We focus on offering high quality products to our customers as well as bringing the latest trends and fashion to your daily life.100% money back if you are not satisfied with our Datoni Flexfit Cap Thinking Cap.`,
      tags: [
         "hat",
         "cap",
         "low-profile",
         "flat",
         "snapback",
         "sports",
         "unisex",
         "cotton",
         "spandex",
      ],
      variants: [
         {
            name: "Yellow",
            color: convertToRGB("#fbee7c"),
         },
         {
            name: "Beige",
            color: convertToRGB("#cbd0d5"),
         },
         {
            name: "Blue",
            color: convertToRGB("#4e7ea6"),
         },
      ],
      price: {
         currency: "USD",
         discount: {
            name: "Sale",
            percent: 23,
         },
         value: 24.99,
      },
      reviews: [
         {
            userId: "12345",
            content:
               "My son hasn’t taken this hat off since I gifted it to him. Looks and feels great. I was worried it was going to be a bit big but it wasn’t. Perfect fit.",
            date: "2022-01-14T11:24:24.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `It’s a nice hat! Fits well and looks great`,
            date: "2022-01-15T01:45:00.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `I no longer have the one but want another !!`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 4,
         },
      ],
   },
   {
      id: "25",
      name: "Cool Snapback Vintage Style Curved Brim Hat, One Size Fits Most Men",
      added: "2022-01-10T09:00:00.000Z",
      category: "accessories",
      images: "0000Z",
      quantity: 120,
      sales: 1000,
      description: `AUTHENTIC STREETWEAR: SHAMUNA Trucker Caps are designed to reflect your inner energy and love, with casual and creative styles that merge clothing, music, art, sports, and nature for an authentic and distinctive look that is truly your own
FRESH ORIGINAL DESIGNS: Our imported snap closure hats represent our vision of creating original clothing for people that break the mold, with a wide range of colors and styles that upgrade your look and display your authenticity
PREMIUM DURABLE MATERIALS: We fuse premium materials that are dirt and damage-resistant and detailed craftsmanship to create accessories that can keep up with your active lifestyle and daily wear; Please note, these hats are hand wash only
EXPRESS YOURSELF: Our bold, curved bill hats are a fun, colorful, and unique way to celebrate who you are and what you stand for, and are versatile enough to wear as you skate, surf, mountain climb, mountain bike, cook, explore, golf and enjoy life’s simple pleasures.
REPRESENTING THE PEOPLE: At SHAMUNA, we create flatbill, curved bill, 3-panel, and snapback hats that are inspired by concepts like the Amazonian & Andes Mountains cultures that still inhabit areas of the Ecuadorian territory, the extreme sports culture (skate, surf, mountain climbing, mountain biking) and the urban style of cosmopolitan cities of the world.   Our hats are made for people from all walks of life.`,
      tags: [
         "hat",
         "cap",
         "vintage",
         "curved-brim",
         "snapback",
         "trucker",
         "unisex",
      ],
      variants: [
         {
            name: "Blue and Brown",
            color: convertToRGB("#2e6285"),
         },
         {
            name: "Coastal",
            color: convertToRGB("#b9ad55"),
         },
         {
            name: "Floral Print",
            color: convertToRGB("#b6eae5"),
         },
      ],
      price: {
         currency: "USD",
         discount: null,
         value: 29.99,
      },
      reviews: [
         {
            userId: "12345",
            content:
               "Fits wonderful, great design. Have never seen another like it, original!",
            date: "2022-01-14T11:24:24.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `I was surprised at how much this hat will need breaking in before it can be a daily driver for me. First wear and I had dents in my forehead from where the band dug in. I put a sweat-guard in it just to have some extra padding. The built in sweatband was creased and looks like it didn't fit the hat properly or something. Otherwise construction looks pretty solid, but it's just not super comfortable.`,
            date: "2022-01-15T01:45:00.000Z",
            rating: 3,
         },
         {
            userId: "12345",
            content: `I’m a bit torn on how I feel about this hat. On the one hand, it’s incredibly made and stylish. I love the colors and the suede brim is nicely designed. However, the fit is an issue. As a woman with a normal sized head, this hat fits on the smaller side. I repeat, I do not have a large head. Then, on my husband who typically does have to get larger sized hats (US size 7 5/8), this one will not even remotely fit.
This is very disappointing, because I initially ordered this so my husband could wear it, but it doesn’t fit. It’s not just the fact that it’s tight around the head but also the cap is rather shallow. I’m not sure if I somehow received a youth size, but this hat fits my five-year-old son pretty well (he’s got a slightly larger than average head for his age). I love the look of this hat, and it’s very nicely made. I just wish it fit better.`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 4,
         },
      ],
   },
];

// const json = JSON.stringify(items);

await writeJsonSync("data/testing/items/hats.json", items);
