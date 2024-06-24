<template>
  <div class="person_item">
    <Navigation :cart_data="CART" />
      <div class="columns is-align-items-center is-justify-content-center has-background-success-80 mt-3 mx-0 px-3">
          <figure class="image is-64x64 column">
            <img class="is-rounded" :src="`/src/assets/personsImages/${person.image}`" alt="Аватар" />
          </figure>
          <div class="column">
            <p class="person__name has-text-primary-15 has-text-weight-semibold column">{{ person.name }}</p>
          </div>
    
          <div class="column">
            <p>{{ person.email }}</p>
          </div>
          <div class="column">
            <p>{{ person.address }}</p>
          </div>
      </div>
      <div class="person-content">
        <aside class="menu mx-5">
          <ul class="menu-list">
            <li><a>Редактировать профиль</a></li>
            <li><a>Мои заказы</a></li>
            <li><a>Мои бонусы</a></li>
            <li><a>Мои отзывы</a></li>
            <li><a>Купленные товары</a></li>
            <li><a>Поменять пароль</a></li>
          </ul>
        </aside>
      </div>
    <FooterPart />
  </div>
</template>
  
<script>
import Navigation from "../Navigation.vue";
import FooterPart from "../FooterPart.vue";
export default {
    name: "PersonItem",
    components: {
        Navigation,
        FooterPart,
    },
    props: {
      person: {
        type: Object,
        default() {
          return {
            name: 'Иван Иванов',
            email: '1t@1t',
            address: 'Москва, ул. Ленина, д. 1',
            image: 'person1.jpg'
          };
        },
      },
    },
    data() {
      return {};
    },
    computed: {},
    methods: {},
};
</script>
<style>
  .person_item{
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Установка минимальной высоты страницы */
  }
  .person-content {
    flex-grow: 1; /* Занимать доступное пространство */
  }
</style>