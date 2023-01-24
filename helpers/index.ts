// Run with Deno.
import { convertToRGB } from "../utils/index.ts";

const items: Item.Unit[] = [
   {
      id: "16",
      name: "Women's Drape Front Open Cardigan Long Sleeve",
      added: "2022-01-13T09:00:00.000Z",
      category: "jackets & hoodies",
      images: "0000Q",
      quantity: 13,
      sales: 45,
      description: `Made In USA
Features long sleeve, open front. various color, lightweight, soft & stretchy material
Basic and stylish outfit, shawl collar draped, asymmetrical hem
Please be advised to see our size chart in the descriptions below for the most accurate fit.
Color disclaimer: Due to monitor settings and monitor pixel definition, we cannot guarantee the color that you see will be exact from the actual color of the product.`,
      tags: [
         "women",
         "drape",
         "fur",
         "cardigan",
         "casual",
         "stretchy",
         "lightweight",
      ],
      variants: [
         {
            name: "Blush",
            color: convertToRGB("#f4acaf"),
         },
         {
            name: "Jade",
            color: convertToRGB("#1b525b"),
         },
         {
            name: "Purple",
            color: convertToRGB("#331838"),
         },
      ],
      price: {
         currency: "USD",
         discount: null,
         value: 23.99,
      },
      reviews: [
         {
            userId: "12345",
            content:
               "This product color is great the light weight material is thinner than expected!!! Flowy but yet clingy!!!",
            date: "2022-01-14T11:24:24.000Z",
            rating: 4,
         },
         {
            userId: "12345",
            content: `For the price, this was a great buy. Very lightweight. Perfect for summer days when you just need a light cover. Stitching on the sleeves was a little out of alignment, but for the low price the quality of the sweater is not bad. I’ve worn and washed it many times now and it is standing up to all the wear. I get a lot of compliments on the soft coral color!`,
            date: "2022-01-15T01:45:00.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `This sweater jacket fits exactly as I hoped. Very flattering loose fit with just the right amount of stretch, sleeves not tight in the arms. Can easily be dressed up and long enough to cover all the right parts. Definitely recommend and will be buying other colors.`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 5,
         },
      ],
   },
   {
      id: "17",
      name: "Women's Removable Hooded Faux Leather Jacket Moto Biker Coat",
      added: "2022-01-04T09:00:00.000Z",
      category: "jackets & hoodies",
      images: "0000R",
      quantity: 13,
      sales: 45,
      description: `A faux leather motocycle jacket with Panelled design body, with two zippered front pockets
Collarless collar and zippered opening long sleeves / Fully lined and light weight
HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON
Please check the size chart below to ensure your order / Color Disclaimer : Due to monitor settings, monitor pixel definitions, we cannot guarantee that the color you see on your screen as an exact color of the product. We strive to make our colors as accurate as possible. however, colors are approximations of actual colors.`,
      tags: ["women", "hood", "leather", "polyesther", "casual"],
      variants: [
         {
            name: "Red",
            color: convertToRGB("#eb4745"),
         },
         {
            name: "Camel",
            color: convertToRGB("#6d4835"),
         },
         {
            name: "Coffee Oatmeal",
            color: convertToRGB("#6d4835"),
         },
      ],
      price: {
         currency: "USD",
         discount: null,
         value: 49.95,
      },
      reviews: [
         {
            userId: "12345",
            content:
               "This jacket looks amazing in person. One of the best looking we have purchased in a long time. The only negative is that it runs small and I mean really small. There is not a coat in my wife’s closet that is larger than a size Large. And every one of those jackets are huge on her. We bought a large and couldn’t even get it to meet to even think of zipping it up. We returned it and got an XL, it can be zipped up but is VERY tight. First XL anything she has ever had to buy. Runs very small but man it looks good.",
            date: "2022-01-10T11:24:24.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `I’m 5’10” and 200 lbs. I bought the XL size initially. Looks very nice and the fabric/faux leather is beautiful. Five stars for the materials used. However, it was too small to even try to zip up. I can wear it as long as it’s not too cold. I then tried to buy a XXL thinking it would work for me. Still too small! Sad I have to return it and they don’t make anything bigger. For reference, I usually wear a L/XL. Gave the jacket 4 stars now. I would definitely suggest sizing up!`,
            date: "2022-01-05T06:40:00.000Z",
            rating: 4,
         },
         {
            userId: "12345",
            content: `I ordered an XX Large because reviews indicated that it ran a bit small. I have a larger chest but smaller waist so I was concerned that it wouldn’t zip up because I’ve had that problem before with other similar jackets. But it zipped up and I was able to breath. It’s very figure flattering and emphasizes my curves. Could be a bit warmer but that’s okay. With a long sleeve and a scarf I was warm enough.`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 4,
         },
      ],
   },
   {
      id: "18",
      name: "Womens Fashion Horn Button Fleece Thicken Coat with Hood Winter Warm Jacket",
      added: "2022-01-01T09:00:00.000Z",
      category: "jackets & hoodies",
      images: "0000S",
      quantity: 12,
      sales: 123,
      description: `Soft and comfy fabric, medium weight, it seems very warm, do not wrinkle, do not shrink. About Size: Small=US 2-4, Medium=US 5-6, Large=US 8-10, X-Large=US 12-14,XX-Large=US 16-18
Zipper and button closure, double warmth, hooded collar and fleece lining keeps wind and warm
Unique double-row horn buckle placket design and fit tailoring, fashionable and cute, highlighting your charming figure
Two large square front pockets, you can put keys, mobile phones and other small objects, providing a warm place for your hands in the cold morning
Women's winter leisure hooded horn buckle wool pea coat jacket can keep you warm and comfortable in the cold winter, suitable for all occasions.`,
      tags: ["zipper", "hood", "fleece", "women", "lining", "pocket"],
      variants: [
         {
            name: "Light Gray",
            color: convertToRGB("#8a8a8e"),
         },
         {
            name: "Cream Yellow",
            color: convertToRGB("#f4e6c4"),
         },
         {
            name: "Blue",
            color: convertToRGB("#7e95b6"),
         },
      ],
      price: {
         currency: "USD",
         discount: {
            name: "Sale",
            percent: 36,
         },
         value: 87.99,
      },
      reviews: [
         {
            userId: "12345",
            content: `I wanted a jacket to replace a coat I have. My coat just doesn't fit properly anymore, but I haven't found anything of the same style to replace it. I needed a quick on/off jacket with a hood that would work for fall and spring when our weather is incredibly changeable.
For the price, I expected this jacket to be on the lower side of quality, but I have been pleasantly surprised! It's also far warmer than I expected! I live in an area with mildly-hot (90°F or so) summers and potentially frigid (below 0°F is not uncommon) winters. I've discovered that I get too hot in this jacket, quickly, if the temp is above 50°F. It's very cute!
I ordered my usual size, and it's a bit larger than expected. Thankfully, for jackets, I prefer to err on the side of "too big." I also love having long arms that cover part of my hand! That's uncommon for me as my arms are longer than average for my height.`,
            date: "2022-01-10T11:24:24.000Z",
            rating: 4,
         },
         {
            userId: "12345",
            content: `It’s a nice coat but not lightweight to me. I didn’t like the grey color, it’s a very light grey.`,
            date: "2022-01-05T06:40:00.000Z",
            rating: 4,
         },
         {
            userId: "12345",
            content: `I ordered the light gray jacket XXl. The outside material is a jersey knit and lined with a faux fleece. The jacket is very cute and the quality seems to be great. Yes, it was wrinkled when I removed it from the packaging. I just shook it out and missed the wrinkles, it was just fine. You could always wash it on a gentle cycle and then hang to dry if you chose to. I did order a size up for more room if I wore sweaters. It is just a jacket not a heavy winter coat. But should suffice just fine in 20 - 30 degree weather. I don't understand why the bad reviews. I think the jacket is just fine and exactly what was expected. I would certainly buy again and would recommend to anyone questioning whether to purchase. I love this little jacket.`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 5,
         },
      ],
   },
   {
      id: "19",
      name: "Women's Lightweight Full Zip Soft Polar Fleece Jacket Outdoor Recreation Coat With Zipper Pockets",
      added: "2022-12-21T09:00:00.000Z",
      category: "jackets & hoodies",
      images: "0000T",
      quantity: 5,
      sales: 403,
      description: `SOFT FABRIC: This polar fleece jacket is crafted of ultra-soft 100% polyester microfleece for the perfect amount of Comfort.
ULTIMATE COMFORT: With a stand collar style designand full zippered closure,you'll maintain a full range of motion with this lightweight soft fleece jacket.
VERSATILITY: Soft and warm, the microfleece material is the perfect outer or extra mid layer warmth for various occasions,it is the perfect layer for everyday casual wear and outdoor sports.
CLASSIC FIT: A modern classic fit and with a soft, lightweight feel and two zippered hand pockets make this fleece jacket a staple for comfortable outdoor activity.
DURABILITY: Gimecen’s attention to detail is what sets our apparel apart. Specifying only the highest quality materials, expert stitching and craftsmanship. This is a long-lasting garment you will enjoy for seasons to come.`,
      tags: [
         "zipper",
         "hood",
         "polyester",
         "fleece",
         "women",
         "lining",
         "pocket",
      ],
      variants: [
         {
            name: "Rose",
            color: convertToRGB("#e74e89"),
         },
         {
            name: "Denim Blue",
            color: convertToRGB("#93b1ca"),
         },
         {
            name: "Green",
            color: convertToRGB("#3b584f"),
         },
      ],
      price: {
         currency: "USD",
         discount: {
            name: "Sale",
            percent: 8,
         },
         value: 45.99,
      },
      reviews: [
         {
            userId: "12345",
            content: `This jacket is soft and comfortable. I got a large because I prefer bigger jackets on me even though I fit a medium. I feel like I should have gotten an XL just because I thought the large would have been as big as I wanted it to be but I still love it nonetheless. I had one similar years ago when I lost it and never saw it again. I’m so happy to have one again because it was my favorite. And now it still is.`,
            date: "2022-12-30T11:24:24.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `I purchased multiple colors after receiving the first one. It washes well in cold water, dry for few minutes, hang to dry. I am wearing indoors over a long sleeve shirt due to conserving energy. I'm 5'4" 120 lbs and small fits perfectly. Very happy.`,
            date: "2022-01-05T06:40:00.000Z",
            rating: 5,
         },
         {
            userId: "12345",
            content: `I love it, it’s warm and does the job. I work night shift as an RN and I can keep it on most of the night. Very comfortable and warm but not too warm.`,
            date: "2022-01-17T05:06:26.000Z",
            rating: 5,
         },
      ],
   },
];

console.log(JSON.stringify(items).slice(1, -1));
