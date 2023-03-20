const PICTURES = 25;
const COMMENTS_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
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
const createComment = () => {
  const randomNameIndex = getRandomInteger(0, 25);
  const randomMessageIndex = getRandomInteger(0, COMMENTS_ARRAY.length - 1);
  return {
    id: randomNameIndex,
    avatar: `img/avatar-${ randomNameIndex }.svg`,
    message: COMMENTS_ARRAY[randomMessageIndex],
    name: AUTHORS_ARRAY[getRandomInteger(0, AUTHORS_ARRAY.length - 1)]
  };
};
const getCommentsArray = () =>{
  const commentsArray = [];
  for (let i = 0; i < PICTURES; i++) {
    commentsArray[i] = createComment();
  }
  return commentsArray;
};
getCommentsArray();
