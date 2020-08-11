var reviews = [
    {
        id: 1,
        author: 'Susan Piper',
        job: 'web-developer',
        description: 'Susan is a nice prosn, she is kind and pretty good at what she does. I also think that she is a kind-hearted person. Whatever she does she finishes it, so it is also kind of awesome.',
        img: "url(../Reviews/pictures/profile1.jpg) no-repeat",
    },
    {
        id: 2,
        author: 'Karol Lisna',
        job: 'business Analyst',
        description: 'Karol is a business analyst. I would say she is very talkative, and she is open-minded. She loves pushing people to something. Someone would say it is weird and not that good quality. BUT not for the business Analyst. Ha-ha. She is great at what she does.',
        img: "url(../Reviews/pictures/profile2.jpg) center no-repeat",
    }, 
    {
        id: 3,
        author: 'Vitalii Shebela',
        job: 'Senior React developer',
        description: 'Vitalii is a type of people who finishes everything he does and his work always looks like masterpeace. He loves optimizing stuff. He always optimizes and optimizes. But yeah, everything he does looks fantastic. He really loves his job and he is here not because of money, but result.',
        img: "url(../Reviews/pictures/profile3.jpg) center no-repeat",
    },
    {
        id: 4,
        author: 'Yana Lushch',
        job: 'Junior developer',
        description: 'Although Yana is junior, but I would say she is very strong. She has power in her mind and also her boyfriend Vitalii who is Senior helps her a lot. That is why she improves herself every time.',
        img: "url(../Reviews/pictures/profile4.png) center no-repeat",
    }
];

var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");
var surpriseBtn = document.querySelector(".surprise-btn");

var currentItem = 2;

window.addEventListener("DOMContentLoaded", function(){
showPerson(currentItem);
});

nextBtn.addEventListener('click', function(){
    if (currentItem < reviews.length-1) {
        currentItem++;
        showPerson(currentItem);   
    }   
});
prevBtn.addEventListener('click', function(){
    if (currentItem > 0) {
        currentItem--;
        showPerson(currentItem);   
    }
});
surpriseBtn.addEventListener('click', function(){
    var random = Math.floor(Math.random()*reviews.length);
    showPerson(random);  
});


function showPerson (person) {
    var image = document.querySelector(".image");
    var name = document.querySelector(".name");
    var job = document.querySelector(".job");
    var description = document.querySelector(".description");
    var initialItem = reviews[person];
    image.style.background = initialItem.img;
    image.style.backgroundSize = 'contain';
    name.textContent = initialItem.author;
    job.textContent = initialItem.job;
    description.textContent = initialItem.description;   
}







// const search = document.querySelector('form input');
// const input = document.querySelector('.add-text');
// const container = document.querySelector('ul');
// let items = null;
// let currentItem = null;

// const searchItems = (e) => {
//   if (items) {
//     let s = e.target.value.toLowerCase();
//     for (let item of items) {
//       if (item.firstChild.textContent.toLowerCase().indexOf(s) !== -1) {
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     }
//   }
// }

// const deleteItem = (e) => {
//   currentItem = null;
//   e.target.parentNode.remove();
// }

// const editItem = (e) => {
//   currentItem = e.target.parentNode.firstChild;
//   input.value = currentItem.textContent;
// }

// const updateItem = (e) => {
//   if (currentItem) {
//     currentItem.textContent = input.value;
//   }
// }

// const addItem = () => {
//   let val = input.value
//   if (val) {
//     let li = document.createElement('li');
//     let inner = '<h1 class="text">' + val + '</h1>';
//     inner += '<button class="delete">Delete</button>';
//     inner += '<button class="edit">Edit</button>';
//     li.innerHTML = inner;
//     container.appendChild(li);
//     val = '';
//     currentItem = li.firstChild;
//     items = document.querySelectorAll('li');
//     for (let del of document.querySelectorAll('.delete')) {
//       del.addEventListener('click', deleteItem);
//     }
//     for (let edit of document.querySelectorAll('.edit')) {
//       edit.addEventListener('click', editItem);
//     }
//   } else {
//     alert('please add some text');
//     return;
//   }
// }

// search.addEventListener('keyup', searchItems);
// document.querySelector('#add').addEventListener('click', addItem);
// document.querySelector('#update').addEventListener('click', updateItem);




// const inputsearch = document.querySelector('form input');
// const addInputBtn = document.querySelector('#add');
// const update = document.querySelector('#update');

// addInputBtn.addEventListener('click', addtext);

// function addtext(){
//   let li = document.createElement('li');
//   let inputadd = document.querySelector('.add-text');
//   let addedtext = inputadd.value;
//   let h1Tag = '<h1 id="text">'+addedtext+'</h1>';
//   let tags = h1Tag + '<button id="delete">Delete</button><button id="edit">Edit</button>';

//   if(addedtext == ''){
//     alert('please add some text');
//     return;
//   }else{
//     li.innerHTML = tags;
//     document.querySelector('ul').appendChild(li);
//   }
//   li.querySelectorAll('#delete')[0].addEventListener('click', deleteText);
//   li.querySelectorAll('#edit')[0].addEventListener('click', editText);
//   getlist(li, h1Tag);
//   inputadd.value = '';
// }


// function deleteText(e) {
//   e.target.parentNode.remove();
//   document.querySelector('.add-text').value = '';
// }

// function editText(e) {
//   let currentText = e.target.parentNode.firstChild.textContent;
//   let currentValue = document.querySelector('.add-text');
//   currentValue.value = currentText;
//   getupdate(currentText, currentValue);

// }

// function getupdate(currentText, currentValue) {
//   update.addEventListener('click', updateText);
//   function updateText() {
//     currentText = currentValue.value
//     console.log(currentText = currentValue.value);
//   }
// }


// function getlist(li, h1Tag) {
// inputsearch.addEventListener('keyup', serchText);

//   function serchText(e) {
//     let typetext = e.target.value.toLowerCase();
//     if(h1Tag.toLowerCase().indexOf(typetext) != -1){
//       li.style.display = 'block';
//     }else{
//       li.style.display = 'none';
//     }
//   }
// }