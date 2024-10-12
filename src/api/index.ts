import { Router, raw } from "express";

export default (rootDirectory, options) => {
  const router = Router();

  router.use(
    raw({
      type: "*/*", // Apply to all content types
      limit: "5mb",
      verify: (req, res, buf) => {
        req.rawBody = buf.toString();
        console.log("Raw body:", req.rawBody); // Log the raw body for testing
      },
    })
  );

  router.post("/webhook", (req, res) => {
    console.log(req.rawBody);
  });

  return router;
};
