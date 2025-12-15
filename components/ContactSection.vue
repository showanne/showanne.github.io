<template>
  <section id="contact">
    <div class="section-title">CONTACT</div>
    <h2 class="section-heading">聯絡方式 · Contact</h2>
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
            <a :href="data.contact.linkedin" target="_blank">
              {{ data.contact.linkedin }}
            </a>
          </li>
          <li>
            <span class="contact-label">GitHub</span>
            <a :href="data.contact.github" target="_blank">
              {{ data.contact.github }}
            </a>
          </li>
          <li>
            <span class="contact-label">履歷下載</span>
            <a href="#" target="_blank">下載我的履歷（PDF）</a>
          </li>
        </ul>
      </div>
      <form class="contact-form">
        <div class="form-row">
          <div class="form-group">
            <label for="name">您的名字</label>
            <input id="name" type="text" placeholder="請輸入您的稱呼" />
          </div>
          <div class="form-group">
            <label for="email">聯絡 Email</label>
            <input id="email" type="email" placeholder="name@example.com" />
          </div>
        </div>
        <div class="form-group">
          <label for="message">想對我說的話</label>
          <textarea
            id="message"
            placeholder="歡迎洽談合作、面談或專案需求…"
          ></textarea>
        </div>
        <button type="submit" class="btn-primary">送出訊息（Demo）</button>
        <p class="contact-tip">
          此表單為展示用途，如需正式聯繫，請直接寄信至上方 Email。
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
  import data from '~/assets/data/portfolio.json';
</script>
