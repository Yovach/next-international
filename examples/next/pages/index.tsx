import React from 'react';
import { GetStaticProps } from 'next';
import { getLocaleStaticProps, useChangeLocale, useI18n } from '../locales';

const Home = () => {
  const { t, scopedT } = useI18n();
  const changeLocale = useChangeLocale();
  const t2 = scopedT('scope.more');

  return (
    <div>
      <p>Hello: {t('hello')}</p>
      <p>
        Hello:{' '}
        {t('welcome', {
          name: 'John',
        })}
      </p>
      <p>
        Hello:{' '}
        {t('about.you', {
          age: '23',
          name: 'Doe',
        })}
      </p>
      <p>{t2('test')}</p>
      <p>
        {t2('param', {
          param: 'test',
        })}
      </p>
      <p>{t2('and.more.test')}</p>
      <button type="button" onClick={() => changeLocale('en')}>
        EN
      </button>
      <button type="button" onClick={() => changeLocale('fr')}>
        FR
      </button>
    </div>
  );
};

// Comment this to disable SSR of initial locale
export const getStaticProps: GetStaticProps = getLocaleStaticProps();

export default Home;
