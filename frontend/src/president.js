class President {
    static all = []
    static presidentsContainer = document.querySelector('#presidents-container')
    static presidentForm = document.querySelector('#president-form')

    constructor({id, name, achievements}){
        this.id = id
        this.name = name
        this.achievements = achievements

        President.all.push(this)

    }

    appendToDom(){
        let string = ""
        if (this.achievements !== undefined){
        this.achievements.forEach(a => {
            string += `<li id="list-item-${a.id}" class="make-color" data-achievement-id="${a.id}">${a.title}
            <button type="button" id="a-delete-bttn">Delete</button> </li>`
        })}

        
        President.presidentsContainer.insertAdjacentHTML('beforeend', `<div id="${this.id}" class="border"></div>`)
        const presidentDiv = document.querySelector(`div [id="${this.id}"]`)
        presidentDiv.insertAdjacentHTML('afterbegin', `<p class="p-one">${this.name}</p>`)
        presidentDiv.insertAdjacentHTML('beforeend', '<p class="p-two">Achievements</p>')
        presidentDiv.insertAdjacentHTML('beforeend', `<ul id="ul-${this.id}">${string}</ul>`)
        presidentDiv.insertAdjacentHTML('beforeend', `<form id="achievement-form-${this.id}" class="achievement-form"></form>`)
        const g = document.querySelector(`#achievement-form-${this.id}`)
        g.insertAdjacentHTML('beforeend', 'Add an achievement:<br> Title: <input type="text" id="title"><br>')
        g.insertAdjacentHTML('beforeend', 'Year: <input type="number" id="year"><br>')
        g.insertAdjacentHTML('beforeend', '<input type="submit" id="achievement"><br>')
        presidentDiv.insertAdjacentHTML('beforeend', 'Remove President: <button type="button" id="delete-bttn">Delete</button>')

    }

    static presidentialForm(){

        President.presidentForm.insertAdjacentHTML('beforeend', '<form id="president-form-inner"><br>New President<br></form>')
        const newPresident = document.querySelector('#president-form-inner')
        newPresident.insertAdjacentHTML('beforeend', 'Name: <input type="text" id="name"><br>')
        newPresident.insertAdjacentHTML('beforeend', 'Submit: <input type="submit" id="create"><br>')

    }

}



        /*
        President.presidentsContainer.innerHTML += `
        <div id="${this.id}" class="border"><p id="p-one">${this.name}</p><p id="p-two">Achievements:</p>
        <ul>${string}</ul><form id="achievement-form">
        Add an achievement:<br>
        Title: <input type="text" id="title"><br>
        Year: <input type="number" id="year"><br><br>
        <input type="submit" id="achievement"><br>
        </form>
        Remove President: <button type="button" id="delete-bttn">Delete</button>
        </div>
        `
        */

        /*President.presidentForm.innerHTML += `
        <form id="president-form-inner">
            Add A New President Here:<br><br>
            Name: <input type="text" id="name">
            <input type="submit" id="create">
        </form>
        `
        */