let myLeads = []
const inputEl = document.getElementById("input-el")
const butt = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("del-btn")
const leedsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads') )
const tabBtn = document.getElementById("tab-btn")

if (leedsFromLocalStorage) {
    myLeads = leedsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myLeads))
        render(myLeads)
    })
//})

function render(leads) {
    let listItems = ''
    for (let i=0; i<leads.length; i++){
        
    listItems += `<li>
    <a href="#" target="_blank"> ${leads[i]} </a>
    </li>`
    //ulEl.innerHTML += '<li>' + myLeads[i] + '</li> '
    // const list = document.createElement('li')
    // list.textContent = myLeads[i] 
    // ulEl.append(list)
}
    ulEl.innerHTML = listItems
}

deletebtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

butt.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads) )
    render(myLeads)

    //console.log(localStorage.getItem('myLeads'))
})



