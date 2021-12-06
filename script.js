function signup() {
    // declaration des données
 var firstName =document.getElementById('firstName').value;
 var veriffirstname = verifLength(firstName,3);
 if (veriffirstname) {

    document.getElementById("firstNameError").innerHTML="";
     
 } else {

    document.getElementById("firstNameError").innerHTML="First name must have at least 3 chararcters";
    document.getElementById("firstNameError").style.color="red";
     
 }

 var lastName =document.getElementById('lastName').value;

 var veriflastname = verifLength(lastName,5);
 if (veriflastname) {

    document.getElementById("lastNameError").innerHTML="";
     
 } else {

    document.getElementById("lastNameError").innerHTML="last name must have at least 5 chararcters";
    document.getElementById("lastNameError").style.color="red"; 
}
 var email =document.getElementById('email').value;
var verifemail = validateEmail(email);
 if (verifemail) { 
    document.getElementById("emailError").innerHTML="";
    
} else {
    document.getElementById("emailError").innerHTML="Invalide email";
    document.getElementById("emailError").style.color="red"; 
    
}


// mayelzemech mail yetaaawed
var emailExist = userExist(email);
console.log(emailExist);
if (!emailExist) {
    document.getElementById('emailExistError').innerHTML="";
    
} else {
    document.getElementById('emailExistError').innerHTML="Email exist ";
    document.getElementById('emailExistError').style.color="red ";
}


 var password =document.getElementById('password').value;

 var verifPwd = verifLength(password,8);
 if (verifPwd) { 
    document.getElementById("passwordError").innerHTML="";
    
} else {
    document.getElementById("passwordError").innerHTML="Invalide password";
    document.getElementById("passwordError").style.color="red"; 
    
}


 var confirmPswd =document.getElementById('confirmPswd').value;


if (password == confirmPswd) { 
    document.getElementById("cpasswordError").innerHTML="";
    
} else {
    document.getElementById("cpasswordError").innerHTML="Invalide confirmation";
    document.getElementById("cpasswordError").style.color="red"; 
}

 var tel =document.getElementById('tel').value;

// isnan == is not a number 

 if ((tel.length == 8 )&&(isNaN(tel)==false)) { 
    document.getElementById("telError").innerHTML="";
    
} else {
    document.getElementById("telError").innerHTML="Invalide tel";
    document.getElementById("telError").style.color="red"; 
    
}

if ( (veriffirstname) && (veriflastname) && (verifemail) && (verifPwd) && (password == confirmPswd) && (tel.length == 8 )&&(isNaN(tel)==false) && !emailExist)

{
// regroupement des valeurs

var idUser =JSON.parse(localStorage.getItem("idUser") || "10")
var user = {
id : idUser,
firstName : firstName,
lastName : lastName,
email : email,
password : password,
confirmPswd : confirmPswd,
tel : tel,
role :"client"
};

// reccuperation des anciennes valeurs dans js

var users = JSON.parse(localStorage.getItem("users") || "[]");

// ajout de l'objet user dans le tableau users
users.push(user);

// sauvegarde du tableau users (mis à jour)
localStorage.setItem("users",JSON.stringify(users));
localStorage.setItem("idUser",idUser+1)
// reload lel page pour actualiser la pages
location.reload();


}
}

function verifLength(ch,nb) {
    return ch.length  >= nb ;
    
}

function validateEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
}

  function validateOnlyTextField(element) {
    var str = element.value;
    if(!(/^[a-zA-Z, ]+$/.test(str))){
        // console.log('String contain number characters');
        str = str.substr(0,  str.length =2000);
        element.value = str;
    }
}

  function addProduct() {
    // alert("click");
        // declaration des données


        // ---------------productName---------------

    var productName = document.getElementById('productName').value ;

           //  verif if product exists
    var verifIfPrExist =  searchProduct(productName);
    if(verifIfPrExist) {
        document.getElementById("productNameExistError").innerHTML = "Product already exists";
        document.getElementById("productNameExistError").style.color= "red";


    }
    else{
        document.getElementById("productNameExistError").innerHTML = "";
    }
    


    
    var verifProductName = verifLength(productName,3);
     if (verifProductName) {
    
        document.getElementById("productNameError").innerHTML="";
         
     } else {
    
        document.getElementById("productNameError").innerHTML="Product Name must have at least 3 chararcters";
        document.getElementById("productNameError").style.color="red";
         
     }
    
        // ---------------price------------------

    var price = document.getElementById('price').value ;
    if (price>0) {
    
        document.getElementById("priceError").innerHTML="";
         
     } else {
    
        document.getElementById("priceError").innerHTML="The price is invalide";
        document.getElementById("priceError").style.color="red";
         
     }
    

     //  ----------------- stock -----------------

    var stock = document.getElementById('stock').value ;
    
    if (Number(stock)>10) {
    
        document.getElementById("stockError").innerHTML="";
         
     } else {
    
        document.getElementById("stockError").innerHTML="The stock is invalide";
        document.getElementById("stockError").style.color="red";
    
    }
    
      // ----------------- category ------------------

    var category= document.getElementById('category').value ;
    
    
    if (category.length!=" ") {
    
        document.getElementById("categoryError").innerHTML="";
         
     } else {
    
        document.getElementById("categoryError").innerHTML="The category is invalide";
        document.getElementById("categoryError").style.color="red";
    
    }
    

      //------------------- if general (toutes les conditions) -----------------    

    if ((verifProductName) && (price>0) && (Number(stock)>10) && (category.length!=" ")&&(!verifIfPrExist) )
     
    {

        var idProduct =JSON.parse(localStorage.getItem("idProduct") || "1")
    // regroupement des valeurs
        var product = {
    id : idProduct,
    productName : productName,
    price : price,
    stock : stock,
    category : category
    
    };
    
    // reccuperation des anciennes valeurs dans js
    var products = JSON.parse(localStorage.getItem("products") || "[]");
    
    // ajout de l'objet user dans le tableau users
    products.push(product);
    
    // sauvegarde du tableau users (mis à jour)
    localStorage.setItem("products",JSON.stringify(products));
    localStorage.setItem("idProduct",idProduct+1)
    location.reload();
    
    }}

    function userExist(email) {
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        var exist = false;
     for (let i = 0; i < users.length; i++) {
         if (users[i].email == email){
         exist = true ;
         
     }
        
    }
  return exist ;

}    
//   function bech ndakhel 2 administrateur jdod
function insertAdmin() {

         var admin1 = {
            id : 1,
            firstName : "Imed",
            lastName : "Malek",
            email : "malek.imed@gmail.com",
            password : "123456789",
            tel : "22482482",
            role :"Admin"
        };
        var admin2 = {
            id : 2,
            firstName : "Imed",
            lastName : "Malek",
            email : "malek.imed@gmail.com",
            password : "123456789",
            tel : "22482482",
            role :"Admin"
            };

      // reccuperation des anciennes valeurs dans js

        var users = JSON.parse(localStorage.getItem("users") || "[]");

    // ajout de l'objet user dans le tableau users
        users.push(admin1);
        users.push(admin2);

// sauvegarde du tableau users (mis à jour)
localStorage.setItem("users",JSON.stringify(users));
localStorage.setItem("adminsAdded",true)

  }

  function login() {
    //   alert("test")
    // reccuperation des donnees
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var users = JSON.parse(localStorage.getItem("users")|| "[]" );
    var findedUser;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            findedUser = users[i]
        }
    }
    console.log("findedUser",findedUser); 

if (findedUser) {
    // stockage fel localstorage fel clé connecteduser el findeduser
     localStorage.setItem("connectedUser",JSON.stringify(findedUser));


    // user exist in Ls yemchi ihel page index
    if (findedUser.role == "client") {
        location.replace('index.html')
        

        // kenou admin yemchi thelou page dashboardadmin
    } else {
     location.replace('dashboardAdmin.html')
    }
}  else{
//    user not exist
document.getElementById("error").innerHTML="please try again";
document.getElementById("error").style.color="red";

   }

}

// function displayUsers(){
// var users = JSON.parse(localStorage.getItem("users") || "[]");
// var usersTables = `
// <table class="table">
// <thead>
//   <tr>

//     <th scope="col">Id</th>
//     <th scope="col">First Name</th>
//     <th scope="col">Last Name</th>
//     <th scope="col">Email</th>
//     <th scope="col">Tel</th>
//     <th scope="col">Role</th>
//     <th scope="col">Actions</th>
    
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <th scope="row">Id</th>
//     <td>Imed</td>
//     <td>Malek</td>
//     <td>imed@gmail.com</td>
//     <td>22482482</td>
//     <td>admin</td>
//     <td>  
//         <button type="button" class="btn btn-success">Update</button>
//         <button type="button" class="btn btn-danger">Delete</button>

//     </td>
//   </tr>
// </tbody>
// </table>






// `;
// document.getElementById("usersTable").innerHTML = usersTables

// }
function displayUsers() {
    
var users = JSON.parse(localStorage.getItem("users") || "[]");
    var usersTable=`
    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col"> Id</th>
                            <th scope="col"> first Name </th>
                            <th scope="col"> last Name </th>
                            <th scope="col">Email</th>
                            <th scope="col">Tel</th>
                            <th scope="col">Role</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                      
    `;

    for (let i = 0; i < users.length; i++) {
         usersTable =usersTable + `
        
       
        <tr id="rowUser">
          <th scope="row"> ${users[i].id} </th>
          <td >${users[i].firstName}</td>
          <td > ${users[i].lastName}</td>
          <td >${users[i].email}</td>
          <td> ${users[i].tel}</td>
          <td> ${users[i].role}</td>
          <td>
            <button type="button" class="btn btn-success"onclick="editUser(${users[i].id})">Update</button>
            
          <button type="button" class="btn btn-danger" onclick="deleteObject(${i},'users')">Delete</button>
           </td>
       </tr>
    
      `;
   

    
}
usersTable = usersTable+`  </tbody>
   
</table>`;

  
document.getElementById('usersTable').innerHTML=usersTable;
}


// Edit  1 affichage du form          2 affichage des anciennes valeurs (paswd et tel)                  3 validation de la modification
function editUser(id) {
    // alert("click")
    var user = searchById(id,"users");
  
    var editUser= `
    <div class="col-md-12 form-group">
    <input type="password" class="form-control" id="password" name="name" placeholder="password" onfocus="this.placeholder = ''"onblur="this.placeholder = 'password'" value=${user.password}>
    <span id="passwordError"></span>
    </div>
    <div class="col-md-12 form-group">
    <input type="tel" class="form-control" id="tel" name="name" placeholder="tel" onfocus="this.placeholder = ''" onblur="this.placeholder = 'tel'" value=${user.tel}>
    <div class="col-md-12 form-group">
    <span id="telError"></span>
    </div>
    <button type="submit" value="submit" class="primary-btn"onclick="validateEditUser(${user.id})">VALIDATE</button>
    <div class="col-md-12 form-group">
    </div>
      `;
      document.getElementById("editUser").innerHTML = editUser
}


// clé fi search by id bech naaayet fel tableau le clé eli hachti bih users product .....
function searchById(id,clé) {

    var Tab = JSON.parse(localStorage.getItem(clé)|| "[]" );
    
    for (let i = 0; i < Tab.length; i++) {
        
        if (Tab[i].id == id) { 
            return Tab[i]
        }
    }
    
}

function validateEditUser(id) {
    // reccuperation des nouvelles valeurs
    var newPassword = document.getElementById('password').value ;

   

    var verifPwd = verifLength(newPassword,8);
    if (verifPwd) { 
       document.getElementById("passwordError").innerHTML="";
       
   } else {
       document.getElementById("passwordError").innerHTML="Invalide password";
       document.getElementById("passwordError").style.color="red"; 
       
   }


    var newTel = document.getElementById('tel').value ;

    
 if ((newTel.length == 8 )&&(isNaN(newTel)==false)) { 
    document.getElementById("telError").innerHTML="";
    
} else {
    document.getElementById("telError").innerHTML="Invalide tel";
    document.getElementById("telError").style.color="red"; 
    
}
if ( (verifPwd)  && (newTel.length == 8 )&&(isNaN(newTel)==false) )

    // reccuperaation des utilisateurs dans js
    var users = JSON.parse(localStorage.getItem("users") || "[]");

    // parcours tab recherche user a modifier et modification pswr et tel
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
          users[i].password = newPassword;
          users[i].tel = newTel;
          
      }
        
    }
// sauvegarde du mise a jour
localStorage.setItem("users",JSON.stringify(users))
// refresh de la page
location.reload();

}











//  ------------------------- PRODUCTS -------------------------



function displayProducts() {
    var products = JSON.parse(localStorage.getItem("products") || "[]");
    var productsTable=`
    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">idProduct</th>
                            <th scope="col"> productName </th>
                            <th scope="col"> price </th>
                            <th scope="col"> stock</th>
                            <th scope="col">category</th>
                           
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                      
    `;
    for (let i = 0; i < products.length; i++) {
        productsTable =productsTable + `
       
      
       <tr id="rowUser">
         <th scope="row"> ${products[i].id} </th>
         <td >${products[i].productName}</td>
         <td > ${products[i].price}</td>
         <td >${products[i].stock}</td>
         <td> ${products[i].category}</td>
        
         <td>
           <button type="button" class="btn btn-success"onclick="editProduct(${products[i].id})">Update</button>
         <button type="button" class="btn btn-danger" onClick="deleteObject(${i},'products')">Delete</button>
          </td>
      </tr>
   
     `;
    }
     productsTable = productsTable+`  </tbody>
   
     </table>`;
     
    
     document.getElementById('productsTable').innerHTML=productsTable;
     
}

function editProduct(id) {

    var product = searchById(id,"products");

    var editProduct = `
    
    <div class="col-md-12 form-group" >
     <input type="number" class="form-control" id="price" name="name" placeholder="price" onfocus="this.placeholder = ''" onblur="this.placeholder = 'price'" value=${product.price}>
      <span id="priceError"></span>
       </div>

    <div class="col-md-12 form-group" >
     <input type="number" class="form-control" id="stock" name="name" placeholder="stock" onfocus="this.placeholder = ''" onblur="this.placeholder = 'stock'" value=${product.stock}>
      <span id="stockError"></span>
       </div>
     
    <button type="submit" value="submit" class="primary-btn"onclick="validateEditProduct(${product.id})">VALIDATE</button>
     <div class="col-md-12 form-group">
       </div>   
    
    
    
    
    
    
    
    `
    document.getElementById("editProduct").innerHTML = editProduct
}

function validateEditProduct(id) {
    
        // reccuperation des nouvelles valeurs
        var newPrice = document.getElementById('price').value ;

        if (newPrice>0) {
    
            document.getElementById("priceError").innerHTML="";
             
         } else {
        
            document.getElementById("priceError").innerHTML="The price is invalide";
            document.getElementById("priceError").style.color="red";
             
         }
    

    
    
        var newStock = document.getElementById('stock').value ;
    
        if (Number(newStock)>10) {
    
            document.getElementById("stockError").innerHTML="";
             
         } else {
        
            document.getElementById("stockError").innerHTML="The stock is invalide";
            document.getElementById("stockError").style.color="red";
        
        }
    
     
        // reccuperaation des utilisateurs dans js
        var products = JSON.parse(localStorage.getItem("products") || "[]");
    
        // parcours tab recherche user a modifier et modification pswr et tel
        for (let i = 0; i < products.length; i++) {
          if (products[i].id == id) {
              products[i].price = newPrice;
              products[i].stock = newStock;
              
          }
            
        }
    // sauvegarde du mise a jour
    localStorage.setItem("products",JSON.stringify(products))
    // refresh de la page
    location.reload();
    
    }
    
function deleteObject(position,clé) {

    var Tab = JSON.parse(localStorage.getItem(clé) || "[]");

    Tab.splice(position,1);

    localStorage.setItem(clé,JSON.stringify(Tab));

    location.reload();
}

function searchProduct(productName) {

    var products = JSON.parse(localStorage.getItem("products")|| "[]" );
    
    for (let i = 0; i < products.length; i++) {
        
        if (products[i].productName == productName) { 

            return true
        }
    }

return false
    
}







//     -------------------------  Shop    ---------------------------





function displayShopProducts() {

var products = JSON.parse(localStorage.getItem("products")|| "[]" );
console.log(products);

var shopProducs = ``;

for (let i = 0; i < products.length; i++) {
    shopProducs +=`
                 <div class="col-lg-4 col-md-4">
                             <div class="single-product">
                                      <img class="img-fluid" src="img/product/p1.jpg" alt="">
                                 <div class="product-details">
                                      <h6>${products[i].productName}</h6>
                                <div class="price">
                                        <h6>${products[i].price} TND </h6>
                                        <h6 >${products[i].stock} Pieces </h6>
                                </div>
                                <button class="primary-btn" style="margin-left: 27%;" onclick="goToReservation(${products[i].id})">Reserve</button>
                                  </div>
                             </div>
                  </div>

    `;
    
}
   document.getElementById("shopProducts").innerHTML = shopProducs
}

// function pour stockage d'un id fel local storage bech naawed nhel details mta3 id fi page jdida productsDetails.html
function goToReservation(id) {

    // stockage local storage  "idPrToReserve = clé" id howa chnawa bech nsagel fel local storage 

    localStorage.setItem("idPrToReserve",id);

    // location replace bech ihezek el page okhra "productDetails.html"
    location.replace("productsDetails.html");
}






// ------------------------------- productDetails






// affichage produit
function displayProductDetails() {

    var idProduct = localStorage.getItem("idPrToReserve");
    var product = searchById(idProduct,"products");
    console.log(product);

    // je vais placer les valeurs njibhom mel html
    document.getElementById("productName").innerHTML = product.productName;
    document.getElementById("price").innerHTML = product.price + " TND ";
    document.getElementById("category").innerHTML = product.category;
    document.getElementById("stock").innerHTML = product.stock + " pieces ";
    
}

function validateReservation() {
    var qty = document.getElementById("qty").value;
    var idProduct = localStorage.getItem("idPrToReserve");
    var product = searchById(idProduct,"products");
  
    
    if ((Number(qty)>product.stock) || Number(qty)<=0){

    //    stock indiponible ou invalide
    document.getElementById("qtyError").innerHTML = "Invalid Qty";
    document.getElementById("qtyError").style.color = "red"

    } else {
    //     stock disponible
    document.getElementById("qtyError").innerHTML = "";

    // appel lel tableau orders ama tawa bech yarjaa feragh khater awel commande
  var orders = JSON.parse(localStorage.getItem("orders") || "[]"); 

//   order loula bech tekhedh id 1
  var idOrder =JSON.parse(localStorage.getItem("idOrder") || "1" );

//   appel lel connecteduser (client connecté eli bech i3adi commande)
  var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

//   regroupement des information de la commande dans un objet order
  var order = {
    id  : idOrder,
   idProduct : idProduct,
   idUser : connectedUser.id,
   qty : Number(qty)


  }

    orders.push(order);
    localStorage.setItem("orders",JSON.stringify(orders));
    localStorage.setItem("idOrder",idOrder+1);

     location.reload();

    }
    // mise a jour du stock

    //  reccuperation de tous les produits dans ls
    var products = JSON.parse(localStorage.getItem("products") || "[]");

    // parcours du tableau des produits + recherche du produit a modifier + modif stock
    for (let i = 0; i < products.length; i++) {
       
        if (products[i].id == idProduct) {
            products[i].stock = products[i].stock - Number(qty);
            
        }
        
    }
    // sauvegarde du tableau products mis a jour
    localStorage.setItem("products",JSON.stringify(products));
}





// --------------------- cart.html --------------


function basket() {

    //  reccuperation des info de l'utilisateur connecté

    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

    // reccuperation de toutes les commandes de tous les utilisateurs 

    var orders = JSON.parse(localStorage.getItem("orders") || "[]");

    // declaration d'un tableau vide pour affecter les commandes de l'utilisateur connecté
    
    var myOrders = [] ;

    // parcours du tableau des commandes et recherche des commandes de l'utilisateur connecté

    for (let i = 0; i < orders.length; i++) {
        if (orders[i].idUser == connectedUser.id) {
            myOrders.push(orders[i]);
        }
        
    }
    // part1
      var cart = `
      <table class="table">
      <thead>
          <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Actions</th>
          </tr>
      </thead>
      <tbody>`;

    var subTotal = 0
    for (let i = 0; i < myOrders.length; i++) 
    {
        //  recherche du produit a travers son id pour pouvoir afficher son nom et son prix
        var product = searchById(myOrders[i].idProduct,"products")
        var total = Number((product.price)*(myOrders[i].qty));
        subTotal += total

                    // part 2
                    cart+= `
                        <tr>
                            <td>
                                <div class="media">
                                    <div class="d-flex">
                                        <img src="img/cart.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <p>${product.productName}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h5>${product.price}  TND</h5>
                            </td>
                            <td>
                                <h5>${myOrders[i].qty}  pieces</h5>
                            </td>
                            <td>
                                <h5>${total}     TND</h5>
                            </td>
                            <td>
                            <button type="button" class="btn btn-success"onclick="editOrder(${myOrders[i].id})">Edit</button>
            
                            <button type="button" class="btn btn-danger" onclick="">Delete</button>
                  
                            </td>

                        </tr>`
     }
                    //   part 3
                    cart+=`
                    
                        <tr>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                <h5>Subtotal</h5>
                            </td>
                            <td>
                                <h5>${subTotal}    TND</h5>
                            </td>
                        </tr>
                    </tbody>
                </table>

                        `;
        // nhotttttttttou table fel html "" = id eli bech nhotou fel html +  =cart heya variable eli declaritha fel bactic eli feha contenu eli bech yethat 
document.getElementById("cart").innerHTML = cart


}

function editOrder(id) {
    var order = searchById(id,"orders");
    var editOrderForm = `
    

    <div class="col-md-12 form-group" >
     <input type="number" class="form-control" id="qty" name="name" placeholder="stock" onfocus="this.placeholder = ''" onblur="this.placeholder = 'stock'" value=${order.qty}>
      <span id="stockError"></span>
       </div>
     
    <button type="submit" value="submit" class="primary-btn"onclick="validateEditOrder(${order.id})">VALIDATE</button>
     <div class="col-md-12 form-group">
       </div>   
    
    
    
    
    
    
    
    `
    document.getElementById("editOrderForm").innerHTML = editOrderForm

}

function validateEditOrder(id) {
    var newQty = document.getElementById('qty').value;
    var order = searchById(id,"orders");
    var diff = Number()

    if (newQty>0 && newQty<= myOrders[i].qty) {

        document.getElementById("newQtyError").innerHTML="";
         
     } else {
    
        document.getElementById("newQtyError").innerHTML="The Quantity is invalide";
        document.getElementById("newQtyError").style.color="red";
         
     }




 
    // reccuperaation des utilisateurs dans js
    var qty = JSON.parse(localStorage.getItem("orders") || "[]");

    // parcours tab recherche qty a modifier et modification 
    for (let i = 0; i < qty.length; i++) {
      if (qty[i].id == id) {
          [i].qty = newQty;
          
      }
        
    }
// sauvegarde du mise a jour
localStorage.setItem("orders",JSON.stringify(newQty))
// refresh de la page
location.reload();

}

    

