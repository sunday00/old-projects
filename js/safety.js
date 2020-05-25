function windowSizeCheck (){

var windowWidth = window.innerWidth;

var sectionNumber = document.getElementsByClassName('section').length;

    
var stationItem = document.getElementsByClassName('station_name_item');
    
    
$('.section').css('width',windowWidth);
$('html').css('width',windowWidth);
$('.header_box').css('width',windowWidth);
$('html').css('height', window.innerHeight);
$('.main_content').css('width',windowWidth*sectionNumber);
$('.footer').css('width',(windowWidth-180));

$(stationItem).css('margin-right',(windowWidth-180)/100*2-5);
    
$('.line_graph').css('width', (((windowWidth-180)/100*2)*stationItem.length)+(10*stationItem.length));

$('.line').css('width',(((windowWidth-180)/100*2)*(stationItem.length-1))+(10*(stationItem.length-1)));
    
    
}


windowSizeCheck();


window.onresize = windowSizeCheck();


var firstWidth = window.innerWidth;
$(window).resize(function(){
    var nowWinow = window.innerWidth;
    var widthChange = firstWidth - nowWinow;
    
    if(widthChange>50 || widthChange<-50){
        window.location.reload();
    }
})



var stationNames = ['문양','다사','대실','강창','계명대','성서산업단지','이곡','용산','죽전','감삼','두류','내당','반고개','신남','반월당','경대병원','대구은행','범어','수성구청','만촌','담티','연호','대공원','고산','신매','사월','정평','임당','영남대'];

var seletorStation = document.getElementsByClassName('station_name_item');

function footer_graph_sttionNaming(){
    for (var i = 0; i<seletorStation.length; i++){
        var thisStation = seletorStation[i];
        $(thisStation).children('.station_name').html(stationNames[i]);
    }
}
footer_graph_sttionNaming();

//reverse : 0 역무원에게 말해야 반대쪽으로 열차로 갈 수 있음
//          1 한 층 올라가서 반대쪽으로 갈 수 있음
//          2 열차가 양 사이드로 지나가고, 플랫폼이 가운데 있어서 쉽게 갈아탈 수 있음
var stationSetting = {
    moonYang : {
        sName : stationNames[0],
        toilet : 0,
        reverse : 2,
        parking : 1,
        DepartY : ['0530', '2305', '2319'],
        DepartM : ['-----', '-----']
    },
    daSa : {
        sName : stationNames[1],
        toilet : 0,
        reverse : 1,
        parking : 0,
        DepartY : ['0533', '2308', '2323'],
        DepartM : ['0606', '2357']
    },
    daeSil : {
        sName : stationNames[2],
        toilet : 0,
        reverse : 1,
        parking : 0,
        DepartY : ['0535', '2310', '2325'],
        DepartM : ['0604', '2355']
    },
    gangChang : {
        sName : stationNames[3],
        toilet : 0,
        reverse : 0,
        parking : 0,
        DepartY : ['0537', '2312', '2327'],
        DepartM : ['0602', '2353']
    },
    keiMyung : {
        sName : stationNames[4],
        toilet : 0,
        reverse : 0,
        parking : 0,
        DepartY : ['0539', '2314', '2329'],
        DepartM : ['0600', '2351']
    },
    seongSeo : {
        sName : stationNames[5],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0542', '2317', '2331'],
        DepartM : ['0558', '2349']
    },
    iGok : {
        sName : stationNames[6],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0530', '2318', '2333'],
        DepartM : ['0557', '2347']
    },
    yongSan : {
        sName : stationNames[7],
        toilet : 0,
        reverse : 2,
        parking : 1,
        DepartY : ['0532', '2320', '2335'],
        DepartM : ['0554', '2345', '2358']
    },
    jukJeon : {
        sName : stationNames[8],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0534', '2322', '2337'],
        DepartM : ['0553', '2343', '2356']
    },
    gamSam : {
        sName : stationNames[9],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0535', '2324', '2339'],
        DepartM : ['0551', '2342', '2354']
    },
    duRyu : {
        sName : stationNames[10],
        toilet : 1,
        reverse : 2,
        parking : 1,
        DepartY : ['0537', '2326', '2340'],
        DepartM : ['0549', '2340', '2352']
    },
    naeDang : {
        sName : stationNames[11],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0539', '2327', '2342'],
        DepartM : ['0547', '2338', '2351']
    },
    banGoGae : {
        sName : stationNames[12],
        toilet : 0,
        reverse : 2,
        parking : 1,
        DepartY : ['0540', '2329', '2344'],
        DepartM : ['0546', '2336', '2349']
    },
    sinNam : {
        sName : stationNames[13],
        toilet : 1,
        reverse : 2,
        parking : 1,
        DepartY : ['0542', '2331', '2346'],
        DepartM : ['0544', '2335', '2347'],
        transfer : 3
    },
    banWorDang : {
        sName : stationNames[14],
        toilet : 1,
        reverse : 2,
        parking : 1,
        DepartY : ['0544', '2333', '2347'],
        DepartM : ['0542', '2333', '2345'],
        transfer : 1
    },
    kyungDaeHos : {
        sName : stationNames[15],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0546', '2335', '2349'],
        DepartM : ['0540', '2331', '2344'],
    },
    deaguBank : {
        sName : stationNames[16],
        toilet : 1,
        reverse : 2,
        parking : 0,
        DepartY : ['0548', '2337', '2351'],
        DepartM : ['0538', '2329', '2342'],
    },
    beomEo : {
        sName : stationNames[17],
        toilet : 0,
        reverse : 2,
        parking : 1,
        DepartY : ['0550', '2338', '2353'],
        DepartM : ['0536', '2327', '2340'],
    },
    suSeong : {
        sName : stationNames[18],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0552', '2340'],
        DepartM : ['0535', '2325', '2338'],
    },
    manChon : {
        sName : stationNames[19],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0553', '2342'],
        DepartM : ['0548', '2324', '2336'],
    },
    damTi : {
        sName : stationNames[20],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0555', '2344'],
        DepartM : ['0546', '2322', '2334'],
    },
    yeonHo : {
        sName : stationNames[21],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0558', '2346'],
        DepartM : ['0543', '2319', '2332'],
    },
    grandPark : {
        sName : stationNames[22],
        toilet : 1,
        reverse : 1,
        parking : 0,
        DepartY : ['0559', '2348'],
        DepartM : ['0541', '2317', '2330'],
    },
    goSan : {
        sName : stationNames[23],
        toilet : 0,
        reverse : 1,
        parking : 0,
        DepartY : ['0601', '2350'],
        DepartM : ['0539', '2315', '2328'],
    },
    sinMae : {
        sName : stationNames[24],
        toilet : 0,
        reverse : 1,
        parking : 1,
        DepartY : ['0603', '2352'],
        DepartM : ['0537', '2313', '2326'],
    },
    saWor : {
        sName : stationNames[25],
        toilet : 0,
        reverse : 2,
        parking : 0,
        DepartY : ['0605', '2354'],
        DepartM : ['0536', '2312', '2324'],
    },
    jungPyung : {
        sName : stationNames[26],
        toilet : 1,
        reverse : 1,
        parking : 0,
        DepartY : ['0607', '2356'],
        DepartM : ['0534', '2310', '2322'],
    },
    imDang : {
        sName : stationNames[27],
        toilet : 0,
        reverse : 1,
        parking : 1,
        DepartY : ['0609', '2358'],
        DepartM : ['0532', '2308', '2320'],
    },
    yungNamUniv : {
        sName : stationNames[28],
        toilet : 0,
        reverse : 1,
        parking : 0,
        DepartY : ['-----','-----'],
        DepartM : ['0530', '2306', '2318'],
    }
}


// 마우스 스크롤로 가로스크롤 제어하기


var totalWidth = document.getElementsByClassName('main_content')[0].offsetWidth;
function scroll_XY_change(){
    $("html, body").on('mousewheel DOMMouseScroll', function(e) {
        $('.dectiption').html('');
        var E = e.originalEvent;
        var moveto = window.pageXOffset;
        var windowWidh = window.innerWidth;
        ui_des_on = 0;
        
        if(E.deltaY>0){
            if (moveto < totalWidth){
                moveR(moveto,windowWidh);
            }
        }
        
        else if(E.deltaY<0){
            if (moveto > 0){
                moveL(moveto, windowWidh);
            }
        }
        
    })
    
    function moveR (moveto, windowWidh){
                    moveto = moveto + (windowWidh);
                    $('html, body').stop().animate({
                        scrollLeft: moveto
                    },100);
                    var presentView = window.pageXOffset;
                    var marginal = (window.pageXOffset)%(window.innerWidth);
                    if(marginal==0){windowWidh=0};
                    window.scrollTo(presentView-marginal+windowWidh,0);
                    ui_des_on = 0;
                }
    function moveL (moveto, windowWidh){
                    moveto = moveto - (windowWidh);
                    var presentView = window.pageXOffset;
                    var marginal = (window.pageXOffset)%(window.innerWidth);
                    window.scrollTo(presentView-marginal,0);
                    $('html, body').stop().animate({
                        scrollLeft: moveto
                    },100);
                    ui_des_on = 0;
                }
}
scroll_XY_change();

var stationNames_en = [];
for(name in stationSetting){
    stationNames_en.push(name);
}

//소요시간계산
function calculate(){
    var inputDepart = document.getElementById('depart_input').value;
    var inputArrive = document.getElementById('arrive_input').value;
    
    if (inputDepart.indexOf("역")==(inputDepart.length-1)){
        inputDepart = inputDepart.substr(0, inputDepart.length-1);
    }
    
    if (inputArrive.indexOf("역")==(inputArrive.length-1)){
        inputArrive = inputArrive.substr(0, inputArrive.length-1);
    }
    
    if (inputArrive=="영대"){
        inputArrive = "영남대";
    }
    
    if (inputDepart=="영대"){
        inputDepart = "영남대";
    }
    
    if (inputArrive=="성서공단" || inputArrive=="성서" || inputArrive=="산업단지"){
        inputArrive = "성서산업단지";
    }
    
    if (inputDepart=="성서공단" || inputDepart=="성서" || inputDepart=="산업단지"){
        inputDepart = "성서산업단지";
    }
    
    if (inputArrive == '' || inputDepart == ''){
        $('.alert_noName2').children('p').html('아무것도 입력되지 않았습니다.').parent().removeClass('hide_alert');
        
        setTimeout(
        function(){
            $('.alert_noName2').addClass('hide_alert');
        }, 2000);
        
        setTimeout(
        function(){
            $('.alert_noName2').children('p').html('<i class="fa fa-frown-o" aria-hidden="true"></i> 해당 노선에 존재하지 않는 역입니다.');
        }, 3000);
        return false;
    }
    
    var stationNumber = stationNames.indexOf(inputArrive);
    if (stationNumber == -1){
        $('.alert_noName2').removeClass('hide_alert');
        setTimeout(
        function(){
            $('.alert_noName2').addClass('hide_alert');
        }, 2000);
        return false;
    }
    
    var stationNumber2 = stationNames.indexOf(inputDepart);
    if (stationNumber2 == -1){
        $('.alert_noName2').removeClass('hide_alert');
        setTimeout(
        function(){
            $('.alert_noName2').addClass('hide_alert');
        }, 2000);
        return false;
    }
    
    

    console.log(inputArrive == '');
    
    var departStI = stationNames.indexOf(inputDepart);
    var arriveStI = stationNames.indexOf(inputArrive);
    
    var departSt = stationNames_en[departStI];
    var arriveSt = stationNames_en[arriveStI];
            
    var departTime = stationSetting[departSt].DepartM[1];
    var arriveTime = stationSetting[arriveSt].DepartM[1];
    
    
    
    if (inputArrive == '문양' || inputArrive == '문양역'){
        arriveTime = '2360';
    }
    if (inputDepart == '문양' || inputDepart == '문양역'){
        departTime = '2360';
    }
    
    var resultNumber = departTime - arriveTime;
    
    if (resultNumber<0){
        resultNumber = resultNumber*-1;
    }
    
    document.getElementById('calculate_result').innerHTML = resultNumber;
    
    
}


var nowShowing;
var ui_des_on = 0;
function uides(){
    $('.dectiption').addClass('ui_sub');
    $(document).on('click', '#ui_des', function(event){
        $('.left_side').addClass('opacity_0');
        $('.right_side').addClass('opacity_0');
        nowShowing = window.pageXOffset;
        window.scrollTo(window.innerWidth*2,0);
        ui_des_on = 1;
        $('.dectiption').addClass('ui_sub');
        event.preventDefault();
        $('.dectiption').load(event.target.href+' .dectiption>*');
        
    })
}
uides();

function uides_close(){
    
    $(document).on('click', function(event){
        $('.dectiption').html('');
    })
    
    $('body').not('#ui_des').on('click',function(event){
    
        if (ui_des_on == 0){
            nowShowing = window.pageXOffset;
        }
        else if(ui_des_on == 1){
            ui_des_on = 0;
            $('.left_side').removeClass('opacity_0');
            $('.right_side').removeClass('opacity_0');
            $('.dectiption').removeClass('ui_sub');
        }
        
        window.scrollTo(nowShowing,0);
        $('.dectiption').removeClass('ui_sub');
    })
    
}

uides_close();

$('.station_facility').on('click',function(e){
    var presentView = window.pageXOffset;
    var marginal = (window.pageXOffset)%(window.innerWidth);
    if (marginal < (window.innerWidth/2)){
        window.scrollTo(presentView-marginal,0);
    }
    else {
        window.scrollTo(presentView-marginal+window.innerWidth,0);
    }    
});
