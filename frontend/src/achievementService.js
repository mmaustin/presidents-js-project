
class AchievementService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getAchievements(){
        fetch(`${this.endpoint}/achievements`)
        .then(resp => resp.json())
        .then(achievements => {
            for(const achievement of achievements){
                const a = new Achievement(achievement)
            }
        })
    }

}