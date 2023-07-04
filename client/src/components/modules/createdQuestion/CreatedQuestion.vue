<template>
    <div class="component">
        <div class="tipo">
            <div class="box">
                <!-- Renderização do tipo 'Texto' -->
                <label class="h1">Pergunta aqui:</label>
                <textarea />
            </div>
            <div class="box2">
                <div class="h1">Qual o tipo de resposta</div>
                <select name="type" id="type" v-model="selectedType">
                    <option value="text">Texto</option>
                    <option value="textArea">Texto em Area</option>
                    <option value="radio">Radio/Bolinha</option>
                    <option value="checkbox">Check Box/Marcador</option>
                    <option value="range">Range</option>
                </select>
            </div>
        </div>

        <div class="box">
            <div>
                <div>
                    Tipo Selecionado:
                    <span class="negrito">{{ selectedType }}</span>
                </div>
            </div>

            <div v-if="selectedType === 'text'">
                <!-- Renderização do tipo 'Texto' -->
                <label for="textQuestion">Resposta em Texto:</label>
                <input type="text" id="textQuestion" />
            </div>

            <div v-if="selectedType === 'textArea'">
                <!-- Renderização do tipo 'Texto' -->
                <label for="textQuestion">Resposta em Texto Área:</label>
                <textarea />
            </div>

            <div v-if="selectedType === 'range'">
                <!-- Renderização do tipo 'Range' -->
                <label for="rangeQuestion">Resposta em Range:</label>
                <input type="range" id="rangeQuestion" v-model="rangeValue" />
                <p>Valor selecionado: {{ rangeValue }}</p>
            </div>

            <div v-else-if="selectedType === 'radio'">
                <!-- Renderização do tipo 'Radio/Bolinha' -->
                <label>Resposta em Radio:</label>
                <input type="radio" name="radioQuestion" value="option1" />
                Opção 1
                <input type="radio" name="radioQuestion" value="option2" />
                Opção 2
            </div>

            <div v-else-if="selectedType === 'checkbox'">
                <!-- Renderização do tipo 'Check Box/Marcar' -->
                <label>Resposta em Check Box:</label>
                <input
                    type="checkbox"
                    name="checkboxQuestion"
                    value="option1"
                />
                Opção 1
                <input
                    type="checkbox"
                    name="checkboxQuestion"
                    value="option2"
                />
                Opção 2
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreatedQuestion',
    data() {
        return {
            selectedType: 'text', // Valor inicial selecionado
            rangeValue: 50 // Valor inicial para a pergunta de range
        };
    }
};
</script>

<style scoped>
.component {
    display: flex;
    background-color: rgb(94, 94, 250);
    height: 300px;
}

.tipo {
    padding: 30px;
    background-color: rgb(83, 206, 159);
}

.box {
    padding: 30px;
    background-color: rgb(255, 172, 192);
}
.box2 {
    padding: 30px;
    background-color: rgb(170, 255, 195);
}

.negrito {
    font-weight: bold;
}

.h1 {
    font-size: 20px;
}
</style>
