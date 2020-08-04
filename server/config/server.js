module.exports = {
  port: 3000,
  mongoData: "mongodb://localhost:27017/auth",
  jwt: {
    sec: "thisIsSecure",
    tokens: {
      access: {
        type: "access",
        expiresIn: "2m",
      },
      refresh: {
        type: "refresh",
        expiresIn: "3m",
      },
    },
  },
};
