<template>
  <div class="app">
    <div class="profile-card">
      <div class="profile-image">
        <img src="./assets/snow-cat.webp" alt="Профиль" />
      </div>
      <div class="profile-info">
        <h1>Артём Калантарян (oskaldev)</h1>
        <div class="position">Software Engineer | 3+ years | PHP</div>
        <a
          class="cv-link"
          href="https://github.com/oskaldev/resume/raw/gh-pages/doc/artem_kalantaryan_cv.pdf"
        >
          <span class="cv">CV</span>
        </a>
        <div class="social-links">
          <a
            href="https://t.me/klartem"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/telegram.svg"
              alt="Telegram"
            />
          </a>
          <a
            href="https://github.com/oskaldev"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/github.svg"
              alt="Github"
            />
          </a>
          <a
            href="https://vk.com/oskaldev"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/vk-icon.svg" alt="VK" />
          </a>
          <a
            href="mailto:artem-kalantaryan@mail.ru"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg"
              alt="Email"
            />
          </a>
          <a
            href="https://leetcode.com/oskaldev"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-4-pack-logos-icons-3031905.png?f=webp&w=256"
              alt="LeetCode"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/oskaldev/"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/521725/linkedin.svg"
              alt="Linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    new Snow({
      snowBallIterationsInterval: 250,
    });
  },
};
</script>

<style scoped>
.app {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.profile-card {
  background-color: #181416;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.profile-image {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  padding: 20px;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-info h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffffff;
}

.cv {
  color: rgb(193, 22, 73);
  font-weight: bold;
}

.profile-info .position,
.profile-info,
.cv {
  font-size: 16px;
  margin-bottom: 10px;
  text-decoration: none !important;
  border: none !important;
}

.profile-info .position {
  font-weight: bold;
  color: #ffffff;
}

.cv-link {
  text-decoration: none;
}

.social-links {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.social-link {
  background-color: #6f6a6e;
  color: #ffffff;
  text-decoration: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.social-link:hover {
  background-color: #ffffff;
}

.social-link img {
  width: 20px;
  height: 20px;
}

@media (min-width: 768px) {
  .profile-card {
    flex-direction: row;
  }

  .profile-image {
    width: 33.33%;
    max-height: none;
  }

  .profile-info {
    width: 66.66%;
    padding: 30px;
    text-align: left;
    align-items: flex-start;
  }

  .profile-info h1 {
    font-size: 28px;
  }

  .profile-info .position {
    font-size: 18px;
  }

  .social-links {
    justify-content: flex-start;
  }
}
</style>
