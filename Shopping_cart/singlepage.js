const sliderMainImage = document.getElementById("product-main-image");
let title = document.getElementById("title");
let description = document.getElementById("description");
let price1 = document.getElementById("price");
let discount = document.getElementById("discount");
let sideImage = document.querySelectorAll("#image-list");

function getSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('productId'); // Assuming 'productId' is the parameter name in the URL
}

function singleItem(productId) {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then((single) => {
      sliderMainImage.src = `${single.thumbnail}`;
      title.innerText = `${single.title}`;
      price1.innerText = `${single.price}`;
      discount.innerText = `${single.discountPercentage}`;
      description.innerText = `${single.description}`;

      single.images.forEach((imageURL, index) => {
        
        if (sideImage[index]) {
          sideImage[index].src = imageURL;

          // Add event listener to each side image
          sideImage[index].addEventListener('click', function () {
            sliderMainImage.src = sideImage[index].src;
            console.log(sliderMainImage.src);
          });
        }
      });

      console.log(single);
    });
}

const productId = getSearchParams();

console.log(productId);
singleItem(productId);
customerReview(productId);
/* if (productId) {
  singleItem(productId);
} else {
  console.error('Product ID not found in URL.');
}
 */



// Poovarasan review


// copy code upon

const star= document.querySelectorAll('.star i');
const rateno = document.getElementById('rateno');


function customerReview (productId){
fetch(`https://dummyjson.com/products/${productId}`)
.then(res => { return res.json()})
.then(data => {
    // console.log(data.rating);  
    rateno.innerText=`${data.rating} out of 5 `;
    star.forEach((rate,index1) => {            
                if (index1 <= (data.rating-1)) {
                    rate.classList.add("active");
                }
              
        });
      })
}
// Display popup
document.getElementById('addreview').addEventListener("click",()=>{
  document.getElementById('popup').classList.add("active")
  document.getElementById('popup').style.display='block';
});
document.getElementById('close').addEventListener("click",()=>{
  document.getElementById('popup').classList.remove("active")
  document.getElementById('popup').style.display='none';
});
// Display popup over
const popstar= document.querySelectorAll('.popstar i');

const poprateno = document.getElementById('poprateno')
let passcount = 0;



popstar.forEach((rate,index1) => {
    rate.addEventListener('click',()=>{
        
        let count= 0;
        popstar.forEach((rate,index2)=>{
            if(index1 >= index2){
              console.log('index1',index1,'index2',index2)
                rate.classList.add("active")
                count++;
                
            }
            else{
                rate.classList.remove("active")
            }
        });
        switch(count){
            case 1:poprateno.innerHTML=`Very Bad` ; poprateno.style.color = "#ff0000"; passcount= count; break;
            case 2:poprateno.innerHTML=`Bad` ;poprateno.style.color = "	#ff8c00"; passcount= count;break;
            case 3:poprateno.innerHTML=`Good` ;poprateno.style.color = "#008000"; passcount= count;break;
            case 4:poprateno.innerHTML=`Very Good` ;poprateno.style.color = "#008000"; passcount= count;break;
            case 5:poprateno.innerHTML=`Excellent !` ;poprateno.style.color = "#006400"; passcount= count;break;
          }
          console.log(passcount);
    });
});
// localstorage storing array..
// popsubmitrev   

let popdescription = document.getElementById('popdescription');


let usreview = document.getElementById('userreview');
let usname = document.getElementById('username');
let usstar= document.querySelectorAll('#userstar i');


var usrevdis = JSON.parse(localStorage.getItem("cusreview")); 


  usreview.innerText=usrevdis.popdescription;
  // usreview.

function whilesubmit(){
  // console.log(productId)
  // console.log(popdescription)


  let popdesc = popdescription.value;
  let popstr  =popstar;
  let cusreview ={
    productId:productId ,
    popdescription: popdesc
  };


    localStorage.setItem("cusreview",JSON.stringify(cusreview));
}

sessionStorage.getItem("username");