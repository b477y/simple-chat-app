const bootstrap = (app, express) => {
  const PORT = process.env.PORT;

  app.use(express.json());

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

export default bootstrap;
