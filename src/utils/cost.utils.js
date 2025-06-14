const getPointOffersCost = (pointOffersIds, offers) =>
  pointOffersIds.reduce(
    (offerCost, id) => offerCost + (offers.find((offer) => offer.id === id)?.price ?? 0),
    0
  );

const getTotalPointsCost = (points, offers) =>
  points.reduce((total, point) => {
    const typeOffers = offers.find((offer) => offer.type === point.type)?.offers ?? [];
    return total + point.basePrice + getPointOffersCost(point.offers, typeOffers);
  }, 0);

export {
  getPointOffersCost,
  getTotalPointsCost
};
