let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
const categoryBtn = document.getElementById('category-btn')
const xBtn = document.getElementById('x-btn');
const catBtn = document.getElementById('newcat-btn')
const inputCategory = document.getElementById('input-el-cat')
const fieldset = document.getElementById('fieldset')
const category = document.getElementById('category');

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}
categoryBtn.addEventListener('click', function() {
    category.style.display = "block";
})

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
    if (listItems > 6) {
        console.log('test-')
    }

}


deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

categoryBtn.addEventListener('click', function() {
    category.style.display = 'block';
})

xBtn.addEventListener('click', function() {
    category.style.display = 'none';
})

catBtn.addEventListener('click', function() {
    fieldset.innerHTML += `
    <li><img src="folder.png">${inputCategory.value}</li>
    `;
    
    // myCategories.push(inputCategory.value);
    inputCategory.value = '';
    // localStorage.setItem("myCategories", JSON.stringify(myCategories));
})
// categoryLink.addEventListener('click', function() {
    
    // })
    
    // new app
    
const catInner = document.getElementById("category-inner");
    
    
const catInputEl = document.getElementById('inner-el');
    
const catBtnInner = document.getElementById('cat-btn-inner');
    
const tabBtnInner = document.getElementById('tab-btn-inner');
    
const innerX = document.getElementById('innerx-btn');
    
innerX.addEventListener('click', function() {
    catInner.style.display = 'none';
})

const categoryLink = document.getElementsByClassName('category-link');

categoryLink.addEventListener('click', function() {
    alert('hi')
    catInner.style.display = 'block';
})


