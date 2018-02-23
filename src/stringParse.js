export default function stringParse(content) {
  const data = {};

  // sentence count
  data.sentence = content.split('.').length

  data.word = content.trim().replace(/\s+/gi, ' ').split(' ').length;

  data.character = content.trim().replace(/[^\w]/gi, '').length;

  return data;

}