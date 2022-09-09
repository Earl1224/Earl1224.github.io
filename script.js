var quotes = [
"Make sure you take care of your mind, you deserve peace" ,
"Its time for you to write it down! Pray for it! Put faith into it! and watch it happen!" ,
"Its time for you to start focusing on yourself, cut off all distractions and lead with more gratitude. Things will come to fruition for you. You will be filled with so much love and happiness, things will get better when you start doing what's best for you!" ,
"Stop stressing about things you can not control, just know if its meant to be,it will be. It will happen in unexpected ways, & nothing could stop it from happening if it is meant for you. If it is meant for you it will be for you" ,
"You bounced back from worst things. Trust me, you will be okay" ,
"Please, keep going you are almost there. Stop using your energy to worry, start using your energy to believe, create, grow, heal" ,
"You've been thinking lately...its time for you to move on, move forward and leave everything that no longer serve you, even if it hurts, just know it is for the betterment of your life. You do not need anything dragging you down!" ,
"time to give yourself a mental checkup, how are you feeling right now?" ,
"Choose to have a good day, no matter what happens okay? Be happy and honored to be given another day/another chance to make something count - that alone should make your day" ,
"Today, choose to uplift yourself the way you always uplift others. You have a bad habit of overlooking your own value-make sure today is not the day you do" ,
"you need a nap lol" ,
"your hair looks good today" ,
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}
