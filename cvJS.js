
var redCard = document.querySelector("#red-card");  	
var orangeCard = document.querySelector("#orange-card"); 	
var yellowCard = document.querySelector("#yellow-card");	
var greenCard = document.querySelector("#green-card");		
var blueCard = document.querySelector("#blue-card");		
var purpleCard = document.querySelector("#purple-card");		
var indigoCard = document.querySelector("#indigo-card");	

var detail = document.querySelector("#detail");			

var detailTitle = document.getElementById("detailTitle");	
var txt1 = document.getElementById("txt1");	
var txt2 = document.getElementById("txt2");	

var listEdu = document.getElementById("edu");			
var listExp = document.getElementById("exp");	
var listPro = document.getElementById("pro");
var listSkl = document.getElementById("skl");	
var listCer = document.getElementById("cer");	
var listRef = document.getElementById("ref");	

/* -------------------------------- hover ---------------------------------- */

redCard.addEventListener("mouseover", function(){change_color(redCard);});
redCard.addEventListener("mouseout", change_back);

orangeCard.addEventListener("mouseover", function(){change_color(orangeCard);});
orangeCard.addEventListener("mouseout", change_back);

yellowCard.addEventListener("mouseover", function(){change_color(yellowCard);});
yellowCard.addEventListener("mouseout", change_back);

greenCard.addEventListener("mouseover", function(){change_color(greenCard);});
greenCard.addEventListener("mouseout", change_back);

blueCard.addEventListener("mouseover", function(){change_color(blueCard);});
blueCard.addEventListener("mouseout", change_back);

purpleCard.addEventListener("mouseover", function(){change_color(purpleCard);});
purpleCard.addEventListener("mouseout", change_back);

indigoCard.addEventListener("mouseover", function(){change_color(indigoCard);});
indigoCard.addEventListener("mouseout", change_back);





function change_color(cardID){
	detail.style.backgroundColor = cardID.style.backgroundColor;
	detail.classList.add("border");

	var arr = ["Cras Justo Odio Certificate", "Dapibus Ac Facilisis In Certificate", "Morbi Leo Risus Certificate", "Porta Ac Consectetur Ac Certificate", "Vestibulum At Eros Certificate"]

	if (cardID == redCard){
		detailTitle.style.color = "#FFFFFF";
		detailTitle.innerHTML = "ABOUT ME";

		txt1.style.color = "#FFFFFF";
		txt2.style.color = "#FFFFFF";
		txt1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar orci sit amet bibendum dapibus. Vestibulum convallis felis nec sem ultricies, at aliquam augue ullamcorper. Aliquam ut mauris ac ex feugiat tempor. Pellentesque a nunc nec leo vulputate elementum eu et neque. Proin vitae erat sed augue malesuada iaculis vel auctor nisi. Mauris magna lorem, facilisis eget consectetur dictum, maximus id turpis. Nunc justo lorem, auctor non nulla vitae, vulputate interdum est.";
		txt2.innerHTML = "Pellentesque volutpat tincidunt sem non viverra. Suspendisse luctus augue congue purus ultricies, ornare sollicitudin tellus ultrices. Donec rutrum sem quis neque porta, eget malesuada ante volutpat. Curabitur sollicitudin dolor iaculis orci tincidunt, quis sodales ligula placerat. Praesent ac sagittis sapien. Nulla facilisi. Morbi et orci in enim pellentesque egestas. Aenean volutpat mi sed nibh faucibus malesuada. Integer porta pulvinar scelerisque. Etiam bibendum bibendum finibus. Praesent non enim quis mi convallis dapibus. Aenean aliquam porttitor nunc vitae luctus.";

	}

	else if (cardID == orangeCard){
		detailTitle.style.color = "#121212";
		detailTitle.innerHTML = "EDUCATION";

		listEdu.style.color = "#000000";

		/* ------------------ object(li) relations --------------------- */

		var obj1 = {
		    items:[
		        {id:45 , lable:"Cras Justo Odio University", parent_id: 0},
		        {id:40 , lable:"2018-...", parent_id: 45},
		        {id:40 , lable:"Online Master Program", parent_id: 45}
		    ]
		}
		var obj2 = {
		    items:[
		        {id:12, lable:"Dapibus Ac Facilisis In University", parent_id: 0},
		        {id:10 , lable:"2016-2018", parent_id: 12},
		        {id:10 , lable:"Master Degree", parent_id: 12}
		    ]
		}
		var obj3 = {
		    items:[
		        {id:32, lable:"Morbi Leo Risus University", parent_id: 0},
		        {id:30 , lable:"2013-2016", parent_id: 32},
		        {id:30 , lable:"Second Major Program Degree", parent_id: 32}
		    ]
		}
		var obj4 = {
		    items:[
		        {id:2, lable:"Porta Ac Consectetur Ac University", parent_id: 0},
		        {id:5 , lable:"2011-2015", parent_id: 2},
		        {id:7 , lable:"Baclehor Degree", parent_id: 2}
		    ]
		}
		var obj5 = {
		    items:[
		        {id:16, lable:"Vestibulum At Eros High School", parent_id: 0},
		        {id:15 , lable:"2008-2011", parent_id: 16}
		    ]
		}

		var arr = [obj1, obj2, obj3, obj4, obj5];

		/* ------------------ tree structure --------------------- */

		var obj1Dict; var obj2Dict; var obj3Dict; var obj4Dict; var obj5Dict; var tree1; var tree2; var tree3; var tree4; var tree5;
		var arrDict = [obj1Dict, obj2Dict, obj3Dict, obj4Dict, obj5Dict];
		var arrTree = [tree1, tree2, tree3, tree4, tree5];

		for (var i = 0; i < arr.length; i++) { 
		  	// first we create a dictionary so we can find elements by id easily
			arrDict[i] = arr[i].items.reduce(function(p,c) {
			    p[c.id] = c;
			    c.children = [];
			    return p;
			}, {});

			// then we build our tree
			arrTree[i] = arr[i].items.reduce(function(p,c) {
			    // if the parent_id is zero, we have found the root.
			    if (!c.parent_id) {
			        p = c;
			    }
			    // otherwise, figure out who the parent is and add this one as a child
			    else {
			        arrDict[i][c.parent_id].children.push(c);
			    }
			    return p;
			}, {});

			console.log(JSON.stringify(arrTree[i]));
		}
		/* -------------------------------------------------------- */
		
		for (var i = 0; i < arrTree.length; i++) { 
			processTree(arrTree[i], listEdu);
		}

	}

	else if (cardID == yellowCard){
		detailTitle.style.color = "#121212";
		detailTitle.innerHTML = "EXPERIENCE";

		listExp.style.color = "#000000";

		/* ------------------ object(li) relations --------------------- */

		var obj1 = {
		    items:[
		        {id:45 , lable:"Cras Justo Odio Company", parent_id: 0},
		        {id:40 , lable:"2016-2017", parent_id: 45},
		        {id:41 , lable:"EVS(European Voluntary Service) Swimming Coach for Children", parent_id: 45}
		    ]
		}
		var obj2 = {
		    items:[
		        {id:12, lable:"Dapibus Ac Facilisis In Company", parent_id: 0},
		        {id:10 , lable:"2015-2016", parent_id: 12},
		        {id:11 , lable:"Erasmus Software Trainee", parent_id: 12}
		    ]
		}
		var obj3 = {
		    items:[
		        {id:32, lable:"Morbi Leo Risus LTD.", parent_id: 0},
		        {id:30 , lable:"2014-2014", parent_id: 32},
		        {id:31 , lable:"Production Trainee", parent_id: 32}
		    ]
		}
		var obj4 = {
		    items:[
		        {id:2, lable:"Porta Ac Consectetur Ac Company", parent_id: 0},
		        {id:5 , lable:"2013-2013", parent_id: 2},
		        {id:7 , lable:"Quality Trainee", parent_id: 2}
		    ]
		}
		var obj5 = {
		    items:[
		        {id:16, lable:"Vestibulum At Eros University", parent_id: 0},
		        {id:15 , lable:"2012-2016", parent_id: 16},
		        {id:14 , lable:"Student Worker", parent_id: 16},
		        {id:13 , lable:"Computer Laboratory Supervisor", parent_id: 16},
		    ]
		}

		var arr = [obj1, obj2, obj3, obj4, obj5];

		/* ------------------ tree structure --------------------- */

		var obj1Dict; var obj2Dict; var obj3Dict; var obj4Dict; var obj5Dict; var tree1; var tree2; var tree3; var tree4; var tree5;
		var arrDict = [obj1Dict, obj2Dict, obj3Dict, obj4Dict, obj5Dict];
		var arrTree = [tree1, tree2, tree3, tree4, tree5];

		for (var i = 0; i < arr.length; i++) { 
		  	// first we create a dictionary so we can find elements by id easily
			arrDict[i] = arr[i].items.reduce(function(p,c) {
			    p[c.id] = c;
			    c.children = [];
			    return p;
			}, {});

			// then we build our tree
			arrTree[i] = arr[i].items.reduce(function(p,c) {
			    // if the parent_id is zero, we have found the root.
			    if (!c.parent_id) {
			        p = c;
			    }
			    // otherwise, figure out who the parent is and add this one as a child
			    else {
			        arrDict[i][c.parent_id].children.push(c);
			    }
			    return p;
			}, {});

			console.log(JSON.stringify(arrTree[i]));
		}
		/* -------------------------------------------------------- */
		
		for (var i = 0; i < arrTree.length; i++) { 
			processTree(arrTree[i], listExp);
		}

	}

	else if (cardID == greenCard){
		detailTitle.style.color = "#121212";
		detailTitle.innerHTML = "PROJECTS";

		listPro.style.color = "#000000";

		/* ------------------ object(li) relations --------------------- */

		var obj1 = {
		    items:[
		        {id:45 , lable:"Cras Justo Odio Project", parent_id: 0},
		        {id:40 , lable:"Link: www.exmpleporjectpage.com", parent_id: 45}
		    ]
		}
		var obj2 = {
		    items:[
		        {id:12, lable:"Dapibus Ac Facilisis In Project", parent_id: 0},
		        {id:10 , lable:"Link: www.exmpleporjectpage.com", parent_id: 12}
		    ]
		}
		var obj3 = {
		    items:[
		        {id:32, lable:"Morbi Leo Risus Project", parent_id: 0},
		        {id:30 , lable:"Link: www.exmpleporjectpage.com", parent_id: 32}
		    ]
		}
		var obj4 = {
		    items:[
		        {id:2, lable:"Porta Ac Consectetur Ac Project", parent_id: 0},
		        {id:5 , lable:"Link: www.exmpleporjectpage.com", parent_id: 2}
		    ]
		}
		var obj5 = {
		    items:[
		        {id:16, lable:"Vestibulum At Eros Project", parent_id: 0},
		        {id:15 , lable:"Link: www.exmpleporjectpage.com", parent_id: 16}
		    ]
		}

		var arr = [obj1, obj2, obj3, obj4, obj5];

		/* ------------------ tree structure --------------------- */

		var obj1Dict; var obj2Dict; var obj3Dict; var obj4Dict; var obj5Dict; var tree1; var tree2; var tree3; var tree4; var tree5;
		var arrDict = [obj1Dict, obj2Dict, obj3Dict, obj4Dict, obj5Dict];
		var arrTree = [tree1, tree2, tree3, tree4, tree5];

		for (var i = 0; i < arr.length; i++) { 
		  	// first we create a dictionary so we can find elements by id easily
			arrDict[i] = arr[i].items.reduce(function(p,c) {
			    p[c.id] = c;
			    c.children = [];
			    return p;
			}, {});

			// then we build our tree
			arrTree[i] = arr[i].items.reduce(function(p,c) {
			    // if the parent_id is zero, we have found the root.
			    if (!c.parent_id) {
			        p = c;
			    }
			    // otherwise, figure out who the parent is and add this one as a child
			    else {
			        arrDict[i][c.parent_id].children.push(c);
			    }
			    return p;
			}, {});

			console.log(JSON.stringify(arrTree[i]));
		}
		/* -------------------------------------------------------- */
		
		for (var i = 0; i < arrTree.length; i++) { 
			processTree(arrTree[i], listPro);
		}

	}

	else if (cardID == blueCard){
		detailTitle.style.color = "#FFFFFF";
		detailTitle.innerHTML = "SKILLS";

		listSkl.style.color = "#FFFFFF";

		/* ------------------ object(li) relations --------------------- */

		var obj1 = {
		    items:[
		        {id:45 , lable:"Professional Skills", parent_id: 0},
		        {id:40 , lable:"MS Office (Word, Excel, Powerpoint)							☻☻☻☻☻", parent_id: 45},
		        {id:41 , lable:"Programming Languages (C#, Python, VBA, Java)               ☻☻☻☻☺", parent_id: 45},
		        {id:42 , lable:"Internet Programming (HTML, CSS, JS, jQuery, Bootstrap 4)   ☻☻☻☺☺", parent_id: 45},
		        {id:43 , lable:"Mobile Programming (Xamarin-Cross Platform)                 ☻☻☻☺☺", parent_id: 45},
		        {id:44 , lable:"Database (MS Access, MS SQL Server)                         ☻☻☻☺☺", parent_id: 45},
		        {id:46 , lable:"Simulation (Arena)                                          ☻☻☻☻☺", parent_id: 45},
		        {id:47 , lable:"Optimization (GAMS)                                         ☻☻☻☻☺", parent_id: 45}
		    ]
		}
		var obj2 = {
		    items:[
		        {id:12, lable:"Language Skills", parent_id: 0},
		        {id:10 , lable:"Polish(Native) 	☻☻☻☻☻", parent_id: 12},
		        {id:11 , lable:"English 		☻☻☻☻☺", parent_id: 12},
		        {id:13 , lable:"French 			☻☻☺☺☺", parent_id: 12},
		        {id:14 , lable:"Japanese 		☻☺☺☺☺", parent_id: 12}
		    ]
		}
		var obj3 = {
		    items:[
		        {id:32, lable:"Personal Skills", parent_id: 0},
		        {id:30 , lable:"Learn Fast 	☻☻☻☻☻", parent_id: 32},
		        {id:31 , lable:"Team Work 	☻☻☻☻☻", parent_id: 32},
		        {id:33 , lable:"Sports 		☻☻☻☻☻", parent_id: 32}
		    ]
		}
		

		var arr = [obj1, obj2, obj3];

		/* ------------------ tree structure --------------------- */

		var obj1Dict; var obj2Dict; var obj3Dict; var tree1; var tree2; var tree3;
		var arrDict = [obj1Dict, obj2Dict, obj3Dict];
		var arrTree = [tree1, tree2, tree3];

		for (var i = 0; i < arr.length; i++) { 
		  	// first we create a dictionary so we can find elements by id easily
			arrDict[i] = arr[i].items.reduce(function(p,c) {
			    p[c.id] = c;
			    c.children = [];
			    return p;
			}, {});

			// then we build our tree
			arrTree[i] = arr[i].items.reduce(function(p,c) {
			    // if the parent_id is zero, we have found the root.
			    if (!c.parent_id) {
			        p = c;
			    }
			    // otherwise, figure out who the parent is and add this one as a child
			    else {
			        arrDict[i][c.parent_id].children.push(c);
			    }
			    return p;
			}, {});

			console.log(JSON.stringify(arrTree[i]));
		}
		/* -------------------------------------------------------- */
		
		for (var i = 0; i < arrTree.length; i++) { 
			processTree(arrTree[i], listSkl);
		}

	}

	else if (cardID == purpleCard){
		detailTitle.style.color = "#FFFFFF";
		detailTitle.innerHTML = "CERTIFICATES";

		listCer.style.color = "#FFFFFF";

		/* ------------------ object(li) relations --------------------- */

		var obj1 = {
		    items:[
		        {id:45 , lable:"Cras Justo Odio Certificate", parent_id: 0},
		        {id:40 , lable:"Date: 2004", parent_id: 45}
		    ]
		}
		var obj2 = {
		    items:[
		        {id:12, lable:"Dapibus Ac Facilisis In Certificate", parent_id: 0},
		        {id:10 , lable:"Date: 2006", parent_id: 12}
		    ]
		}
		var obj3 = {
		    items:[
		        {id:32, lable:"Morbi Leo Risus Certificate", parent_id: 0},
		        {id:30 , lable:"Date: 2012", parent_id: 32}
		    ]
		}
		var obj4 = {
		    items:[
		        {id:2, lable:"Porta Ac Consectetur Ac Certificate", parent_id: 0},
		        {id:5 , lable:"Date: 2015", parent_id: 2}
		    ]
		}
		var obj5 = {
		    items:[
		        {id:16, lable:"Vestibulum At Eros Certificate", parent_id: 0},
		        {id:15 , lable:"Date: 2017", parent_id: 16}
		    ]
		}

		var arr = [obj1, obj2, obj3, obj4, obj5];

		/* ------------------ tree structure --------------------- */

		var obj1Dict; var obj2Dict; var obj3Dict; var obj4Dict; var obj5Dict; var tree1; var tree2; var tree3; var tree4; var tree5;
		var arrDict = [obj1Dict, obj2Dict, obj3Dict, obj4Dict, obj5Dict];
		var arrTree = [tree1, tree2, tree3, tree4, tree5];

		for (var i = 0; i < arr.length; i++) { 
		  	// first we create a dictionary so we can find elements by id easily
			arrDict[i] = arr[i].items.reduce(function(p,c) {
			    p[c.id] = c;
			    c.children = [];
			    return p;
			}, {});

			// then we build our tree
			arrTree[i] = arr[i].items.reduce(function(p,c) {
			    // if the parent_id is zero, we have found the root.
			    if (!c.parent_id) {
			        p = c;
			    }
			    // otherwise, figure out who the parent is and add this one as a child
			    else {
			        arrDict[i][c.parent_id].children.push(c);
			    }
			    return p;
			}, {});

			console.log(JSON.stringify(arrTree[i]));
		}
		/* -------------------------------------------------------- */
		
		for (var i = 0; i < arrTree.length; i++) { 
			processTree(arrTree[i], listCer);
		}
		

	}

	else if (cardID == indigoCard){
		detailTitle.style.color = "#FFFFFF";
		detailTitle.innerHTML = "REFERENCES";

		listRef.style.color = "#FFFFFF";

		/* ------------------ object(li) relations --------------------- */

		var obj1 = {
		    items:[
		        {id:45 , lable:"Prof. Dr. Cras Justo Odio", parent_id: 0},
		        {id:40 , lable:"Mail: example@example.com", parent_id: 45}
		    ]
		}
		var obj2 = {
		    items:[
		        {id:12, lable:"Prof. Dr. Dapibus Ac Facilisis In", parent_id: 0},
		        {id:10 , lable:"Mail: example@example.com", parent_id: 12}
		    ]
		}
		var obj3 = {
		    items:[
		        {id:32, lable:"Morbi CEO Leo Risus", parent_id: 0},
		        {id:30 , lable:"Mail: example@example.com", parent_id: 32},
		        {id:31 , lable:"Tel: +245 123 4578", parent_id: 32}
		    ]
		}
		var obj4 = {
		    items:[
		        {id:2, lable:"Porta Ac Production Manager Consectetur Ac", parent_id: 0},
		        {id:5 , lable:"Mail: example@example.com", parent_id: 2}
		    ]
		}
		var obj5 = {
		    items:[
		        {id:16, lable:"Vestibulum HR Leader At Eros", parent_id: 0},
		        {id:15 , lable:"Mail: example@example.com", parent_id: 16},
		        {id:17 , lable:"Tel: +245 123 4578", parent_id: 16}
		    ]
		}

		var arr = [obj1, obj2, obj3, obj4, obj5];

		/* ------------------ tree structure --------------------- */

		var obj1Dict; var obj2Dict; var obj3Dict; var obj4Dict; var obj5Dict; var tree1; var tree2; var tree3; var tree4; var tree5;
		var arrDict = [obj1Dict, obj2Dict, obj3Dict, obj4Dict, obj5Dict];
		var arrTree = [tree1, tree2, tree3, tree4, tree5];

		for (var i = 0; i < arr.length; i++) { 
		  	// first we create a dictionary so we can find elements by id easily
			arrDict[i] = arr[i].items.reduce(function(p,c) {
			    p[c.id] = c;
			    c.children = [];
			    return p;
			}, {});

			// then we build our tree
			arrTree[i] = arr[i].items.reduce(function(p,c) {
			    // if the parent_id is zero, we have found the root.
			    if (!c.parent_id) {
			        p = c;
			    }
			    // otherwise, figure out who the parent is and add this one as a child
			    else {
			        arrDict[i][c.parent_id].children.push(c);
			    }
			    return p;
			}, {});

			console.log(JSON.stringify(arrTree[i]));
		}
		/* -------------------------------------------------------- */
		
		for (var i = 0; i < arrTree.length; i++) { 
			processTree(arrTree[i], listRef);
		}

	}
}

function change_back(){
	detail.classList.remove("border");
	detail.style.backgroundColor = "#FFFFFF";
	detailTitle.innerHTML = "";
	txt1.innerHTML = "";
	txt2.innerHTML = "";
	while(listEdu.firstChild) listEdu.removeChild(listEdu.firstChild);
	while(listExp.firstChild) listExp.removeChild(listExp.firstChild);
	while(listPro.firstChild) listPro.removeChild(listPro.firstChild);
	while(listSkl.firstChild) listSkl.removeChild(listSkl.firstChild);
	while(listCer.firstChild) listCer.removeChild(listCer.firstChild);
	while(listRef.firstChild) listRef.removeChild(listRef.firstChild);
}


function processTree(node, element) {
    var li = document.createElement('li');
    li.innerText = node.lable;
    element.appendChild(li);
    if (node.children.length) {
        var ul = document.createElement('ul');
        li.appendChild(ul);
        // note: you might want / need to actual sort the children first
        // but it's not clear from the OP if sorting by id will always give the right order
        for (var i=0; i < node.children.length; i++) {
           processTree(node.children[i], ul);
        }
    }
}