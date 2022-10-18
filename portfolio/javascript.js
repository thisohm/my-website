    
        var tablinks = document.getElementsByClassName("tab-link");
        var tabmenus = document.getElementsByClassName("tab-menu");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabmenu of tabmenus){
                tabmenu.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        var menures = document.getElementById("menu-res");
            function openmenu(){
                menures.style.right = "0";
            }  
            function closemenu(){
                menures.style.right = "-200px";
            }
