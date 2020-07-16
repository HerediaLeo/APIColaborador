import Home from '../pages/Home/Home'
import ConsultaColaborador from '../pages/Colaborador/Consulta/Consulta'
import CadastroColaborador from '../pages/Colaborador/Cadastro/Cadastro'
import Erro from '../pages/Erro/Erro'


const routes = [
    { path: '/', exact: true, component: Home },
    { path: '/colaborador-consulta', exact: true, component: ConsultaColaborador },
    { path: '/colaborador-cadastro', exact: true, component: CadastroColaborador },
    { component: Erro}
]

export default routes