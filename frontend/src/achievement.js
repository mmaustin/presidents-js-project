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
        const unorderedList = document.querySelector(`#ul-${this.president_id}`)
        unorderedList.insertAdjacentHTML('beforeend', `<li id="list-item-${this.id}" data-achievement-id="${this.id}" class="make-color">${this.title}</li>`)
        const listItem = document.querySelector(`#list-item-${this.id}`)
        listItem.insertAdjacentHTML('beforeend', '<button type="button" id="a-delete-bttn">Delete</button>')
    }

    sortAchievements(){
        
    }
}