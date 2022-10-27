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
    let y8i = document.getElementsByClassName('y8i3hb-1 fIqZmS');  


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
    let header = document.getElementsByTagName("header");
    let li = document.getElementsByTagName("li");
    let a = document.getElementsByTagName("a");

    //styles for tag elements
    for (let i = 0; i < header.length; i++) header[i].style.backgroundColor = dark_grey_1;
    for (let i = 0; i < li.length; i++) li[i].style.color = font_color;
    //for (let i = 0; i < a.length; i++) if(a[i].firstChild != null) a[i].firstChild.style.color = font_color

    // styles for id elements
    if(jiraFrontend != null) jiraFrontend.style.backgroundColor = dark_grey_1;
    if(akMainContent != null) akMainContent.style.backgroundColor = dark_grey_1;
    if(flags != null) flags.style.backgroundColor = dark_grey_1;
    if(akJiraNavigation != null) akJiraNavigation.style.backgroundColor = dark_grey_1;
    if(akSideNavigation != null) akSideNavigation.style.backgroundColor = dark_grey_1;
    if(content != null) content.style.backgroundColor = dark_grey_1;
    if(gh != null) gh.style.backgroundColor = dark_grey_1;
    if(ghxHeader != null) ghxHeader.style.backgroundColor = dark_grey_1;
    if(ghxContentMain != null) ghxContentMain.style.backgroundColor = dark_grey_1;
    if(ghxErrors != null) ghxErrors.style.backgroundColor = dark_grey_1;
    if(ghxRabid != null) ghxRabid.style.backgroundColor = dark_grey_1;
    if(ghxOperations != null) ghxOperations.style.backgroundColor = dark_grey_1;
    if(ghxControls != null) ghxControls.style.backgroundColor = dark_grey_1;
    if(ghxControlsPlan != null) ghxControlsPlan.style.backgroundColor = dark_grey_1;
    if(ghxControlsWork != null) ghxControlsWork.style.backgroundColor = dark_grey_1;
    if(ghxQuickFilters != null) ghxQuickFilters.style.backgroundColor = dark_grey_1;
    if(ghxControlsReport != null) ghxControlsReport.style.backgroundColor = dark_grey_1;
    if(ghxBontrolsButtons != null) ghxBontrolsButtons.style.backgroundColor = dark_grey_1;
    if(ghxPlan != null) ghxPlan.style.backgroundColor = dark_grey_1;
    if(ghxReport != null) ghxReport.style.backgroundColor = dark_grey_1;
    if(ghxWork != null) ghxWork.style.backgroundColor = dark_grey_1;
    if(ghxPoolColumn != null) ghxPoolColumn.style.backgroundColor = dark_grey_1;
    if(ghxPoolWrapper != null) ghxPoolWrapper.style.backgroundColor = dark_grey_1;
    if(ghxColumnHeaderGroup != null) ghxColumnHeaderGroup.style.backgroundColor = dark_grey_1;
    if(ghxColumnHeaders != null) ghxColumnHeaders.style.backgroundColor = dark_grey_1;
    if(ghxPool != null) ghxPool.style.backgroundColor = dark_grey_1;
    if(ghxDetailView != null) ghxDetailView.style.backgroundColor = dark_grey_1;
    if(rightSidebarPanelWrapper != null) rightSidebarPanelWrapper.style.backgroundColor = dark_grey_1;

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
    for (let i = 0; i < y8i.length; i++) y8i[i].style.backgroundColor = dark_grey_2;
}