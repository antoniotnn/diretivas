<template>
  <div>
    <p>Sem a diretiva</p>
    <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha primeira diretiva customizada</p> <!-- ao passar valor para a diretiva, se for string, respeitar o uso de aspas externas, por exemplo "'Exemplo'", poi caso seja passado assim "Exemplo", será entendido pelo Vue que estamos passando um valor para um atributo da instância do Componente -->
    <p v-texto="configuracaoTexto">Teste</p>
    <div v-posicao:absolute="75" v-texto="{ cor: 'green', totalCaracteres: 100 }">Olá, eu sou um binding de argumento e valor</div> <!-- "absolute", será recebido no atributo arg do binding da diretiva-->
    <span>Código A:</span><input type="text"><span v-informacao:simples.umClickMouse="'Você encontrará o código A na parte frontal do equipamento'"> i</span>
    <br>
    <span>Código B:</span><input type="text"><span v-informacao:destacado.doisClicksMouse.sairAutomaticamente="'Você encontrará o código B na parte traseira do equipamento, abaixo da tampa de proteção'"> i</span>
    <hr>
    <h1 v-colorir-fundo-texto="'green'">Diretiva customizada registrada localmente (no componente)</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  directives: {
    colorirFundoTexto: {
      created: function(el, binding) {
        //console.log(el, binding);
        el.style.background = binding.value;
      }
    }
  },
  data: () => ({
    configuracaoTexto: { cor: 'blue', tamanhoFonte: '300%', totalCaracteres: 4 }
  })
}
</script>

<style>

</style>
