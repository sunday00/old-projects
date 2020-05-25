function dropWater(classname) {
    var insertTo = document.getElementsByClassName(classname)[0];
    insertTo.style.overflow = 'hidden';

    function random(max) {
        return Math.floor(Math.random() * max);
    }

    var colors = ['red', 'pink', 'skyblue', 'white', 'orange', 'purple','#445533','rgba(233,10,24,26)','#00f'];
    // you can input more color, or delete dislike one.

    function Circle(width, color, opacity, posX, posY) {
        this.size = width;
        this.color = color;
        this.opacity = opacity / 100;
        this.left = posX;
        this.top = posY;
        this.circle = document.createElement('div');
        this.circle.setAttribute('class','waterCircle');
    }

    Circle.prototype.createSelf = function () {

        this.circle.style.width = this.size + 'px';
        this.circle.style.height = this.size + 'px';
        this.circle.style.position = 'absolute';
        this.circle.style.left = this.left + '%';
        this.circle.style.backgroundColor = this.color;
        this.circle.style.opacity = this.opacity;
        insertTo.appendChild(this.circle);
    }

    Circle.prototype.movecircle = function () {
        this.top += 1;
        // you can change drop speed. If change to 0, circle is just disapear,
        // if change to minus, you can see ungravity.
        
        this.circle.style.top = this.top + 'px';

    }


    setInterval(function () {
        var aaa = new Circle(random(50), colors[random(6)], random(70), random(100), random(300));
        // you can change circle size, colorful, opacity, spread width, spread height.
        aaa.createSelf();

        setInterval(function () {
            aaa.movecircle();
        });

        setTimeout(function () {
            var de = document.getElementsByClassName('waterCircle')[0];
            document.classname.removeChild(de);
        }, 2500);
        // you can change circle's disappearing time.

    }, 80);
    // you can change more flequant circle.
}
