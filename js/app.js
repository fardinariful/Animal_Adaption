const load4Categories =async () =>{
    const resp1=await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data1=await resp1.json();
    display4Categories (data1.categories);

}

const display4Categories = (categories) =>{
    const btncontainer=document.getElementById("button_container");
    categories.forEach(categorys=>{
        console.log(categorys);

        const divcontainer=document.createElement('div');
        divcontainer.classList=`flex flex-row justify-between mt-10`;
        const button1=document.createElement('button');
        button1.classList=`flex flex-row justify-center items-center gap-3 px-10 py-2 border border-[#0E7A8126] rounded-3xl`;
        button1.innerHTML=`

        <img class="w-8" src="${categorys.category_icon}" alt="">
        "${categorys.category}"
        `;
        divcontainer.appendChild(button1);
        btncontainer.appendChild(divcontainer);
    })
}

load4Categories();


const allpet = async() =>{
    const resp = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    const data=await resp.json();
    const alldata=data.pets;
    //console.log(alldata);
    displayitems(alldata);
}

const displayitems = items =>{
    //console.log(items);
    const allitems=document.getElementById("all_items");
    items.forEach(item =>{
        console.log(item);
        
        const itemcard=document.createElement('div');
    itemcard.classList=`mt-10 gap-3`;
    const petName = item.pet_name ? item.pet_name : "Name not available";
    const breed = item.breed ? item.breed : "Breed not available";
    const birthDate = item.date_of_birth ? item.date_of_birth : "Birth date not available";
    const gender = item.gender ? item.gender : "Gender not specified";
    const price = item.price ? item.price : "Price not available";
    const image = item.image ? item.image : "./images/placeholder.png";  
   itemcard.innerHTML=`
     <div class="border border-[#0E7A8126] px-3 py-1">
            <img class="w-96 rounded-xl" src="${image}" alt="">
            <p class="mt-4">"${petName}"</p>
            <div class="mt-2 space-y-2">
                <div class="flex flex-row gap-2">
                    <img src="./images/Frame.jpg" alt="">
                    <p><span>Breed:</span>"${breed}"</p>
                </div>
                <div class="flex flex-row gap-2">
                    <img src="./images/Frame (1).png" alt="">
                    <p><span>Birth:</span>"${birthDate}"</p>
                </div>
                <div class="flex flex-row gap-2">
                    <img src="./images/Frame (2).png" alt="">
                    <p><span>Gender:</span> "${gender}"</p>
                </div>
                <div class="flex flex-row gap-2">
                    <img src="./images/Frame (3).png" alt="">
                    <p><span>Price:</span> "${price}"</p>
                </div>
            </div>
            <hr class="mt-3">
            <div class="flex flex-row justify-between items-center mt-3">
                <button class="border border-[#13131399] px-3 py-1 rounded-xl">
                    <img src="./images/Frame (4).png" alt="">
                </button>
                <button  class="border border-[#13131399] px-3 py-1 text-[#0E7A81] font-medium rounded-xl">Adopt</button>
                <button  class="border border-[#13131399] px-3 py-1 text-[#0E7A81] font-medium rounded-xl">Details</button>
            </div>
            
        </div>
    `

   allitems.appendChild(itemcard);

    })

   
}





allpet();
