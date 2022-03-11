

//entrada do firebase no java

const firebaseConfig = {
    apiKey: "AIzaSyBWhM8wPxJc_WZoyzCIZoQ3j_vnFWT6aVk",
    authDomain: "projeto1-teste-df092.firebaseapp.com",
    projectId: "projeto1-teste-df092",
    storageBucket: "projeto1-teste-df092.appspot.com",
    messagingSenderId: "909813408986",
    appId: "1:909813408986:web:ae47ae406f3ecb6d1bb1e3",

}

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();

const TURMA = "PrimeiraColeção";

//

//1 //estrutura de busca de dados do servidor (no caso de uma lista de nomes funciona == , <= , => , < , > na ordem alfabetica )
// //pode colar mais de um ".where" e eleborar melhor a pesquisa

// db.collection("PrimeiraColeção").where("Nome", "==", "Mike")
// .get()
// .then(snapshot => {
//     snapshot.forEach((doc) => {
//         let a = doc.data();
//         console.log(a.Nome, a.Sobrenome)
//     })
// })

//

//2 //nome da colecao + referencia = objeto da colecao

// let docRef = db.collection("PrimeiraColeção").doc("FniYJmYgVmCtLbKPCTTD")
// docRef
// .get()
// .then((doc)=> {
//     console.log(doc.data())
// })

//

//3 //codigo pra ler dados da colecao do Firebase

// db.collection("PrimeiraColeção")
//                 .get()
//                 .then((snapshot)=>{
//                     snapshot.forEach((doc) => {
//                         let a = doc.data();
//                         console.log(a.Nome);
//                     })
//                 })

//

//4 // Criando e alterando documentos

// db.collection(TURMA).add({
//     Nome: "Marcos",
//     Sobrenome: "Santos",
//     Artigo: {Grife1: "lacoste", Grife2: "Armani"},
// }).then((doc)=>{
//     console.log("Documento inserido com sucesso", doc)
// }).catch(err => {
//     console.log(err);
// })

//

//5 //criar um documento e setar o obejeto
// //o poder do "set" eh criar e modificar o elemento
// //o uso do "set" pra nao apagar todo o documento precisa chamar o obejto "merge" pra somente editar o elemento necessario no final do set assim
// //.set({obejeto adc/modificar},{merge: true})

// db.collection(TURMA).doc("CodigoUnico").set({
//     Nome: "Maria",
//     Sobrenome: "Lima",
//     Artigo: {Grife1: "lacoste", Grife2: "Armani"},
// }, {merge: true}
// ).then((doc)=>{
//     console.log("Documento inserido com sucesso", doc)
// }).catch(err => {
//     console.log(err);
// })

//

//6 //pra somente fazer uma atualizacao do codigo sem precisar inserir nenhum objeto pode chamar o .updade ao inves do .set
// // pra atualizar um array fica .update({NomeDoObejeto:firebase.firestore.FieldValue.arrayUnio("array1","array2")})
// // podendo trocar o arrayUnion por arrayRemove pra remover
// // dentro do FieldValue pode usar o increment(numero) pra somar a algum numero dentro do elemento

// db.collection(TURMA).doc("CodigoUnico").update(
//     {
//     Nome: "Jonas",
//     Sobrenome: "Silva",
// }
// ).then((doc)=>{
//     console.log("Documento inserido com sucesso", doc)
// }).catch(err => {
//     console.log(err);
// })

//

//7 //On Snapshot(atualização em tempo real)
// // no lugar do .get()then() pode ser usado o .onSnapshot
// // imprime e atualiza automatico toda alteracao do codigo

// let docRef = db.collection("PrimeiraColeção").doc("FniYJmYgVmCtLbKPCTTD")
// docRef.onSnapshot((doc) => {
//     console.log(doc.data().Nome)
// })

//

//8 // Criando Usários no firebase

// let newUserEmail = 'novoteste@teste.com';
// let newUserPassword = '123abc';
let auth = firebase.auth()
// auth.createUserWithEmailAndPassword(newUserEmail,newUserPassword)
//     .then(user =>{
//         console.log(user);
//     }).catch(err => {
//         console.log(err);
//     })  

//

//9 // Gerenciando Longins

//  // logar com usuario
function login() {
    let userEmail = "novoteste@teste.com"
    let userPassword = "123abc"
    auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(loggedUser => { console.log(loggedUser) })
        .catch(error => { console.log(error) })
}
//  login();

// // let user = auth.currentUser;
// // console.log(user)

// obeservador do google 
auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user)
    } else {
        console.log("Ninguém logado")
    }
})

// deslogar com usuario
function logout() {
    auth.signOut()
        .then(() => { console.log("usuario foi deslogado") })
        .catch(error => { console.log(error) })
}

setTimeout(login, 2000)

//

//10 // Sessão do usuário

// Mudar o estado de persistência
//(manter o usuario logado) (usuario logado somente na primeira aba) (forcar usuario a sempre estar logando)
//(LOCAL) (SESSION) (NONE)
//firebase.auth.Auth.Persistence.()

// function login() {
//     let userEmail = "novoteste@teste.com"
//     let userPassword = "123abc"
//     auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
//         auth.signInWithEmailAndPassword(userEmail, userPassword)
//             .then(loggedUser => { console.log(loggedUser) })
//             .catch(error => { console.log(error) })
//     }).catch(error => { console.log(error) })
// }
