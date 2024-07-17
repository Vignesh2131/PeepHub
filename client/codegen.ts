import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://localhost:8000/graphql",
  documents: ["src/**/*.ts"],
  generates: {
    "gql/": {
      preset: "client",
    },
  },
};
export default config;
