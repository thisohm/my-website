    
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
