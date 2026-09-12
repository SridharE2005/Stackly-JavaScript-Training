//===============================================
//               TASK-1
//===============================================


// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
    
//     data.forEach((element) => { 
//         console.log("Product title :"+element.title);
//         console.log("Price :"+element.price);
//         console.log("Category :"+element.category);
//         console.log("======================================");
        
//     });
    
//     let mapArray=data.map((element)=>({title:element.title,price:element.price}))
//     console.log(mapArray);

//     let filterArray=data.filter((element)=>{
//         return element.price>100;
//     })
//     console.log(filterArray);

//     let findArray=data.find((element)=>{
//         return element.category=="electronics";
//     })
//     console.log(findArray);
//     let reduceArray=data.reduce((acc,element)=>{
//         return acc+element.price;
//     },0)
//     console.log(reduceArray);

//     let highToLow=data.sort((a,b)=>b.price-a.price)
//     console.log(highToLow);


    
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("==================Task-1 Completed====================");
// })

// //===============================================
// //      Task 2 — Product Category Dashboard
// //===============================================
// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
    
//     function countItem(item){
//         let itemCount=data.filter((element)=>element.category===item)
//         return itemCount.length;
//     }
    

//     console.log("===== PRODUCT DASHBOARD =====");
//     console.log("Total Products : ",data.length);
//     console.log("Jewelery : ",countItem("jewelery"));
//     console.log("men's clothing : ",countItem("men's clothing"));
//     console.log("women's clothing : ",countItem("women's clothing"));

//     let lowToHigh=data.sort((a, b)=>a.price-b.price)
//     console.log(`Highest Price : $${lowToHigh[lowToHigh.length-1].price}`);
    
//     console.log(`Lowest Price : $${lowToHigh[0].price}`);

//     let AveragePrice=data.reduce((acc, element)=>acc+element.price,0)/data.length;
//     console.log(`Average Price : $${AveragePrice}`);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("==================Task-2 Completed====================");
// })

//===============================================
//           Task 3 — User & Post API
//===============================================

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.table(data);
    
//     console.log("User Names :");
    
//     data.forEach((element)=>{
//         console.log(element.name);
//     })

//      data.forEach((element)=>{
//         console.log(`Name:${element.name} || Email: ${element.email}`);
//     })

//     let UserWithID5=data.find((element)=>{
//         return element.id===5;
//     })
//     console.log(UserWithID5);

//     let findUsers=data.filter((element)=>{
//         return element.address.city=="Bartholomebury";
//     })
//     console.log(findUsers);
    

    
// }).catch((error)=>{
//     console.log(error);
// })

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     console.log(data);
    
//     let filterPost=data.filter((element)=>{
//         return element.userId==1;
//     })
//     console.log(filterPost);

//     console.log("how many posts created by user ID 1 : "+filterPost.length+" posts");

//     let findPost=data.find((element)=>{
//         return element.title.length>50;
//     })
//     console.log(findPost);
    
    
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("==================Task-3 Completed====================");
// })

// //===============================================
// //           Task 4 — API + Search
// //===============================================

// fetch("https://fakestoreapi.com/products")
// .then((data)=>{
//     return data.json();
// })
// .then((data)=>{
//     let category=prompt("Enter the category to search for:");
//     let price=Number(prompt("Enter the maximum price:"));
    
//     let searchResult=data.filter((element)=>{
//         return element.category===category && element.price<=price;
//     })
//     console.log(searchResult);

    
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("==================Task-4 Completed====================");
// })

//===============================================
//           Task 5 — API Shopping Cart
//===============================================
fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json();
})
.then((data)=>{
    data.forEach((element)=>{
        console.log(`Product ${element.id} : ${element.title}`);
        console.log(`Price : ${element.price}`);
        console.log("==========================================");
    })

    let cart=[];
    console.log("===== CART =====");
    
    function selectproduct(id){
        let product=data.find((element)=>{
            return element.id===id;
        })
        console.log(`Product ${cart.length+1} : ${product.title}`);
        console.log(`Price : ${product.price}`);
        cart.push({title:product.title, price:product.price});
    }
    selectproduct(3);
    selectproduct(5);
    console.log(cart);
    
    let totalPrice=cart.reduce((acc, element)=>acc+element.price, 0);
    console.log(`Total Price : $${totalPrice}`);

    if(totalPrice>100){
        let discount=totalPrice*0.1;
        let finalPrice=totalPrice-discount;
        
        console.log(`Discount : $${discount}`);
        console.log(`Final Price : $${finalPrice}`);
    }

    
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("==================Task-5 Completed====================");
})

//===============================================
//        Task 6 — FakeStore Product Report
//===============================================
fetch("https://fakestoreapi.com/products")
.then((data)=>{
    return data.json();
})
.then((data)=>{
    console.log("========== PRODUCT REPORT ==========");
    console.log("Product Names:");
    data.forEach((element)=>{
        console.log("- ",element.title);
    })
    
    let productNames=data.map((element)=>element.title);
    console.log(productNames);
    let filterProduct=data.filter((element)=>element.price>100)
    console.log(`Products Above $100: `);
    console.log(filterProduct);
    let findProduct=data.find((element)=>element.category==="electronics");
    console.log("Electronics Product:");
    console.log(findProduct);
    let reduceProduct=data.reduce((acc, element)=>acc+element.price, 0);
    console.log("Total Product Value: ");
    console.log(`$${reduceProduct}`);
    let above500=data.some((element)=>element.price>500);
    console.log("Any Product Above $500:");
    
    console.log(above500);
    let above1=data.every((element)=>element.price>1);
    console.log("Any Products Above $1:");
    console.log(above1);

    let sortProduct=data.sort((a, b)=>b.price-a.price);
    console.log("Highest → Lowest:");
    console.log(sortProduct);
    
    
       
    
    
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("==================Task-6 Completed====================");
})
