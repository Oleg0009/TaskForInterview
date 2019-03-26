var greenRect = document.getElementById('object1');
var redRect = document.getElementById('object2');
var blueRect = document.getElementById('object3');
Element.prototype.makeDraggable = function () {
    var o = this;
    o.onmousedown = function (e) {

        var offsetX = e.pageX - parseInt(o.style.left);
        var offsetY = e.pageY - parseInt(o.style.top);
        document.onmousemove = function (e) {

            o.style.left = Math.max(Math.min(e.pageX - offsetX, o.parentNode.clientWidth - o.clientWidth), 0) + 'px';
            o.style.top = Math.max(Math.min(e.pageY - offsetY, o.parentNode.clientHeight - o.clientHeight), 0) + 'px'
        };
        document.onmouseup = function (e) {
            document.onmousemove = o.onmouseup = null
        }
    };
    o.ondragstart = function () {
        return 0
    }
};
Element.prototype.makeDraggable2 = function () {
    var o = this;
    o.onmousedown = function (e) {


        var offsetX = e.pageX - parseInt(o.style.right);
        var offsetY = e.pageY - parseInt(o.style.top);
        document.onmousemove = function (e) {

            o.style.top = Math.max(Math.min(e.pageY - offsetY, o.parentNode.clientHeight - o.clientHeight), 0) + 'px';
            o.style.left = Math.max(Math.min(e.pageX - 45, o.parentNode.clientWidth - o.clientWidth), 0) + 'px';


        };
        document.onmouseup = function (e) {
            document.onmousemove = o.onmouseup = null
        }
    };
    o.ondragstart = function () {
        return 0
    }
};
Element.prototype.makeDraggable3 = function () {
    var o = this;
    o.onmousedown = function (e) {


        var offsetX = e.pageX - parseInt(o.style.right);
        var offsetY = e.pageY - parseInt(o.style.top);
        document.onmousemove = function (e) {

            o.style.top = Math.max(Math.min(e.pageY - 50, o.parentNode.clientHeight - o.clientHeight), 0) + 'px';
            o.style.left = Math.max(Math.min(e.pageX - 50, o.parentNode.clientWidth - o.clientWidth), 0) + 'px';


        };
        document.onmouseup = function (e) {
            document.onmousemove = o.onmouseup = null
        }
    };
    o.ondragstart = function () {
        return 0
    }
};
greenRect.makeDraggable();
redRect.makeDraggable2();
blueRect.makeDraggable3();


var c = 0;

function sum(a, z) {

    if(z)
        a=a+z;
    if (a) {

        return function (b) {
            if (b) {
                return function (c) {

                    if (c) {
                        return function () {

                            return a + b + c;


                        }
                    } else
                        return a + b;
                }
            } else {
                return a;
            }

        }
    }
    else return 0;

}


var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var fifth = document.getElementById('fifth');
first.innerHTML = sum(2)(3)();
second.innerHTML = sum(2)(3)(4)();
third.innerHTML = sum();
fourth.innerHTML = sum(2,4)(3)();
fifth.innerHTML =" ?";
//alert("Task 2 answer 1="+sum(2)(3)());
//alert("Task 2 answer 2="+sum(2)(4)(3)());
//alert("Task 2 answer 3="+sum());
//alert("Task 2 answer 4="+sum(2,4)(3)());

