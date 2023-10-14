"use strict"

let rantaikode = {}
let rk = rantaikode
;{
	let lih = ru.lihat
	let cla = ru.cla
	let que = ru.que
	
	addEventListener('beforeunload',e=>{
		e.returnValue = 'outttt'
		//return 'kosonggg'
	},)
	
	let canv = rk.canv = document.createElement('canvas')
	document.body.appendChild(canv)
	let rkp = rk.panjang = canv.width = 1000*1.3
	let rkt = rk.tinggi = canv.height = 600*1.3
	let cx = rk.cx = canv.getContext('2d',{willReadFrequently:true,},)
	cx.msImageSmoothingEnabled = false;
	cx.mozImageSmoothingEnabled = false;
	cx.webkitImageSmoothingEnabled = false;
	cx.imageSmoothingEnabled = false;
	cx.imageSmoothingEnabled = false
	
	let namaunik = 0
	let m3 = glMatrix.mat3
	let v3 = glMatrix.vec3
	let matide = m3.create()//identity
	//let matview = m3.create()
	let mathasil = m3.create()
	let whmax = 2222
	let ttadi = 0
	let lukis = now=>{
		requestAnimationFrame(lukis)
		let dt = now-ttadi
		ttadi = now
		
		ukurcanv(dt)
		ru.habisarr(arr_obj)
		arr_obj.push(global)
		//let bubar = 1111
		for(let naA = 0;naA<arr_obj.length;naA++){
			//if(--bubar<0){lih(arr_obj);throw 'keBABLASen'}
			
			let vaA = arr_obj[naA]
			for(let naB in vaA.children){
				let vaB = vaA.children[naB = +naB]
				vaB.parent = vaA
				arr_obj.splice(naA+naB+1,0,vaB,)
			}
		}
		
		hov0 = true
		for(let naA = arr_obj.length-1;naA>=0;naA--){
			let vaA = arr_obj[naA]
			if(kenabox(vaA,vecmouse,)){
				hov0 = vaA
				break
			}
		}
		for(let vaA of arr_obj){
			cx.save()
				vaA.feve(moueve(vaA),vaA,dt,)
				vaA.feve('hitung0',vaA,dt,)
				hitungmat(vaA)
			cx.restore()
		}
		for(let vaA of arr_obj){
			cx.save()
				vaA.feve('tampil',vaA,dt,)
			cx.restore()
		}
		hov1 = hov0
		//rk.coba = [hov0,hov1,tah0,tah1,kli,]
	}
	addEventListener('resize',e=>ukurcanv())
	let ukurcanv = dt=>{
		rk.canv.width = Math.max(
			rkp,
			Math.min(
				innerWidth*rk.tinggi/innerHeight	,
				whmax	,
			),
		)
		rk.canv.height = Math.max(
			rkt,
			Math.min(
				innerHeight*rk.panjang/innerWidth	,
				whmax	,
			),
		)
	}
	let arr_obj = []
	let bikinobj = (nama,feve,)=>{
		let o = {}
		
		o.nama = nama
		o.feve = feve
		o.matlok = m3.create()
		o.matglo = m3.create()
		o.matview = m3.create()
		o.parent = null
		o.children = []
		
		return o
	}
	let hitungmat = o=>{
		if(o.parent){
			m3.mul(o.matglo,o.parent.matglo,o.matlok,)
		}else{
			m3.copy(o.matglo,o.matlok,)
		}
		//bikin matview
		m3.invert(o.matview,matcam,)
		m3.mul(o.matview,o.matview,o.matglo,)
	}
	let fkosong = ()=>{}
	let matcam = m3.create()
	let vecmouse = v3.create();vecmouse[2] = 1
	let matkenahasil = m3.create()
	let hov0 = null//hover
	let hov1 = null//hover
	let tah0 = null//tahan
	let tah1 = null//tahan
	let kli = null
	let kenabox = (o,titik,)=>{
		if(!o.hoverbox){return false}
		m3.invert(matkenahasil,matcam,)
		m3.mul(matkenahasil,matkenahasil,o.matglo,)
		m3.mul(matkenahasil,matkenahasil,o.hoverbox,)
		m3.invert(matkenahasil,matkenahasil,)
		v3.transformMat3(vp0,titik,matkenahasil,)
		vp0[0] /= vp0[2]
		vp0[1] /= vp0[2]
		vp0[2] /= vp0[2]
		return (
			(vp0[0] <= 1) &&
			(vp0[0] >= -1) &&
			(vp0[1] <= 1) &&
			(vp0[1] >= -1)
		)
	}
	let moueve = o=>{//mouse event
		if(
			(hov0 === o) &&
			(hov1 !== o)
		){
			return 'datang'
		}else if(
			(hov0 !== o) &&
			(hov1 === o)
		){
			return 'pergi'
		}else if(
			(hov0 === o) &&
			(tah0 === o) &&
			(tah0 !== tah1)
		){
			return 'turun'
		}else if(
			(hov0 === o) &&
			(tah0 !== tah1)
		){
			return 'naik'
		}else if(
			(kli === o) &&
			(kli === hov0)
		){
			return 'klik'
		}
		return null
	}
	let mx//simpan mouse pos saat geser pointer lock
	let my//simpan mouse pos saat geser pointer lock
	let mxo//offsetnya
	let myo//offsetnya
	let warnahover
	let acakwarnahover = ()=>warnahover = ru.rgba(
		Math.random()*255	,
		Math.random()*255	,
		Math.random()*255	,
		.3
	)
	
	let mousemoveeve = e=>{
		if(document.pointerLockElement === canv){return}
		let mousex = ((mx = e.x)/canv.clientWidth-.5)*canv.width
		let mousey = ((my = e.y)/canv.clientHeight-.5)*canv.height
		//m3.translate(matmouse,matide,[mousex,mousey,],)
		vecmouse[0] = mousex
		vecmouse[1] = mousey
		acakwarnahover()
	}
	canv.addEventListener('mousemove',mousemoveeve,)
	canv.addEventListener('mousedown',e=>{
		tah0 = true
		for(let naA = arr_obj.length-1;naA>=0;naA--){
			let vaA = arr_obj[naA]
			if(kenabox(vaA,vecmouse,)){
				tah0 = vaA
				break
			}
		}
		if(cla('insertnodechecked')[0]){
			nodemasukkenode(nodedipilih,tah0,)
			tah0 = true
			return
		}
		if(tah0 === true){
			tidakdipilih()
			return
		}
		for(let vaA of arr_obj){
			vaA.feve(moueve(vaA),vaA,null,)
		}
		tah1 = tah0
	})
	let nodeadapar = (node,par,)=>{//node ini punya atasan
		let ada = false
		let batas = 44
		while(
			(node !== grid) &&
			(node !== par)
		){
			if(batas-- < 0){lih('=== keBABLASen ===')}
			node = node.parent
		}
		return node === par
	}
	let tidakdipilih = ()=>{
		if(cla('insertnodechecked')[0]){//sini 1
			nodemasukkenode(nodedipilih,grid,)
			tah0 = true
			return
		}
		nodedipilih = null
		cla('nodeid')[0].textContent = ''
		updtrf()
		updlain()
		let vaA
		while(vaA = ru.cla('dipilih')[0]){
			vaA.classList.remove('dipilih')
		}
	}
	addEventListener('mouseup',e=>{
		tah0 = null
		for(let vaA of arr_obj){
			vaA.feve(moueve(vaA),vaA,null,)
		}
		kli = tah1
		tah1 = tah0
		for(let vaA of arr_obj){
			vaA.feve(moueve(vaA),vaA,null,)
		}
		kli = null
	})
	let m3mix0 = m3.create()
	let m3mix1 = m3.create()
	let m3mix = (out,a,b,w,)=>{
		let m0 = m3mix0
		let m1 = m3mix1
		m3.multiplyScalar(m0,a,1-w,)
		m3.multiplyScalar(m1,b,w,)
		m3.add(out,m0,m1,)
		return out
	}
	
	
	
	
	
	
	
	//--------
	//
	let pindahhlm = hlm=>{
		cla('htmlUI0baaru')[0].classList.add('hilang')
		cla('htmlUI1')[0].classList.add('hilang')
		cla('htmlUI2')[0].classList.add('hilang')
		cla('htmlUI3')[0].classList.add('hilang')
		//hlm
		cla(hlm)[0].classList.remove('hilang')
	}
	let updtrf
	let updlain
	let inpm00 = cla('inpm00')[0]
	let inpm01 = cla('inpm01')[0]
	let inpm02 = cla('inpm02')[0]
	let inpm10 = cla('inpm10')[0]
	let inpm11 = cla('inpm11')[0]
	let inpm12 = cla('inpm12')[0]
	let inpm20 = cla('inpm20')[0]
	let inpm21 = cla('inpm21')[0]
	let inpm22 = cla('inpm22')[0]
	let inpname =cla('inpname')[0]
	let inpfill =cla('inpfill')[0]
	let inpstroke =cla('inpstroke')[0]
	let inporder =cla('inporder')[0]
	
	let namecheck = cla('namecheck')[0]
	let fillcheck = cla('fillcheck')[0]
	let strokecheck = cla('strokecheck')[0]
	let childrencheck = cla('childrencheck')[0]
	let order = cla('order')[0]
	let urutkan //urutkan (children, div_span, txdata) sesuai order
	let watch = null
	
	let f_copynode
	let nodemasukkenode
	let fclick_insertnode
	let insertnodemenujuoff = false//untuk uncheck
	let edit
	let fclick_deletenode
	let fclick_newnode
	let pilihnode
	let arrgb = []
	let sampah = null
	let pilihsampah
	let sampahsiap = false//agar tidak deselect sampah
	
	let matpinjam0 = m3.create()
	let matpinjam1 = m3.create()
	addEventListener('mouseup',e=>{
		document.exitPointerLock()
	},)
	let poi
	let eveges = {}//event geser
	let mp0 = matpinjam0
	let mp1 = matpinjam1
	;{
		let m
		poi = ele=>{
			ele.addEventListener('mousedown',poilock,)
		}
		let poilock = e=>{
			e.currentTarget.requestPointerLock()
		}
		let cheeve = (e,v,)=>{//checkbox event
			e.currentTarget.firstChild.checked = v
		}
		let cekNaN = (v,re,)=>isNaN(v)?re:v
		
		addEventListener('pointermove',e=>{
			eveges[document.pointerLockElement?.classList[0]]?.(e)
		})
		updtrf = ()=>{//update transform di menu
			let m = nodedipilih?nodedipilih.matlok:matcam
			inpm00.value = m[0].toFixed(5)
			inpm01.value = m[1].toFixed(5)
			inpm02.value = m[2].toFixed(5)
			inpm10.value = m[3].toFixed(5)
			inpm11.value = m[4].toFixed(5)
			inpm12.value = m[5].toFixed(5)
			inpm20.value = m[6].toFixed(5)
			inpm21.value = m[7].toFixed(5)
			inpm22.value = m[8].toFixed(5)
		}
		let check = (ele,bool,)=>
			bool?
				ele.classList.add('checked')
			:
				ele.classList.remove('checked')
			
		
		updlain = ()=>{
			if(nodedipilih){
				check(namecheck,nodedipilih.SHname,)
				check(fillcheck,nodedipilih.SHfill,)
				check(strokecheck,nodedipilih.SHstroke,)
				check(childrencheck,nodedipilih.SHchildren,)
				inpname.value = nodedipilih.nama
				inpfill.value = nodedipilih.fill
				inpstroke.value = nodedipilih.stroke
				inporder.value = nodedipilih.order.toFixed(5)
			}else{
				check(namecheck,false,)
				check(fillcheck,false,)
				check(strokecheck,false,)
				check(childrencheck,false,)
				inpname.value = 'camera'
				inpfill.value = 
				inpstroke.value = 
				inporder.value = ''
			}
		}
		let simpanfile = (data,tipe,nama,)=>{
			const link = lih(document.createElement("a"))
			const file = new Blob(
				[data]	,
				{type: tipe,}	,
			)
			link.href = URL.createObjectURL(file);
			link.download = nama
			link.click();
			URL.revokeObjectURL(link.href);
		}
		inpm00.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[0] = h
			}else{
				matcam[0] = h
			}
		})
		inpm01.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[1] = h
			}else{
				matcam[1] = h
			}
		})
		inpm02.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[2] = h
			}else{
				matcam[2] = h
			}
		})
		inpm10.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[3] = h
			}else{
				matcam[3] = h
			}
		})
		inpm11.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[4] = h
			}else{
				matcam[4] = h
			}
		})
		inpm12.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[5] = h
			}else{
				matcam[5] = h
			}
		})
		inpm20.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[6] = h
			}else{
				matcam[6] = h
			}
		})
		inpm21.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[7] = h
			}else{
				matcam[7] = h
			}
		})
		inpm22.addEventListener('input',e=>{
			let h = cekNaN(
				+e.currentTarget.value,
				null,
			)
			if(h === null){return}
			if(nodedipilih){
				nodedipilih.matlok[8] = h
			}else{
				matcam[8] = h
			}
		})
		let tra = cla('tra')[0]
		poi(tra)
		eveges.tra = e=>{
			if(nodedipilih){
				m = nodedipilih.matlok
				m3.translate(m,m,[
					e.movementX*1.3,
					e.movementY*1.3,
				],)
			}else{
				m3.translate(matcam,matcam,[
					e.movementX*1.3,
					e.movementY*1.3,
				],)
			}
			updtrf()
		}
		let rot = cla('rot')[0]
		poi(rot)
		eveges.rot = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			m3.rotate(m,m,e.movementX/111,)
			updtrf()
		}
		let sca = cla('sca')[0]
		poi(sca)
		eveges.sca = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			let s = 2**(e.movementY/111)
			m3.scale(m,m,[s,s,],)
			updtrf()
		}
		let per = cla('per')[0]
		poi(per)
		eveges.per = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			m3.identity(mp0)
			mp0[2] -= e.movementX/33333
			mp0[5] -= e.movementY/33333
			m3.mul(m,m,mp0,)
			updtrf()
		}
		let trax = cla('trax')[0]
		poi(trax)
		eveges.trax = e=>{
			if(nodedipilih){
				m = nodedipilih.matlok
				m3.translate(m,m,[
					e.movementX*1.3,
					0,
				],)
			}else{
				m3.translate(matcam,matcam,[
					e.movementX*1.3,
					0,
				],)
			}
			updtrf()
		}
		let shex = cla('shex')[0]
		poi(shex)
		eveges.shex = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			m3.identity(mp0)
			mp0[3] += e.movementX/1111
			m3.mul(m,m,mp0,)
			updtrf()
		}
		let scax = cla('scax')[0]
		poi(scax)
		eveges.scax = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			let s = 2**(e.movementX/111)
			m3.scale(m,m,[s,1,],)
			updtrf()
		}
		let perx = cla('perx')[0]
		poi(perx)
		eveges.perx = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			m3.identity(mp0)
			mp0[2] -= e.movementX/33333
			//mp0[5] -= e.movementY/33333
			m3.mul(m,m,mp0,)
			updtrf()
		}
		let tray = cla('tray')[0]
		poi(tray)
		eveges.tray = e=>{
			if(nodedipilih){
				m = nodedipilih.matlok
				m3.translate(m,m,[
					0,
					e.movementY*1.3,
				],)
			}else{
				m3.translate(matcam,matcam,[
					0,
					e.movementY*1.3,
				],)
			}
			updtrf()
		}
		let shey = cla('shey')[0]
		poi(shey)
		eveges.shey = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			m3.identity(mp0)
			mp0[1] += e.movementY/1111
			m3.mul(m,m,mp0,)
			updtrf()
		}
		let scay = cla('scay')[0]
		poi(scay)
		eveges.scay = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			let s = 2**(e.movementY/111)
			m3.scale(m,m,[1,s,],)
			updtrf()
		}
		let pery = cla('pery')[0]
		poi(pery)
		eveges.pery = e=>{
			m = nodedipilih?nodedipilih.matlok:matcam
			m3.identity(mp0)
			//mp0[2] -= e.movementX/33333
			mp0[5] -= e.movementY/33333
			m3.mul(m,m,mp0,)
			updtrf()
		}
		let reset = cla('reset')[0]
		reset.addEventListener('click',e=>{
			m3.identity(nodedipilih?nodedipilih.matlok:matcam)
			updtrf()
		})
		inpname.addEventListener('input',e=>{
			if(!nodedipilih){return}
			nodedipilih.div_span.textContent = 
			nodedipilih.nama = e.currentTarget.value
			updnodeani()
		})
		inporder.addEventListener('input',e=>{
			if(nodedipilih){
				let h = cekNaN(
					+e.currentTarget.value,
					null,
				)
				if(h === null){return}
				nodedipilih.order = h
				urutkan(nodedipilih.parent)
			}
		})
		let f_sortur = (a,b,)=>a.order-b.order//sort urut
		urutkan = o=>{//childrennya ele diurutkan
			//group
			o.group.sort(f_sortur)
			
			let div = o.div_chi??hlmlist
			let txnode = o.txchi??hlmtextspan
			let aniref = o.anirefchi??reflist
			for(let vaA of o.group){
				//div_span
				div.appendChild(vaA.div)
				
				//txdata
				txnode.appendChild(vaA.txnode)
				
				//animasi
				aniref.appendChild(vaA.aniref)
			}
			return 0
			lih('-\n'+o.nama+' ===============')
			lih(o.group.map(aa=>aa.order))
			lih(o.group.map(aa=>aa.nama))
			lih(div.children)
		}
		let aniedit = cla('aniedit')[0]
		aniedit.addEventListener('click',e=>pindahhlm('htmlUI3'))
		let data = cla('data')[0]
		data.addEventListener('click',e=>pindahhlm('htmlUI1'))
		//new node
		let newnode = cla('newnode')[0]
		fclick_newnode = e=>{
			pilihnode(bikinnode(nodedipilih?.parent??null))
		}
		newnode.addEventListener('click',fclick_newnode,)
		f_copynode = e=>{
			if(!nodedipilih){return}
			let arrnode = [nodedipilih]
			let arrclone = [bikinnode(nodedipilih.parent)]
			
			for(let naA = 0;naA < arrnode.length;naA++){
				let node = arrnode[naA]
				let clone = arrclone[naA]
			
				//prop
				m3.copy(clone.matlok,node.matlok,)
				clone.nama = 
				clone.div_span.textContent = node.nama
				clone.fill = node.fill
				clone.stroke =
				clone.div_span.style.color = 
				clone.txdata.style.color = node.stroke
				clone.order = node.order
				clone.SHname = node.SHname
				clone.SHfill = node.SHfill
				clone.SHstroke = node.SHstroke
				clone.SHchildren = node.SHchildren
				clone.txdata.textContent = node.txdata.textContent
				
				//masukkan children ke array
				for(let naB in node.group){
					naB = +naB//ubah string jadi number
					let vaB = node.group[naB]
					arrnode.splice(naA+naB+1,0,vaB,)
					arrclone.splice(naA+naB+1,0,bikinnode(clone),)
				}
			}
			urutkan(nodedipilih.parent)
			pilihnode(arrclone[0])
			updnodeani()
		}
		let copynode = cla('copynode')[0]
		copynode.addEventListener('click',f_copynode,)
		//insert node
		let insertnode = cla('insertnode')[0]
		fclick_insertnode = e=>{
			if(
				!nodedipilih ||
				insertnodemenujuoff
			){return}
			let c = e.currentTarget.classList
			let s = 'insertnodechecked'
			
			c.add(s)
			cla('txselectgrid')[0].setAttribute('descr','mouseinserttogrid',)
		}
		insertnode.addEventListener('click',fclick_insertnode,)
		addEventListener('mousedown',e=>{
			insertnodemenujuoff = !!cla('insertnodechecked')[0]
			cla('insertnodechecked')[0]?.classList.remove('insertnodechecked')
			cla('txselectgrid')[0].setAttribute('descr','mousetxselectgrid',)
			
			//sampah tidak dipilih
			if(!sampahsiap){
				restore.setAttribute('descr','mouserestore',)
				cla('sampahdipilih')[0]?.classList.remove('sampahdipilih')
				sampah = null
			}
		},)
		nodemasukkenode = (node,tujuan,)=>{
			let gr = node.parent.group
			if(!lih(nodeadapar(
				tujuan = (tujuan === true)?grid:tujuan,
				node,
			))){
				if(gr.indexOf(node) >= 0){
					gr.splice(
						gr.indexOf(node),
						1,
					)
				}
				tujuan.group.push(node)
				
				let hlmlist = cla('hlmlist')[0]
				;((tujuan === grid)?hlmlist:tujuan.div_chi).
				appendChild(node.div)
				
				let hlmtextspan = cla('hlmtext')[0].firstElementChild
				;((tujuan === grid)?hlmtextspan:tujuan.txchi).
				appendChild(node.txnode)
				
				;((tujuan === grid)?reflist:tujuan.anirefchi).
				appendChild(node.aniref)
			}
			urutkan(tujuan)
		}
		inpfill.addEventListener('input',e=>{
			if(!nodedipilih){return}
			nodedipilih.fill = e.currentTarget.value
		})
		inpstroke.addEventListener('input',e=>{
			if(!nodedipilih){return}
			nodedipilih.stroke =
			nodedipilih.div_span.style.color = 
			nodedipilih.txdata.style.color = e.currentTarget.value
			updnodeani()
		})
		let deletenode = cla('deletenode')[0]
		fclick_deletenode = e=>{
			if(!nodedipilih){return}
			
			arrgb.push(nodedipilih)
			let tr = document.createElement('tr')
			let tdnama = document.createElement('td')
			let tdid = document.createElement('td')
			let tdpar = document.createElement('td')
			let tddata = document.createElement('td')
			gbtd.appendChild(tr)
			tr.appendChild(tdnama)
			tr.appendChild(tdid)
			tr.appendChild(tdpar)
			tr.appendChild(tddata)
			tr.style.color = nodedipilih.stroke
			tr.setAttribute('nodeid',nodedipilih.nodeid,)
			tr.addEventListener('click',pilihsampah,)
			tdnama.textContent = nodedipilih.nama
			tdid.textContent = nodedipilih.nodeid
			tdpar.textContent = nodedipilih.parent?.nama??'null'
			tddata.textContent = new Date()
			
			//node
			let g = nodedipilih.parent.group
			g.splice(
				g.indexOf(nodedipilih),
				1,
			)
			
			//hlmlist
			nodedipilih.div.remove()
			
			//hlmtext
			nodedipilih.txnode.remove()
			
			//ani
			nodedipilih.aniref.remove()
			/*
			for(let vaA of document.querySelectorAll(`
				.assinama[nodeid="${nodedipilih.nodeid}"],
				.matrix[nodeid="${nodedipilih.nodeid}"]
			 `)){
				vaA.click()
				ru.cla('identity')[0].click()
			}
			*/
			ru.iterobj(nodedipilih,'group',o=>{
				for(let vaA of document.querySelectorAll(`
					.assinama[nodeid="${o.nodeid}"],
					.matrix[nodeid="${o.nodeid}"]
				 `)){
					vaA.click()
					ru.cla('identity')[0].click()
				}
				return true
			},)
			
			tidakdipilih()
		}
		deletenode.addEventListener('dblclick',fclick_deletenode,)
		let gbtd = cla('gbtd')[0]
		namecheck.addEventListener('click',e=>{
			if(!nodedipilih){return}
			nodedipilih.SHname = !nodedipilih.SHname
			updlain()
		})
		fillcheck.addEventListener('click',e=>{
			if(!nodedipilih){return}
			nodedipilih.SHfill = !nodedipilih.SHfill
			updlain()
		})
		strokecheck.addEventListener('click',e=>{
			if(!nodedipilih){return}
			nodedipilih.SHstroke = !nodedipilih.SHstroke
			updlain()
		})
		let order = cla('order')[0]
		poi(order)
		eveges.order = e=>{
			if(!nodedipilih){return}
			nodedipilih.order += e.movementY/111
			urutkan(nodedipilih.parent)
			updlain()
		}
		childrencheck.addEventListener('click',e=>{
			if(!nodedipilih){return}
			nodedipilih.SHchildren = !nodedipilih.SHchildren
			updlain()
		})
		let nodetocam = cla('nodetocam')[0]
		nodetocam.addEventListener('click',e=>{
			if(!nodedipilih){return}
			let m = nodedipilih.matlok
			m3.invert(m,nodedipilih.parent.matglo,)
			m3.mul(m,m,matcam,)
			updtrf()
		})
		let camtonode = cla('camtonode')[0]
		camtonode.addEventListener('click',e=>{
			if(!nodedipilih){return}
			m3.copy(matcam,nodedipilih.matglo,)
			updtrf()
		})
		let open = cla('open')[0]
		open.addEventListener('click',e=>{
			bukafile.value = ''
			bukafile.click()
		})
		let bukafile = cla('bukafile')[0]
		bukafile.addEventListener('change',e=>{
			 bukafile.files[0].text().then(muatfile)
		},)
		let muatfile = src=>{
			inpopen.textContent = bukafile.files[0].name
			let json = JSON.parse(src)
			lih(json)
			
			inpsave.value = json.namasimpan
			inpexport.value = json.namaexport
			m3.copy(matcam,json.matcam,)
			
			//nodes
			let arr_node = []
			let arr_par = Array(json.nodes.length).fill(null)
			for(let naA in json.nodes){
				let nodesrc = json.nodes[naA = +naA]
				let node = bikinnode(arr_par[naA])
				arr_node.push(node)
				for(let vaB of nodesrc.children){
					if(arr_par[vaB] !== null){
						let err = 'error: recursive child/multiple parent'
						return alert(err)
					}
					arr_par[vaB] = node
				}
				
				//prop
				m3.copy(node.matlok,nodesrc.matlok,)
				node.nama = 
				node.div_span.textContent = nodesrc.name
				node.fill = nodesrc.fill
				node.stroke =
				node.div_span.style.color = 
				node.txdata.style.color = nodesrc.stroke
				node.order = nodesrc.order
				node.SHname = nodesrc.SHname
				node.SHfill = nodesrc.SHfill
				node.SHstroke = nodesrc.SHstroke
				node.SHchildren = nodesrc.SHchildren
				node.txdata.textContent = nodesrc.data
				updnodeani(node)
			}
			
			//ani
			labelvalue = json.label
			for(let assi of json.animasi){
				let assinama = bikinassi()
				anisetnode(arr_node[assi.node]?.anirefnama??cla(assi.node)[0],assinama,)
				
				for(let matrixsrc of assi.matrix){
					let matrix = bikinmatrix(assinama)
					anisetnode(arr_node[matrixsrc.node]?.anirefnama??cla(matrixsrc.node)[0],matrix,)
					matrix.setAttribute('opetex',
						que(`.operation [value="${matrixsrc.operasi}"]`)[0].getAttribute('opetex')
					,)
					let aniobj = carianiobj(matrix)
					aniobj.operasi	= matrixsrc.operasi
					aniobj.usechi	= matrixsrc.usechi
					aniobj.playing	= matrixsrc.playing
					aniobj.start	= matrixsrc.start
					aniobj.end	= matrixsrc.end
					aniobj.time	= matrixsrc.time
					aniobj.speed	= matrixsrc.speed
					aniobj.label	= matrixsrc.label
				}
			}
		}
		let save = cla('save')[0]
		save.addEventListener('click',e=>{
			let json = {
				namasimpan:inpsave.value,
				namaexport:inpexport.value,
				label:labelvalue,
				matcam:Array.from(matcam),
				animasi:[],
				nodes:[],	
			}
			let grid = global.children[0]
			let arrnode = Array.from(grid.children)
			let arrhasil = json.nodes = arrnode.map(savenode)
			let bubar = 1111
			for(let naA = 0;naA < arrnode.length;naA++){if(bubar-- < 0){alert('keBABLASen');break}
				let node = arrnode[naA]
				let nodeh = arrhasil[naA]
				let nodechi = node.children
				let nodehchi = nodeh.children
				
				nodeh._idxini_ = naA
				
				for(let naB in nodechi){
					let chi = nodechi[naB = +naB]
					let chih = savenode(chi)
					let idx = naA+ +naB+1
					arrnode.splice(idx,0,chi,)
					arrhasil.splice(idx,0,chih,)
					nodehchi.push(chih)
				}
			}
			//ubah children jadi idx
			for(let nodeh of arrhasil){
				let arr = nodeh.children
				for(let naA in arr){
					let i = arr[naA]._idxini_
					arr[naA]._idxini_ += '_segera_dHapus_'
					arr[naA] = i
				}//sampe sini
			}
			
			//animasi
			for(let vaA of arr_assinama){
				let assinamah = {
					node:nodeidxsave(vaA,arrnode,),
					matrix:[],
				}
				json.animasi.push(assinamah)
				
				for(let vaB of vaA.matrix){
					let o = {
						node	:nodeidxsave(vaB,arrnode,),
						operasi	:vaB.operasi	,
						usechi	:vaB.usechi	,
						playing	:vaB.playing	,
						start	:vaB.start	,
						end	:vaB.end	,
						time	:vaB.time	,
						speed	:vaB.speed	,
						label	:vaB.label	,
					}
					assinamah.matrix.push(o)
				}
			}
			//lih(arr_assinama)
			//lih(arrnode)
			//lih(arrhasil)
			lih(json)
			simpanfile(JSON.stringify(json,null,'\t',),'text/json',inpsave.value,)
			return 0
		})
		let savenode = node=>({
			name:node.nama,
			children:[],
			matlok:Array.from(node.matlok),
			fill:node.fill,
			stroke:node.stroke,
			SHchildren:node.SHchildren,
			SHstroke:node.SHstroke,
			SHfill:node.SHfill,
			SHname:node.SHname,
			order:node.order,
			data:node.txdata.textContent,
		})
		let nodeidxsave = (aniobj,arrnode,)=>{
			if(aniobj.node === matcam){
				return 'camera'
			}
			for(let idx in arrnode){
				if(aniobj.node === arrnode[idx = +idx]){
					return idx
				}
			}
			return 'identity'
		}
		let exporttt = cla('export')[0]
		exporttt.addEventListener('click',e=>{
			let h = ''
			for(let vaA of document.querySelectorAll('.hlmtext > span > span')){
				h += vaA.textContent
			}
			ru.lihat(h)
			simpanfile(
				h,
				'',
				inpexport.value,
			)
		})
		let inpopen = cla('inpopen')[0]
		let inpsave = cla('inpsave')[0]
		let inpexport = cla('inpexport')[0]
	}
	let htmlUI3 = cla('htmlUI3')[0]
	htmlUI3.addEventListener('click',e=>{adaaniklik = true})
	
	let updani = ()=>{
		let anidipilih = cla('anidipilih')[0]
		labelcheck.classList.remove('checked')
		
		//ref
		ref.textContent = anidipilih.textContent
		ref.style.color = anidipilih.style.color
		if(!(operation.disabled = anidipilih.classList.contains('assinama'))){
			let aniobj = carianiobj(anidipilih)
			operation.value = aniobj.operasi
			anichildren.classList.remove('eledisabled')
			anichildren.classList[aniobj.usechi?'add':'remove']('checked')
			let ar = aniobj.usechi?'remove':'add'
			timereset.classList[ar]('eledisabled')
			play.classList[ar]('eledisabled')
			play.classList[aniobj.playing?'add':'remove']('checked')
			pause.classList[ar]('eledisabled')
			pause.classList[aniobj.playing?'remove':'add']('checked')
			time.classList[ar]('eledisabled')
			speed.classList[ar]('eledisabled')
			inplabel.value = aniobj.label
			inpstart.value = aniobj.start
			inpend.value = aniobj.end
			inptime.value = aniobj.time
			inpspeed.value = aniobj.speed
		}
	}
	let updnodeani = node=>{
		node = node || nodedipilih
		node.anirefnama.textContent = node.nama+'#'+node.nodeid
		node.anirefnama.style.color = node.stroke
		for(let ani of document.querySelectorAll(`
			.matrixlist .assinama[nodeid="${node.nodeid}"],
			.matrixlist .matrix[nodeid="${node.nodeid}"]
		`)){
			ani.textContent = node.anirefnama.textContent
			ani.style.color = node.anirefnama.style.color
		}
	}
	let animenu = cla('animenu')[0]
	addEventListener('click',e=>{
		if(adaaniklik){
			adaaniklik = false
		}else{
			anitidakdipilih()
		}
		
		if(refdiklik){
			refdiklik = false
		}else{
			animenu.classList.remove('hilang')
			reflist.classList.add('hilang')
		}
	})
	let adaaniklik = false
	let refdiklik = false
	let anitidakdipilih = ()=>{
		cla('anidipilih')[0]?.classList.remove('anidipilih')
		cla('assibg')[0]?.classList.remove('assibg')
		cla('matrixlist')[0].appendChild(newmatrix)
		newmatrix.classList.add('hilang')
		
		ref.textContent =
		ref.style.color = ''
		operation.disabled = true
		anichildren.classList.add('eledisabled')
		timereset.classList.add('eledisabled')
		play.classList.add('eledisabled')
		pause.classList.add('eledisabled')
		time.classList.add('eledisabled')
		speed.classList.add('eledisabled')
		labelcheck.classList.remove('checked')
		inplabel.value =
		inpstart.value =
		inpend.value =
		inptime.value =
		inpspeed.value = ''
		
	}
	let arr_assinama = rk.arr_assinama = []
	let carianiobj = ele=>{
		for(let vaA of arr_assinama){
			if(vaA.ele === ele){
				return vaA
			}
			for(let vaB of vaA.matrix){
				if(vaB.ele === ele){
					return vaB
				}
				
			}
		}
		return null
	}
	let chilerp = (matikut,node,time,)=>{
		let group = node.group
		if(!group.length){
			m3.copy(matikut,node.matlok,)
		}else
		if(
			(group.length === 1) ||
			(time < group[0].order)
		){
			m3.copy(matikut,group[0].matlok,)
		}else
		if(group[group.length-1].order < time){
			m3.copy(matikut,group[group.length-1].matlok,)
		}else{
			let t = time-group[0].order//time
			let oe = group[group.length-1].order-group[0].order//order
			let idx = oe?
				Math.min(
					Math.floor(t/oe*group.length),
					group.length-1,
				)
			:0
			
			let batas = 1111
			while(true){if(batas-- < 0){throw 'keBABLASen'}
				if(time === group[idx].order){
					m3.copy(matikut,group[idx].matlok,)
					break
				}
				if(time < group[idx].order){
					idx--
					continue
				}
				if(time === group[idx+1].order){
					m3.copy(matikut,group[idx+1].matlok,)
					break
				}
				if(group[idx+1].order < time){
					idx++
					continue
				}
				let w =
				(time-group[idx].order)/
				(group[idx+1].order-group[idx].order)
				m3mix(
					matikut,
					group[idx].matlok,
					group[idx+1].matlok,
					w,
				)
				break
			}
		}
	}
	let itermatrixlabel = (f,prop,)=>{
		let labellist = inplabel.value.split(' ')
		for(let assinama of arr_assinama){
			for(let matrix of assinama.matrix){
				let mll = matrix.label.split(' ')//matrix label list
				for(let label of labellist){
					if(mll.includes(label)){
						f(matrix,prop,)
						break
					}
				}
			}
		}
	}
	//string ke angka
	let ska = a=>(a === '')?NaN:+a
		let close3 = cla('close')[2]
		close3.addEventListener('click',e=>pindahhlm('htmlUI0baaru'))
		let deleteani = cla('deleteani')[0]
		deleteani.addEventListener('dblclick',e=>{
			lih('mengHapus:')
			let anidipilih = lih(cla('anidipilih')[0])
			for(let naA in arr_assinama){
				let vaA = arr_assinama[naA = +naA]
				if(vaA.ele === anidipilih){
					anidipilih.parentElement.remove()
					anitidakdipilih()
					return arr_assinama.splice(naA,1,)
				}
				for(let naB in vaA.matrix){
					let vaB = vaA.matrix[naB = +naB]
					if(vaB.ele === anidipilih){
						anidipilih.remove()
						anitidakdipilih()
						return vaA.matrix.splice(naB,1,)
					}
				}
			}
		},)
		let ref = cla('ref')[0]
		ref.addEventListener('click',e=>{
			if(!cla('anidipilih')[0]){return}
			animenu.classList.add('hilang')
			reflist.classList.remove('hilang')
			refdiklik = true
		},)
		refdiklik = false
		let operation = cla('operation')[0]
		operation.addEventListener('input',e=>{
			let anidipilih = cla('anidipilih')[0]
			let cur = e.currentTarget
			carianiobj(anidipilih).operasi = cur.value
			anidipilih.setAttribute('opetex',
				cur.querySelector(`[value="${cur.value}"]`).getAttribute('opetex')
			,)
		},)
		let inpstart = cla('inpstart')[0]
		inpstart.addEventListener('input',e=>{
			let hasil = ska(e.currentTarget.value)
			if(!cla('anidipilih')[0] || isNaN(hasil)){return}
			carianiobj(cla('anidipilih')[0]).start = hasil
		},)
		let inpend = cla('inpend')[0]
		inpend.addEventListener('input',e=>{
			let hasil = ska(e.currentTarget.value)
			if(!cla('anidipilih')[0] || isNaN(hasil)){return}
			carianiobj(cla('anidipilih')[0]).end = hasil
		},)
		let inptime = cla('inptime')[0]
		inptime.addEventListener('input',e=>{
			let hasil = ska(e.currentTarget.value)
			if(!cla('anidipilih')[0] || isNaN(hasil)){return}
			carianiobj(cla('anidipilih')[0]).time = hasil
		},)
		let inpspeed = cla('inpspeed')[0]
		inpspeed.addEventListener('input',e=>{
			let hasil = ska(e.currentTarget.value)
			if(!cla('anidipilih')[0] || isNaN(hasil)){return}
			carianiobj(cla('anidipilih')[0]).speed = hasil
		},)
		let play = cla('play')[0]
		play.addEventListener('click',e=>{
			if(labelcheck.classList.contains('checked')){
				itermatrixlabel(f_labelplay,null,)
				return
			}
			
			//
			let aniobj = carianiobj(cla('anidipilih')[0])
			if(
				!aniobj ||
				!aniobj.hasOwnProperty('playing')
			){return}
			aniobj.playing = true
			updani()
		},)
		let f_labelplay = (matrix,prop,)=>{
			matrix.playing = true
		}
		let pause = cla('pause')[0]
		pause.addEventListener('click',e=>{
			if(labelcheck.classList.contains('checked')){
				itermatrixlabel(f_labelpause,null,)
				return
			}
			
			//
			let aniobj = carianiobj(cla('anidipilih')[0])
			if(
				!aniobj ||
				!aniobj.hasOwnProperty('playing')
			){return}
			aniobj.playing = false
			updani()
		},)
		let f_labelpause = (matrix,prop,)=>{
			matrix.playing = false
		}
		let time = cla('time')[0]
		poi(time)
		eveges.time = e=>{
			let mov = e.movementX/55
			if(labelcheck.classList.contains('checked')){
				itermatrixlabel(f_labeltime,mov,)
				return
			}
			
			//
			let aniobj = carianiobj(cla('anidipilih')[0])
			if(
				!aniobj ||
				!aniobj.hasOwnProperty('playing')
			){return}
			inptime.value = (aniobj.time += mov*aniobj.speed)
		}
		let f_labeltime = (matrix,mov,)=>{
			matrix.time += mov*matrix.speed
		}
		let reflist = cla('reflist')[0]
			let f_anirefnamaklik = e=>{
				anisetnode(e.currentTarget,cla('anidipilih')[0],)
				updani()
			}
			let anisetnode = (anirefnama,anidipilih,)=>{
				if(!anidipilih){return}
				let attid = anirefnama.getAttribute('nodeid')
				anidipilih.setAttribute('nodeid',attid,)
				anidipilih.textContent = anirefnama.textContent
				anidipilih.style.color = anirefnama.style.color
				let aniobj = carianiobj(anidipilih)
				if(attid === 'camera'){
					aniobj.node = matcam
					return
				}
				let node = aniobj.node = carinode(anidipilih)
				if(node?.group.length){
					let group = node.group
					aniobj.start = group[0].order
					aniobj.end = group[group.length-1].order
				}
			}
			cla('identity')[0].addEventListener('click',f_anirefnamaklik,)
			cla('camera')[0].addEventListener('click',f_anirefnamaklik,)
		let anichildren = cla('anichildren')[0]
		anichildren.addEventListener('click',e=>{
			let aniobj = carianiobj(cla('anidipilih')[0])
			if(!aniobj){return}
			aniobj.usechi = !aniobj.usechi
			updani()
		},)
		let matrixlist = cla('matrixlist')[0]
			let newassignment = cla('newassignment')[0]
			newassignment.addEventListener('click',e=>{
				f_pilihassinama({currentTarget:bikinassi()})
			},)
			let bikinassi = ()=>{
				let assi = document.createElement('div')
				cla('matrixlist')[0].insertBefore(assi,newassignment,)
				assi.classList.add('assi')
				
					let assinama = document.createElement('span')
					assi.appendChild(assinama)
					assinama.classList.add('assinama')
					assinama.textContent = cla('identity')[0].textContent
					assinama.setAttribute('nodeid','identity',)
					assinama.addEventListener('click',f_pilihassinama,)
					arr_assinama.push({
						ele:assinama,
						node:null,
						matrix:[],
					})
					
					assi.append('=')
					
					let assimatrix = document.createElement('span')
					assi.appendChild(assimatrix)
					assimatrix.classList.add('assimatrix')
				
				return assinama
			}
			let f_pilihassi = e=>{
				let assi = e.currentTarget
				cla('assibg')[0]?.classList.remove('assibg')
				assi.classList.add('assibg')
				assi.appendChild(newmatrix)
				newmatrix.classList.remove('hilang')
			}
				let f_pilihassinama = e=>{
					anitidakdipilih()
					let assinama = e.currentTarget
					assinama.classList.add('anidipilih')
					f_pilihassi({currentTarget:assinama.parentElement})
					updani()
				}
				let f_pilihmatrix = e=>{
					anitidakdipilih()
					let assimatrix = e.currentTarget
					assimatrix.classList.add('anidipilih')
					f_pilihassi({currentTarget:
						assimatrix.
						parentElement.
						parentElement
					})
					updani()
				}
				let newmatrix = cla('newmatrix')[0]
				newmatrix.addEventListener('click',e=>{
					f_pilihmatrix({currentTarget:bikinmatrix(cla('assibg')[0].firstElementChild)})
				},)
				let bikinmatrix = assinama=>{
					let matrix = document.createElement('span')
					let assimatrix = assinama.parentElement.querySelector('.assimatrix')
					assimatrix.appendChild(matrix,)
					matrix.classList.add('matrix')
					matrix.textContent = cla('identity')[0].textContent
					matrix.setAttribute('nodeid','identity',)
					matrix.setAttribute('opetex','',)
					matrix.addEventListener('click',f_pilihmatrix,)
					carianiobj(assinama).matrix.push({
						ele:matrix,
						node:null,
						label:'mylabel',
						operasi:'none',
						usechi:false,
						playing:false,
						start:0,
						end:0,
						time:0,
						speed:1,
					})
					return matrix
				}
		let inplabel = cla('inplabel')[0]
		inplabel.addEventListener('input',e=>{
			let anidipilih = cla('anidipilih')[0]
			let val = e.currentTarget.value
			if(anidipilih){
				carianiobj(anidipilih).label = val
			}else if(labelcheck.classList.contains('checked')){
				labelvalue = val
			}
		},)
		let labelcheck = cla('labelcheck')[0]
		labelcheck.addEventListener('click',e=>{
			let c = e.currentTarget.classList
			let s = 'checked'
			let v = c.contains(s)//saat checked
			
			anitidakdipilih()
			if(!v){
				c.add(s)
				timereset.classList.remove('eledisabled')
				play.classList.remove('eledisabled')
				pause.classList.remove('eledisabled')
				time.classList.remove('eledisabled')
				speed.classList.remove('eledisabled')
				
				play.classList.remove('checked')
				pause.classList.remove('checked')
				//time.classList.remove('checked')
				
				inplabel.value = labelvalue
			}
		},)
		let labelvalue = 'mylabel anotherlabel'
		let timereset = cla('timereset')[0]
		timereset.addEventListener('click',e=>{
			if(labelcheck.classList.contains('checked')){
				itermatrixlabel(f_timereset,null,)
				return
			}
			
			//
			let aniobj = carianiobj(cla('anidipilih')[0])
			if(!aniobj){return}
			aniobj.time = 0
			updani()
		},)
		let f_timereset = (matrix,prop,)=>{
			matrix.time = 0
		}
		let speed = cla('speed')[0]
		poi(speed)
		eveges.speed = e=>{
			let mov = e.movementX/55
			if(labelcheck.classList.contains('checked')){
				itermatrixlabel(f_labelspeed,mov,)
				return
			}
			
			//
			let aniobj = carianiobj(cla('anidipilih')[0])
			if(
				!aniobj ||
				!aniobj.hasOwnProperty('playing')
			){return}
			inpspeed.value = (aniobj.speed += mov)
		}
		let f_labelspeed = (matrix,mov,)=>{
			matrix.speed += mov
		}
	let mousetext = cla('mousetext')[0]
	addEventListener('mousemove',e=>{
		mousetext.style.left = (e.clientX+22)+'px'
		mousetext.style.top = (e.clientY+22)+'px'
		cla('mousetextmuncul')[0]?.classList.remove('mousetextmuncul')
		cla(e.target.getAttribute('descr'))[0]?.classList.add('mousetextmuncul')
	})
	let carinode = rk.carinode = ele=>{
		let arrcari = [grid]
		for(let naA = 0;naA < arrcari.length;naA++){
			let vaA = arrcari[naA]//node
			
			//cek
			if(+(ele.getAttribute('nodeid')??-1) === +vaA.nodeid){
				return vaA
			}
			//sudah cek
			
			for(let naB in vaA.children){
				let vaB = vaA.children[naB = +naB]
				arrcari.splice(naA+naB+1,0,vaB,)
			}
		}
		return null
	}
	let hlmlist = cla('hlmlist')[0]
	let hlmtext = cla('hlmtext')[0]
	let f_hlmlisthlmtext = e=>{
		if(
			(e.target === e.currentTarget) &&
			!cla('diedit')[0]
		){
			tidakdipilih()
		}
	}
	hlmlist.addEventListener('mousedown',f_hlmlisthlmtext,)
	hlmtext.addEventListener('mousedown',f_hlmlisthlmtext,)
		let close1 = cla('close')[0]
		close1.addEventListener('click',e=>{
			pindahhlm('htmlUI0baaru')
		})
		let done = cla('done')[0]
		done.addEventListener('click',e => {
			editnama.classList.add('hilang')
			editdata.classList.add('hilang')
			hlmtextspan.appendChild(editdata)
			hlmlist.appendChild(editnama)
			cla('diedit')[0]?.classList.remove('diedit')
			nodedipilih.div_span.classList.remove('hilang')
			
			//menu
			for(let vaA of cla('tombolbaaru')[0].children){
				vaA.classList.remove('hilang')
			}
			cla('done')[0].classList.add('hilang')
		})
		let txselectgrid = cla('txselectgrid')[0]
		txselectgrid.addEventListener('mousedown',tidakdipilih,)
		let txnewnode = cla('txnewnode')[0]
		txnewnode.addEventListener('click',fclick_newnode,)
		let txcopynode = cla('txcopynode')[0]
		txcopynode.addEventListener('click',f_copynode,)
		let txinsertnode = cla('txinsertnode')[0]
		txinsertnode.addEventListener('click',fclick_insertnode,)
		let txdeletenode = cla('txdeletenode')[0]
		txdeletenode.addEventListener('dblclick',fclick_deletenode,)
		let txeditnode = cla('txeditnode')[0]
		txeditnode.addEventListener('click',e=>nodedipilih?edit():0,)
		edit = ()=>{
			for(let vaA of cla('tombolbaaru')[0].children){
				vaA.classList.add('hilang')
			}
			cla('done')[0].classList.remove('hilang')
			cla('diedit')[0]?.classList.remove('diedit')
			
			//editdata
			let txdata = nodedipilih.txdata
			txdata.classList.add('diedit')
			txdata.insertAdjacentElement('afterend',editdata,)
			editdata.value = txdata.textContent
			editdata.style.color = txdata.style.color
			editdata.classList.remove('hilang')
			resize_editdata()
			
			//editnama
			let div_span = nodedipilih.div_span
			div_span.classList.add('hilang')
			div_span.insertAdjacentElement('afterend',editnama,)
			editnama.value = nodedipilih.nama
			editnama.style.color = div_span.style.color
			editnama.classList.remove('hilang')
			resize_editnama()
		}
		let txorder = cla('txorder')[0]
		poi(txorder)
		eveges.txorder = e=>{
			if(!nodedipilih){return}
			eveges.order(e)
			nodedipilih.div_span.textContent = nodedipilih.order.toFixed(5)
		}
		txorder.addEventListener('mousedown',e=>{
			if(!nodedipilih){return}
			for(let vaA of nodedipilih.parent.group){
				vaA.div_span.textContent = vaA.order.toFixed(5)
			}
		},)
		addEventListener('mouseup',e=>{
			if(!nodedipilih){return}
			for(let vaA of nodedipilih.parent.group){
				vaA.div_span.textContent = vaA.nama
			}
		},)
		let txgarbage = cla('txgarbage')[0]
		txgarbage.addEventListener('click',e=>pindahhlm('htmlUI2'),)
		let editnama = cla('editnama')[0]
		let resize_editnama = e=>{
			editnama.style.width = '0px'
			editnama.style.width = editnama.scrollWidth+'px'
			
			if(nodedipilih){
				nodedipilih.div_span.textContent = 
				nodedipilih.nama = editnama.value
				updlain()
				updnodeani()
			}
		}
		editnama.addEventListener('input',resize_editnama,)
		editnama.addEventListener('change',resize_editnama,)
		let resize_editdata = e=>{
			editdata.style.width = '0px'
			editdata.style.height = '0px'
			editdata.style.width = editdata.scrollWidth+'px'
			editdata.style.height = editdata.scrollHeight+'px'
			editdata.blur()
			editdata.focus()
			
			//textcontent di span
			let diedit = cla('diedit')[0]
			if(diedit){
				diedit.textContent = editdata.value
			}
		}
		let f_editdata = e=>{
			if(e?.key !== 'Tab'){return}
			e.preventDefault()
			let ini = e.currentTarget
			let start = ini.selectionStart;
			let end = ini.selectionEnd;
			
			ini.value = ini.value.substring(0, start) + "\t" + ini.value.substring(end);
			ini.selectionStart = ini.selectionEnd = start + 1;
			resize_editdata()
		}
		let editdata = cla('editdata')[0]
		editdata.addEventListener('input',resize_editdata,)
		editdata.addEventListener('change',resize_editdata,)
		editdata.addEventListener('keydown',f_editdata,)
		let close2 = cla('close')[1]
		close2.addEventListener('click',e=>pindahhlm('htmlUI1'))
		let restore = cla('restore')[0]
		restore.addEventListener('mousedown',e=>{
			if(!sampah){return}
			sampahsiap = true
		})
		restore.addEventListener('click',e=>{
			sampahsiap = false
			if(
				!sampah ||
				(restore.getAttribute('descr',) === 'mouseparentterhapus')
			){return}
			
			nodemasukkenode(sampah,sampah.parent,)
			sahi()
		})
		let sahi = ()=>{//sampah hilang
			arrgb.splice(arrgb.indexOf(sampah),1,)
			cla('sampahdipilih')[0].remove()
			pilihnode(sampah)
			sampah = null
		}
		let inserttogrid = cla('inserttogrid')[0]
		inserttogrid.addEventListener('mousedown',e=>{
			if(!sampah){return}
			sampahsiap = true
		})
		inserttogrid.addEventListener('click',e=>{
			if(!sampah){return}
			sampahsiap = false
			
			nodemasukkenode(sampah,grid,)
			sahi()
		})
		pilihsampah = e=>{
			let cur = e.currentTarget
			cur.classList.add('sampahdipilih')
			//pilih sampah
			for(let vaA of arrgb){
				if(vaA.nodeid === +(
					cur.getAttribute('nodeid')??-1
				)){
					sampah = vaA
					break
				}
			}
			
			//lihat ancestornya
			let anc = sampah
			let bubar = 111
			let sudah = false
			while((anc = anc.parent) !== grid){ if(bubar-- < 0){throw 'keBABLASen'}
				lih(anc)
				for(let vaA of arrgb){
					if(vaA === anc){
						lih(`ancestor ${anc.nama}#${anc.nodeid} terhapus`)
						restore.setAttribute('descr','mouseparentterhapus',)
						sudah = true
						return
					}
				}
				if(sudah){break}
			}
			//
			return 0
			lih('\npilihsampah:')
			lih(cur)
			lih(sampah)
		}
	let nodedipilih = null
	let gridfill = 'blue'
	let gridstroke = 'cyan'
	let gridSHname = true
	let gridSHaxis = true
	let gridSHchildren = true
	let gridSHfill = true
	let gridSHstroke = true
	let arrkosong = []//harus kosong
	
	let vp0 = v3.create()//vector pinjam
	let vp1 = v3.create()//vector pinjam
	let vp2 = v3.create()//vector pinjam
	let fipos = (matview,x,y,w,)=>{//final position
		v3.set(vp0,x,y,w,)
		v3.transformMat3(vp0,vp0,matview,)
		vp0[0] = vp0[0]/vp0[2]+canv.width/2
		vp0[1] = vp0[1]/vp0[2]+canv.height/2
		vp0[2] = 1
		return vp0
	}
	let global//INGAT!! ini jadi objek global
	rk.global = global = bikinobj('global',
		(e,o,dt,)=>{
			switch(e){
				case 'hitung0':
				break
			}
		},
	)
		let grid = bikinobj('grid',
			(e,o,dt,)=>{
				switch(e){
					case 'hitung0':
						//
						//run animasi
						//===============
						
		for(let assinama of arr_assinama){
			//assinama.ele.getAttribute('nodeid') !== 'identity'
			if(assinama.node){//berupa (objek node, matcam,)
				m3.identity(mp0)
				for(let matrix of assinama.matrix){
					let node = matrix.node//berupa (objek node, null, matcam,)
					if(node === matcam){
						m3.copy(mp1,matcam,)
					}else if(node && matrix.usechi){
						if(matrix.playing){
							matrix.time += dt*matrix.speed/1000
							//update inptime,
							if(cla('anidipilih')[0] === matrix.ele){
								inptime.value = matrix.time
							}
						}
						chilerp(
							mp1,
							node,
							ru.mod(
								-matrix.start+matrix.time,
								-matrix.start+matrix.end,
							)+matrix.start,
						)
					}else{//node berupa (objek node, null,)
						m3.copy(mp1,node?.matlok??matide,)
					}
					switch(matrix.operasi){
						case 'invert':
						case 'transpose':
							m3[matrix.operasi](mp1,mp1,)
						break
					}
					m3.mul(mp0,mp0,mp1)
				}
				if(assinama.matrix.length){
					let node = assinama.node
					//matcam saat ani nodeid = -2
					m3.copy(node?.matlok??matcam,mp0,)
					if(
						(nodedipilih === matcam) ||
						(nodedipilih === node)
					){
						updtrf()
					}
				}
			}
		}
						
						//===============
						//
						//
					break
					case 'tampil':
						cx.lineWidth = 1.2
						cx.strokeStyle = '#445544'
						cx.beginPath()
						//cx.stroke(o.bentuklama)
						for(let naA = 0;naA < 10;naA++){
							let j = 100//jarak antar garis
							let u = 1000//panjang garis, jarak ujung ke ujung
							//kanan			
							cx.moveTo(...fipos(o.matview,naA*j	,-u	,1,))
							cx.lineTo(...fipos(o.matview,naA*j	,u	,1,))
							//kiri			
							cx.moveTo(...fipos(o.matview,-naA*j	,-u	,1,))
							cx.lineTo(...fipos(o.matview,-naA*j	,u	,1,))
							//atas			
							cx.moveTo(...fipos(o.matview,-u	,-naA*j	,1,))
							cx.lineTo(...fipos(o.matview,u	,-naA*j	,1,))
							//bawah			
							cx.moveTo(...fipos(o.matview,-u	,naA*j	,1,))
							cx.lineTo(...fipos(o.matview,u	,naA*j	,1,))
						}
						cx.stroke()
						cx.lineWidth = 2
						cx.strokeStyle = 'red'
						cx.beginPath()
						cx.moveTo(...fipos(o.matview,-10000	,0	,1,))
						cx.lineTo(...fipos(o.matview,10000	,0	,1,))
						cx.stroke()
						cx.strokeStyle = '#00ff00'
						cx.beginPath()
						cx.moveTo(...fipos(o.matview,0	,-10000	,1,))
						cx.lineTo(...fipos(o.matview,0	,10000	,1,))
						cx.stroke()
					break
				}
			},
		)
		grid.group = grid.children
		grid.bentuklama = new Path2D()
		for(let naA = 0;naA < 10;naA++){
			let p = grid.bentuklama
			let j = 1000//jarak antar garis
			let u = 10000//panjang garis, jarak ujung ke ujung
			//kanan
			p.moveTo(naA*j,-u,)
			p.lineTo(naA*j,u,)
			//kiri
			p.moveTo(-naA*j,-u,)
			p.lineTo(-naA*j,u,)
			//atas
			p.moveTo(-u,-naA*j,)
			p.lineTo(u,-naA*j,)
			//bawah
			p.moveTo(-u,naA*j,)
			p.lineTo(u,naA*j,)
		}
		let UI = bikinobj('UI',
			(e,o,dt,)=>{
				switch(e){
					case 'hitung0':
						let m = o.matlok
						m3.copy(m,matcam,)
					break
				}
			},
		)
			let border = bikinobj('border',(e,o,dt,)=>{
				switch(e){
					case 'tampil':
						cx.fillStyle = '#00ff00'
						cx.strokeStyle = '#00ffff'
						cx.lineWidth = 3
						cx.font = '22px Consolas'
						cx.beginPath()
						cx.moveTo(...fipos(o.matview,-rkp/2	,-rkt/2	,1,))
						cx.lineTo(...fipos(o.matview,rkp/2	,-rkt/2	,1,))
						cx.lineTo(...fipos(o.matview,rkp/2	,rkt/2	,1,))
						cx.lineTo(...fipos(o.matview,-rkp/2	,rkt/2	,1,))
						cx.closePath()
						cx.stroke()
					break
				}
			},)
			let mousepos = bikinobj('mousepos',(e,o,dt,)=>{
				switch(e){
					case 'hitung0':
						//watch && m3.copy(matcam,watch.matglo,)
						m3.translate(o.matlok,matide,vecmouse,)
					break
					case 'tampil':
						cx.strokeStyle = '#66ff66'
						cx.lineWidth = 1.37
						cx.beginPath()
						cx.moveTo(...fipos(o.matview,-1	,-1	,1,))
						cx.lineTo(...fipos(o.matview,1	,-1	,1,))
						cx.lineTo(...fipos(o.matview,1	,1	,1,))
						cx.lineTo(...fipos(o.matview,-1	,1	,1,))
						cx.closePath()
						cx.stroke()
					break
				}
			},)
	let fnode = (e,o,dt,)=>{
		let m
		let pos
		switch(e){
			case 'hitung0':
				let SHini = 
				(o.parent === grid) || (
					o.parent.SH &&
					o.parent.SHchildren
				)
				if(o.SH !== SHini){
					(o.SH = SHini)?
						m3.copy(o.hoverbox,hoverboxsize,)
					:
						m3.scale(o.hoverbox,o.hoverbox,[0,0,],)
					
				}
				
				//data di text editor
				if(o.div_span.getAttribute('mouhov') === 'datang'){
					o.div_span.style.background =
					o.txnode.style.background = acakwarnahover()
					o.txdata.style.outline = '2px dashed white'
				}else if(o.div_span.style.background){
					o.div_span.style.background =
					o.txnode.style.background =
					o.txdata.style.outline = ''
				}
			break
			case 'tampil':
				if(o.SH){//lihat SHchildren nya parent
					//fill & stroke
					if(o.SHfill || o.SHstroke){cx.save()
						cx.fillStyle = o.fill
						cx.strokeStyle = o.stroke
						cx.lineWidth = 3
						cx.beginPath()
						let move = true
						for(let vaA of o.group){
							pos = fipos(vaA.matview,0,0,1,)
							if(move){
								move = false
								cx.moveTo(pos[0],pos[1],)
							}else{
								cx.lineTo(pos[0],pos[1],)
							}
						}
						
						;o.SHfill && cx.fill()
						;o.SHstroke && cx.stroke()
					cx.restore()}
					
					//show name
					if(o.SHname){cx.save()
						pos = Array.from(fipos(o.matview,0,0,1,))
						let xaxis = Array.from(fipos(o.matview,1,0,1,))
						let yaxis = Array.from(fipos(o.matview,0,1,1,))
						
						cx.setTransform(
							xaxis[0]-pos[0],xaxis[1]-pos[1],
							yaxis[0]-pos[0],yaxis[1]-pos[1],
							pos[0],pos[1],
						)
						cx.font = '22px Consolas'
						cx.fillStyle = o.stroke
						cx.fillText(o.nama,0,-8,)
					cx.restore()}
					
					//hoverbox
					if(hov0 === o){
						cx.save()
						cx.fillStyle = warnahover
						cx.beginPath()
						let size = hoverboxsize[0]
						cx.moveTo(...fipos(o.matview,-size	,-size	,1,))
						cx.lineTo(...fipos(o.matview,size	,-size	,1,))
						cx.lineTo(...fipos(o.matview,size	,size	,1,))
						cx.lineTo(...fipos(o.matview,-size	,size	,1,))
						cx.fill()
					}
				}
				
				if(nodedipilih === o){
					//grid kecil
					cx.lineWidth = .87
					cx.strokeStyle = 'white'
					cx.beginPath()
					cx.moveTo(...fipos(o.matview,-15	,-15	,1,));cx.lineTo(...fipos(o.matview,15	,-15	,1,))
					cx.moveTo(...fipos(o.matview,-15	,-10	,1,));cx.lineTo(...fipos(o.matview,15	,-10	,1,))
					cx.moveTo(...fipos(o.matview,-15	,-5	,1,));cx.lineTo(...fipos(o.matview,15	,-5	,1,))
					cx.moveTo(...fipos(o.matview,-15	,0	,1,));cx.lineTo(...fipos(o.matview,15	,0	,1,))
					cx.moveTo(...fipos(o.matview,-15	,5	,1,));cx.lineTo(...fipos(o.matview,15	,5	,1,))
					cx.moveTo(...fipos(o.matview,-15	,10	,1,));cx.lineTo(...fipos(o.matview,15	,10	,1,))
					cx.moveTo(...fipos(o.matview,-15	,15	,1,));cx.lineTo(...fipos(o.matview,15	,15	,1,))
					
					cx.moveTo(...fipos(o.matview,-15	,-15	,1,));cx.lineTo(...fipos(o.matview,-15	,15	,1,))
					cx.moveTo(...fipos(o.matview,-10	,-15	,1,));cx.lineTo(...fipos(o.matview,-10	,15	,1,))
					cx.moveTo(...fipos(o.matview,-5	,-15	,1,));cx.lineTo(...fipos(o.matview,-5	,15	,1,))
					cx.moveTo(...fipos(o.matview,0	,-15	,1,));cx.lineTo(...fipos(o.matview,0	,15	,1,))
					cx.moveTo(...fipos(o.matview,5	,-15	,1,));cx.lineTo(...fipos(o.matview,5	,15	,1,))
					cx.moveTo(...fipos(o.matview,10	,-15	,1,));cx.lineTo(...fipos(o.matview,10	,15	,1,))
					cx.moveTo(...fipos(o.matview,15	,-15	,1,));cx.lineTo(...fipos(o.matview,15	,15	,1,))
					cx.stroke()
					
					//sumbu x
					cx.lineWidth = 1.3
					cx.strokeStyle = 'red'
					cx.beginPath()
					cx.moveTo(...fipos(o.matview,0	,0	,1,))
					cx.lineTo(...fipos(o.matview,50	,0	,1,))
					cx.stroke()
					//sumbu y
					cx.strokeStyle = '#00ff00'
					cx.beginPath()
					cx.moveTo(...fipos(o.matview,0	,0	,1,))
					cx.lineTo(...fipos(o.matview,0	,50	,1,))
					cx.stroke()
					cx.restore()
					
					//rantai
					for(let vaA of o.group){
						cx.beginPath()
						cx.moveTo(...fipos(vaA.matview,0	,0	,1,))
						cx.lineTo(...fipos(o.matview,0	,0	,1,))
						rantai('#00ff0077','#aaffaa77',)
					}
					cx.beginPath()
					cx.moveTo(...fipos(o.matview,0	,0	,1,))
					cx.lineTo(...fipos(o.parent.matview,0	,0	,1,))
					rantai('#ffff0077','#ffffaa77',)
				}
			break
			case 'turun':
				nodedipilih = o
				cla('nodeid')[0].textContent = '#'+o.nodeid
				updtrf()
				updlain()
				let vaA
				while(vaA = ru.cla('dipilih')[0]){
					vaA.classList.remove('dipilih')
				}
				o.div_span.classList.add('dipilih')
				o.txdata.classList.add('dipilih')
			break
		}
	}
	let co = ru.lihat.cobarantai = {
		w0:7.5	,d0:[15,10,],
		//w1:2.5	,d1:[0,2.5,12.5, 10,],
		w2:2.75	,d2:[2.5,10,12.5,0,],
	}
	let rantai = (warnaa,warnab,)=>{
		cx.save()
		cx.lineCap = 'round'
		cx.setLineDash(co.d0)
		cx.lineWidth = co.w0
		cx.strokeStyle = warnaa
		cx.stroke()
		/*
		cx.setLineDash(co.d1)
		cx.lineWidth = co.w1
		cx.strokeStyle = 'black'
		cx.stroke()
		*/
		cx.setLineDash(co.d2)
		cx.lineWidth = co.w2
		cx.strokeStyle = warnab
		cx.stroke()
		cx.beginPath()
		cx.restore()
	}
	let hoverboxsize = m3.create()
	m3.scale(hoverboxsize,hoverboxsize,[15,15,],)
	
	let hlmtextspan = cla('hlmtext')[0].firstElementChild
	pilihnode = node=>node.feve('turun',node,0,)//param terakhir 'dt' di sini ga dipake
	let klikdieditor = e=>{
		if(cla('diedit')[0]){return}
		let span = e.currentTarget
		let nodeketemu = carinode(span)
		if(nodeketemu){
			if(cla('insertnodechecked')[0]){//sini 3
				nodemasukkenode(nodedipilih,nodeketemu,)
			}else{
				pilihnode(nodeketemu)
			}
		}
	}
	let eleenter = e=>{
		e.currentTarget.setAttribute('mouhov','datang',)
	}
	let eleleave = e=>{
		e.currentTarget.setAttribute('mouhov','pergi')
	}
	let shlist = e=>{
		let cur = e.currentTarget
		let nodediv = cur.parentElement
		nodediv.querySelector('.divchi').classList.toggle('hilang')
		updshlist(nodediv)
	}
	let updshlist = nodediv=>{
		let divsh = nodediv.querySelector('.divsh')
		let divchi = nodediv.querySelector('.divchi')
		divsh.textContent = divchi.classList.contains('hilang')?'-':'v'
	}
	
	let bikinnode = par=>{
		let node = bikinobj('node'+namaunik,fnode,)
		;(par = par||grid).group.push(node)
		
		node.nodeid = namaunik
		node.fill = '#ffffff66'
		node.stroke = ru.rgba(
			Math.random()*155+100,
			Math.random()*155+100,
			Math.random()*155+100,
			1,
		)
		node.SHname =
		node.SHfill =
		node.SHstroke =
		node.SHchildren =
		node.SH = true//SH --> node ini tampil/sembunyi
		node.group = node.children
		node.titikpath = [0,0,]//path untuk gambar garis
		
		//order
		let nodeawal = nodedipilih??par.group[par.group.length-2]??null//node atasnya node ini
		let nodeakhir = null//node bawahnya node ini
		for(let naA in par.group){
			let vaA = par.group[naA = +naA]
			if(vaA === nodedipilih){
				nodeakhir = par.group[naA+1]
				break
			}
		}
		/*
		lih({
			nodeawal:nodeawal,
			nodeakhir:nodeakhir,
		})
		*/
		if(!nodeawal  && !nodeakhir){
			node.order = 0
		}else
		if(nodeawal && (
			!nodeakhir ||
			(nodeakhir === node)
		)){
			node.order = nodeawal.order+1
		}else
		if(nodeawal){
			node.order = (
				nodeawal.order+
				nodeakhir.order
			)/2
		}
		//node.order = namaunik
		
		//matrix
		let m = node.matlok
		m = node.hoverbox = m3.create()
		m3.copy(m,hoverboxsize,)
		
		//bikin di hlmlist
		let div = node.div = document.createElement('div')
			let sh = node.div_sh = document.createElement('span')
			let span = node.div_span = document.createElement('span')//ini nama
			let chi = node.div_chi = document.createElement('div')
		;(par?.div_chi || hlmlist).appendChild(div)
		div.appendChild(sh)
		div.appendChild(span)
		div.appendChild(chi)
		sh.addEventListener('click',shlist,)
		sh.textContent = 'v'
		sh.classList.add('divsh')
		span.addEventListener('mouseenter',eleenter,)
		span.addEventListener('mouseleave',eleleave,)
		span.addEventListener('mousedown',klikdieditor,)
		span.setAttribute('mouhov','pergi')
		span.textContent = node.nama
		span.style.color = node.stroke
		span.setAttribute('nodeid',namaunik,)
		span.classList.add('divspan')
		chi.classList.add('divchi')
		
		//bikin di hlmttext
		let txnode = node.txnode = document.createElement('span')
			let txdata = node.txdata = document.createElement('span')
			let txchi = node.txchi = document.createElement('span')
		;(par?.txchi || hlmtextspan).appendChild(txnode)
		txnode.classList.add('txnode')
		txnode.appendChild(txdata)
		txdata.textContent = '|----|'
		txdata.style.color = node.stroke
		txdata.classList.add('txdata')
		txdata.addEventListener('mousedown',klikdieditor,)
		txdata.addEventListener('dblclick',e=>{
			if(cla('diedit')[0]){return}
			edit()
		},)
		txdata.setAttribute('nodeid',namaunik,)
		txnode.appendChild(txchi)
		txchi.classList.add('txchi')
		
		//animasi
		let aniref = node.aniref = document.createElement('div')
		let anirefnama = node.anirefnama = document.createElement('div')
		let anirefchi = node.anirefchi = document.createElement('div')
		;(par?.anirefchi || reflist).appendChild(aniref)
		aniref.appendChild(anirefnama)
		aniref.appendChild(anirefchi)
		aniref.classList.add('aniref')
		anirefnama.classList.add('anirefnama')
		anirefnama.style.color = node.stroke
		anirefnama.setAttribute('nodeid',namaunik,)
		anirefnama.addEventListener('click',f_anirefnamaklik,)
		anirefchi.classList.add('anirefchi')
		
		//selesai
		
		namaunik++
		updnodeani(node)
		urutkan(par)
		
		return node
	}
	/*
	kondisi
		!nodedipilih && children kosong --> 
		!nodedipilih && children isi
		nodedipilih && di akhir
		nodedipilih && di tengah
	*/
	//children, yang atas = muncul di belakang
	let chi = (par,chi,)=>par.children.push(chi)
		chi(global,grid,)
		chi(global,UI,)
			chi(UI,border,)
			chi(UI,mousepos,)
	resize_editdata()
	resize_editnama()
	canv.dispatchEvent(new MouseEvent('mousedown'))
	requestAnimationFrame(lukis)
}