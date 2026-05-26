<script setup>
import ButtonChild from './ButtonChild.vue';
import { formataPreco } from '@/utils/produtoUtils';
import { ref } from 'vue';
import { listaProdutos } from '@/data/produtos';
import ProdutoCard from './ProdutoCard.vue';
const props = defineProps(['id', 'nome', 'preco', 'categoria']);
const emit = defineEmits(['fechar']);
</script>

<template>
<div class="overlay">
    <div class="produto-dialog">
        <h2>{{ props.nome }}</h2>
        <h3>ID: {{ props.id }}</h3>
        <p>Preço: {{ formataPreco(props.preco) }}</p>
        <p>Categoria: {{ props.categoria }}</p>
        <ButtonChild>Corrigir preço</ButtonChild>
        <ButtonChild @click.prevent="$emit('fechar')">Fechar</ButtonChild>
    </div>
</div>
</template>

<style scoped>
.produto-dialog{
    background-color: white;
    border: 1px solid #fef;
    border-radius: 8px;
    padding: 24px;
    min-width: 320px;
}

.overlay{
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(127, 255, 212, 0.417);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
</style>