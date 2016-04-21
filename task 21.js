// JavaScript Document

function getId(Id){
	return document.getElementById(Id);
}
var tag = getId("tag")
var	tagBtn = getId("tagBtn");
var	tagContainer = document.getElementById("tagContainer");
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
	delClick(arr,elem,flag);
	};
}

function delClick(arr,elem,flag){
	var child = elem.childNodes;
	for(var i = 0;i<child.length;i++){
		(function(index){
			var inner = child[index].innerHTML;
			child[index].onclick = function(){
				arr.splice(index,1);
				render(arr,elem,flag);
			}
			child[index].onmouseover = function(){
				child[index].innerHTML = "删除"+inner+"?";
			}
			child[index].onmouseout = function(){
				child[index].innerHTML = inner;
			}
		}(i));
	}
}

function autoAdd(inputText,arr,Container,e,flag){
	var autoAddRules = /(\s|,|，|、)/g;
	if(autoAddRules.test(inputText)||e.keyCode === 13){
		inputText = inputText.replace(autoAddRules,"");
		if(inputText == " "){
			alert("请输入内容！");
			document.getElementById("tag").value = "";
			return false;
		}
		var mark = true;
		var len = arr.length;
		if(arr.indexOf(inputText)>=0){
			mark = false;
		}
		if(arr.length>=10&&mark){
			arr.shift();
			arr.push(inputText);
		}
		else if(mark){
			arr.push(inputText);
		}
		render(arr,Container,flag);
		document.getElementById("tag").value = "";
	}

}


function init(){
	tag.addEventListener("keyup" ,function(e){
		var tagText = document.getElementById("tag").value.trim();
		autoAdd(tagText,tagData,tagContainer,e,true);
	});
    intersBtn.onclick = function(){
    	var	inters  = getId("inters").value.trim();
    	getId("inters").value = "";
    	intersData = intersData.concat(toArr(inters));
    	render(intersData,intersContainer,true);
    }
}
		
init();	


	
	
