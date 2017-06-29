exports.gacha = function gacha (event, callback) {
  console.log(`gacha: ${event.data.message}`);
  callback();
};
