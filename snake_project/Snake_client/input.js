// Stores the active TCP connection object.
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", (key) => handleUserInput(key, conn));
  stdin.resume();
  return stdin;
};
const handleUserInput = function (key, conn) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "x") {
    conn.write("Say: hii");
  }
  if (key === "w") {
    console.log("w");
    conn.write("Move: up");
  }
  if (key === "a") {
    console.log("a");
    conn.write("Move: left");
  }
  if (key === "s") {
    console.log("s");
    conn.write("Move: down");
  }
  if (key === "d") {
    console.log("d");
    conn.write("Move: right");
  }
};
module.exports = { setupInput };
