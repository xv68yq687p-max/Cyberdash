import { Hono } from "hono";
import morningReport from "./endpoints/morningReport";

// ÉN app
const app = new Hono<{ Bindings: import("./endpoints/morningReport").Bindings }>();

// Monter routeren -> gir GET /morning-report
app.route("/", morningReport);

// Enkel helsesjekk
app.get("/__health", (c) => c.text("ok"));

export default app;
