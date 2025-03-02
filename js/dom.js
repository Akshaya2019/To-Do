const view1 = document.getElementById('view1');
console.log(view1);


const view2 = document.querySelector('#view2');
console.log(view2)


// view1.style.display="none";
// view2.style.display="flex";


const views = document.getElementsByClassName("view")
console.log(views)

const sameViews = document.querySelectorAll(".view")
console.log(sameViews);


const divs = view1.querySelectorAll("div");
console.log(divs);

const samedivs=view1.getElementsByTagName("div");
console.log(samedivs);

//print even div
const evendivs=view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evendivs);

// style
evendivs[4].style.backgroundColor="purple";

for(i=0; i<evendivs.length; i++){
    evendivs[i].style.width="150px";
    evendivs[i].style.backgroundColor="green";
}
