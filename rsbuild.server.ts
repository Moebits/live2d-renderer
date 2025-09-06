import {defineConfig} from "@rsbuild/core"

export default defineConfig({
    source: {
        entry: {index: "./demo/server.ts"}
    },
    output: {
        target: "node",
        distPath: {root: "./dist/server"},
        minify: false,
        filenameHash: false,
        sourceMap: false,
        legalComments: "none",
        filename: {
            js: "server.js"
        }
    }
})