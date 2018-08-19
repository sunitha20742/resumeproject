// function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange = function(){
// 		if(xhr.readyState === 4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	} ;
// xhr.send(null);
// }
// Loadjson("data.json",function(text){
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	educationalinfo(data.education);
// 	skillset(data.skills);
// 	achieve(data.achievements);
// })
function Loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile = Loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
	educationalinfo(data.education);
	skillset(data.skills);
	achieve(data.achievements);
})
var left = document.querySelector(".left")
function basics(det){
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name1= document.createElement("h3");
	name1.textContent = det.name;
	left.appendChild(name1);
	var phone = document.createElement("h3");
	phone.textContent = det.phno;
	left.appendChild(phone);
	var mail=document.createElement("a");
	mail.href = "rachakondanagasunitha@gmail.com";
	mail.textContent = det.email;
	left.appendChild(mail);
	var adrs = document.createElement("h2");
	adrs.textContent = "address";
	left.appendChild(adrs);
	var h = document.createElement("hr");
	var d = document.createElement("p");
	left.appendChild(h);
	d.textContent = det.address;
	left.appendChild(d);
}
var right = document.querySelector(".right");
function careerinfo(info){
	var car = document.createElement("h2");
	car.textContent = "career objective";
	right.appendChild(car);
	var g = document.createElement("hr");
	right.appendChild(g);
	var c = document.createElement("p");
	c.textContent = info.info;
	right.appendChild(c);
}
function educationalinfo(edu){
	var ed = document.createElement("h2");
	ed.textContent = "Educational qualification";
	right.appendChild(ed);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	var table1 = document.createElement("table");
	table1.border = "1";
	right.appendChild(table1);
	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+= "<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML = tabledata;
}
function skillset(skill){
	var sk = document.createElement("h2");
	sk.textContent = "Technical skills";
	right.appendChild(sk);
	var g = document.createElement("hr");
	right.appendChild(g);
	for(i=0;i<skill.length;i++){
		var s = document.createElement("h3");
		s.textContent = skill[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function achieve(achievements){
	var ac = document.createElement("h2");
	ac.textContent = "Achievements";
	right.appendChild(ac);
	var g = document.createElement("hr");
	right.appendChild(g);
	for(i=0;i<achievements.length;i++){
		var s = document.createElement("h3");
		s.textContent = achievements[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = achievements[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function openpage(){
	window.open("resume.html","_self",true)
}