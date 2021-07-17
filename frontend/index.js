const base_url = "http://127.0.0.1:3000"
const presidentService = new PresidentService(base_url)
presidentService.getPresidents()
President.presidentialForm()

const achievementService = new AchievementService(base_url)
achievementService.getAchievements()

President.presidentForm.addEventListener('submit', handleSubmit)

function handleSubmit(event){
  event.preventDefault
  presidentService.createPresident()
}