

const projectDetailsModalInit = () => {

const modal = {}

modal.projectData = [];
// World Cuisine
modal.worldCuisine = {
        name: "World Cuisine",
        text: "This is a web app restaurant template that showcases features that can help restaurant admins keep track of their online orders. Try it out by setting up a test admin or customer account! ",
        demoLink: "https://worldcuisine.netlify.app/",
        codeLink: "https://github.com/RadojkoR/restaurant",
    }
    modal.projectData.push(modal.worldCuisine)

    // Ontario Weather App
    modal.ontarioWeatherApp = {
        name: "Ontario Weather App",
        text: "A web app that uses APIs and datasets to find the current weather in different Ontario cities and towns.",
        demoLink: "https://ontario-weather-app.netlify.app/",
        codeLink: "https://github.com/weatherAppJuno/weatherApp"
    }
    modal.projectData.push(modal.ontarioWeatherApp);

    // What do YOU no
    modal.whatDoYouNoApp = {
        name: "What do you no",
        text: "This is a learning game web app that uses APIs to find the words and definition. Users will be presented with two randomly generated homophonous words and need to select the correct one. ",
        demoLink: "https://whatchuknohuh.netlify.app/",
        codeLink: "https://github.com/JunoProjectFour/whatchaKnoHuh"
    }
    modal.projectData.push(modal.whatDoYouNoApp)

    // MES
    modal.mesApp = {
        name: "MES",
        text: "MES is an electrical company that specializes in electrical installations, repairing electrical devices, and installing solar panels and security systems.  ",
        demoLink: "https://www.mes.rs/",
        codeLink: "https://github.com/RadojkoR/mes"
    }
    modal.projectData.push(modal.mesApp)

    // INTERIOR D
    modal.InteriorDApp = {
        name: "Interior D",
        text: "A web app for an Interior and Exterior design company.",
        demoLink: "https://interiordesign-or.netlify.app/",
        codeLink: "https://github.com/RadojkoR/InteriorDesign"
    }
    modal.projectData.push(modal.InteriorDApp)

    // INTERIOR D
    modal.TravelsWithDreaApp = {
        name: "Travels With Drea",
        text: "Travelswithdrea.com is a blog migration from Blogger to WordPress, for which I created a new design for the blog using Elementor (website in progress). ",
        demoLink: "https://travelswithdrea.com/",
        codeLink: "hhttps://interiordesign-or.netlify.app/"
    }
    modal.projectData.push(modal.TravelsWithDreaApp)




    // SEE MORE BUTTON
modal.seeMoreBtn = document.querySelectorAll('.seeMoreBtn');
modal.projectDetailsModalContainer = document.getElementById('projectDetailsModal');
modal.projectDetailsContainer = document.getElementById('projectDetailsContainer')
modal.exitButton = document.getElementById('exitButton');

modal.exitButton.addEventListener('click', ()=> {
    modal.projectDetailsModalContainer.classList.remove("visible");
    modal.projectDetailsContainer.innerHTML = '';
})

modal.seeMoreBtn.forEach(button => {
    button.addEventListener('click', () => {
     modal.projectDetailsContainer.innerHTML = '';
    // console.log("see More button",modal.seeMoreBtn.name)
    // console.log(modal.projectDetailsModalContainer);
    

    for(let item of modal.projectData) {
        console.log("item name",item.name);
        console.log("button name",button.name)
        if(button.name === item.name){
        console.log("content text", item.text);
        
        modal.projectDetailsModalContainer.classList.toggle("visible");
        // add project name
        const projectName = document.createElement("h2");
        projectName.textContent = item.name;
        modal.projectDetailsContainer.appendChild(projectName);

        // add Project description
        const projectDescription = document.createElement("p");
        projectDescription.textContent = item.text;
        modal.projectDetailsContainer.appendChild(projectDescription);

        // add Demo Button
        const projectButtonContainer = document.createElement("div");
        projectButtonContainer.classList.add("projectButtonContainer")
        modal.projectDetailsContainer.appendChild(projectButtonContainer);

        // Demo button
        const demoBtn = document.createElement("a");
        demoBtn.href = item.demoLink;
        demoBtn.target = "_blank"
        demoBtn.textContent = "Demo";
        projectButtonContainer.appendChild(demoBtn);

        // Code Button
        const codeBtn = document.createElement("a");
        codeBtn.href = item.codeLink;
        codeBtn.target = "_blank";
        const codeBtnText = document.createTextNode(" Code");
        projectButtonContainer.appendChild(codeBtn);
        
        const codeIconBtn = document.createElement("i");
        codeIconBtn.className = "fa-brands fa-github";
        codeBtn.appendChild(codeIconBtn);
        codeBtn.appendChild(codeBtnText);


        console.log(modal.projectDetailsModalContainer);

    }
    }
    
});
    
});

}


export default projectDetailsModalInit;