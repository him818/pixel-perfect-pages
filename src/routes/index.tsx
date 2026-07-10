import { createFileRoute } from "@tanstack/react-router";
// Serve the original homepage HTML byte-for-byte at "/".
import indexHtml from "../../public/index.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(indexHtml, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
