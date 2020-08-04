const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
  {
    tokenId: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  { typeKey: "$type" } //Добавляя это, мы просим mongoose использовать $type для интерпретации тип ключа вместо ключевого слова по умолчанию type
);
const Token = mongoose.model("Token", tokenSchema);
