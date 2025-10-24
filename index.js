let count = 0;
const add = document.querySelector('.add')
const save = document.querySelector('.save')
const savedValues = document.querySelector('.values-list')
let counter = document.querySelector('.counter-value');
const array = []


add.addEventListener('click', function() {
    count++
    document.querySelector('.counter-value').innerHTML = count
});

save.addEventListener('click', function() {
    if (count > 0) {
        array.push(count);
    savedValues.textContent = array;
    }
    else if (count == 0){
        alert("You haven't added any value yet!")
    }
    else if (array.length > 3){
            savedValues.innerHTML = array.slice(3);
    }
    })


// #####################################################################################################
const sidebar = document.querySelector('.sidebar');
const slidebar = document.querySelector('.slidebar');

sidebar.addEventListener('click', function() {
    slidebar.classList.toggle('show');
    slidebar.classList.toggle('hide'); 
});


// #####################################################################################################


const header = document.querySelector('.accordian-header');
const content = document.querySelector('.accordian-content');

header.addEventListener('click', function() {
      content.classList.toggle('hidden');
});