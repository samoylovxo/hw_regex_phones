/* eslint-disable linebreak-style */
import clearTel from '../src/js/phone';

test('Russia', () => {
  const result = clearTel('8 (927) 000-00-00');
  expect(result).toEqual('+79270000000');
});

test('Russia', () => {
  const result = clearTel('+7 960 000 00 00');
  expect(result).toEqual('+79600000000');
});

test('China', () => {
  const result = clearTel('+86 000 000 0000');
  expect(result).toEqual('+860000000000');
});

test('USA', () => {
  const result = clearTel('2 (927) 123-74-99');
  expect(result).toEqual('+19271237499');
});

test('Congo', () => {
  const result = clearTel('243 296 520-53-61');
  expect(result).toEqual('+2422965205361');
});
