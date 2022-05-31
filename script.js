const ul = document.querySelector("ul")
            const n = document.querySelector("input")
            const tarefas = []
            function mais() {
                tarefas.push(n.value)
                n.value = ""
                render()

            }
            function render(){
                
                ul.innerHTML = null
                tarefas.forEach((tarefa) =>{
                    const Li = document.createElement("li")
                    Li.innerText = tarefa
                    ul.appendChild(Li)
                    const apagar = document.createElement("button")
                    apagar.innerText = "X"
                    Li.appendChild(apagar)
                 apagar.addEventListener("click", function(){
                     const index = tarefas.indexOf(tarefa)
                     tarefas.splice(index, 1)
                     render()
                 })      
                 Li.appendChild(apagar)
            })
        }
