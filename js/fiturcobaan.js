"use strict"

let coba = {}
;{
	let lih = ru.lihat
	let dispclick = new MouseEvent('click',{bubbles:true},)
	let diklik = ele=>ele.dispatchEvent(dispclick)
	let dispmoudow = new MouseEvent('mousedown',{bubbles:true},)
	let dimoudow = ele=>ele.dispatchEvent(dispmoudow)
	let que = str=>document.querySelectorAll(str)
	let m3 = glMatrix.mat3
	
	//aku mau bikin gear
	let bikingear = coba.bikingear = n=>{//n --> jumlah gigi
		let gro = rk.global.children[0].group
		let r = n/Math.PI/2
		for(let naA = 0;naA < n;naA++){//sampe sini, jumlah gigi
			let m
			
			diklik(que('.newnode')[0]);que('.dipilih')[0].classList.add('sssgigi'+gearunik);diklik(que('.namecheck')[0]);m = gro[gro.length-1].matlok;m3.rotate(m,m,(naA+0/4)*Math.PI*2/n);m3.translate(m,m,[0,n*16+22,],)
			diklik(que('.newnode')[0]);que('.dipilih')[0].classList.add('sssgigi'+gearunik);diklik(que('.namecheck')[0]);m = gro[gro.length-1].matlok;m3.rotate(m,m,(naA+1/4)*Math.PI*2/n);m3.translate(m,m,[0,n*16-22,],)
			diklik(que('.newnode')[0]);que('.dipilih')[0].classList.add('sssgigi'+gearunik);diklik(que('.namecheck')[0]);m = gro[gro.length-1].matlok;m3.rotate(m,m,(naA+2/4)*Math.PI*2/n);m3.translate(m,m,[0,n*16-22,],)
			diklik(que('.newnode')[0]);que('.dipilih')[0].classList.add('sssgigi'+gearunik);diklik(que('.namecheck')[0]);m = gro[gro.length-1].matlok;m3.rotate(m,m,(naA+3/4)*Math.PI*2/n);m3.translate(m,m,[0,n*16+22,],)
		}
		
		diklik(que('.newnode')[0]);que('.dipilih')[0].classList.add('sssroda'+gearunik)
		let guini = gearunik++
		setTimeout(()=>bikingear_insertnode(guini),111,)//tunda, butuh parent setelah requestAnimationFrame,
	}
	let gearunik = 0
	let bikingear_insertnode = guini=>{//guini gearunik ini
		for(let elegigi of que('.sssgigi'+guini)){
			dimoudow(elegigi)
			diklik(que('.insertnode')[0])
			dimoudow(que('.sssroda'+guini)[0])
			//elegigi.classList.remove('sssgigi')
		}
		//que('.sssroda').classList.remove('sssroda')
		dimoudow(que('.sssroda'+guini)[0])
	}
	/*
	bikingear(15)
	bikingear(7)
	*/
	let pfc = document.createElement('div')//panel fiturcobaan
	document.body.appendChild(pfc)	//nodebaru
	//nodebaru
}







//============================