import { createApp } from 'vue'
import App from './App.vue'

const Vue = createApp(App);

//configurando diretiva customizada
Vue.directive('teste', {
    created() { //chamado antes que os atributos do elementos, ou ouvintes de evento  (event listeners) sejam aplicados
        console.log('A diretiva foi aplicada com sucesso');
    }
});

Vue.mount('#app');
