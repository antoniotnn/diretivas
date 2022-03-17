import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App);

//configurando diretiva customizada
Vue.directive('texto', {
    // parâmtros que podem ser recebidos: el, binding, vnode, prevVnode
    created(el) { //chamado antes que os atributos do elementos, ou ouvintes de evento  (event listeners) sejam aplicados
        console.log(el.style);
        el.style.color = 'red';
        el.style.fontSize = '150%';

        let textoOriginal = el.innerText;
        let tamanhoTextoOriginal = textoOriginal.length;
        let textoAjustado = '';

        if (tamanhoTextoOriginal > 25) {
            //vamos truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, 22) + '...';
        } else {
            //manter texto original
            textoAjustado = textoOriginal;
        }

        el.innerText = textoAjustado;

        console.log('tamanho texto original:', tamanhoTextoOriginal);

        console.log('Texto original: ', textoOriginal);

        console.log('A diretiva foi aplicada com sucesso');
    }
});

Vue.mount('#app');
