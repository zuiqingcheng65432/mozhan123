window.onload=function()
{
	function $(id)
	{
		return document.getElementById(id);
	}
	
	var oNav=$("nav");
	let flag=true;
	var oCircle=document.getElementsByClassName("circle")[0];
	var page_box=document.getElementsByClassName("page_box")[0];
	var oSpan=oCircle.getElementsByTagName("span");
	var oA=oNav.getElementsByTagName("a");
	var aLi=page_box.getElementsByTagName("li");
	var aNav_btn=document.querySelector(".nav_btn");
	var aNav_List=document.querySelector(".nav_active");
	aNav_btn.onclick=function(){
		if (flag)
		{
			aNav_List.style.display="block";
			flag=false;
		}
		else{
			aNav_List.style.display="none";
			flag=true;
		}
		
	}
	
	for(let i=0;i<oA.length;i++){
//		oA[i].index=i;
		oA[i].onmouseover=function()
		{
			
			for(let i=0;i<oA.length;i++)
			{
				
				oA[i].className="";
			}
//			oA[this.index].className='active';
			oA[i].className='active';
			oA[0].className='active';
			
		}
	}
	
	
	for(let j=0;j<oSpan.length;j++)
	{
		oSpan.index=j;
		oSpan[j].onmouseover=function()
		{
			for(let j=0;j<oSpan.length;j++)
			{
				oSpan[j].className="";
			}
			this.className='dot';
		}
	}
	for(let c=0;c<aLi.length;c++)
	{
		aLi.index=c;
		aLi[c].onmouseover=function()
		{
			for(let j=0;j<aLi.length;j++)
			{
				aLi[j].className="";
			}
			this.className='active1';
			aLi[0].className='active1';
		}
	}
		
}
