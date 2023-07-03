<template>
    <div class="component">
        <div class="tipo">
            <div class="h1">Qual o tipo de pergunta</div>
            <select name="type" id="type" v-model="selectedType">
                <option value="text">Texto</option>
                <option value="textArea">Texto em Area</option>
                <option value="radio">Radio/Bolinha</option>
                <option value="checkbox">Check Box/Marcador</option>
                <option value="range">Range</option>
            </select>
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
                <label for="textQuestion">Pergunta de Texto:</label>
                <input type="text" id="textQuestion" />
            </div>

            <div v-if="selectedType === 'textArea'">
                <!-- Renderização do tipo 'Texto' -->
                <label for="textQuestion">Pergunta de Texto:</label>
                <textarea />
            </div>

            <div v-if="selectedType === 'range'">
                <!-- Renderização do tipo 'Range' -->
                <label for="rangeQuestion">Pergunta de Range:</label>
                <input type="range" id="rangeQuestion" v-model="rangeValue" />
                <p>Valor selecionado: {{ rangeValue }}</p>
            </div>

            <div v-else-if="selectedType === 'radio'">
                <!-- Renderização do tipo 'Radio/Bolinha' -->
                <label>Pergunta de Radio:</label>
                <input type="radio" name="radioQuestion" value="option1" />
                Opção 1
                <input type="radio" name="radioQuestion" value="option2" />
                Opção 2
            </div>

            <div v-else-if="selectedType === 'checkbox'">
                <!-- Renderização do tipo 'Check Box/Marcar' -->
                <label>Pergunta de Check Box:</label>
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
    background-color: blue;
    height: 200px;
}

.tipo {
    padding: 30px;
    background-color: rgb(7, 196, 123);
}

.box {
    padding: 30px;
    background-color: rgb(245, 6, 253);
}

.negrito {
    font-weight: bold;
}

.h1 {
    font-size: 20px;
}
</style>
