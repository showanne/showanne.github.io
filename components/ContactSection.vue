<script setup lang="ts">
  import data from '~/assets/data/portfolio.json';
  import { ref } from 'vue';

  defineProps({
    showForm: {
      type: Boolean,
      default: false
    }
  });

  const form = ref({
    name: '',
    email: '',
    message: ''
  });

  const submissionStatus = ref<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const statusMessage = ref('');

  async function handleSubmit() {
    submissionStatus.value = 'loading';
    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: form.value
      });
      submissionStatus.value = 'success';
      statusMessage.value = '感謝您的訊息，我會盡快回覆您！';
      form.value = { name: '', email: '', message: '' }; // Clear form
    } catch (error) {
      submissionStatus.value = 'error';
      statusMessage.value = '抱歉，訊息發送失敗，請稍後再試。';
    }
  }
</script>

<template>
  <section id="contact">
    <div class="section-title">CONTACT</div>
    <h2 class="section-heading">保持聯繫 · Get in Touch</h2>
    <div class="contact-grid">
      <div>
        <ul class="contact-list">
          <li>
            <span class="contact-label">Email</span>
            <a :href="'mailto:' + data.contact.email">{{
              data.contact.email
            }}</a>
          </li>
          <li>
            <span class="contact-label">LinkedIn</span>
            <a
              :href="data.contact.linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ data.contact.linkedin.replace('https://www.', '') }}
            </a>
          </li>
          <li>
            <span class="contact-label">GitHub</span>
            <a
              :href="data.contact.github"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ data.contact.github.replace('https://', '') }}
            </a>
          </li>
          <li>
            <span class="contact-label">履歷下載</span>
            <a href="#" target="_blank">下載我的履歷（PDF）</a>
          </li>
        </ul>
        <p v-if="!showForm" class="mt-4 text-gray-400">
          歡迎透過 Email 與我聯繫，或前往<NuxtLink to="/contact" class="link"
            >聯絡頁面</NuxtLink
          >查看更多資訊。
        </p>
      </div>
      <form v-if="showForm" class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="name">您的名字</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="請輸入您的稱呼"
              required
            />
          </div>
          <div class="form-group">
            <label for="email">聯絡 Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="message">想對我說的話</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="歡迎洽談合作、面談或專案需求…"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn-primary"
          :disabled="submissionStatus === 'loading'"
        >
          {{ submissionStatus === 'loading' ? '傳送中...' : '送出訊息' }}
        </button>
        <p
          v-if="submissionStatus === 'success' || submissionStatus === 'error'"
          class="contact-tip mt-3"
          :class="{
            'text-green-400': submissionStatus === 'success',
            'text-red-400': submissionStatus === 'error'
          }"
        >
          {{ statusMessage }}
        </p>
      </form>
    </div>
  </section>
</template>
