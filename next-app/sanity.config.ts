import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "2g4p5bpj",
  dataset: "production",
  title: "Next App YouTube Tutorial",
  apiVersion: "2023-10-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas}
})

export default config