const getRandomNumber = (req, res) => {
  const randomNum = Math.floor(Math.random() * 11);
  res.json({ randomNum });
};

module.exports = {
  getRandomNumber,
};
