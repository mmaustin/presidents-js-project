class PresidentService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getPresidents(){
        fetch(`${this.endpoint}/presidents`)
        .then(resp => resp.json())
        .then(presidents => {
            for(const prez of presidents){
                const p = new President(prez)
                p.appendToDom()
            }
        })
    }

}