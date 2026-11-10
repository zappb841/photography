// vite.config.js: configuração do Vite.
// O Vite é a ferramenta que roda o site enquanto você desenvolve
// ("npm run dev") e gera a versão final para publicar ("npm run build").
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // plugin do React: faz o Vite entender arquivos .jsx e atualiza a página
  // na hora quando você salva um arquivo.
  plugins: [react()],
})
