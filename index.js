main()
window.addEventListener("DOMContentLoaded",()=> main())
window.addEventListener("change",()=> main())
window.addEventListener("click",()=> main())


function main() {

    document.body.backgroundColor = "21262d";

    // Variables
    let dark_grey_1 = "#21262d";
    let dark_grey_2 = "#6e7681";
    let dark_grey_3 = "#AeB6C1";
    let font_color = "#FAFBFC";

    // Elements by class
    let cardContainers = document.getElementsByClassName('ghx-column ghx-narrow-card ui-sortable'); 
    let cards = document.getElementsByClassName('ghx-issue ghx-newcard');
    let cardColumn = document.getElementsByClassName('ghx-column');  
    let cardColumns = document.getElementsByClassName('ghx-columns');  
    let columnTitles = document.getElementsByClassName('ghx-column-header-flex-1');  
    let ghxSwimlane = document.getElementsByClassName('ghx-swimlane ghx-closed');  
    let ghxFirst = document.getElementsByClassName('ghx-swimlane ghx-first');  
    let ghxSwimlaneHeader = document.getElementsByClassName('ghx-swimlane-header');  
    let ghxSwimlane2 = document.getElementsByClassName('ghx-swimlane');  
    
    
    // Elements by id
    let akMainContent = document.getElementById('ak-main-content'); 
    let gh = document.getElementById('gh'); 
    let ghxColumnHeaders = document.getElementById('ghx-column-headers'); 
    let ghxColumnHeaderGroup = document.getElementById('ghx-column-header-group'); 
    let jiraFrontend = document.getElementById('jira-frontend'); 
    


    // Elements by tag
    let headers = document.getElementsByTagName("header");
    let span = document.getElementsByTagName("span");
    let p = document.getElementsByTagName("p");
    let h2 = document.getElementsByTagName("h2");
    let button = document.getElementsByTagName("button");
    let svg = document.getElementsByTagName("svg");
    let input = document.getElementsByTagName("input");
    



    //styles for tag elements
    for (let i = 0; i < span.length; i++) span[i].style.color = font_color;
    for (let i = 0; i < p.length; i++) p[i].style.color = font_color;
    for (let i = 0; i < svg.length; i++) svg[i].style.color = font_color;
    for (let i = 0; i < input.length; i++) {
        input[i].style.backgroundColor = dark_grey_2;
        input[i].style.color = font_color;
    }


    // styles for id elements
    headers[0].style.backgroundColor = dark_grey_1;
    akMainContent.style.backgroundColor = dark_grey_1;
    gh.style.backgroundColor = dark_grey_1;
    ghxColumnHeaders.style.backgroundColor = dark_grey_1;
    ghxColumnHeaderGroup.style.backgroundColor = dark_grey_1;
    jiraFrontend.style.backgroundColor = dark_grey_1;

    // styles for class elements
    for (let i = 0; i < ghxSwimlaneHeader.length; i++) 
    {
        let hide = document.createElement('div')
        hide.style.width = '10%'
        hide.style.height = '100%'
        hide.style.backgroundColor = dark_grey_1
        hide.style.position = 'absolute'
        hide.style.right = '0'
        hide.style.top = '0'
        hide.style.zIndex = '100'

        ghxSwimlaneHeader[i].style.backgroundColor = dark_grey_1;
        ghxSwimlaneHeader[i].style.position = 'relative'
        ghxSwimlaneHeader[i].style.top = '0'
        ghxSwimlaneHeader[i].appendChild(hide)

        
    }
    for (let i = 0; i < cards.length; i++) cards[i].style.backgroundColor = dark_grey_3;
    for (let i = 0; i < cardColumn.length; i++) cardColumn[i].style.backgroundColor = dark_grey_2;
    for (let i = 0; i < cardColumns.length; i++) cardColumns[i].style.backgroundColor = dark_grey_1;
    for (let i = 0; i < columnTitles.length; i++) columnTitles[i].childNodes[0].style.color = font_color;
    for (let i = 0; i < ghxSwimlane.length; i++) ghxSwimlane[i].style.backgroundColor = dark_grey_1;
    for (let i = 0; i < ghxFirst.length; i++) ghxFirst[i].style.backgroundColor = dark_grey_1;
    for (let i = 0; i < ghxSwimlane2.length; i++) ghxSwimlane2[i].style.backgroundColor = dark_grey_1;
}