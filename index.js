const { app } = require("./server");

//Port
const port = process.env.PORT || 4001;
//Run the app
app.listen(port, "0.0.0.0", () => {
  console.log(`Server up in port ${port}`);
});
