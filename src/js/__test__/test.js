import { getBuffer, ArrayBufferConverter } from '../arrraybuffer';

test('проверка класса ArrayBufferConverter', () => {
  const buffer = getBuffer();
  const converter = new ArrayBufferConverter();
  const received = converter.load(buffer);
  const str = converter.toString(received);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(str).toBe(expected);
});
