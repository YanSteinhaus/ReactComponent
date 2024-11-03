const Equipe = (props) => {
  return(
    <div>
       <Sobre nome={props.nome} atribuicao={props.atribuicao}/>
    </div>
  )
}
 
const Sobre = (props) =>{
  return(
    <div>
        <h2>Aluno: {props.nome}</h2><h3>Atribuicao: {props.atribuicao}</h3>
    </div>
  )
}
const Professor = (props) =>{
  return(
    <div>
        <h2> Professores: {props.professor}</h2>
    </div>
  )
}


const ODS = (props) =>{
  return(
    <div>
        <h2> Objetivo Desenvolvimento Sustentavel: {props.ods}</h2>
    </div>
  )
}

const Projeto = (props) =>{
  return(
    <div>
        <h2> Projeto: {props.projeto}</h2>
    </div>
  )
}
 
function App(){
  return(
    <div className="container">
        <h1>Equipe de Extensão ADS 4: </h1>
        <ODS ods="8"/>
        <Projeto projeto="Controle de Gastos"/>
        <Equipe nome="Yan" atribuicao="TechLead"/>
        <Equipe nome="Vitor" atribuicao="Dev. Frontend"/>
        <Equipe nome="Mateus" atribuicao="Dev. Backend"/>
        <Professor professor="Marcio e Karen"/>
    </div>
  )
}
export default App;
