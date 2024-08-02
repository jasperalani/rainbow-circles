// Draw randomly placed circles that aren't touching each other
function drawRandomCircles(x1, y1, x2, y2, n = 50, offset =  0, d = int(rand(20, 60))) {
    let points = []

    for (let i = 0; i < n; i++) {
        let x = int(rand(x1, x2))
        let y = int(rand(y1, y2))
        points.push({x: x, y: y, d: d})
    }

    let drawablePoints = []

    // Check each point against every other point to see if intersects
    for (let i = 0; i < points.length; i++) {
        let intersects = false;
        for (let j = 0; j < points.length; j++) {

            if(points[i] !== points[j]){
                let doesIntersect = dist(points[i].x, points[i].y, points[j].x, points[j].y) < (points[i].d /2) + (points[j].d /2) + offset;
                if(doesIntersect){
                    intersects = true;
                }
            }
        }

        if(!intersects){
            drawablePoints.push(points[i])
        }
    }

    for(let i = 0; i < drawablePoints.length; i++) {
        push()
        fill(randomColour())
        strokeWeight(0)
        circle(drawablePoints[i].x, drawablePoints[i].y, drawablePoints[i].d)
        pop()
    }
}

function rand(min, max) {
    return int(random(min, max));
}