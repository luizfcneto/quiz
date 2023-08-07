<template>
    <div>
        <label for="rangeQuestion">Resposta em Linha:</label>
        <input type="range" id="rangeQuestion" v-model="rangeValue" />
        <p>Valor selecionado: {{ rangeValue }}</p>
    </div>
</template>

<script>
export default {
    name: 'rangeTypeAnswer',
    data() {
        return {
            rangeValue: 50 // Valor inicial para a pergunta de range
        };
    },
};
</script>
