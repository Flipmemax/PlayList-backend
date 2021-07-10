const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");

const app = express();

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

const authRouter = require("./routers/auth");
const playlistRouter = require("./routers/playlist");

app.use("/", authRouter);
app.use("/playlist", playlistRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
