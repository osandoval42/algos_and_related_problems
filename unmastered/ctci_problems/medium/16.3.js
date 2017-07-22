function Segment(point1, point2){
	this.point1 = point1
	this.point2 = point2
}

Segment.prototype.flipped = function(){
	return new Segment(this.point1.flipped(), this.point2.flipped());
}

Segment.prototype.contains = function(point){
	maxX = Math.max(this.point1.x, this.point2.x)
	minX = Math.min(this.point1.x, this.point2.x)
	maxY = Math.max(this.point1.y, this.point2.y)
	minY = Math.min(this.point1.y, this.point2.y)
	return (point.x <= maxX && point.x >= minX && point.y <= maxY && point.y >= minY);
}

function Point(x, y){
	this.x = x
	this.y = y
}

Point.prototype.isEqual = function(point){
	return this.x == point.x && this.y == point.y
}

Point.prototype.flipped = function(){
	return new Point(this.y, this.x);
}

function Line(seg){
	this.segment = seg;
	this.isPoint = seg.point1.isEqual(seg.point2)

	this.slope = (seg.point1.y - seg.point2.y) / (seg.point1.x - seg.point2.x);
	if (seg.point1.x - seg.point2.x == 0){
		this.isVerticalLine =  true
	} else {
		this.isVerticalLine = false;
		this.computeYIntercept();
	}
}

Line.prototype.getY = function(x){
	return this.slope * x + this.yIntercept;
}

Line.prototype.computeYIntercept = function(){
	this.yIntercept = this.segment.point1.y - (this.segment.point1.x * this.slope);
}

function findIntersection(line1, line2){
	leftSide = line1.yIntercept - line2.yIntercept;
	rightSide = line2.slope - line1.slope
	x = leftSide / rightSide;
	y = line1.getY(x);
	return new Point(x, y);
}
//other edge: check if line is horizontal.  If so on other vertical, just check that horizontal line y is in between and vice versa for x
//another edge is same line check.  If slope is same for both lines and y intercept is same, simply check for point comparison
function intersection(seg1, seg2){ //edge cases are either is isPoint or isVerticalline
	line1 = new Line(seg1);
	line2 = new Line(seg2);
	debugger;

	if (line1.isPoint || line2.isPoint){
		if (seg1.point1.isEqual(seg2.point1) || seg1.point1.isEqual(seg2.point2))
			return seg1.point1
		else if (seg1.point2.isEqual(seg2.point1) || seg1.point2.isEqual(seg2.point2))
			return seg1.point2
		else 
			return undefined
	}

	if (line1.isVerticalLine){ //we should be testing for both
		if (line2.isVerticalLine){ //should test for both but we get the picture
			if (seg1.point1.x == seg2.point1.x && (seg2.contains(seg1.point1.y) || seg2.contains(seg1.point1.y))){
				return
					/*
						if only a single point return that point else return multiple intereceptions
					*/				
			} else {
				return;
			}			
		}
		ret = intersection(seg1.flipped(), seg2.flipped());
		if (ret){
			return ret.flipped();
		} else {
			return undefined;
		}
	}

	const intersect = findIntersection(line1, line2);
	return (seg1.contains(intersect) && seg2.contains(intersect)) ? intersect : undefined;
}

function test(){
	seg1 = new Segment(new Point(4, 1), new Point(4, 3));
	seg2 = new Segment(new Point(3, 2), new Point(6, 3));
	const intersect = intersection(seg1, seg2);
	if (intersect){
		console.log(`intersection is x: ${intersect.x}, y: ${intersect.y}`);
	} else {
		console.log("no intersection");
	}
	
}
// setTimeout(test, 7000);
test()