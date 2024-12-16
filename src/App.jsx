import styles from './App.module.css';
import vkicon from './assets/vk-icon.svg';
import snowCat from './assets/snow-cat.webp';

function App() {
  new Snow({
    snowBallIterationsInterval: 250,
  });
  return (
    <div className={styles.App}>
      <div className={styles.profileCard}>
        <div className={styles.profileImage}>
          <img src={snowCat} alt='Профиль' />
        </div>
        <div className={styles.profileInfo}>
          <h1>Артём Калантарян (oskaldev)</h1>
          <div className={styles.position}>Frontend developer</div>
          <a
            className={styles.cvLink}
            href='https://github.com/oskaldev/resume/raw/gh-pages/doc/artem_kalantaryan_cv.pdf'>
            <span className={styles.cv}>CV</span>
          </a>
          <div className={styles.socialLinks}>
            <a
              href='https://t.me/klartem'
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/telegram.svg'
                alt='Telegram'
              />
            </a>
            <a
              href='https://github.com/oskaldev'
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/github.svg'
                alt='Github'
              />
            </a>
            <a
              href='https://vk.com/oskaldev'
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'>
              <img src={vkicon} alt='VK' />
            </a>
            <a
              href='mailto:artem-kalantaryan@mail.ru'
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg'
                alt='Email'
              />
            </a>
            <a
              href='https://leetcode.com/oskaldev'
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src='https://cdn.iconscout.com/icon/free/png-512/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-4-pack-logos-icons-3031905.png?f=webp&w=256'
                alt='LeetCode'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/oskaldev/'
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'>
              <img src='https://www.svgrepo.com/show/521725/linkedin.svg' alt='Linkedin' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
