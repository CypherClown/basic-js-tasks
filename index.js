const slidebar = document.querySelector('.slidebar');
const sidebar = document.querySelector('.sidebar');
const header = document.querySelectorAll('.accordian-header');
const content = document.querySelectorAll('.accordian-content');
let count = 0;
const add = document.querySelector('.add')
const save = document.querySelector('.save')
const savedValues = document.querySelector('.values-list')
let counter = document.querySelector('.counter-value');
const array = []


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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
    else if (array.length === 3){
            savedValues.innerHTML = array.slice(3);
    }
    })


// #####################################################################################################

sidebar.addEventListener('click', function() {
    slidebar.classList.toggle('show');
    slidebar.classList.toggle('hide'); 
});


// #####################################################################################################

function accordian(element) {
    const clickedPanel = element.target.nextElementSibling;
    const allPanels = document.querySelectorAll('.panel');

    allPanels.forEach(panel => {
        if (panel !== clickedPanel) {
            panel.classList.add('hidden'); 
        }
    });
    clickedPanel.classList.toggle('hidden');
}


// ######################################################################################################


let tab1 = document.querySelector('.tab-panel:first-child');
let tab2 = document.querySelector('.tab-panel:nth-child(2)');
let tab3 = document.querySelector('.tab-panel:last-child');

tabs = [tab1, tab2, tab3];
tabs.forEach(tab)

function tab(element) {
    console.log(tabs)
}