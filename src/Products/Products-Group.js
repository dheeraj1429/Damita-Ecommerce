export const combineSelectedProducts = function (cardItem, addToCardItem) {
  const exiting = cardItem.find((el) => el.id == addToCardItem.id);

  if (exiting) {
    return cardItem.map((el) =>
      el.id === addToCardItem.id ? { ...el, quntity: el.quntity + 1, totalPrice: el.totalPrice + el.Deal_of_the_Day } : el
    );
  }

  return [...cardItem, { ...addToCardItem, quntity: 1, totalPrice: addToCardItem.Deal_of_the_Day }];
};
