import { News, Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'library',
    title: 'Кітапхана',
    short: 'Кітаптер мен оқу залдары',
    description:
      'Электрондық каталог, кітап брондау және тыныш оқу залдарына онлайн тіркелу бір жерде.',
    icon: 'book-outline',
    tint: '#14505F',
    tintSoft: '#D5ECF0',
    facts: [
      { label: 'Жұмыс уақыты', value: '08:00 – 23:00' },
      { label: 'Орналасқан жері', value: 'Бас корпус, 2-қабат' },
      { label: 'Бос орындар', value: '48' },
    ],
  },
  {
    id: 'schedule',
    title: 'Кесте',
    short: 'Сабақ және емтихан күндері',
    description:
      'Апталық сабақ кестесі, аудитория нөмірлері және емтихан мерзімдері бір экранда.',
    icon: 'calendar-outline',
    tint: '#B7791F',
    tintSoft: '#FCE9BF',
    facts: [
      { label: 'Бүгін', value: '3 сабақ' },
      { label: 'Келесі сабақ', value: '10:30 • 214 ауд.' },
      { label: 'Жақын емтихан', value: '12 күннен кейін' },
    ],
  },
  {
    id: 'transport',
    title: 'Көлік',
    short: 'Маршрут және шаттл кестесі',
    description:
      'Университет шаттлдарының қозғалыс кестесі және жақын аялдамалар туралы ақпарат.',
    icon: 'bus-outline',
    tint: '#C2410C',
    tintSoft: '#FFE1D9',
    facts: [
      { label: 'Келесі шаттл', value: '5 минуттан кейін' },
      { label: 'Аралық', value: 'Әр 15 минут' },
      { label: 'Маршрут', value: 'Жатақхана → Бас корпус' },
    ],
  },
  {
    id: 'support',
    title: 'Қолдау',
    short: 'Көмек пен кеңес алу',
    description:
      'Студенттерге арналған қолдау орталығы: құжаттар, жатақхана, стипендия және кеңес.',
    icon: 'people-outline',
    tint: '#1E7F64',
    tintSoft: '#D7F1E7',
    facts: [
      { label: 'Қабылдау', value: 'Дс – Жм, 09:00 – 18:00' },
      { label: 'Кабинет', value: '105' },
      { label: 'Байланыс', value: 'support@campus.kz' },
    ],
  },
  {
    id: 'canteen',
    title: 'Асхана',
    short: 'Бүгінгі мәзір',
    description: 'Күнделікті мәзір, бағалар және кезек аз уақыт туралы ақпарат.',
    icon: 'restaurant-outline',
    tint: '#9D174D',
    tintSoft: '#FBDDEA',
    facts: [
      { label: 'Жұмыс уақыты', value: '08:30 – 17:00' },
      { label: 'Орташа чек', value: '1 800 ₸' },
      { label: 'Кезек', value: 'Аз' },
    ],
  },
  {
    id: 'wifi',
    title: 'Wi-Fi',
    short: 'Кампус желісіне қосылу',
    description: 'Кампус бойынша желіге қосылу нұсқаулығы және техникалық қолдау байланыстары.',
    icon: 'wifi-outline',
    tint: '#4338CA',
    tintSoft: '#E0E0FB',
    facts: [
      { label: 'Желі', value: 'Campus-Student' },
      { label: 'Қамту', value: 'Барлық корпус' },
      { label: 'IT көмек', value: '112 кабинет' },
    ],
  },
];

export const findService = (id: string) => services.find((s) => s.id === id);

export const news: News[] = [
  { id: 'n1', tag: 'Жаңалық', title: 'Көктемгі семестрге тіркелу басталды', day: '12', month: 'НАУ' },
  { id: 'n2', tag: 'Іс-шара', title: 'Мансап жәрмеңкесі: жұмыс берушілермен кездесу', day: '18', month: 'НАУ' },
  { id: 'n3', tag: 'Жаңарту', title: 'Кітапхана жұмыс күндері 23:00-ге дейін ашық', day: '10', month: 'НАУ' },
];