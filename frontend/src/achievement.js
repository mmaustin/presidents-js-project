class Achievement {
    static all = []
    static aForm = document.querySelector("#place-here")
    constructor({id, title, year, president_id}){
        this.id = id
        this.title = title
        this.year = year
        this.president_id = president_id

        Achievement.all.push(this)
    }

    appendAchievement(){
        const q = document.querySelector(`#ul-${this.president_id}`)
        q.insertAdjacentHTML('beforeend', `<li id="list-item-${this.id}" data-achievement-id="${this.id}" class="make-blue">${this.title}</li>`)
        //const z = document.querySelector(`li [data-achievement-id="${this.id}"]`)
        const z = document.querySelector(`#list-item-${this.id}`)
        z.insertAdjacentHTML('beforeend', '<button type="button" id="a-delete-bttn">Delete</button>')
    }
}