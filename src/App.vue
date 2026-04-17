<script setup>
import { ref } from 'vue';
import ProdutoChild from './components/ProdutoChild.vue';
import SalvarChild from './components/SalvarChild.vue';
import { listaProdutos } from './data/produtos';
const produtos = ref(listaProdutos);


const preco = ref(0); /* apos o v-model */
const posicaoProduto = ref(-1);
const alterando = ref(false);

function corrigirPreco(idProduto, precoProduto) {
preco.value = precoProduto;
posicaoProduto.value = produtos.value.findIndex(p => p.id === idProduto)
alterando.value = true;
}

function salvarPreco(){
produtos.value[posicaoProduto.value].preco = preco.value;
alterando.value = false;
}

</script>

<template>
  <h1>Catálogo de Produtos</h1>

  <div class="container">
    <div>
      <ul>
        <ProdutoChild v-for="produto in produtos" :key="produto.id" :nome="produto.nome" :preco="produto.preco" :categoria="produto.categoria" :id="produto.id" @corrigirpreco="corrigirPreco">
        </ProdutoChild>
      </ul>
    </div>
    <div v-show="alterando">
      <label>Preço</label>
      <input type="text" v-model="preco">

      <SalvarChild @salvarpreco="salvarPreco">
        Salvar
      </SalvarChild>
    </div>
  </div>
</template>

<style scoped>
</style>
