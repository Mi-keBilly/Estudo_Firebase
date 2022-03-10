

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


const db = firebase.firestore()




//codigo pra ler dados da colecao do Firebase 
db.collection("PrimeiraColeção")
                .get()
                .then((snapshot)=>{

                    snapshot.forEach((doc) => {
                        let a = doc.data();
                        console.log(a.Nome);
                        
                    })
                })
                


//nome da colecao + referencia = objeto da colecao
let docRef = db.collection("PrimeiraColeção").doc("FniYJmYgVmCtLbKPCTTD")

docRef
.get()
.then((doc)=> {

    console.log(doc.data())
    

})


//estrutura de busca de dados do servidor (no caso de uma lista de nomes funciona == , <= , => , < , > na ordem alfabetica )
//pode colar mais de um ".where" e eleborar melhor a pesquisa
db.collection("PrimeiraColeção").where("Nome", "==", "Mike")
.get()
.then(snapshot => {
    snapshot.forEach((doc) => {
        let a = doc.data();
        console.log(a.Nome, a.Sobrenome)
    })
})

