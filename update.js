function back() {
window.open("index.html","_self")
}

var users = new Array();
var passes = new Array();

function init(){
	users.push("Syndicate");
	passes.push("alpine");	
	users.push("mutantkidsonyx@gmail.com");
	passes.push("EksplOIt");
	users.push("onyx");
	passes.push("EksplOIt");
	users.push("Onyx");
	passes.push("EksplOIt");
	users.push("old_visut");
	passes.push("zuknwhq");
	users.push("oldmanvisut@gmail.com");
	passes.push("zuknwhq");
	users.push("minecraftcreeper654@gmail.com");
	passes.push("cpnedon");
	users.push("SaltyJumpingSpider");
	passes.push("cpnedon");
	users.push("3l3m3l4trix@gmail.com");
	passes.push("urmomhasbiggay");
	users.push("Sergio Smith");
	passes.push("urmomhasbiggay");
	users.push("2021carriker.drew@gmail.com");
	passes.push("kbypsly");
	users.push("drewstew");
	passes.push("kbypsly");
	users.push("rdcohran@gmail.com");
	passes.push("Ryan1516");
	users.push("Ryanwhs11");
	passes.push("Ryan1516");
}

function login(){
	
	
	for(var i = 0;i<users.length;i++){
		if(document.getElementById("user").value == users[i]){
			if(document.getElementById("pass").value == passes[i]){
				window.open("https://syndicatetechnology.github.io/berlus/sections/exploits.html");	
			}
		}
	}
}
