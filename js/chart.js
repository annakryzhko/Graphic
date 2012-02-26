function Chart(id, config) {
    var r,

                        ui_container = document.getElementById(id),
                        axisX = config.axisX,
                        axisY = config.axisY,
                        points = config.points,
                        attr,
                        padding,
                        innerWidth,
                        innerHeight,
                        scaleX, scaleY, x_min, y_min;
   

    attr = { axeY: { stroke: "#9ce3ff", "stroke-dasharray": ".", "stroke-width": 1 },
        axeYtext1: { fill: "#29abe3", "font-size": 12 },
        axeYtext2: { fill: "#9e9e9e", "font-size": 12, "text-anchor": "start" },
        axeX: { stroke: "#9e9e9e" },
        axeXtext: { fill: "#9e9e9e", "font-size": 12, "font-family": "Arial" },
        hint: { stroke: "#66D902", "stroke-width": 1, fill: "90-#ecfadf-#fff" },
        hintText1: { fill: "#000", "font-size": 12, "font-family": "Verdana", "font-weight": "bold" },
        hintText2: { fill: "#000", "font-size": 11, "font-family": "Verdana" },
        xLine: { stroke: "#b2b2b2", "stroke-width": 1, "stroke-dasharray": "." },
        xLineBg: { fill: "#fff", "stroke-width": 0, stroke: "#fff" },
        xLineText: { fill: "#000", "font-size": 9, "font-weight": "bold", "font-family": "Arial" },
        node: { stroke: "#66D902", "stroke-width": 2, fill: "#fff" },
        gr: { stroke: "#66D902", "stroke-width": 3 }
    };

    padding = {
        left: 20,
        right: 45,
        bottom: 30,
        top: 30
    };


    function getXcoord(x_data) {
        var x_r = (x_data - axisX.min) * scaleX + padding.left;
        return x_r;

    }
    function getYcoord(y_data) {
        var y_r = innerHeight - (y_data - axisY.min) * scaleY + padding.bottom;
        return y_r;

    }

    function drawAxisY() {
        var i, lng1 = axisY.points.length,
             lng2 = axisY.points2.length,
             path, xLbl = 5, x_max;
        x_max = getXcoord(axisX.max);
        for (i = 0; i < lng1; i++) {
            y = getYcoord(axisY.points[i]);
            path = [["M", x_min, y], ["H", x_max]];
            r.path(path).attr(attr.axeY);
            r.text(xLbl, y, axisY.points[i]).attr(attr.axeYtext1);
        }
        for (i = 0; i < lng2; i++) {
            y = getYcoord(axisY.points2[i].val);
            r.text(x_max + 10, y, axisY.points2[i].lbl).attr(attr.axeYtext2);
        }

    }

    function drawAxisX() {
        var delta = 2, i,
                    lng = axisX.points.length,
                    path, x,
                    yLbl = r.height - padding.bottom / 2;

        path = [["M", x_min, y_min], ["h", innerWidth]];
        r.path(path).attr(attr.axeX);
        for (i = 0; i < lng; i++) {
            x = getXcoord(axisX.points[i]);
            path = [["M", x, y_min - delta], ["l", 0, 2 * delta]];
            r.path(path).attr(attr.axeX);
            r.text(x, yLbl, axisX.points[i]).attr(attr.axeXtext);
        }
    }


    function drawHint(point, x, y) {
        var rad = 3, h = 29, w = 39;
        var path = [["M", x, y], ["l", -18, -8],
                            ["h", -1], ["q", -rad, 0, -rad, -rad],
                            ["v", -h], ["q", 0, -rad, rad, -rad],
                            ["h", w], ["q", rad, 0, rad, rad],
                            ["v", h], ["q", 0, rad, -rad, rad],
                            ["h", -1], ["z"]];
        var curve = r.path(path).attr(attr.hint);
        r.text(x, y - h - 2, point.y).attr(attr.hintText1);
        r.text(x, y - h + 13, point.percent + "%").attr(attr.hintText2);

    }

    function drawNode(x, y) {
        r.circle(x, y, 5).attr(attr.node)
    }

    function drawXLine(x, y0, y1, val) {
        var path = [["M", x, y0], ["V", y1]];
        r.path(path).attr(attr.xLine);
        r.circle(x, y0 - 15, 8).attr(attr.xLineBg);
        r.text(x, y0 - 15, val).attr(attr.xLineText);

    }
    function drawGraphic() {
        var i, lng, x, y, gr_path = [];
        lng = points.length;

        gr_path.push("M", getXcoord(points[0].x), getYcoord(points[0].y));
        for (i = 0; i < lng; i++) {
            points[i].coordX = getXcoord(points[i].x);
            points[i].coordY = getYcoord(points[i].y);
            gr_path.push("L", points[i].coordX, points[i].coordY);
        }
        r.path(gr_path).attr(attr.gr);

        for (i = 0; i < lng; i++) {
            drawXLine(points[i].coordX, y_min, points[i].coordY, points[i].x);
            drawNode(points[i].coordX, points[i].coordY);
            drawHint(points[i], points[i].coordX, points[i].coordY - 10);
        }
    }

    function init() {
        ui_container.innerHTML = "";
        r = Raphael(id, config.width, config.height);
        innerHeight = r.height - padding.bottom - padding.top;
        innerWidth = r.width - padding.left - padding.right;
        scaleX = innerWidth / (axisX.max - axisX.min);
        scaleY = innerHeight / (axisY.max - axisY.min);
        x_min = getXcoord(axisX.min);
        y_min = getYcoord(axisY.min);

        drawAxisX();
        drawAxisY()
        drawGraphic()
    }

    init();


}
