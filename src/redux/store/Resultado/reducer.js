// Inicializa el estado
const initialState = {resultado: "",resultado2: ""};

export default (state = initialState, action) => {
    // Valida el tipo de "action" de acuerdo a cada identificador
    switch(action.type){
    case 'ACTUALIZAR_RESULTADO':
        return {
            ...state, // Retorna todo lo que había en el "store" y
            resultado: action.payload , 
            resultado2: action.payload2  
        };
        default: // Si no se modaifica retorna el estado inicial
            return state;
    }
}

// Se exporta esta opción para devolver el valor de "resultado" del "state"
export const selectActiveResultado = state => state.resultadoReducer.resultado;