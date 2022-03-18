import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App);

//configurando diretiva customizada
Vue.directive('texto', {
    // parâmtros que podem ser recebidos: el, binding, vnode, prevVnode
    created(el, binding) { //chamado antes que os atributos do elementos, ou ouvintes de evento  (event listeners) sejam aplicados
        //console.log(el.style);
        //console.log(binding.value);

        if(binding.value?.cor) el.style.color = binding.value.cor;
        if(binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte;
        
        let totalCaracteres = 25;
        
        if(binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres


        let textoOriginal = el.innerText;
        let tamanhoTextoOriginal = textoOriginal.length;
        let textoAjustado = '';

        if (tamanhoTextoOriginal > totalCaracteres) {
            //vamos truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, (totalCaracteres - 3)) + '...';
        } else {
            //manter texto original
            textoAjustado = textoOriginal;
        }

        el.innerText = textoAjustado;
        

        //console.log('tamanho texto original:', tamanhoTextoOriginal);

        //console.log('Texto original: ', textoOriginal);

        //console.log('A diretiva foi aplicada com sucesso');
    }
});

Vue.directive('posicao', {
    created(el, binding) {
        //console.log(el, binding.arg, binding.value);

        const posicoesPossiveis = ['relative', 'fixed', 'absolute'];

        if(posicoesPossiveis.includes(binding.arg)) {
            el.style.position = binding.arg;
            el.style.top = `${binding.value}px`;
        }
    }
});

Vue.directive('informacao', {
    created(el, binding) {
        console.log(el, binding.arg, binding.modifiers, binding.value);

        let funcao = function() {
            let informacaoSpan = document.createElement('span')
            informacaoSpan.style.position = 'absolute';
            informacaoSpan.style.background = '#ddd';
            informacaoSpan.style.padding = '2px';
            informacaoSpan.innerText = binding.value;

            el.appendChild(informacaoSpan);

            informacaoSpan.addEventListener('click', (event) => {
                event.stopPropagation();
                informacaoSpan.remove();
            })
        }

        if(binding.modifiers['umClickMouse']) {
            el.addEventListener('click', funcao);
        }

        if(binding.modifiers['doisClicksMouse']) {
            el.addEventListener('dblclick', funcao);
        }
    }
});

Vue.mount('#app');
