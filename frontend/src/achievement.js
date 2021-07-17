class Achievement {
    static all = []
    constructor({id, title, year, president_id}){
        this.id = id
        this.title = title
        this.year = year
        this.president_id = president_id

        Achievement.all.push(this)

    }
}