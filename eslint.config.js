// eslint.config.js: configuração do ESLint ("npm run lint").
// O ESLint lê o código procurando erros e más práticas, sem rodar o site.
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignora a pasta "dist" (a versão final gerada pelo "npm run build").
  globalIgnores(['dist']),
  {
    // Verifica todos os arquivos .js e .jsx.
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended, // regras básicas de JavaScript
      reactHooks.configs.flat.recommended, // regras para useState, useEffect etc.
      reactRefresh.configs.vite, // regras para a atualização automática do Vite
    ],
    languageOptions: {
      // Avisa o ESLint que o código roda no navegador (window, document...).
      globals: globals.browser,
      // Permite escrever JSX (HTML dentro do JavaScript).
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
