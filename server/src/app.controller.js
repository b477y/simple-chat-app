const bootstrap = (app, express) => {
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

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

export default bootstrap;
