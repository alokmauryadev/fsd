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

/**
 * Analyzes a nested category structure to generate a site-wide report.
 * @param {Array<object>} categories - The top-level array of categories.
 * @returns {object} A report with total product count, total stock value, and all category names.
 */
function analyzeCategoryTree(categories) {

    const report = {
        "totalProductCount":0,
        "totalStockValue":0,
        "allCategoryNames":[]
    }

    function processlevel(categories){
        for (const category of categories) {
            report.allCategoryNames.push(category.name)
            for (const product of category.products) {
                report.totalProductCount++
                report.totalStockValue+= product.price*product.stock;
            }
            if(category.subcategories && category.subcategories.length >0){
                processlevel(category.subcategories)
            }
        }

    }

    processlevel(categories)
    return report;
}


// --- Example Usage ---
const report = analyzeCategoryTree(categoryTree);
console.log(report);


/*
Expected Output:

{
  "totalProductCount": 7,
  "totalStockValue": 279250,
  "allCategoryNames": [
    "Electronics",
    "Mobile Phones",
    "Books",
    "Children's Books"
  ]
}

Calculation Breakdown:
- Electronics: (1200*30)+(75*150) = 36000 + 11250 = 47250
- Mobile Phones: (800*200)+(500*120) = 160000 + 60000 = 220000
- Books: (15*300)+(25*100) = 4500 + 2500 = 7000
- Children's Books: (10*500) = 5000
- Total Value: 47250 + 220000 + 7000 + 5000 = 279250
- Total Products: 2 (Electronics) + 2 (Phones) + 2 (Books) + 1 (Children's) = 7

*/
