const UI_SELECTORS = {
    blog_form :  document.querySelector("#blog-input-search"),
    blogs:  document.querySelectorAll(".blogs .blog"),
    
    project_form :  document.querySelector("#project-input-search"),
    projects:  document.querySelectorAll(".projects .project"),

    research_input_checkboxes: document.querySelectorAll("input[type='checkbox']"),
}



/*
    FOR BLOG PAGE
*/

if (UI_SELECTORS.blog_form) // if it's on the page, then only add the listener
    UI_SELECTORS.blog_form.addEventListener("input", handleBlogSearch);


function handleBlogSearch(e) {
    const userInput = e.target.value.trim().toLowerCase();
    const blogs = UI_SELECTORS.blogs;

    for (let index = 0; index < blogs.length; index++) {
        const element          = blogs[index];
        const includesTitle    = element.querySelector(".blog-title").innerHTML.toLowerCase().includes(userInput);
        const includesCategory = element.querySelector(".blog-category").innerHTML.toLowerCase().includes(userInput);
        const includesAuthor   = element.querySelector(".blog-author").innerHTML.toLowerCase().includes(userInput);

        if (includesTitle || includesCategory || includesAuthor)
            element.classList.remove("d-none");
        else
            element.classList.add("d-none");     
    }

}



/*
    FOR RESEARCH PAGE
*/

if (UI_SELECTORS.project_form) // if it's on the page, then only add the listener
    UI_SELECTORS.project_form.addEventListener("input", handleProjectSearch);


function handleProjectSearch(e) {
    const userInput = e.target.value.trim().toLowerCase();
    const projects = UI_SELECTORS.projects;

    for (let index = 0; index < projects.length; index++) {
        const element          = projects[index];
        const includesTitle    = element.querySelector(".project-title").innerHTML.toLowerCase().includes(userInput);
        const includesTags     = element.querySelector(".project-tags").innerHTML.toLowerCase().includes(userInput);

        if (includesTitle || includesTags)
            element.classList.remove("d-none");
        else
            element.classList.add("d-none");     
    }
}


if (UI_SELECTORS.research_input_checkboxes) { // if it's on the page, then only add the listener
    for (let i = 0; i < UI_SELECTORS.research_input_checkboxes.length; i++) {
        const element = UI_SELECTORS.research_input_checkboxes[i];
        element.addEventListener('click', handleSelectTags);
    }
} 


function handleSelectTags(e) {
   const element = e.target;
   const name = element.name;
   const checkboxes = UI_SELECTORS.research_input_checkboxes;
   const checkedElements = [];

   for (let i = 0; i < checkboxes.length; i++) {
       if ( checkboxes[i].checked )
        checkedElements.push( checkboxes[i].name.toLowerCase() );
   }

   const projects = UI_SELECTORS.projects;

   for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        const tags    = element.querySelector(".project-tags").innerHTML.trim().toLowerCase();

       element.classList.remove('d-none');
       
       for (let j = 0; j < checkedElements.length; j++) {
           const checkbox = checkedElements[j];           

           if ( !tags.includes(checkbox) )
            element.classList.add('d-none');

       }

        
    }

   

}