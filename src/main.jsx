// main.jsx: o ponto de partida do JavaScript do site.
// O index.html carrega este arquivo, e ele "liga" o React na página.

// StrictMode: modo de desenvolvimento do React que avisa sobre possíveis
// erros no código. Não muda nada no visual do site.
import { StrictMode } from 'react'
// createRoot: conecta o React a um elemento do HTML.
import { createRoot } from 'react-dom/client'
// Estilos gerais da página (fonte, cores, margens).
import './index.css'
// O componente principal do site (que mostra a galeria).
import App from './App.jsx'

// Pega a <div id="root"> do index.html e desenha o componente App dentro dela.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
