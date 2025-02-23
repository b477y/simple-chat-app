const clientIo = io("http://localhost:3000/");

clientIo.on("connect", () => {
  console.log(`Connection established`);
});

clientIo.emit("hi", "hi from client-side");
clientIo.on("hi", (data) => {
  console.log(data);
});
