import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/App';
import './index.css';

//HOC
// function App(props){
//         return (
//         <h1>¡{props.saludo} {props.nombre}!</h1>
//         );
// }

// function withSaludo(WrappedComponent){
//   return function WrappedComponentWithSaludo(saludo){
//         return function ComoEstas(ComoEstas){
//                 return function muchoTiempo(muchoTiempo){
//                         return function ComponenteDeVerdad(props){
//                                 return(
//                                     <React.Fragment>
//                                       <WrappedComponent {...props}
//                                       muchoTiempo={muchoTiempo}
//                                       ComoEstas={ComoEstas}
//                                       saludo={saludo}
//                                       />
//                                         <p>Como estas?</p>
//                                         <p>Mucho tiempo sin saber de ti</p>
//                                       <p>Estamos Acompañando al WrappedComponent</p>
//                                     </React.Fragment>
//                                 );
//                         }
//                 }
//         }
//   }
// }

// const AppWithSaludo = withSaludo(App)('Buenaass!!!')()();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />,
        // <AppWithSaludo nombre="JJ"/>
);
