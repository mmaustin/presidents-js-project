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

document.body.addEventListener( 'click',   function(event)  {
    if( event.target.id == 'delete-bttn' ) {
      event.target.parentElement.remove()
      fetch(base_url + '/' + 'presidents' + '/' + event.target.parentElement.id, {method: 'DELETE'})
    };
  } )

  document.body.addEventListener( 'submit',   function(event)  {
    event.preventDefault
    if( event.target.id == 'achievement-form' ) {
      const achievementObj = {
        title: event.target.children[0].value,
        year: event.target.children[2].value,
        president_id: event.target.parentElement.id
    }

    const configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(achievementObj)
  }

  fetch(base_url + '/' + 'achievements', configObj)
  .then(resp => resp.json())
  .then(achievements => {
      for(const achievement of achievements){
          const a = new Achievement(achievement)
        
      }
  })

    };
  } )  

  document.body.addEventListener( 'mouseover',   function(event)  {
    if( event.target.id == 'list-item' ) {
        event.target.style.color = "blue";
    }

    setTimeout(function() {
      event.target.style.color = "";
    }, 1000)
  })

  document.body.addEventListener( 'click',   function(event)  {
    if( event.target.id == 'a-delete-bttn' ) {
      event.target.parentElement.remove()
      fetch(base_url + '/' + 'achievements' + '/' + event.target.parentElement.dataset.achievementId, {method: 'DELETE'})
    };
  } )