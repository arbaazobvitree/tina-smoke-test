import { defineConfig } from "tinacms";

const branch = "main";

export default defineConfig({
  branch,

  // Temporary mock strings to bypass offline Next.js static build checks
clientId: "64d0fe12-0ef3-4db0-881e-c32316b75907", 
token: "c5848f50396958e38a5b66265de269a41031fe8f",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "sandbox",
        label: "Sandbox Test",
        path: "content/sandbox",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Test Title", isTitle: true, required: true },
          { type: "image", name: "testImage", label: "Cloudinary Test Image" },
          { type: "rich-text", name: "body", label: "Body Text", isBody: true }
        ],
      },
    ],
  },
});