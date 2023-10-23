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
	let pfcdrag = document.createElement('div')
	document.body.appendChild(pfc)
	pfc.appendChild(pfcdrag)
	let mousetext = que('.mousetext')[0]
	let bikindesc = (ele,namaclass,tex,)=>{
		let texele = document.createElement('div')
		mousetext.appendChild(texele)
		texele.classList.add(namaclass)
		texele.textContent = tex
		ele.setAttribute('descr',namaclass,)
		return ele
	}
	pfc.classList.add('pfc')
	pfcdrag.classList.add('pfcdrag')
	pfcdrag.textContent = 'Fitur Cobaan'
	
	let pfcgeser = false
	let x0 = 0
	let y0 = 0
	let x1 = Number.MAX_SAFE_INTEGER
	let y1 = Number.MAX_SAFE_INTEGER
	addEventListener('mousedown',e=>{
		if(e.target !== pfcdrag){return}
		pfcgeser = true
		x0 = e.clientX-pfc.offsetLeft
		y0 = e.clientY-pfc.offsetTop
	})
	addEventListener('mousemove',e=>{
		if(!pfcgeser){return}
		x1 = e.clientX-x0
		y1 = e.clientY-y0
		f_pfcbatas()
	})
	addEventListener('mouseup',e=>{
		pfcgeser = false
	})
	let f_pfcbatas = ()=>{
		let x = Math.min(x1,innerWidth-pfcdrag.clientWidth,)
		let y = Math.min(y1,innerHeight-pfcdrag.clientHeight,)
		x = Math.max(x,0,)
		y = Math.max(y,0,)
		pfc.style.left = x+'px'
		pfc.style.top = y+'px'
	}
	addEventListener('resize',f_pfcbatas,)
	addEventListener('load',f_pfcbatas,)
	//sampe sini, bikin div untuk tools, agar pfcdrag ga ikut kena scroll
	let pfctools = document.createElement('div')
	pfc.appendChild(pfctools)
	pfctools.classList.add('pfctools')
	let judulgear = document.createElement('div')
	pfctools.appendChild(judulgear)
	judulgear.textContent = 'Gear'
	judulgear.classList.add('menusubjudul')
	let flex0 = document.createElement('div')
	pfctools.appendChild(flex0)
	flex0.classList.add('pfcflex')
	let inpgear_n = document.createElement('input')
	flex0.appendChild(inpgear_n)
	inpgear_n.type = 'number'
	inpgear_n.step = 1
	inpgear_n.value = 8
	inpgear_n.classList.add('inpgear_n')
	bikindesc(inpgear_n,'mousengigi','Jumlah gigi',)
	let inpgear_rad = document.createElement('input')
	flex0.appendChild(inpgear_rad)
	inpgear_rad.type = 'number'
	inpgear_rad.value = 111
	inpgear_rad.classList.add('inpgear_rad')
	bikindesc(inpgear_rad,'mouseradgigi','Radius lubang',)
	let gearbutton = document.createElement('button')
	flex0.appendChild(gearbutton)
	gearbutton.textContent = 'Bikin'
	gearbutton.classList.add('gearbutton')
	gearbutton.addEventListener('click',e=>{
		bikingear(
			Math.floor(inpgear_n.value),
			inpgear_rad.value,
		)
	},)
	//nodebaru
	//nodebaru
}







//============================