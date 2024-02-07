<script>
import LeftBar from '../../shared/LeftBar.vue'
import RightButtons from '../../shared/RightButtons.vue'

export default {
  components: {
    LeftBar,
    RightButtons,
  },
  data() {
    return {
      title: '', 
      email: '',
      message: '',
      isButtonDisabled: true,
      isTitleValid: true, 
      isEmailValid: true,
      isMessageValid: true,
      formSubmitted: false
    }
  },
  methods: {
    submitForm() {
      this.isEmailValid = this.email.endsWith('.com') || this.email.endsWith('.es')
      this.isTitleValid = this.title.trim().length > 3
      this.isMessageValid = this.message.trim().length > 20
      if (this.isEmailValid && this.isTitleValid && this.isMessageValid) {
        this.formSubmitted = true
      }
    }
  }
}
</script>

<template>
  <LeftBar/>
  <article class="contact-page">
    <h1 class="contact-page__title">Contact us!</h1> 
    <form class="contact-page__form" @submit.prevent="submitForm" action="mailto:sbulmar842@g.educaand.es">
      <input class="contact-page__form--input" type="text" v-model="title" placeholder="Title" required> 
      <p v-if="!isTitleValid" class="contact-page__form--error-message">Por favor ingresa un título de al menos 4 carácteres.</p>
      <input class="contact-page__form--input" type="email" v-model="email" placeholder="Email" required>
      <p v-if="!isEmailValid" class="contact-page__form--error-message">El correo electrónico debe terminar en .com o .es.</p>
      <textarea class="contact-page__form--textarea" cols="30" rows="5" v-model="message" placeholder="Message" required></textarea>
      <p v-if="!isMessageValid" class="contact-page__form--error-message">Por favor ingresa un mensaje de al menos 20 caracteres.</p>
      <button class="contact-page__form--button">Send</button>
      <p v-if="formSubmitted" class="contact-page__form--success-message">Formulario enviado</p>

    </form>
  </article>
  <RightButtons :is-disabled="isButtonDisabled" />
</template>

<style lang="css">
.contact-page{
    width:65vw;
    border:5vh solid #FF321D;

    & .contact-page__title{ 
        color: #FF321D;
        font-size: 7vh;
        text-transform: uppercase;
        font-family: "Kameron";
        text-align: center;
        margin: 4vh;
    }

    & .contact-page__form{
      width: 50vh;
      margin: 0 auto;

      & .contact-page__form--input, .contact-page__form--textarea, .contact-page__form--button {
        width: 40vh;
        display: block;
        margin: 1vh auto;
        font-family: "Kameron";
        padding: 2vh;
        background: #d9d9d9;
        font-size: 2vh;
        border: 2px solid #000;
      }

      & .contact-page__form--button{
        width: 44.5vh;
      }

      & .contact-page__form--error-message, .contact-page__form--success-message {
      color: red;
      width: 40vh;
      font-size: 1.3vh;
      border: 1px solid red;
      padding: 1vh 2vh;
      margin: 1vh auto;
      text-align:center;
      text-transform: uppercase;
      font-family: "Kameron";
      }

      & .contact-page__form--success-message {
        color: green;
        border: 1px solid green;
      }
    }
}
</style>
