// JavaScript Document

function getId(Id){
	return document.getElementById(Id);
}

var	tagBtn = getId("tagBtn");
var	tagContainer = document.getElementById("tagContainer");
var	inters  = getId("inters").value.trim();
var	intersBtn = getId("intersBtn");
var	intersContainer = getId("intersContainer");
var	tagData = [];
var	intersData = [];
	
function toArr(text){
	var arr = [];
	text = text.replace(/(,|，|、|\s|\r\n)/g, " ");////将所有分隔符转化成空格；
	text = text.replace(/\s{2,}/g, " ");//将两个以上的空格转换成一个空格；
	arr = text.split(' ');//用空格把字符数据分开成为数组；
	return arr;
}

function render(arr,elem,flag){
	var inner = "";
	arr.forEach(function(e){inner+="<span>"+e+"</span>"});
	elem.innerHTML = inner;
	if(flag){	
	delClick(arr,elem);
	};
}

function delClick(arr,elem){
	var child = elem.childNodes;
	for(var i in child){
		(function(index){
			child[index].onclick = function(){
				arr.splice(index,1);
				render(arr,elem);
			}
		}(i));
	}
}


function init(){
	tagBtn.onclick = function(){
		var tag = document.getElementById("tag").value.trim();
		var newData = toArr(tag);
		tagData = tagData.concat(newData);
		render(tagData,tagContainer,true);
	}
}
		
init();	


	
	