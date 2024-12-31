const getImgDynamic = (imagePath) => {
  return new URL(`@images/${imagePath}`, import.meta.url).href;
};

export default getImgDynamic;
