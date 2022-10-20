main()
window.addEventListener("DOMContentLoaded",()=> main())
window.addEventListener("change",()=> main())
window.addEventListener("click",()=> main())


function main() {


    // Variables
    let dark_grey_1 = "#21262d";
    let dark_grey_2 = "#6e7681";
    let dark_grey_3 = "#AeB6C1";
    let font_color = "#FAFBFC";

    // Elements by class
    let cardColumn = document.getElementsByClassName('ghx-column');  
    let cardColumns = document.getElementsByClassName('ghx-columns'); 

    let cards = document.getElementsByClassName('ghx-issue ghx-newcard');
    let columnTitles = document.getElementsByClassName('ghx-column-header-flex-1');  
    let ghxSwimlane = document.getElementsByClassName('ghx-swimlane ghx-closed');  
    let ghxFirst = document.getElementsByClassName('ghx-swimlane ghx-first');  
    let ghxSwimlaneHeader = document.getElementsByClassName('ghx-swimlane-header');  
    let ghxSwimlane2 = document.getElementsByClassName('ghx-swimlane');  
    //ghx-work-wrapper
    /*
    ghx-swimlane-header
    ghx-info
    ghx-description
    adg-throbber
    ghx-column
    ghx-column-header-flex
    ghx-swimlane-header
    */
    // Elements by id
    let jiraFrontend = document.getElementById('jira-frontend'); 
    let flags = document.getElementById('flags'); 
    let akJiraNavigation = document.getElementById('ak-jira-navigation'); 
    let akSideNavigation = document.getElementById('ak-side-navigation'); 
    let akMainContent = document.getElementById('ak-main-content'); 
    let content = document.getElementById('content')
    let gh = document.getElementById('gh')
    let ghxHeader = document.getElementById('ghx-header')
    let ghxContentMain = document.getElementById('ghx-content-main')
    let ghxErrors = document.getElementById('ghx-errors')
    let ghxRabid = document.getElementById('ghx-rabid')
    let ghxOperations = document.getElementById('ghx-operations')
    let ghxControls = document.getElementById('ghx-controls')
    let ghxControlsPlan = document.getElementById('ghx-controls-plan')
    let ghxControlsWork = document.getElementById('ghx-controls-work')
    let ghxQuickFilters = document.getElementById('ghx-quick-filters')
    let ghxControlsReport = document.getElementById('ghx-controls-report')
    let ghxBontrolsButtons = document.getElementById('ghx-controls-buttons')
    let ghxPlan = document.getElementById('ghx-plan')
    let ghxReport = document.getElementById('ghx-report')
    let ghxWork = document.getElementById('ghx-work')
    let ghxPoolColumn = document.getElementById('ghx-pool-column')
    let ghxPoolWrapper = document.getElementById('ghx-pool-wrapper')
    let ghxColumnHeaderGroup = document.getElementById('ghx-column-header-group')
    let ghxColumnHeaders = document.getElementById('ghx-column-headers')
    let ghxPool = document.getElementById('ghx-pool')
    let ghxDetailView = document.getElementById('ghx-detail-view')
    let rightSidebarPanelWrapper = document.getElementById('right-sidebar-panel-wrapper')
    // let  = document.getElementById('')
    // let  = document.getElementById('')
    // let  = document.getElementById('')
    
    
    
    // Elements by tag
    //let nav = document.getElementsByTagName("nav");
    let li = document.getElementsByTagName("li");
    let a = document.getElementsByTagName("a");

    //styles for tag elements
    //for (let i = 0; i < nav.length; i++) nav[i].style.backgroundColor = dark_grey_1;
    for (let i = 0; i < li.length; i++) li[i].style.color = font_color;
    //for (let i = 0; i < a.length; i++) if(a[i].firstChild != null) a[i].firstChild.style.color = font_color

    // styles for id elements
    jiraFrontend.style.backgroundColor = dark_grey_1;
    akMainContent.style.backgroundColor = dark_grey_1;
    flags.style.backgroundColor = dark_grey_1;
    akJiraNavigation.style.backgroundColor = dark_grey_1;
    akSideNavigation.style.backgroundColor = dark_grey_1;
    content.style.backgroundColor = dark_grey_1;
    gh.style.backgroundColor = dark_grey_1;
    ghxHeader.style.backgroundColor = dark_grey_1;
    ghxContentMain.style.backgroundColor = dark_grey_1;
    ghxErrors.style.backgroundColor = dark_grey_1;
    ghxRabid.style.backgroundColor = dark_grey_1;
    ghxOperations.style.backgroundColor = dark_grey_1;
    ghxControls.style.backgroundColor = dark_grey_1;
    ghxControlsPlan.style.backgroundColor = dark_grey_1;
    ghxControlsWork.style.backgroundColor = dark_grey_1;
    ghxQuickFilters.style.backgroundColor = dark_grey_1;
    ghxControlsReport.style.backgroundColor = dark_grey_1;
    ghxBontrolsButtons.style.backgroundColor = dark_grey_1;
    ghxPlan.style.backgroundColor = dark_grey_1;
    ghxReport.style.backgroundColor = dark_grey_1;
    ghxWork.style.backgroundColor = dark_grey_1;
    ghxPoolColumn.style.backgroundColor = dark_grey_1;
    ghxPoolWrapper.style.backgroundColor = dark_grey_1;
    ghxColumnHeaderGroup.style.backgroundColor = dark_grey_1;
    ghxColumnHeaders.style.backgroundColor = dark_grey_1;
    ghxPool.style.backgroundColor = dark_grey_1;
    ghxDetailView.style.backgroundColor = dark_grey_1;
    rightSidebarPanelWrapper.style.backgroundColor = dark_grey_1;

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
    for (let i = 0; i < cardColumn.length; i++) cardColumn[i].style.backgroundColor = dark_grey_2;
    for (let i = 0; i < cardColumns.length; i++) cardColumns[i].style.backgroundColor = dark_grey_1;
    for (let i = 0; i < cards.length; i++) cards[i].style.backgroundColor = dark_grey_3;
    for (let i = 0; i < columnTitles.length; i++) columnTitles[i].childNodes[0].style.color = font_color;
    for (let i = 0; i < ghxSwimlane.length; i++) ghxSwimlane[i].style.backgroundColor = dark_grey_1;
    for (let i = 0; i < ghxFirst.length; i++) ghxFirst[i].style.backgroundColor = dark_grey_1;
    for (let i = 0; i < ghxSwimlane2.length; i++) ghxSwimlane2[i].style.backgroundColor = dark_grey_1;
}