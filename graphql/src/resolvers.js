module.exports = {
  Query: {
    ads: (_, { minScore }, { dataSources }) =>
      dataSources.adAPI.getAllAds().then(ads => ads.filter(ad => ad.score >= minScore)),
    ad: (_, { id }, { dataSources }) =>
      dataSources.adAPI.getAdById(id)
  },
  Ad: {
    images: (parent, args, { dataSources }) => {
      if (parent.imageIds.length > 0) {
        return dataSources.imagesAPI.getImagesByIds(parent.imageIds);
      }
      return [];
    }
  }
};