const PICTURES = 25;
const AVATARS = 6;
const LIKES_MIN = 15;
const LIKES_MAX = 200;

const COMMENTS_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const SIGNATURE_ARRAY = [
  'Если вы могли отправиться в любую точку мира, куда держали бы путь?',
  'Привет, аэропорт. Снова в небо!',
  'Угадайте, где я.',
  'Работать. Копить. Путешествовать. Повторить.',
  'Время приключений!',
  'Не сижу на месте',
  'Ни на что не променял бы это место',
  'Открываю для себя мир. Скоро вернусь',
  'Я путешествую, потому что всегда смогу получить больше денег, но никогда не получу больше времени',
  'Можно вычеркнуть эту страну из списка',
  'Свободный разум, свободная жизнь',
  'Позвольте жизни вас удивить'
];
const AUTHORS_ARRAY = [
  'Иван', 'Мария', 'Руслан',
  'Людмила', 'Валентин', 'Эльвира',
  'Корней', 'Вера', 'Анатоль',
  'Наташа', 'Алексей', 'Ирина'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComment = (step) => ({
  id: step + 1,
  url: `photos/${step + 1}.jpg`,
  avatar: `img/avatar-${[getRandomInteger(0, AVATARS)]}.svg`,
  message: COMMENTS_ARRAY[getRandomInteger(0, COMMENTS_ARRAY.length - 1)],
  name: AUTHORS_ARRAY[getRandomInteger(0, AUTHORS_ARRAY.length - 1)],
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  description: SIGNATURE_ARRAY[getRandomInteger(0, SIGNATURE_ARRAY.length - 1)]
});

const getCommentsArray = () =>{
  const commentsArray = [];
  for (let i = 0; i < PICTURES; i++) {
    commentsArray[i] = createComment(i);
  }
  return commentsArray;
};
getCommentsArray();
