const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const { connect } = require("./Database/connect");
const useRouter = require("./router/userRouters");
const useTicket = require("./router/ticketsRouters");
const achatRouter = require("./router/achatRouter");
const routeEvent = require("./router/eventRouter");

app.use(express.json());
app.use("/users", useRouter);
app.use("/tickets", useTicket);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/achats", achatRouter);
app.use("/events", routeEvent);
connect();

app.listen(process.env.PORT, (err) => {
  err
    ? console.error(err)
    : console.log(
        `My server is connecting on http://localhost:${process.env.PORT}`
      );
});
