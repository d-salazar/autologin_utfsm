function popEdit(){
	console.log("editar!");
}

chrome.contextMenus.create({
	title: "Editar Claves",
	contexts: ["selection"],
	oncliek: popEdit
});