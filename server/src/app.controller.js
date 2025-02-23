const bootstrap = (app, express, Server) => {
  const PORT = process.env.PORT;

  app.use(express.json());

  app.get("/short-polling", (req, res, next) => {
    return res.status(200).json({ message: "short-polling" });
  });

  app.get("/long-polling", (req, res, next) => {
    setTimeout(() => {
      return res.status(200).json({ message: "long-polling" });
    }, 5000);
  });

  app.get("/server-send-events", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    setInterval(() => {
      res.write(`data: ${JSON.stringify({ message: "new-event" })}\n\n`);
    }, 2000);
  });

  const httpServer = app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });

  const io = new Server(httpServer, {
    cors: "*",
  });

  io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("hi", (data) => {
      console.log(data);
      socket.emit("hi", "hi from server-side");
    });
  });
};

export default bootstrap;
