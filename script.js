const button = document.getElementById("button");

let jokeContainer = document.getElementById("joke-container");

// gets jokes from api

async function getJokes() {
  let joke = "";

  const apiUrl = `https://v2.jokeapi.dev/joke/Programming,Dark,Spooky?blacklistFlags=nsfw,religious,political,explicit`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data.joke);
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }

    jokeContainer.innerHTML = joke;
    sayIt();
    console.log(joke);
  } catch (error) {
    // error catch
    console.log("error in get jokes function", error);
  }
}

getJokes();

// event listener

button.addEventListener("click", getJokes, () => {
  sayIt();
});
// const jokeText = jokeContainer.innerHTML;
// jokeContainer = `${jokeText}`;

function sayIt() {
  responsiveVoice.setDefaultVoice("UK English Male");
  responsiveVoice.speak(`${jokeContainer.innerHTML}`);
}
setTimeout(sayIt, 2000);
// sButton.addEventListener("click", selectText, () => {
//   sayIt();
// });

// function selectText() {
//   var range = document.createRange();
//   var selection = window.getSelection();
//   range.selectNodeContents(document.querySelector("p"));
//   selection.removeAllRanges();
//   selection.addRange(range);
// }

// responsiveVoice.speak("hello world");

// if (responsiveVoice.isPlaying()) {
//   console.log("I hope you are listening");
// }
