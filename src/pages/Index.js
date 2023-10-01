import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative bg-gray-800 overflow-hidden'>
          <div className='hidden lg:block absolute top-0 right-0 w-full max-w-sm 2xl:max-w-xl h-full bg-white'>
            <div className='relative h-full w-full flex items-center'>
              <div className='absolute left-0 top-0 h-144 w-144 -ml-72 mt-32 border border-blue-50 rounded-full' />
              <img
                className='relative max-h-160 -ml-40 2xl:-ml-64'
                src='images/two-phones2.png'
                alt=''
              />
            </div>
          </div>
          <nav className='relative mb-10 lg:mb-0'>
            <div className='flex py-8 px-4 lg:px-8 justify-between items-center'>
              <a className='mr-40 text-2xl text-white font-bold' href='#'>
                <img
                  className='h-12'
                  src='https://smart-bankir.ru/images/smartbank-black-transparent-white.png'
                  alt=''
                  width='auto'
                  contentEditable='false'
                />
              </a>
              <div className='2xl:hidden'>
                <button className='p-2 navbar-burger'>
                  <svg
                    className='w-10 h-3'
                    width={39}
                    height={13}
                    viewBox='0 0 39 13'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width={39} height={2} rx={1} fill='#C4C4C4' />
                    <rect
                      x={19}
                      y={11}
                      width={20}
                      height={2}
                      rx={1}
                      fill='#C4C4C4'
                    />
                  </svg>
                </button>
              </div>
              <div className='hidden 2xl:block mr-auto'>
                <ul className='flex items-center space-x-16'>
                  <li>
                    <a className='text-white font-bold text-lg' href='#'>
                      Кредиторам
                    </a>
                  </li>
                  <li>
                    <a className='text-white font-bold text-lg' href='#'>
                      Заемщикам
                    </a>
                  </li>
                </ul>
              </div>
              <div className='hidden lg:block'>
                <a
                  className='mr-10 text-lg font-bold border-b border-gray-900'
                  href='#'
                  contentEditable='false'
                >
                  Как работает?
                </a>
                <a
                  className='inline-block px-12 py-4 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                  href='#'
                >
                  КАБИНЕТ
                </a>
              </div>
            </div>
          </nav>
          <div className='container px-4 pb-20 mx-auto'>
            <div className='lg:max-w-md mt-20 mb-20 lg:mb-40'>
              <h2
                className='mb-12 font-bold font-heading text-white text-6xl'
                contentEditable='false'
              >
                СМАРТ БАНКИР
              </h2>
              <p
                className='mb-12 lg:mb-24 text-xl text-gray-200'
                contentEditable='false'
              >
                Новое Слово в Мире Финансов SMART-BANKIR - это передовая
                платформа, предназначенная для обеспечения взаимной финансовой
                поддержки.&nbsp; Мы создали современную, легкую в использовании
                и интеллектуальную систему, которая позволяет инвестировать и
                получать займы на самых выгодных условиях.
              </p>
              <a
                className='inline-block px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                href='#'
              >
                Смотреть ролик
              </a>
            </div>
            <div className='max-w-3xl flex flex-wrap items-center -m-4'>
              <div className='w-1/2 lg:w-1/4 p-4' contentEditable='false'></div>
              <div className='w-1/2 lg:w-1/4 p-4'></div>
            </div>
          </div>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto'>
              <div className='flex items-center mb-16 pr-6'>
                <a
                  className='ml-10 mr-auto text-2xl text-gray-800 font-bold'
                  href='#'
                >
                  <img
                    className='h-7'
                    src='https://smart-bankir.ru/images/png-logo.png'
                    alt=''
                    width='auto'
                  />
                </a>
              </div>
              <div>
                <ul>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Product
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Story
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Features
                    </a>
                  </li>
                  <li className='mb-1 px-10'>
                    <a
                      className='block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-auto px-10'>
                <div className='pt-6'>
                  <a
                    className='block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full'
                    href='#'
                  >
                    Как работает?
                  </a>
                  <a
                    className='block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                    href='#'
                  >
                    КАБИНЕТ
                  </a>
                </div>
                <p className='mt-6 mb-4 text-lg text-center'>
                  <span>2021 © Zospace. All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
          <div className='header_indiator'>
            <div className='progress-container'>
              <div className='progress-bar bg-blue-500' id='myBar' />
            </div>
          </div>
          <div>content...</div>
        </section>
        <section className='relative pt-20 2xl:pt-40'>
          <div className='container px-4 mx-auto mb-16 md:mb-24'>
            <div className='text-center'>
              <a className='inline-block mb-8 text-2xl font-bold' href='#'>
                <img
                  className='h-12'
                  src='https://smart-bankir.ru/images/png_logo_black.png'
                  alt=''
                  width='auto'
                  contentEditable='false'
                />
              </a>
              <h2
                className='mb-8 text-6xl 2xl:text-7xl font-bold font-heading'
                contentEditable='false'
              >
                Сделки в Движении
              </h2>
              <p className='mb-16 text-xl' contentEditable='false'>
                Ваше Мобильное Приложение для Финансовых Сделок
              </p>
            </div>
          </div>
          <div className='relative'>
            <div className='hidden lg:block absolute right-0 top-0 mt-24 w-1/2 h-px bg-gray-50' />
            <div className='hidden lg:block absolute left-0 top-0 mt-40 w-1/2 h-px bg-gray-50' />
            <img
              className='lg:relative lg:max-w-4xl mx-auto'
              src='images/smartphone.png'
              alt=''
            />
          </div>
        </section>
        <section className='py-20 2xl:py-40 bg-gray-800 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='relative px-8 lg:pr-0 lg:pl-12 2xl:pl-24 mb-14 lg:mb-40 bg-gray-600 rounded-xl overflow-hidden'>
              <div className='w-full lg:w-1/3 pt-12 lg:py-12'>
                <h3 className='mb-4 text-xl font-bold text-white'>
                  И так - начнем!
                </h3>
                <p className='text-xl text-gray-300'>
                  Наши инновационные методы предоставления финансовых услуг
                  делают процесс быстрым и удобным для каждого пользователя.
                </p>
              </div>
              <img
                className='lg:absolute top-0 right-0 bottom-0 h-full w-full lg:w-1/3 object-cover'
                src='zospace-assets/images/illustration-men-phone.svg'
                alt=''
              />
            </div>
            <div className='relative flex flex-wrap justify-center -mx-10 mb-20'>
              <img
                className='hidden lg:block absolute inset-y-0 -mr-80 -mt-16'
                src='zospace-assets/lines/dots-gray.svg'
                alt=''
              />
              <div className='w-full lg:w-1/3 px-10 mb-20 lg:mb-0'>
                <div className='relative flex'>
                  <img
                    className='hidden lg:block absolute top-0 right-0 -mr-20 -mt-16'
                    src='zospace-assets/lines/dots-gray.svg'
                    alt=''
                  />
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      1
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading text-white'>
                      Регистрация
                    </h3>
                    <p className='text-lg text-gray-200'>
                      Вам нужно всего лишь зарегистрироваться на нашей
                      платформе. Этот процесс прост и быстр. Вы вводите
                      необходимую информацию и создаете свой аккаунт.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-10 mb-20 lg:mb-0'>
                <div className='flex'>
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      2
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading text-white'>
                      Выбор Роли
                    </h3>
                    <p className='text-lg text-gray-200'>
                      После регистрации вы выбираете свою роль на платформе:
                      Кредитор или Заемщик. Если вы хотите инвестировать,
                      выбираете Кредитора. Если вам нужен займ, становитесь
                      Заемщиком.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-10'>
                <div className='flex'>
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      3
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading text-white'>
                      Вот и все!
                    </h3>
                    <p className='text-lg text-gray-200'>
                      Проводите свои финансовые операции без скрытых расходов и
                      лишних затрат!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <a
                className='inline-block px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                href='#'
              >
                How it works?
              </a>
            </div>
          </div>
        </section>
        <section className='py-20 2xl:py-40 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='mb-10 max-w-xl mx-auto mb-28 text-center'>
              <span className='text-lg font-bold text-blue-500'>
                Как это работает?
              </span>
              <h2 className='mt-12 text-5xl text-4 font-bold font-heading'>
                <div contentEditable='false' className='text-4xl'>
                  Инновационная Платформа <br /> Финансовых Решений
                </div>
                <div>
                  <br />
                </div>
              </h2>
            </div>
            <div className='relative flex flex-wrap justify-center -mx-10'>
              <img
                className='hidden lg:block absolute inset-y-0 -mr-80 -mt-16'
                src='zospace-assets/lines/dots.svg'
                alt=''
              />
              <div className='w-full lg:w-1/3 px-10 mb-24'>
                <div className='relative flex'>
                  <img
                    className='hidden lg:block absolute top-0 right-0 -mr-24 2xl:mr-0 -mt-16'
                    src='zospace-assets/lines/dots.svg'
                    alt=''
                  />
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      1
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading'>
                      Рост Доверия
                    </h3>
                    <p className='text-lg'>
                      Постоянное использование нашей платформы и своевременное
                      выполнение финансовых обязательств помогут вам повысить
                      ваш рейтинг и получать более выгодные условия в будущем.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-10 mb-24'>
                <div className='flex'>
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      2
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading'>
                      Просто и прозрачно
                    </h3>
                    <p className='text-lg'>
                      это основные принципы нашей работы. Мы создали платформу,
                      которая помогает людям легко управлять своими финансами и
                      достигать своих целей.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-10 mb-24'>
                <div className='flex'>
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      3
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading'>
                      Инвестирование
                    </h3>
                    <p className='text-lg'>
                      Если вы Кредитор, вы инвестируете деньги в заявки
                      Заемщиков, которые соответствуют вашим параметрам. Это
                      прозрачный процесс без скрытых комиссий.
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative w-full lg:w-1/3 px-10 mb-24'>
                <img
                  className='hidden lg:block absolute right-0 -mr-12 2xl:mr-0 -mt-12'
                  src='zospace-assets/lines/dots.svg'
                  alt=''
                />
                <div className='flex'>
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      4
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading'>
                      Оценка Доверия
                    </h3>
                    <p className='text-lg'>
                      Наша система автоматически оценивает каждого пользователя
                      на платформе, учитывая их историю и платежеспособность.
                      Это помогает предотвратить мошенничество и устанавливать
                      надежные связи.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-10 mb-24'>
                <div className='flex'>
                  <div className='mr-8'>
                    <span className='flex justify-center items-center w-14 h-14 text-white bg-blue-500 text-lg font-bold rounded-full'>
                      5
                    </span>
                  </div>
                  <div className='max-w-xs'>
                    <h3 className='mb-6 text-lg font-bold font-heading'>
                      Безопасность и Поддержка
                    </h3>
                    <p className='text-lg'>
                      Мы обеспечиваем высокий уровень безопасности ваших данных
                      и транзакций. В случае возникновения вопросов или проблем,
                      наша служба поддержки всегда готова помочь.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <a
                className='inline-block px-12 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                href='#'
              >
                Попробовать!
              </a>
            </div>
          </div>
        </section>
        <section className='2xl:py-40 bg-gray-800'>
          <div className='container px-4 mx-auto'>
            <div className='relative max-w-xl mx-auto mb-16 pb-16 text-center border-b border-gray-400'>
              <h2 className='text-white font-bold font-heading lg:text-4xl lgxl:text-4'>
                Выберите Вашу роль
              </h2>
              <p className='text-lg text-gray-200'>в Мире Финансов</p>
              <img
                className='absolute bottom-0 right-0 -mb-8 mr-32'
                src='zospace-assets/lines/arrow-blue.svg'
                alt=''
              />
            </div>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap -m-4'>
                <div className='w-full lg:w-1/2 p-4'>
                  <div className='pt-16 pb-20 px-14 bg-gray-500 rounded-3xl'>
                    <div className='flex mb-14'>
                      <div>
                        <h3 className='mb-3 text-4xl font-bold font-heading text-white'>
                          Я Заемщик
                        </h3>
                        <p className='text-lg font-bold text-white'>
                          Быстро и удобно!
                        </p>
                      </div>
                    </div>
                    <ul className='text-center mb-12 text-white pb-12 border-b border-gray-400'>
                      <li className='py-4 text-lg rounded-2xl bg-gray-700'>
                        1445 кредитных предложений
                      </li>
                      <li className='py-4 text-lg'>БЕЗ скрытых платежей</li>
                      <li className='py-4 flex items-center justify-center text-lg rounded-2xl bg-gray-700'>
                        <svg
                          className='mr-2'
                          width={20}
                          height={16}
                          viewBox='0 0 20 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.81671 15.0416L0 8.22485L0.90027 7.32458L6.81671 13.241L19.0997 0.958008L20 1.85828L6.81671 15.0416Z'
                            fill='white'
                          />
                        </svg>
                        <span>БЕЗ комисий</span>
                      </li>
                    </ul>
                    <div className='text-center'>
                      <p className='text-lg mb-10 lg:px-20 text-gray-200'>
                        Заемщики получают доступ к лучшим предложениям, с
                        возможностью выбора наиболее выгодных условий.
                      </p>
                      <a
                        className='inline-block text-center px-12 py-4 text-white font-bold border border-gray-200 hover:border-gray-100 rounded-full'
                        href='#'
                      >
                        Попробовать
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 p-4'>
                  <div className='pt-16 pb-20 px-14 bg-blue-500 rounded-3xl'>
                    <div className='flex mb-14'>
                      <div>
                        <h3 className='mb-3 text-4xl font-bold font-heading text-white'>
                          Я Кредитор
                        </h3>
                        <p className='text-lg font-bold text-white'>
                          Просто и выгодно!
                        </p>
                      </div>
                    </div>
                    <ul className='text-center mb-12 text-white pb-12 border-b border-gray-200'>
                      <li className='py-4 text-lg rounded-2xl bg-blue-600'>
                        1334 заявок на получение зама
                      </li>
                      <li className='py-4 text-lg'>БЕЗ скрытых платежей</li>
                      <li className='py-4 flex items-center justify-center text-lg rounded-2xl bg-blue-600'>
                        <svg
                          className='mr-2'
                          width={20}
                          height={16}
                          viewBox='0 0 20 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6.81671 15.0416L0 8.22485L0.90027 7.32458L6.81671 13.241L19.0997 0.958008L20 1.85828L6.81671 15.0416Z'
                            fill='white'
                          />
                        </svg>
                        <span>БЕЗ комиссий</span>
                      </li>
                    </ul>
                    <div className='text-center'>
                      <p className='text-lg mb-10 lg:px-20 text-white'>
                        Кредиторы могут безопасно и уверенно инвестировать в
                        максимизируя свою прибыль и минимизируя риски.
                      </p>
                      <a
                        className='inline-block text-center px-12 py-4 text-white font-bold border border-white hover:border-gray-100 rounded-full'
                        href='#'
                      >
                        Попробовать
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-20 2xl:py-40 bg-gray-800 overflow-hidden'>
          <div className='absolute h-40 w-40 bg-blue-500 bottom-0 right-0 -mr-20 -mb-20 rounded-full' />
          <div className='container px-4 mx-auto'>
            <div>
              <div className='flex flex-wrap -mx-6 lg:-mx-8'>
                <div className='w-full md:w-1/2 lg:w-1/3 px-6 lg:px-8 mb-20 lg:mb-0'>
                  <span className='flex mb-10 justify-center items-center w-20 h-20 bg-blue-500 rounded-lg'>
                    <svg
                      className='w-8 h-8'
                      width={35}
                      height={35}
                      viewBox='0 0 35 35'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0)'>
                        <path
                          d='M22.6042 34.9999H2.1875C0.981458 34.9999 0 34.0185 0 32.8124V12.3958C0 11.1897 0.981458 10.2083 2.1875 10.2083H22.6042C23.8102 10.2083 24.7917 11.1897 24.7917 12.3958V32.8124C24.7917 34.0185 23.8102 34.9999 22.6042 34.9999ZM2.1875 11.6666C1.78646 11.6666 1.45833 11.9933 1.45833 12.3958V32.8124C1.45833 33.2149 1.78646 33.5416 2.1875 33.5416H22.6042C23.0052 33.5416 23.3333 33.2149 23.3333 32.8124V12.3958C23.3333 11.9933 23.0052 11.6666 22.6042 11.6666H2.1875Z'
                          fill='white'
                        />
                        <path
                          d='M34.2702 5.83333C33.8677 5.83333 33.541 5.50667 33.541 5.10417V3.64583C33.541 2.43979 32.5596 1.45833 31.3535 1.45833H29.8952C29.4927 1.45833 29.166 1.13167 29.166 0.729167C29.166 0.326667 29.4927 0 29.8952 0H31.3535C33.3646 0 34.9993 1.63625 34.9993 3.64583V5.10417C34.9993 5.50667 34.6727 5.83333 34.2702 5.83333Z'
                          fill='white'
                        />
                        <path
                          d='M6.56217 5.83333C6.15967 5.83333 5.83301 5.50667 5.83301 5.10417V3.64583C5.83301 1.63625 7.4678 0 9.47884 0H10.9372C11.3397 0 11.6663 0.326667 11.6663 0.729167C11.6663 1.13167 11.3397 1.45833 10.9372 1.45833H9.47884C8.2728 1.45833 7.29134 2.43979 7.29134 3.64583V5.10417C7.29134 5.50667 6.96467 5.83333 6.56217 5.83333Z'
                          fill='white'
                        />
                        <path
                          d='M24.0618 1.45833H16.7702C16.3677 1.45833 16.041 1.13167 16.041 0.729167C16.041 0.326667 16.3677 0 16.7702 0H24.0618C24.4643 0 24.791 0.326667 24.791 0.729167C24.791 1.13167 24.4643 1.45833 24.0618 1.45833Z'
                          fill='white'
                        />
                        <path
                          d='M31.3535 29.1666H29.8952C29.4927 29.1666 29.166 28.8399 29.166 28.4374C29.166 28.0349 29.4927 27.7083 29.8952 27.7083H31.3535C32.5596 27.7083 33.541 26.7268 33.541 25.5208V24.0624C33.541 23.6599 33.8677 23.3333 34.2702 23.3333C34.6727 23.3333 34.9993 23.6599 34.9993 24.0624V25.5208C34.9993 27.5303 33.3646 29.1666 31.3535 29.1666Z'
                          fill='white'
                        />
                        <path
                          d='M34.2702 18.9583C33.8677 18.9583 33.541 18.6316 33.541 18.2291V10.9374C33.541 10.5349 33.8677 10.2083 34.2702 10.2083C34.6727 10.2083 34.9994 10.5349 34.9994 10.9374V18.2291C34.9994 18.6316 34.6727 18.9583 34.2702 18.9583Z'
                          fill='white'
                        />
                      </g>
                    </svg>
                  </span>
                  <div className='pb-px mb-12 bg-gray-500' />
                  <h3
                    className='mt-12 mb-8 text-lg font-bold font-heading text-white'
                    contentEditable='false'
                  >
                    Без скрытых комиссий
                  </h3>
                  <p className='text-lg text-gray-200' contentEditable='false'>
                    Присоединяйтесь к нам, чтобы проводить финансовые операции,
                    где нет места навязчивой бюрократии и надоедливым банкам.
                  </p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 px-6 lg:px-8 mb-20 lg:mb-0'>
                  <span className='flex mb-10 justify-center items-center w-20 h-20 bg-violet-500 rounded-lg'>
                    <svg
                      className='w-8 h-8'
                      width={35}
                      height={35}
                      viewBox='0 0 35 35'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0)'>
                        <path
                          d='M24.0625 18.9583C23.7402 18.9583 23.431 18.8927 23.1467 18.7615L17.5 16.1175L11.8592 18.7585C11.569 18.8927 11.2598 18.9583 10.9375 18.9583C9.73146 18.9583 8.75 17.9769 8.75 16.7708C8.75 16.4529 8.81417 16.1583 8.94833 15.8681L15.5079 1.28917C15.8419 0.510417 16.6265 0 17.5 0C18.3735 0 19.1581 0.510417 19.4965 1.30083L26.0546 15.874C26.1858 16.1583 26.25 16.4529 26.25 16.7708C26.25 17.9769 25.2685 18.9583 24.0625 18.9583ZM17.5 14.5833C17.605 14.5833 17.7115 14.6067 17.8092 14.6519L23.7592 17.4373C24.166 17.6225 24.7917 17.2856 24.7917 16.7708C24.7917 16.6629 24.7712 16.5754 24.7275 16.4763L18.1621 1.88854C17.9346 1.35771 17.061 1.36792 16.8423 1.87833L10.2754 16.4719C10.2287 16.5754 10.2083 16.6629 10.2083 16.7708C10.2083 17.2856 10.8092 17.6327 11.2467 17.4358L17.1908 14.6533C17.2885 14.6067 17.395 14.5833 17.5 14.5833Z'
                          fill='white'
                        />
                        <path
                          d='M17.4997 35C8.65488 35 1.45801 27.8031 1.45801 18.9583C1.45801 12.9194 4.7903 7.46227 10.154 4.71769C10.507 4.53685 10.9518 4.6754 11.1355 5.0356C11.3193 5.3929 11.1763 5.83331 10.8176 6.0156C5.94384 8.50936 2.91634 13.4691 2.91634 18.9583C2.91634 26.9996 9.45842 33.5417 17.4997 33.5417C25.5409 33.5417 32.083 26.9996 32.083 18.9583C32.083 13.4794 29.0613 8.51956 24.1963 6.0156C23.8376 5.83185 23.6961 5.39144 23.8813 5.03414C24.0665 4.67539 24.507 4.53539 24.8628 4.7206C30.2163 7.47394 33.5413 12.931 33.5413 18.9583C33.5413 27.8031 26.3445 35 17.4997 35Z'
                          fill='white'
                        />
                      </g>
                    </svg>
                  </span>
                  <div className='pb-px mb-12 bg-gray-500' />
                  <h3
                    className='mt-12 mb-8 text-lg font-bold font-heading text-white'
                    contentEditable='false'
                  >
                    Надежность в каждой сделке
                  </h3>
                  <p className='text-lg text-gray-200' contentEditable='false'>
                    Наши проверенные кредиторы готовы предложить вам выгодные
                    условия. Заполните заявку и получите нужную сумму с
                    минимальными усилиями.
                  </p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 px-6 lg:px-8 mb-10 lg:mb-0'>
                  <span className='flex mb-10 justify-center items-center w-20 h-20 bg-green-500 rounded-lg'>
                    <svg
                      className='w-8 h-8'
                      width={36}
                      height={35}
                      viewBox='0 0 36 35'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0)'>
                        <path
                          d='M32.25 35H5.25C3.183 35 1.5 33.3638 1.5 31.3542V3.64588C1.5 3.24338 1.836 2.91672 2.25 2.91672C2.664 2.91672 3 3.24338 3 3.64588V31.3542C3 32.5603 4.0095 33.5417 5.25 33.5417H31.5V6.56255C31.5 6.16005 31.836 5.83338 32.25 5.83338C32.664 5.83338 33 6.16005 33 6.56255V34.2709C33 34.6734 32.664 35 32.25 35Z'
                          fill='white'
                        />
                        <path
                          d='M32.25 7.29167H5.25C3.183 7.29167 1.5 5.65542 1.5 3.64583C1.5 1.63625 3.183 0 5.25 0H29.25C29.664 0 30 0.326667 30 0.729167V5.83333H32.25C32.664 5.83333 33 6.16 33 6.5625C33 6.965 32.664 7.29167 32.25 7.29167ZM5.25 1.45833C4.0095 1.45833 3 2.43979 3 3.64583C3 4.85187 4.0095 5.83333 5.25 5.83333H28.5V1.45833H5.25Z'
                          fill='white'
                        />
                        <path
                          d='M12.9868 27.7055C12.2338 27.7055 11.6158 27.4897 11.1718 27.0566C10.2898 26.1991 10.2808 24.6838 11.1478 22.7866C11.9158 21.1051 13.3018 19.2443 15.0478 17.5482C16.7938 15.8507 18.7063 14.5047 20.4358 13.7565C22.3858 12.9122 23.9443 12.9209 24.8278 13.7799C25.7098 14.6374 25.7188 16.154 24.8518 18.0499C24.0838 19.7313 22.6978 21.5922 20.9518 23.2882C19.2058 24.9857 17.2933 26.3318 15.5638 27.0799C14.5963 27.4955 13.7263 27.7055 12.9868 27.7055ZM23.0143 14.582C22.5043 14.582 21.8188 14.754 21.0448 15.088C19.4803 15.7647 17.7268 17.0043 16.1068 18.5778C14.4868 20.1513 13.2148 21.8561 12.5188 23.3772C11.9488 24.627 11.8378 25.6405 12.2323 26.024C12.6268 26.4076 13.6693 26.2997 14.9548 25.7455C16.5193 25.0688 18.2728 23.8293 19.8928 22.2557C21.5128 20.6822 22.7863 18.9774 23.4823 17.4549C24.0523 16.2051 24.1633 15.1916 23.7688 14.808C23.6113 14.6563 23.3503 14.582 23.0143 14.582Z'
                          fill='white'
                        />
                        <path
                          d='M23.0128 27.7054C22.2733 27.7054 21.4033 27.4969 20.4358 27.0784C18.7063 26.3317 16.7923 24.9842 15.0478 23.2867C13.3018 21.5892 11.9173 19.7298 11.1478 18.0484C10.2808 16.1525 10.2898 14.6359 11.1718 13.7784C12.0523 12.9209 13.6138 12.9121 15.5638 13.755C17.2933 14.5017 19.2073 15.8492 20.9518 17.5467C22.6978 19.2442 24.0823 21.1036 24.8518 22.785C25.7188 24.6823 25.7098 26.1975 24.8278 27.055C24.3838 27.4882 23.7658 27.7054 23.0128 27.7054ZM12.9853 14.5819C12.6478 14.5819 12.3898 14.6563 12.2323 14.8094C11.8378 15.1929 11.9488 16.2065 12.5188 17.4563C13.2148 18.9773 14.4898 20.6821 16.1083 22.2571C17.7268 23.8321 19.4803 25.0702 21.0463 25.7469C22.3318 26.3025 23.3743 26.4075 23.7688 26.0254C24.1633 25.6419 24.0523 24.6284 23.4823 23.3786C22.7863 21.8575 21.5113 20.1527 19.8928 18.5777C18.2743 17.0027 16.5208 15.7646 14.9548 15.0879C14.1808 14.754 13.4953 14.5819 12.9853 14.5819ZM11.7013 14.2932H11.7163H11.7013Z'
                          fill='white'
                        />
                      </g>
                    </svg>
                  </span>
                  <div className='pb-px mb-12 bg-gray-500' />
                  <h3
                    className='mt-12 mb-8 text-lg font-bold font-heading text-white'
                    contentEditable='false'
                  >
                    Ваш капитал в надежных руках
                  </h3>
                  <p className='text-lg text-gray-200' contentEditable='false'>
                    Инвестируйте без риска. Мы подбираем для вас наилучшие
                    предложения, чтобы ваш капитал приносил максимальную
                    прибыль.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-blue-600 py-20 2xl:py-40 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-4xl mx-auto text-center'>
              <span className='text-white font-bold'>
                Никаких Ожиданий - Ваше Время Ценится
              </span>
              <h2 className='my-8 mb-20 text-6xl lg:text-7xl text-white font-bold font-heading'>
                Готовы Перейти на Следующий Уровень?
              </h2>
              <a
                className='inline-block py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-400 rounded-full transition duration-200'
                href='#'
              >
                Давайте начнем!
              </a>
            </div>
          </div>
        </section>
        <section className='py-20 2xl:py-40 bg-gray-800'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-5xl mx-auto'>
              <div className='relative pt-16 px-6 lg:px-24 pb-20 bg-gray-600 rounded-3xl overflow-hidden'>
                <img
                  className='absolute top-0 left-0'
                  src='zospace-assets/lines/blue-half-circle.svg'
                  alt=''
                />
                <img
                  className='hidden lg:block absolute top-0 right-0 mt-6 mr-12'
                  src='zospace-assets/images/stars.svg'
                  alt=''
                />
                <img
                  className='hidden lg:block absolute top-0 right-0 w-96 h-96 -mt-14 -mr-14'
                  src='zospace-assets/lines/circle.svg'
                  alt=''
                />
                <div className='relative'>
                  <span className='text-base lg:text-lg text-white font-bold'>
                    Инновационная Платформа Для Финансовых Решений
                  </span>
                  <h3 className='mt-6 mb-12 text-white font-bold font-heading text-4xl'>
                    Защита Ваших Прав - Наш Приоритет
                  </h3>
                  <p className='text-gray-200'>
                    <span>
                      Мы гарантируем вам доступ к точной и актуальной
                      информации, позволяя принимать взвешенные решения и
                      эффективно управлять рисками. И неважно, кто вы: инвестор
                      или заемщик, наша система обеспечивает оптимальные условия
                      для достижения ваших финансовых амбиций.&nbsp; В
                      дополнение ко всему, мы заботимся о безопасности ваших
                      данных и предлагаем интуитивно понятный интерфейс.&nbsp;
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 2xl:py-40 bg-gray-800'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400'>
              <div className='w-full lg:w-2/5 px-4 mb-16 lg:mb-0'>
                <span className='text-lg text-blue-400 font-bold'>Всем-</span>
                <h2
                  className='max-w-sm mt-8 mb-12 text-5xl text-white font-bold font-heading'
                  contentEditable='false'
                >
                  СПАСИБО!
                </h2>
                <p className='mb-16 text-gray-300' contentEditable='false'>
                  Наши пользователи — это наше самое ценное достояние, и именно
                  благодаря их отзывам мы становимся лучше каждый день!
                </p>
                <div>
                  <a
                    className='inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
                    href='#'
                  >
                    Кабинет
                  </a>
                  <a
                    className='inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full'
                    href='#'
                  >
                    Оставить отзыв
                  </a>
                </div>
              </div>
              <div className='w-full lg:w-3/5 px-8'>
                <div className='flex flex-wrap -mx-4'>
                  <div className='w-full md:w-1/2 lg:w-1/2 px-4 mb-16 lg:mb-0'>
                    <ul className='text-lg'>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Начало
                        </a>
                      </li>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Как пользоваться?
                        </a>
                      </li>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Как работает?
                        </a>
                      </li>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                        >
                          Выбрать роль
                        </a>
                      </li>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Для Android
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                        >
                          Для Apple iOS
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='w-full md:w-1/2 lg:w-1/2 px-4 mb-16 lg:mb-0'>
                    <ul className='text-lg'>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Договор-оферта
                        </a>
                      </li>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Наши партнеры
                        </a>
                      </li>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                        >
                          Юридическая помощь
                        </a>
                      </li>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Реквизиты компании
                        </a>
                      </li>
                      <li className='mb-6'>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Есть вопрос?
                        </a>
                      </li>
                      <li>
                        <a
                          className='text-gray-200 hover:text-gray-100'
                          href='#'
                          contentEditable='false'
                        >
                          Есть идея?
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:flex justify-between'>
              <p className='text-lg text-gray-200 mb-8 md:mb-0'>
                © ООО "СМАРТ ИНВЕСТ ГРУПП"&nbsp; <br />
                Товарный знак "СМАРТ БАНКИР" является интеллектуальной
                собственностью компании.
              </p>
              <br />
              <div contentEditable='false' />
              <p />
              <div className='flex items-center'>
                <a className='inline-block mr-2' href='#'>
                  <img
                    className='h-12'
                    src='zospace-assets/logos/facebook.svg'
                    alt=''
                  />
                </a>
                <a className='inline-block mr-2' href='#'>
                  <img
                    className='h-12'
                    src='zospace-assets/logos/instagram.svg'
                    alt=''
                  />
                </a>
                <a className='inline-block' href='#'>
                  <img
                    className='h-12'
                    src='zospace-assets/logos/twitter.svg'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

