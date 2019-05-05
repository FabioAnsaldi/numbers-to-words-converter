let actions_types = [
    'RESET_STATE',
    'SET_VALUE',
    'SET_ERROR'
];

const TYPES = {};
actions_types.map( ( string ) => {

    TYPES[ string ] = 'CONVERTER_' + string;
} );

export default TYPES;