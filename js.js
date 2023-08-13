const add=document.getElementById("add")
const excl=document.getElementById("excl")
let item=document.getElementById("item")
let preco=document.getElementById("preco");
let val=0 
//alert("Os itens e preços tem que ser separados por espaço \n did by el crazy")
excl.addEventListener(("click"),()=>{
    let itens = document.getElementById("itens");
    if (itens.selectedIndex == -1){
        alert("Selecione um item na lista!");
        return;
    }
    let indice = itens.options[itens.selectedIndex].index;
    let itemSelecionado = itens.options[itens.selectedIndex].text;
    let resultado = confirm("Deseja excluir o item: " + itemSelecionado + " ?");
    if (resultado == true) {
        itens.removeChild(itens[indice]);
        alert("O item " + itemSelecionado + " será excluído da lista!");
        let a=itemSelecionado
       a=a.split(" ") 
       a= a.pop()
       a=a.split("kz")
        val=val+-a[0]
        document.querySelector("#total").value=val+"Kz"
    }
    else{
        alert("Você desistiu de excluir o item " + itemSelecionado + " da lista!");
    }
})
add.addEventListener("click",()=>{
    if (item.value == null || item.value== "" || preco.value == null || preco.value== "") {
        alert("O item e o preço não pode ser adicionado na lista!");
    }
    else {
        let itens = document.getElementById("itens");
        let option = document.createElement("option");
        option.text = item.value+" preço "+preco.value+"kz";
        itens.add(option, itens[0]);
        val=val+Number(preco.value)
        document.querySelector("#total").value=val+"Kz"
        item.value=""
        preco.value=""

    }
})

