<template>
    <div class="plants-page">
        <Navigation :cart_data="CART" />
        <div class="plant-page columns">
            <img class="plant-page__image mx-3 column" :src="'../../src/assets/plantsImages/' + plant.image"
                alt="Растение" />
            <div class="column">
                <p class="plant-page__sale" v-if="!plant.sale">New</p>
                <p class="plant-page__sale has-text-danger" v-if="plant.sale">Sale</p>
                <p class="plant-page__name">Название: {{ plant.name }}</p>
                <p class="plant-page__about"> О растении: {{ plant.about }}</p>
                <p class="plant-page__availability"> В наличии: {{ plant.availability }}</p>
                <p class="plant-page__care"> Особенности ухода за растением: {{ plant.care }}</p>
                <p class="plant-page__price"> Цена: {{ plant.price + "₽" }}</p>
                <button class="button is-success plant-page__add_to_cart_btn btn" @click="addToCart">
                    В корзину
                </button>
            </div>
        </div>
        <FooterPart />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navigation from "../Navigation.vue";
import FooterPart from "../FooterPart.vue";

export default {
    name: "plantPage",
    components: {
        Navigation,
        FooterPart,
    },
    props: {},
    data() {
        return {
            plant: {},

        };
    },
    computed: {
        ...mapGetters(["PLANTS"]),
        ...mapGetters(["CART"]),
    },

    methods: {
        addToCart() {
            this.$emit("addToCart", this.plant);
        }
    },
    mounted() {
        const vcode = this.$route.params.id;
        console.log('я mounted', vcode)
        this.plant = this.PLANTS.find(plant => plant.vcode === vcode);
        if (this.plant && this.plant.name) {
            console.log('я plant', this.plant.name);
        } else {
            console.error('Ошибка: объект plant не найден или не содержит свойство name');
        }
    },
};
</script>


<style>
.plant-page {
    display: flex;
    height: 70%;
    flex-direction: row;
    align-items: center;
    margin: 20px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 10px;
    border: 1px solid rgb(216, 216, 216);
    box-shadow: 2px 2px 8px 0 rgb(208, 218, 218);
}

.plant-page__image {
    width: 500px;
}

.plant-page__name {
    background-color: #48c78e;
    color: #164630;
    padding: 6px 18px;
    font-weight: 400;
    margin: 12px 0;
    font-size: 1.2em;
    border-radius: 12px 6px;
}

.plant-page__add_to_cart_btn {
    background-color: teal;
    padding: 10px 20px;
    margin: 12px 0 6px 0;
    border-radius: 6px 12px;
    color: whitesmoke;
    font-weight: 600;
    transition: background-color 0.3s;
}

.plant-page__add_to_cart_btn:hover {
    background-color: rgb(7, 150, 150);
    border: 1px solid teel;
}

.plant-page__add_to_cart_btn:active {
    background-color: rgb(1, 87, 87);
}

/* .plant-page__sale {
      position: absolute;
      top: 300px;
      left: 600px;
    } */
</style>