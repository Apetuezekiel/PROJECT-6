let counter = 0;
next.addEventListener('click', slideImage =>{
    counter++
    if (counter === 17) {
        counter = 0
    } else {
        imageFrame.style.backgroundImage = `url('/home/apetu/Desktop/EZEKIEL/PICTURES/bg/bg${counter}.jpg')`
        imageFrame.animate([{opacity: "0.3"}, {opacity: "1.0"}], 
        {duration:500, fill:"forwards"})
        console.log(counter)
    }
})

prev.addEventListener('click', slideImage =>{
    counter--
    if (counter <= 0) {
        counter = 17
    } else {
        imageFrame.style.backgroundImage = `url('/home/apetu/Desktop/EZEKIEL/PICTURES/bg/bg${counter}.jpg')`
        imageFrame.animate([{opacity: "0.3"}, {opacity: "1.0"}], 
        {duration:500, fill:"forwards"})
        console.log(counter)
    }
})
