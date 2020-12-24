export var categorizeProducts = (productsArr) => {
  //initiliaze categorizes products
  var categorizes = [];
  var categoryName;
  var isCategoryExist;
  var newCategory;
  //loop over products
  // productsArr.forEach((product)=>{
  //   var category=product.category;
  //   console.log(category)

  // })
  for (var product of productsArr) {
    categoryName = product.category;
    // console.log(categoryName)
    isCategoryExist = categorizes.some(
      (categoryObj) => categoryObj.category === categoryName
    );
    // console.log(isCategoryExist)
    if (isCategoryExist) {
      //if category is sxist (yes)
      //push products in products field in categorObj
      categorizes = categorizes.map((categoryObj) => {
        if (categoryObj.category === categoryName) {
          categoryObj.products.push(product);
          return categoryObj;
        } else {
          return categoryObj;
        }
      });
    } else {
      newCategory = {
        category: product.category,
        products: [product],
      };
      categorizes.push(newCategory);
    }
  }
  return categorizes;
};
