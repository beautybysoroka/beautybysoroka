<script setup lang="ts">
import BaseButton from '@/components/base/BaseButton.vue'
import { ref } from 'vue'
/*import emailjs from 'emailjs-com'*/

const isFormSubmited = ref(false)
const form = ref<Record<string, string>>({
  yourInstagram: '',
  event: '',
  date: '',
  time: '',
  location: '',
  service: '',
  additional:''
})

type InputField = {
  label: string
  placeholder: string
  value: string
}

const inputs:InputField[] = [
  {
    label: 'Your instagram page link',
    placeholder: 'instagram.com/your_profile',
    value: 'yourInstagram'
  },
  { label: 'Type of event ?',
    placeholder: 'Is it wedding, birthday etc',
    value: 'event'
  },
  { label: 'What is the happy date?',
    placeholder: 'December 1st 2025',
    value: 'date'
  },
  { label: 'What time does event start',
    placeholder: '10.00 am',
    value: 'time'
  },
  { label: 'Where do we do makeup?',
    placeholder: 'Your address',
    value: 'location'
  },
  { label: 'What do we do? ',
    placeholder: 'makeup+hair, bridesmaids etc ',
    value: 'service'
  },
  { label: 'Any additional requests? ',
    placeholder: '',
    value: 'additional'
  },
]

const submitForm = async () => {
  return

  /*try {
    await emailjs.sendForm(
        'your_service_id',   // e.g. "service_xxx"
        'your_template_id',  // e.g. "template_xxx"
        form.value,
        'your_public_key'    // e.g. "abc123XYZ"
    )
    alert('Message sent successfully!')
  } catch (error) {
    console.error('FAILED...', error)
    alert('Message failed to send.')
  }
  isFormSubmited.value = true*/
}
</script>

<template>
  <div class="questions-wrapper small-common-wrapper">
    <template v-if="!isFormSubmited">
      <h3>Lets fill simple form to find out your request</h3>
      <div class="questions-form">

        <template v-for="item in inputs">
          <p >{{ item.label }}</p>
          <input type="text" v-model="form[item.value]" :placeholder="item.placeholder">
        </template>

        <BaseButton :text="'submit'" @click="submitForm()"/>
      </div>
    </template>
    <h2 class="questions-thanks" v-else>Thanks for your request. I'll reach you out soon. Have a wonderfull day!</h2>
  </div>
</template>

<style scoped lang="scss">
.questions {
  &-wrapper {
    padding: 16px;
    text-transform: uppercase;

    label {
      margin-bottom: 8px;
    }

    input {
      background: #fff;
      border: none;
      border-bottom: 1px solid #848484;
      outline: none;
      min-height: 40px;
      color: #333333;
    }

    .button-block {
      min-width: 40%;
    }

    h3 {
      font-size: 20px;
      text-align: left;
      text-transform: uppercase;
    }
  }
  &-form {
    display: flex;
    flex-direction: column;
    text-align: left;

    input {
      margin-bottom: 20px;
    }
  }
  &-thanks {
   font-size: 25px;
  }

}
</style>