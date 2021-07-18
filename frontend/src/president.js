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
        this.achievements.forEach(a => {
            string += `<li id="list-item" data-achievement-id="${a.id}">${a.title}
            <button type="button" id="a-delete-bttn">Delete</button> </li>`
        })
        President.presidentsContainer.innerHTML += `
        <div id="${this.id}" class="border"><p id="p-one">${this.name}</p><p id="p-two">Achievements:</p>
        <ul>${string}</ul><form id="achievement-form">
        Title: <input type="text" id="title"><br>
        Year: <input type="number" id="year"><br><br>
        <input type="submit" id="achievement"><br>
        </form>
        Remove President: <button type="button" id="delete-bttn">Delete</button>
        </div>
        `

    }

    static presidentialForm(){
        President.presidentForm.innerHTML += `
        <form id="president-form-inner">
            Add A New President Here:<br><br>
            Name: <input type="text" id="name"><br>
            Submit: <input type="submit" id="create">
        </form>
        `
    }

}