/**
 * A nested list of product categories.
 */
const categoryTree = [
  {
    name: "Electronics",
    products: [
      { name: "Laptop", price: 1200, stock: 30 },
      { name: "Keyboard", price: 75, stock: 150 },
    ],
    subcategories: [
      {
        name: "Mobile Phones",
        products: [
          { name: "Smartphone", price: 800, stock: 200 },
          { name: "Tablet", price: 500, stock: 120 },
        ],
        subcategories: [], // Empty subcategories
      },
    ],
  },
  {
    name: "Books",
    products: [
      { name: "Sci-Fi Novel", price: 15, stock: 300 },
      { name: "Cookbook", price: 25, stock: 100 },
    ],
    subcategories: [
      {
        name: "Children's Books",
        products: [
          { name: "Picture Book", price: 10, stock: 500 },
        ],
        subcategories: [],
      },
    ],
  },
];

function printSummary(categoryTree){
        let allProducts = [];
    function processlevel(categoryTree){
    categoryTree.forEach((v)=>{ 
        allProducts.push(v.name)
            if(v.subcategories && v.subcategories.length > 0){
        processlevel(v.subcategories)
         console.log(allProducts)
    }
    });
   
}

    processlevel(categoryTree)
  console.log(allProducts)
    }
printSummary(categoryTree)