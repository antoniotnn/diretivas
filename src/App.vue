<template>
  <div>
    <p>Sem a diretiva</p>
    <p v-texto="{ cor: 'red', tamanhoFonte: '200%', totalCaracteres: 15 }">Minha primeira diretiva customizada</p> <!-- ao passar valor para a diretiva, se for string, respeitar o uso de aspas externas, por exemplo "'Exemplo'", poi caso seja passado assim "Exemplo", será entendido pelo Vue que estamos passando um valor para um atributo da instância do Componente -->
    <p v-texto="configuracaoTexto">Teste</p>
  </div>
</template>

<script>

export default {
  data: () => ({
    configuracaoTexto: { cor: 'blue', tamanhoFonte: '300%', totalCaracteres: 4 }
  }),
  name: 'App',
  
}
</script>

<style>

</style>
