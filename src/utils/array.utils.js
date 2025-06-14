const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomPositiveNumber = (min = 0, max = 1) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const updateItem = (items, update) =>
  items.map((item) => (item.id === update.id ? update : item));

const deleteItem = (items, del) =>
  items.filter((item) => item.id !== del.id);

export {
  getRandomArrayElement,
  getRandomPositiveNumber,
  updateItem,
  deleteItem
};
