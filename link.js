                var nav_number;
                
                $('#nav_item1').on('click',function(){
                    location.href="about.html";
                    nav_number = 1;
                }).bind('click',function(){
                    location.href="about.html";         
                });
                
                $('#nav_item2').on('click',function(){
                    location.href="lotto.html";
                    nav_number = 2;
                }).bind('click',function(){
                    location.href="lotto.html";
                });
                
                $('#nav_item3').on('click',function(){
                    location.href="RPS.html";
                    nav_number = 3;
                }).bind('click',function(){
                    location.href="RPS.html";
                });
                
                $('#nav_item4').on('click',function(){
                    location.href="end31.html";
                    nav_number = 4;
                }).bind('click',function(){
                    location.href="end31.html";           
                });
                
                $('#nav_item5').on('click',function(){
                    location.href="source.html";
                    nav_number = 5;
                }).bind('click',function(){
                    location.href="source.html";
                });
                
                $('#nav_item6').on('click',function(){
                    var randomepage_num = Math.ceil(Math.random()*5);
                    
                    $('#nav_item'+randomepage_num).trigger('click');
                    
                });