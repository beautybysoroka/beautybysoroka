<script setup lang="ts">
import {useDictionaryStore} from "@/utils/dictionary/dictionary";
import {storeToRefs} from "pinia";

const contacts = {
  EMAIL: 'mailto:beautybysoroka@gmail.com',
  INSTAGRAM: 'https://www.instagram.com/beautybysoroka/',
  PHONE: 'tel:+4591921235',
  WHATSAPP: 'https://wa.me/+79143366399',
  TELEGRAM: 'https://t.me/sorokamarie',
}
const contactsDetails = {

  EMAIL: 'beautybysoroka@gmail.com',
  INSTAGRAM: '@beautybysoroka',
  PHONE: '+45 91 92 1235',
  WHATSAPP: '+7 914 33 66 399',
  TELEGRAM: '@sorokamarie',
}

const dictStore = useDictionaryStore()
const { dict } = storeToRefs(dictStore)
</script>

<template>
  <footer id="contacts">
    <h2>{{ dict.contactMe }}</h2>
    <p class="footer__lets">{{ dict.helpYourBeauty }} </p>
    <div class="footer__links">
    <a :href="contacts.EMAIL" target="_blank"><img src="/assets/icons/email.svg" alt="email"><p>{{contactsDetails.EMAIL}}</p></a>
    <a :href="contacts.INSTAGRAM" target="_blank"><img src="/assets/icons/instagram.svg" alt="instagram"><p>{{contactsDetails.INSTAGRAM}}</p></a>
    <a :href="contacts.PHONE" target="_blank"><img src="/assets/icons/phone.svg" alt="phone"><p>{{contactsDetails.PHONE}}</p></a>
    <a :href="contacts.WHATSAPP" target="_blank"><img src="/assets/icons/whatsapp.svg" alt="whatsapp"><p>{{contactsDetails.WHATSAPP}}</p></a>
    <a :href="contacts.TELEGRAM" target="_blank"><img src="/assets/icons/telegram.svg" alt="telegram"><p>{{contactsDetails.TELEGRAM}}</p></a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  margin-top: 40px;
  text-align: center;

  h2 {
    font-size: 40px;
    margin-bottom: 0;
  }

}
.footer {
  &__links {
    display: flex;
    width: 80%;
    margin: 40px auto 60px;
    align-items: center;
    justify-content: space-between;
    grid-gap: 10px;
  }
  &__lets {
    transform: translateY(-10px);
  }
}
.footer__links a{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #1a1a1a;
  height: 50px;
  p {
    &:hover {
      color: #efc79b;
    }
  }

  img {
    width: 24px;
    color: #3d3c3c;
  }
}
@media (max-width: 768px) {
  .footer__links {

    flex-direction: column;
  }
}
</style>