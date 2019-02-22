function Drag(dom) {
    this.dom = document.getElementById(dom);
    this.flag = false;
    var self = this;
    var sty = null;
    if(window.getComputedStyle) {
        sty = window.getComputedStyle(self.dom, null); // 非IE
    } else {
        sty = self.dom.currentStyle; // IE
    }
    this.maxLeft = document.documentElement.clientWidth - this.dom.offsetWidth; //当前元素可移动的最大左偏移
    this.maxTop = document.documentElement.clientHeight - this.dom.offsetHeight; //当前元素可移动的最大上偏移

    // self.dom.addEventListener("mousedown", function(e) {
    //     self.down(self);
    // }, false);
    self.dom.addEventListener("touchstart", function(e) {
        self.down(self);
    }, false)

}
//按下
Drag.prototype.down = function(self) {
    self.flag = true;
    var touch;
    if(event.touches) {
        touch = event.touches[0];
    } else {
        touch = event;
    }
    var offLeft = touch.clientX - self.dom.offsetLeft;//当前点击点相对元素左边框的距离
    var offTop = touch.clientY - self.dom.offsetTop;//当前点击点相对元素上边框的距离

    // self.dom.addEventListener("mousemove", function() {
    //     self.move(self,offLeft,offTop);
    // }, false);
    self.dom.addEventListener("touchmove", function() {
        self.move(self,offLeft,offTop);
    }, false)
    // document.body.addEventListener("mouseup", function() {
    //     self.end(self);
    // }, false);
    self.dom.addEventListener("touchend", function() {
        self.end(self);
    }, false);
}
//移动
Drag.prototype.move = function(self,offLeft,offTop) {
    if(self.flag) {
        var touch;
        if(event.touches) {
            touch = event.touches[0];
        } else {
            touch = event;
        }
        var endX = touch.clientX - offLeft;//元素移动后的left距离
        var endY = touch.clientY - offTop;//元素移动后的top距离
        if(endX <= 0) {
            endX = 0;
        } else if(endX >= self.maxLeft) {
            endX = self.maxLeft;
        }
        if(endY <= 0) {
            endY = 0;
        } else if(endY >= self.maxTop) {
            endY = self.maxTop;
        }

        self.dom.style.left = endX + "px";
        self.dom.style.top = endY + "px";

        //阻止页面的滑动默认事件
        document.addEventListener("touchmove", function() {
            event.preventDefault();
        }, false);
    }
}
//释放
Drag.prototype.end = function(self) {
    self.flag = false;
}

export const myDrag = Drag

