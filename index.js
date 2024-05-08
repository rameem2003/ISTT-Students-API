const app = require("./app");

require("dotenv").config();

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`ISTT Students API v1.0`);
  console.log(`Server is running at http://localhost:${PORT}`);
});
