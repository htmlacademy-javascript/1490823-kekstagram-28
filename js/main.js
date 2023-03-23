const PICTURES = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATARS = 6;
const COMMENTS = 10;

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

//Счетчик для формирования нумерации ID...
function getCounter() {
  let count = 1;
  return function() {
    return count++;
  };
}

const getId = getCounter();
const getCommentId = getCounter();
const getUrl = getCounter();

//Генератор случайных чисел...
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция формирует объект с комментариями...
const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${[getRandomInteger(0, AVATARS)]}.svg`,
  message: COMMENTS_ARRAY[getRandomInteger(0, COMMENTS_ARRAY.length - 1)],
  name: AUTHORS_ARRAY[getRandomInteger(0, AUTHORS_ARRAY.length - 1)]
});

//Функция формирует массив объектов с комментариями...
const createCommentsArray = () => {
  const commentsArray = [];
  for (let i = 0; i < COMMENTS; i++) {
    commentsArray[i] = getComment();
  }
  return commentsArray;
};

//Функция формирует объект с описанием фото и комментарием...
const getObject = () => ({
  id: getId(),
  url: `photos/${getUrl()}.jpg`,
  likes:  getRandomInteger(LIKES_MIN, LIKES_MAX),
  description: SIGNATURE_ARRAY[getRandomInteger(0, SIGNATURE_ARRAY.length - 1)],
  comments: createCommentsArray()
});

//Функция формирует массив объектов с описанием фото (25 объектов)...
const getObjectsArray = () =>{
  const objectsArray = [];
  for (let i = 0; i < PICTURES; i++) {
    objectsArray[i] = getObject();
  }
  return objectsArray;
};

getObjectsArray();
