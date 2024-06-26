/**
 * @returns {string} - Returns the HTML Code for Pop Up Window Add Task Content
 *
 * */
function generatePopUpWindowAdd() {
  return /*html*/ `  
     <div class = "contentTask">  
        <div class="content_addTask">
                <div class = "textContainer_addTask">
                    <div class ="text_addTask">Add Task</div>
                    <button class="closeAddBoard" onclick="closeAddBoard()">X</button>
                </div>
            </div>   
            <div class ="group66_addTaskPopUp">
                <div class="task_succes d-none" id="task_succes">
                    <div class="task_succes_containerPopUp">
                        <span  class="task_succes_message">Task added to board</span>
                        <img class="task_success_icon_board" src="./assets/img/Icons_board_white.png">
                    </div>
                </div>
                <div class ="inputLeft_addTaskPopUp">
                    <div class="title_v1PopUp">               
                        <div class="titlePopUp">Title<span class="spanClass">*</span>
                            <div class="frame203PopUp" onclick="required(this)">
                                <div class="title_frame14PopUp">
                                    <input  type="text"  class="text_enterTitle" placeholder="Enter a Title" id="title" required oninput="handleInput(this)">
                                </div> 
                                <div class="titleFieldRequired" id="titleFieldRequired" onclick="required(this)">This field is required</div> 
                            </div>                  
                        </div>                         
                    </div>
                    <div class="description_v1PopUp">
                        <div class="descriptionPopUp">Description</div>             
                        <div class="frame207PopUp" onclick="required(this)">
                        <div class="frame17PopUp">
                            <textarea  class="text_enterDescription" type="text"  id="description" placeholder="Enter a Description" required oninput="handleInput(this)"></textarea>
                            <img class ="recursor" src="./assets/img/Recurso 1 1.png">
                        </div>               
                        </div>
                    </div>
                    <div class="asignedTo_v1">
                        <div class="asignedTo">Assigned to</div>                     
                        <div class="categoryFrame74" id="assigned" onclick="hideAssigned(event)">                    
                            <input class="searchContacts" type="text" id="searchContacts" placeholder="Select contacts to assign">
                            <div class ="imgArrows" id="imgArrows" onclick="hideAssigned(event)">
                                <img class="arrow_drop_down" src="./assets/img/arrow_drop_down.png"  id="arrowAssigned" onclick="hideAssigned(event)" > 
                                <img class="arrow_drop_downHover" src="./assets/img/arrow_drop_down_hover.png"  id="arrow_drop_downHoverAssigned" onclick="hideAssigned(event)">                            
                            </div>
                        </div>                    
                        <div class="list" class="hide">
                            <ul id="listContact" class="hide underListContact"> 
                                <li id ="contactList"></li>                       
                            </ul>
                        </div>                     
                        <div class="contactAvatar" id="contactAvatar"></div>
                    </div>
                </div>
                <div class="vector4"></div>
                <div class ="inputRight_addTask">
                    <div class="dueDate">
                        <div class="text_DueDate">Due date<span class="spanClass">*</span></div>
                        <div class="frame211" onclick="required(this)">                    
                                <div class="dueDate_frame14">
                                    <input class="inputDate"  type="date" name="date" max="2030-12-31" placeholder="dd/mm/yyyy" id="dueDate" required oninput="handleInput(this)" >   
                                </div>
                                <div class="dueDateFieldRequired" id="dueDateFieldRequired"   onclick="required(this)">This field is required</div> 
                        </div>
                    </div>
                    <div class="frame28PopUp">
                        <div class="titlePrioPopUp">Prio</div>
                        <div class="priorityPopUp">
                            <div class="priorityUrgent"  onclick="changeColour('priorityUrgent')" id ="priorityUrgent">                    
                                <div class="textUrgent" id="textUrgent">Urgent</div>                       
                                <svg class="img-priorityUrgentSize" xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16">
                                    <g  clip-path="url(#clip0_114904_5525)">
                                        <path class="img-priorityUrgent" d="M19.6528 15.2547C19.4182 15.2551 19.1896 15.1803 19.0007 15.0412L10.7487 8.958L2.49663 15.0412C2.38078 15.1267 2.24919 15.1887 2.10939 15.2234C1.96959 15.2582 1.82431 15.2651 1.68184 15.2437C1.53937 15.2223 1.40251 15.1732 1.27906 15.099C1.15562 15.0247 1.04801 14.927 0.96238 14.8112C0.876751 14.6954 0.814779 14.5639 0.780002 14.4243C0.745226 14.2846 0.738325 14.1394 0.759696 13.997C0.802855 13.7095 0.958545 13.4509 1.19252 13.2781L10.0966 6.70761C10.2853 6.56802 10.5139 6.49268 10.7487 6.49268C10.9835 6.49268 11.212 6.56802 11.4007 6.70761L20.3048 13.2781C20.4908 13.415 20.6286 13.6071 20.6988 13.827C20.7689 14.0469 20.7678 14.2833 20.6955 14.5025C20.6232 14.7216 20.4834 14.9124 20.2962 15.0475C20.1089 15.1826 19.8837 15.2551 19.6528 15.2547Z" fill="#FF3D00"/>
                                        <path class="img-priorityUrgent"  d="M19.6528 9.50568C19.4182 9.50609 19.1896 9.43124 19.0007 9.29214L10.7487 3.20898L2.49663 9.29214C2.26266 9.46495 1.96957 9.5378 1.68184 9.49468C1.39412 9.45155 1.13532 9.29597 0.962385 9.06218C0.789449 8.82838 0.716541 8.53551 0.7597 8.24799C0.802859 7.96048 0.95855 7.70187 1.19252 7.52906L10.0966 0.958588C10.2853 0.818997 10.5139 0.743652 10.7487 0.743652C10.9835 0.743652 11.212 0.818997 11.4007 0.958588L20.3048 7.52906C20.4908 7.66598 20.6286 7.85809 20.6988 8.07797C20.769 8.29785 20.7678 8.53426 20.6955 8.75344C20.6232 8.97262 20.4834 9.16338 20.2962 9.29847C20.1089 9.43356 19.8837 9.50608 19.6528 9.50568Z" fill="#FF3D00"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_114904_5525">
                                            <rect width="20" height="14.5098" transform="translate(0.748535 0.745117)"/>
                                        </clipPath>
                                    </defs>
                                </svg>                 
                            </div>
                            <div class="priorityMedium" id="priorityMedium" onclick="changeColour('priorityMedium')" >
                                <div class="textMedium" id="textMedium">Medium</div>                        
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="8" viewBox="0 0 21 8">
                                    <g clip-path="url(#clip0_156_972)">
                                    <path class="img-priorityMedium"  d="M19.7596 7.91693H1.95136C1.66071 7.91693 1.38197 7.80063 1.17645 7.59362C0.970928 7.3866 0.855469 7.10584 0.855469 6.81308C0.855469 6.52032 0.970928 6.23955 1.17645 6.03254C1.38197 5.82553 1.66071 5.70923 1.95136 5.70923H19.7596C20.0502 5.70923 20.329 5.82553 20.5345 6.03254C20.74 6.23955 20.8555 6.52032 20.8555 6.81308C20.8555 7.10584 20.74 7.3866 20.5345 7.59362C20.329 7.80063 20.0502 7.91693 19.7596 7.91693Z" fill="#FFA800"/>
                                    <path class="img-priorityMedium"  d="M19.7596 2.67376H1.95136C1.66071 2.67376 1.38197 2.55746 1.17645 2.35045C0.970928 2.14344 0.855469 1.86267 0.855469 1.56991C0.855469 1.27715 0.970928 0.996386 1.17645 0.789374C1.38197 0.582363 1.66071 0.466064 1.95136 0.466064L19.7596 0.466064C20.0502 0.466064 20.329 0.582363 20.5345 0.789374C20.74 0.996386 20.8555 1.27715 20.8555 1.56991C20.8555 1.86267 20.74 2.14344 20.5345 2.35045C20.329 2.55746 20.0502 2.67376 19.7596 2.67376Z" fill="#FFA800"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_156_972">
                                    <rect width="20" height="7.45098" transform="translate(0.855469 0.466064)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="priorityLow" id="priorityLow" onclick="changeColour('priorityLow')" >
                                <div class="textLow" id="textLow">Low</div>                        
                                <svg  xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16">
                                    <path class="img-priorityLow" d="M10.8555 9.69779C10.6209 9.69819 10.3923 9.62335 10.2035 9.48427L1.30038 2.91453C1.18454 2.82898 1.0867 2.72146 1.01245 2.59812C0.938193 2.47478 0.888977 2.33803 0.867609 2.19569C0.824455 1.90821 0.897354 1.61537 1.07027 1.3816C1.24319 1.14782 1.50196 0.992265 1.78965 0.949143C2.07734 0.906021 2.3704 0.978866 2.60434 1.15165L10.8555 7.23414L19.1066 1.15165C19.2224 1.0661 19.354 1.00418 19.4938 0.969432C19.6336 0.934685 19.7788 0.927791 19.9213 0.949143C20.0637 0.970495 20.2006 1.01967 20.324 1.09388C20.4474 1.16808 20.555 1.26584 20.6407 1.3816C20.7263 1.49735 20.7883 1.62882 20.823 1.7685C20.8578 1.90818 20.8647 2.05334 20.8433 2.19569C20.822 2.33803 20.7727 2.47478 20.6985 2.59812C20.6242 2.72146 20.5264 2.82898 20.4106 2.91453L11.5075 9.48427C11.3186 9.62335 11.0901 9.69819 10.8555 9.69779Z" fill="#7AE229"/>
                                    <path class="img-priorityLow" d="M10.8555 15.4463C10.6209 15.4467 10.3923 15.3719 10.2035 15.2328L1.30038 8.66307C1.06644 8.49028 0.910763 8.2317 0.867609 7.94422C0.824455 7.65674 0.897354 7.3639 1.07027 7.13013C1.24319 6.89636 1.50196 6.7408 1.78965 6.69768C2.07734 6.65456 2.3704 6.7274 2.60434 6.90019L10.8555 12.9827L19.1066 6.90019C19.3405 6.7274 19.6336 6.65456 19.9213 6.69768C20.209 6.7408 20.4678 6.89636 20.6407 7.13013C20.8136 7.3639 20.8865 7.65674 20.8433 7.94422C20.8002 8.2317 20.6445 8.49028 20.4106 8.66307L11.5075 15.2328C11.3186 15.3719 11.0901 15.4467 10.8555 15.4463Z" fill="#7AE229"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="category">
                        <div class="textCategory">Category<span class="spanClass">*</span></div>  
                        <div class="categoryFrame_74" id="categoryFrame_74" onclick="required(this)" >     
                            <div class="taskCategory" id="taskCategory" onclick="hide(event)" onclick="required(this)">
                                <p id ="categorySelect" value="Select a task category">Select a task category</p>
                                <div class ="imgArrows" id="imgArrows" onclick="hide(event)">
                                    <img class="arrow_drop_down" src="./assets/img/arrow_drop_down.png"  id="arrow" onclick="hide(event)" > 
                                    <img class="arrow_drop_downHover" src="./assets/img/arrow_drop_down_hover.png"  id="arrow_drop_downHover" onclick="hide(event)">                            
                                </div>
                            </div>
                        </div>
                        <div class="list"  class="hide">
                            <ul id="list" class="hide underList"> 
                                <li class="options"  onclick="selectCategory(this)">
                                    <p class="category" value="Technical Task" onclick="hide(event)">Technical Task</p>
                                </li>
                                <li class="options"  onclick="selectCategory(this)" >
                                    <p class="category"  value="User Story" onclick="hide(event)">User Story</p>
                                </li>                                               
                            </ul>                                                  
                        </div>                   
                    </div>
                    <div class="subtasks">
                        <div class="textSubtasks">Subtasks</div>
                            <div class="subtasksFrame14" >
                                <input class="textAddSubtasks" type="text" name="subtasks" id="inputSubtasks" placeholder="Add new subtask" onclick="hideVectorAndImgCheck()">
                                <div class="imgSubtasks" >
                                    <div class="imgPlusContainer" id ="imgPlusContainer" onclick="hideVectorAndImgCheck()">
                                        <img  class="imgPlus" class src="./assets/img/Subtasks.png" alt="" id="addSubtasksPlus">                               
                                        <svg  class="imgPlusHover" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <g id="Property 1=add hover">
                                                <rect x="0.144531" width="24" height="24" rx="12" fill="#EEEEEE"/>
                                                <mask id="mask0_75592_9978" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                                    <rect id="Bounding box" x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                                                </mask>
                                                <g mask="url(#mask0_75592_9978)">
                                                    <path id="add" d="M11.1445 13H6.14453C5.8612 13 5.6237 12.9042 5.43203 12.7125C5.24036 12.5208 5.14453 12.2833 5.14453 12C5.14453 11.7167 5.24036 11.4792 5.43203 11.2875C5.6237 11.0958 5.8612 11 6.14453 11H11.1445V6C11.1445 5.71667 11.2404 5.47917 11.432 5.2875C11.6237 5.09583 11.8612 5 12.1445 5C12.4279 5 12.6654 5.09583 12.857 5.2875C13.0487 5.47917 13.1445 5.71667 13.1445 6V11H18.1445C18.4279 11 18.6654 11.0958 18.857 11.2875C19.0487 11.4792 19.1445 11.7167 19.1445 12C19.1445 12.2833 19.0487 12.5208 18.857 12.7125C18.6654 12.9042 18.4279 13 18.1445 13H13.1445V18C13.1445 18.2833 13.0487 18.5208 12.857 18.7125C12.6654 18.9042 12.4279 19 12.1445 19C11.8612 19 11.6237 18.9042 11.432 18.7125C11.2404 18.5208 11.1445 18.2833 11.1445 18V13Z" fill="#2A3647"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div id="vectorAndImgCheck"  class="vectorAndImgCheck d-none">
                                        <div class="imgCancelContainer" id="imgCancelContainer" onclick="hideVectorAndImgCheck()">
                                            <img class="imgCancel"  src="./assets/img/cancel.png">
                                            <img class="imgCancelHover" src="./assets/img/close hover.png">
                                        </div>                                   
                                        <img class="imgVector" src="./assets/img/vector.png" alt="">                      
                                        <div class="subtasksImgCheck" onclick="addSubtasks()">                                        
                                            <svg class="subtaskCheck" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <g id="Subtasks icons11">
                                                    <mask id="mask0_75601_14762" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                                    <rect id="Bounding box" x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                                                    </mask>
                                                    <g mask="url(#mask0_75601_14762)">
                                                        <path id="check" d="M9.69474 15.15L18.1697 6.675C18.3697 6.475 18.6072 6.375 18.8822 6.375C19.1572 6.375 19.3947 6.475 19.5947 6.675C19.7947 6.875 19.8947 7.1125 19.8947 7.3875C19.8947 7.6625 19.7947 7.9 19.5947 8.1L10.3947 17.3C10.1947 17.5 9.96141 17.6 9.69474 17.6C9.42807 17.6 9.19474 17.5 8.99474 17.3L4.69474 13C4.49474 12.8 4.3989 12.5625 4.40724 12.2875C4.41557 12.0125 4.51974 11.775 4.71974 11.575C4.91974 11.375 5.15724 11.275 5.43224 11.275C5.70724 11.275 5.94474 11.375 6.14474 11.575L9.69474 15.15Z" fill="#2A3647"/>
                                                    </g>
                                                </g>
                                            </svg>  
                                            <svg class="subtaskCheckHover" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <g id="Property 1=check hover">
                                                    <rect x="0.144531" width="24" height="24" rx="12" fill="#EEEEEE"/>
                                                    <mask id="mask0_75592_9966" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                                    <rect id="Bounding box" x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                                                    </mask>
                                                    <g mask="url(#mask0_75592_9966)">
                                                        <path id="check" d="M9.69474 15.15L18.1697 6.675C18.3697 6.475 18.6072 6.375 18.8822 6.375C19.1572 6.375 19.3947 6.475 19.5947 6.675C19.7947 6.875 19.8947 7.1125 19.8947 7.3875C19.8947 7.6625 19.7947 7.9 19.5947 8.1L10.3947 17.3C10.1947 17.5 9.96141 17.6 9.69474 17.6C9.42807 17.6 9.19474 17.5 8.99474 17.3L4.69474 13C4.49474 12.8 4.3989 12.5625 4.40724 12.2875C4.41557 12.0125 4.51974 11.775 4.71974 11.575C4.91974 11.375 5.15724 11.275 5.43224 11.275C5.70724 11.275 5.94474 11.375 6.14474 11.575L9.69474 15.15Z" fill="#2A3647"/>
                                                    </g>
                                                </g>
                                            </svg>                                                                    
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                            <div class="allSubtasks" id ="allSubtasks"></div>
                        </div>                    
                    </div>
                </div>
                <div class="addTasksFooterPopUp">
                <div class="comment"><span class="spanClass">*</span>This field is required</div>
                <div class="frame27">
                    <div class="secondary" onclick="clearTask()">
                        <div class="textClear">Clear</div>
                        <div class="clear">
                            <img class="imgCancel" src="./assets/img/cancel.png" alt="">                    
                            <svg class="imgCancelHover" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <g id="iconoir:cancel">
                                    <path id="Vector" d="M12.0692 12.0001L17.3122 17.2431M6.82617 17.2431L12.0692 12.0001L6.82617 17.2431ZM17.3122 6.75708L12.0682 12.0001L17.3122 6.75708ZM12.0682 12.0001L6.82617 6.75708L12.0682 12.0001Z" stroke="#29ABE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <a class="leadsToBoard" href="./board.html" id="leadsToBoard" onclick="handleTaskClick(event)">
                        <div class="primary">
                            <div class="textCreateTask">Create task</div>
                            <img class="imgCheckBlack" src="./assets/img/check.png" alt="">              
                        </div>
                    </a>
                </div>
            </div>
        </div>        
    </div>
    `;
}
