const getDadJoke = async () => {
    const response= await fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers:{
            Accept:"application/json"
        }
    })
    const jsonJokeData= await response.json()
    console.log(jsonJokeData)
}

getDadJoke()




//POST
const jokeObject = 
{
    id: 'LBAQ79MJmb',
     joke: 'What’s the difference between an African elephant and an Indian elephant? About 5000 miles.'
}

const postDadJoke = async (jokeObj) => {
    const response = await fetch ("https://httpbin.org/post",{
        method:"Post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(jokeObj)
    })
    const responseData = await response.json()
    console.log(responseData.headers)
}

postDadJoke(jokeObject)


//api-ninjas