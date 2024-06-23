<template>
    <div class="personal_item columns">
      <div class="personal_item_plant column is-one-third">
        <figure class="image is-128x128">
            <img class="is-rounded" :src="`/src/assets/personsImages/${person.image}`" alt="Клиент" />
        </figure>
        <p class="person__name has-text-success">{{ person.name }}</p>
      </div>
  
      <div class="person__info column">
        <p>"Эл.почта"</p>
        <p>{{ person.email }} руб.</p>
      </div>

      <div class="person__info column">
        <p>"Адрес"</p>
        <p>{{ person.address }} руб.</p>
      </div>
      <div class="account-actions">
            <button class="button is-primary">Редактировать профиль</button>
            <button class="button is-link">Изменить пароль</button>
      </div>
      
    </div>
</template>
  
  <script>
export default {
    name: "PersonaItem",
    props: {
      person_data: {
        type: Object,
        default() {
          return {};
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