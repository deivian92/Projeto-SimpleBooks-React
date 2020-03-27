import ApiService from './apiservice'

class UsuarioService extends ApiService {
    
    constructor() {
        super('/api/autores');
    }

    salvar(autor) {
        return this.post('/', autor);
    }
}

export default UsuarioService;