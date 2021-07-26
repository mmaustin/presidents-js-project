class PresidentService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getPresidents(){
        //console.log('c')
        fetch(`${this.endpoint}/presidents`)
        .then(resp => resp.json())
        .then(presidents => {
            //console.log('d')
            for(const prez of presidents){
                const p = new President(prez)
                p.appendToDom()
            }
        })
        //console.log('e')
    }

    createPresident(){
        const prezObj = {
            name: document.getElementById("name").value
        }
        
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(prezObj)
        }

        fetch(`${this.endpoint}/presidents`, configObj)
        .then(resp => resp.json())
        .then(president => {
            //for(const prez of presidents){
                const p = new President(president)
                p.appendToDom()
            //}
        })

    }

}