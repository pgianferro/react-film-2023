# React + Vite

* Comisión:  23646 tarde

* Integrantes:
Lucas Nicolás Burghi Murayama
Pablo Daniel Gianferro

* Descripción: Esta app será un símil Netflix en el marco del Trabajo Grupal del curso React de Codo a Codo.

* Link de la Aplicación:
    QA > https://qa-react-films.vercel.app/
    UAT > https://uat-react-films.vercel.app/
    PROD > https://react-film-2023-rust.vercel.app/

* Otros Links útiles:

    Repo Base Codo a Codo
    https://github.com/Joelnicolass/reactfilm-2023

    PDF Trabajo Práctico

    Vitest
    https://www.robinwieruch.de/vitest-react-testing-library/ 

    Github Actions in Vercel
    https://vercel.com/guides/how-can-i-use-github-actions-with-vercel

    Env Variables and Modes
    https://vitejs.dev/guide/env-and-mode.html

* Todo lo realizado al momento

- 1. CREAMOS EL PROYECTO DE REACT CON VITE
- 2. INSTALAMOS LAS DEPENDENCIAS DE TESTING
- 3. CREAMOS EL REPO EN GITHUB
- 4. CREAMOS EL PROYECTO EN VERCEL
- 5. GENERAR EL TOKEN DE VERCEL
- 6. INSTALAMOS EL CLI VERCEL
- 7. LOGIN EN VERCEL (CLI)
- 8. LINKEAMOS EL PROYECTO EN VERCEL
- 9. CREAMOS RAMAS EN GITHUB
- 10. CONFIGURAMOS EL PROYECTO EN VERCEL (CREANDO 3 DOMINIOS Y EVITANDO EL AUTO DEPLOY)
- 11. CONFIGURAMOS LAS VARIABLES DE ENTORNO EN GITHUB
- 12. CREAMOS LA CARPETA .GITHUB y LOS PIPELINES PARA LAS ACTIONS
- 13. IGUALAMOS LOS REPOSITORIOS EN TODOS LOS ENTORNOS PARA QUE ESTEN IGUALES

* Instalar Next UI para vite: https://nextui.org/docs/frameworks/vite 
* Instalar Tailwind para vite: https://tailwindcss.com/docs/guides/vite#react

Pasos:
npm i @nextui-org/react framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Add the paths to all of your template files in your tailwind.config.js file.
Add the Tailwind directives to your CSS
After installing NextUI, you need to set up the NextUIProvider at the root of your application.

* Armado del Slider:
https://levelup.gitconnected.com/how-to-implement-netflix-slider-with-react-and-hooks-bdb9b99d1ce4
