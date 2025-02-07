const frm = document.querySelector("form"); // resgata o form
const volta = document.querySelector("h3"); // resgata tag para exibição 

	// ao clicar no botao executa o calculo
frm.addEventListener("submit", (e) => {
	const c1 = document.getElementById("inCat1").value;
	const c2 = document.getElementById("inCat2").value;
	const soma = Number ((c1 ** 2) + (c2 ** 2));
	const h    = Math.sqrt(soma);
	// exibi resposta na tag h3
	volta.innerText=`A Hipotenusa desse Triângulo é : ${h.toFixed(2)}.`;
 // evita envio do form	
	(e).preventDefault();
});
//limpa os campos
function limpar(){
	// acessa os valores dos campos e deixa vazio
	document.getElementById("inCat1").value= "";
	document.getElementById("inCat2").value = "";
	document.querySelector("h3").innerText = "";
	
	
}