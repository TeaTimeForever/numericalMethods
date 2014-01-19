var h = 0.1975

function countParams(cur) {
	kls = {}
	kls.k0 = cur.z
	kls.l0 = 17 - 5*cur.z - 16 *cur.y
	kls.l1 = 17 - 5*((cur.z + h* kls.l0)/2) - 16 *(cur.y + (h*kls.k0)/2)
	kls.k1 = cur.z + (h*kls.l0)/2

	kls.l2 = 17 - 5*((cur.z + h* kls.l1)/2) - 16 *(cur.y + (h*kls.k1)/2)
	kls.k2 = cur.z + (h*kls.l1)/2

	kls.l3 = 17 - 5*((cur.z + h* kls.l2)) - 16 *(cur.y + (h*kls.k2))
	kls.k3 = cur.z + (h*kls.l2)
	return kls
} 

function nextCurZY(cur, h, kls){
	var nextCur = {
    	y: cur.y + h/6*(kls.k0 + 2* kls.k1 + 2*kls.k2 + kls.k3),
    	z: cur.z + h/6*(kls.l0 + 2* kls.l1 + 2*kls.l2 + kls.l3)
	}
	return nextCur
}

var cur = {
	y: 5,
	z: 10
}

for(var i=0; i < 3.95; i+=h) {
	var kls = countParams(cur)
	cur = nextCurZY(cur, h, kls)
	console.log(cur)
}