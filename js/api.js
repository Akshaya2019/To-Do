const initApp = () => {
    const myContent = ["Earn", "Grow", "Give"];
    const myObject = {
        name: "akshaya",
        myContent: ["Earn", "Grow", "Give"],
        logName: function () {
            console.log(this.name);
        }
    };
    window.sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
    //const key = sessionStorage.key(0); also use removeItem(), clear(), .length()
    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
    console.log(mySessionData);
};

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("complete");
        initApp(); // Now this will work!
    }
});



//see in application -> storage -> SessionStorage

//you can use local storage....

// in local storage: if you close the window and open it in tommorrow the values are saved. Eg: To-do..... but not in session storage