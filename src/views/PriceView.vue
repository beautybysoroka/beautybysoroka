<script setup lang="ts">
import { homeTitle5 } from '@/constants/texts'
import { ref, computed } from 'vue'
import {useDictionaryStore} from "@/utils/dictionary/dictionary";
import {storeToRefs} from "pinia";

type Currency = 'dkk' | 'euro'

const currentCurrency = ref<Currency>('dkk')

const dictStore = useDictionaryStore()
const { isDanish, dict } = storeToRefs(dictStore)

const prices = {
  dkk: [
    { title: 'Makeup / Hairstyle', price: '900 dkk' },
    { title: 'Makeup plus hair', price: '1500 dkk' },
    { title: 'Arrival before 8am', price: '300 dkk' },
    { title: 'Bride + 1 Bridesmaid ', price: '2800 dkk' },
    { title: 'Bride + 2 Bridesmaids ', price: '4000 dkk' },
    { title: 'Bride + 3 Bridesmaids ', price: '5000 dkk' },
    { title: 'Areas not in greater CPH', price: 'DM me' },
    { title: 'Other cities in Europe', price: 'DM me' }
  ],
  euro: [
    { title: 'Makeup / Hairstyle', price: '120 €' },
    { title: 'Makeup plus hair', price: '200 €' },
    { title: 'Arrival before 8am', price: '40 €' },
    { title: 'Bride + 1 Bridesmaid', price: '370 €' },
    { title: 'Bride + 2 Bridesmaid', price: '530 €' },
    { title: 'Bride + 3 Bridesmaid', price: '665 €' },
    { title: 'Areas not in greater CPH', price: 'DM me' },
    { title: 'Other cities in Europe', price: 'Depends on distance' }
  ]
}
const makeup = {
  dkk: [
    { title: 'Makeup', price: '900 dkk' },
    { title: 'Hairstyle', price: '900 dkk' },
    { title: 'Makeup & hairstyle', price: '1500 dkk' }
  ],
  euro: [
    { title: 'Makeup', price: '120 €' },
    { title: 'Hairstyle', price: '120 €' },
    { title: 'Makeup & hairstyle', price: '200 €' }
  ]
}
const specialOffer = {
  dkk: [
    { title: 'Makeup + Hair', price: '1000 dkk' },
    { title: 'Photoshoot', price: 'check on the website' },
  ],
  euro: [
    { title: 'Makeup + Hair', price: '135 euro' },
    { title: 'Photoshoot', price: 'check on the website' },
  ]
}

const specialOffer_dk = {
  dkk: [
    { title: 'Makeup + Hår', price: '1000 dkk' },
    { title: 'Fotoshoot', price: 'tjek på hjemmesiden' },
  ],
  euro: [
    { title: 'Makeup + Hår', price: '135 €' },
    { title: 'Fotoshoot', price: 'tjek på hjemmesiden' },
  ]
}

const other = {
  dkk: [
    { title: 'Brows', price: '350 dkk' }
    /*,
    { title: 'Eyelashes', price: '250 dkk' }*/
  ],
  euro: [
    { title: 'Brows', price: '45 €' }
    /*,
    { title: 'Eyelashes', price: '35 €' }*/
  ]
}

 const prices_dk = {
  dkk: [
    { title: 'Makeup / Hårstyling', price: '900 dkk' },
    { title: 'Makeup og hår', price: '1500 dkk' },
    { title: 'Ankomst før kl. 08:00', price: '300 dkk' },
    { title: 'Brud + 1 brudepige', price: '2800 dkk' },
    { title: 'Brud + 2 brudepiger', price: '4000 dkk' },
    { title: 'Brud + 3 brudepiger', price: '5000 dkk' },
    { title: 'Områder uden for Storkøbenhavn', price: 'Skriv til mig' },
    { title: 'Andre byer i Europa', price: 'Skriv til mig' }
  ],
  euro: [
    { title: 'Makeup / Hårstyling', price: '120 €' },
    { title: 'Makeup og hår', price: '200 €' },
    { title: 'Ankomst før kl. 08:00', price: '40 €' },
    { title: 'Brud + 1 brudepige', price: '370 €' },
    { title: 'Brud + 2 brudepiger', price: '530 €' },
    { title: 'Brud + 3 brudepiger', price: '665 €' },
    { title: 'Områder uden for Storkøbenhavn', price: 'Skriv til mig' },
    { title: 'Andre byer i Europa', price: 'Afhænger af afstand' }
  ]
}

 const makeup_dk = {
  dkk: [
    { title: 'Makeup', price: '900 dkk' },
    { title: 'Hårstyling', price: '900 dkk' },
    { title: 'Makeup og hår', price: '1500 dkk' }
  ],
  euro: [
    { title: 'Makeup', price: '120 €' },
    { title: 'Hårstyling', price: '120 €' },
    { title: 'Makeup og hår', price: '200 €' }
  ]
}

 const other_dk = {
  dkk: [
    { title: 'Bryn', price: '350 dkk' }
    /*,
    { title: 'Øjenvipper', price: '250 dkk' }*/
  ],
  euro: [
    { title: 'Bryn', price: '45 €' }
    /*,
    { title: 'Øjenvipper', price: '35 €' }*/
  ]
}

const currentPrices = computed(() => isDanish.value ? prices_dk : prices)
const currentMakeup = computed(() => isDanish.value ? makeup_dk : makeup)
const currentOther = computed(() => isDanish.value ? other_dk : other)
const special = computed(() => isDanish.value ? specialOffer_dk : specialOffer)


const changeCurrency = (currency: Currency) => { currentCurrency.value = currency }

</script>

<template>
<div class="price__wrapper small-common-wrapper">
  <h2>{{homeTitle5}}</h2>
  <div class="price__currency">
    <p @click="changeCurrency('dkk')" :class="{'price__currency_active': currentCurrency === 'dkk'}">Dkk</p>
    <p>/</p>
    <p @click="changeCurrency('euro')" :class="{'price__currency_active': currentCurrency === 'euro'}">Euro</p>
  </div>
  <h4>{{ dict.brides }}</h4>
  <div class="price-block" v-for="(price, index) in currentPrices[currentCurrency]" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
  <p class="price__bridal-includes">{{dict.brideIncludes}}</p>
  <p>{{ dict.eyelashes }}</p>
  <p>{{dict.touch}}</p>
  <p>{{dict.transit}}</p>
  <h4>{{dict.events}}</h4>
  <div class="price-block" v-for="(price, index) in currentMakeup[currentCurrency]" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
  <h4>{{dict.offer}}</h4>
  <p class="price__about-V">{{dict.studio_photo_shoot_with}} <a href="https://www.victoriafotograf.dk/" target="_blank">Victoria fotograf</a>
    {{dict.there_is_a}}</p>
  <div class="price-block" v-for="(price, index) in special[currentCurrency]" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <a v-if="index === 1" href="https://www.victoriafotograf.dk/investment" target="_blank" class="price-block__price price-block__price_orange">{{price.price}}</a>
    <p v-else class="price-block__title">{{price.price}}</p>
  </div>
  <h4>{{ dict.other }}</h4>
  <div class="price-block" v-for="(price, index) in currentOther[currentCurrency]" :key="index">
    <p class="price-block__title">{{price.title}}</p>
    <p class="price-block__price">{{price.price}}</p>
  </div>
</div>
</template>

<style scoped lang="scss">
.price {
  &__about-V{
    margin-bottom: 20px;
    a {
      color: #efc79b;
    }
  }
  &__currency {
    display: flex;
    grid-gap: 4px;

    &:hover { cursor: pointer }

    &_active {
      transition: .5s;
      color: #efc79b;
    }
  }
  &__wrapper {
    h2 {
      font-size: 24px;
    }
    h4 {
      text-transform: uppercase;
      margin-top: 40px;
    }
    padding: 16px;
    text-align: left;

    .price-block {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      &__price {
        &_orange {
          color: #efc79b !important;
        }
      }
    }
  }
  &__bridal-includes{
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 20px;
  }
}


</style>