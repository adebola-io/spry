import fs from "fs";

export default defineEventHandler((event) => {
   if (event.req.method === "GET") {
      const { address } = getRouterParams(event);
      const localAddress = `assets/images/${address}`;
      if (fs.existsSync(localAddress)) {
         const file = fs.createReadStream(localAddress);
         event.res.setHeader(
            "Content-Type",
            `image/${address.split(".").slice(-1)[0]}`
         );
         return sendStream(event, file);
      } else {
         throw createError({
            message: "Could not retrieve image from server.",
            statusCode: 404,
         });
      }
   }
});
