window.addEventListener("load", event => {
	console.log("loaded");
	main(event);
});

const main = event => {
	let canvas = document.createElement("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	let cercle = findCenterOfCircle(0,10,5,-6,7,63);
	drawCircle(cercle[0],cercle[1],cercle[2],'green',canvas);
}

const drawCircle = (cx,cy,cr,color,canvas) => {
	let ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.arc(cx, cy, cr, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
}

const findCenterOfCircle = (ax,ay,bx,by,cx,cy) => {
	let x = (((sqr(bx)-sqr(ax)+sqr(by)-sqr(ay))/(2*(by-ay)))-((sqr(cx)-sqr(bx)+sqr(cy)-sqr(by))/(2*(cy-by))))/((bx-ax)/(by-ay)-(cx-bx)/(cy-by));
	console.log(x);
	let y = -((bx-ax)/(by-ay))*x+((sqr(bx)-sqr(ax)+sqr(by)-sqr(ay))/(2*(by-ay)));
	console.log(y);
	let r = Math.sqrt(sqr(x-ax)+sqr(y-ay));
	console.log(r);
	return [x,y,r];
}

const sqr = nb =>{
	return Math.pow(nb,2);
}
