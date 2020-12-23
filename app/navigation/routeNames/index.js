import { createNames } from '~/utils/navigation';

export const navigators = createNames(['auth', 'main', 'progress', 'privacyPolicy'], {
  prefix: 'navigators/',
});

export const auth = createNames(['signIn', 'setUpPassword', 'forgot'], {
  prefix: 'auth/',
});

export const main = createNames(['home', 'notification', 'profile'], {
  prefix: 'main/',
});

export const profile = createNames(['main'], {
  prefix: 'profile/',
});
