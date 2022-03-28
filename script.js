let names = document.querySelector("#name");
let course = document.querySelector("#course");
let author = document.querySelector("#author");
let btn = document.querySelector(".btn");
let customerList = document.querySelector(".customer-list");


let count = -1;



btn.addEventListener("click", function(e){
    e.preventDefault();
    count++;
    
    const allImages = ["img/cust-0.jpg", "img/cust-1.jpg", "img/cust-2.jpg", "img/cust-3.jpg", "img/cust-4.jpg", "img/cust-5.jpg"];

    customerList.src = allImages[count];

    let nameValu = names.value;
    let courseValu = course.value;
    let authorValu = author.value;

   const para = document.createElement("div");
   para.classList.add("col-md-4");
   para.innerHTML = `<div class="my-3">
   <div class="card text-left">

           <img src="${allImages[count]}" class="card-img-top" alt="">
               <div class="card-body">

                <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name"> ${nameValu}</span></h6>

                <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course"> ${courseValu}</span></h6>
                
                <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author"> ${authorValu}</span></h6>
               </div>

   </div>
  </div>`;
       customerList.appendChild(para);



})




