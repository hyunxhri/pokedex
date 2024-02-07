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
      isButtonDisabled: true
    }
  }
}
</script>
<template>
        <LeftBar/>
        <article class="contact-page">
            <h1 class="contact-page__tittle">Contact us!</h1>
            <form class="contact-page__form">
                <input class="contact-page__form--input" type="text" placeholder="Name" required>
                <input class="contact-page__form--input" type="email" placeholder="Email" required>
                <textarea class="contact-page__form--textarea" name="" id="" cols="30" rows="10" placeholder="Message" required></textarea>
                <button class="contact-page__form--button">Send</button>
            </form>
        </article>
        <RightButtons :is-disabled="isButtonDisabled" />
</template>
<style lang="css">
    .contact-page{
        width:65vw;
        border:5vh solid #FF321D;

        & .contact-page__tittle{
            color: #FF321D;
            font-size: 7vh;
            text-transform: uppercase;
            font-family: "Kameron";
            text-align: center;
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

        }
    }
</style>