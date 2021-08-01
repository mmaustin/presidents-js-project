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

    /*appendAchievement(){
        Achievement.aForm.innerHTML += `
        <p>${this.title} ${this.president}</p>
        `
    }*/
}