const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "riya",
    to: "neha",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "pallavi",
    to: "arti",
    msg: "send me your SE notes",
    created_at: new Date(),
  },
  {
    from: "anjai",
    to: "divya",
    msg: "send me your computer network file",
    created_at: new Date(),
  },
];
Chat.insertMany(allChats);
