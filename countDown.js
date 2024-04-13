const promoDate = document.getElementById('promoDate');
const time = document.querySelectorAll(".time")


const giveAwayYear = new Date().getFullYear();
const giveAwayMonth = new Date().getMonth();
const giveAwayDay = new Date().getDate() + 10;


const giveAwayDate = new Date(giveAwayYear, giveAwayMonth, giveAwayDay, 17, 30, 22)
// const giveAwayDate = new Date(2024, 3, 10, 9, 36, 11)
console.log(giveAwayDate)
console.log(giveAwayDate.getDay())

// const giveAwayYear = giveAwayDate.getFullYear()
// const giveAwayMonth = giveAwayDate.getMonth()
    

const giveAwayWeekDay = giveAwayDate.getDay()
const giveAwayHour = giveAwayDate.getHours()
// const giveAwayDay = giveAwayDate.getDate()
const giveAwayMinute = giveAwayDate.getMinutes()


//ARRAYS TO HOLD THE DAYS 
const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//ARRAYS TO HOLD THE MONTH
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    //DISPLAY OF END DATE
    promoDate.innerHTML = `Giveaway Starts On ${dayArray[giveAwayWeekDay]}, ${giveAwayDay} ${monthArray[giveAwayMonth]} ${giveAwayYear}, ${giveAwayHour}:${giveAwayMinute}pm`


    let getCountDown = ()=> {
        let now = new Date();

    let duration = giveAwayDate - now
    // const stopTimer = !duration ? 
    
    const aDayIs = 24 * 60 * 60 * 1000
    const anHourIs = 60 * 60 * 1000
    const aMinuteIs = 60 * 1000
    const aSecondIs = 1000


    //function to calculate and render date

    
        let remainingTime;

        let days = Math.floor(duration / aDayIs)
        remainingTime = duration % aDayIs

        let hours = Math.floor(remainingTime / anHourIs)
        remainingTime = remainingTime % anHourIs

        let minutes = Math.floor(remainingTime / aMinuteIs)
        remainingTime = remainingTime % aMinuteIs

        let seconds = Math.floor(remainingTime / aSecondIs)


        let countDown = [days, hours, minutes, seconds]

        //display the countDown
        const blocks = Array.from(time)
        
        blocks.forEach((value, index) => {
            countDown[index] < 10 ? value.innerHTML = `0${countDown[index]}` : value.innerHTML = countDown[index]

        })

        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            days = hours = minutes = seconds = 17;
            clearInterval(endTime);
            document.getElementById('alert').innerHTML = 
        `
            <div class="alert alert-success" role="alert">
            Congratulations, you have just won N10,000 worth of Airtime
            </div>
        `;
        
}
        
    
            
    }



    // Initial call to getCountDown to start the countdown immediately
    let endTime = setInterval(()=>{
        getCountDown()
    }, 1000);