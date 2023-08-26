export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export class ArrayBufferConverter {
  // eslint-disable-next-line class-methods-use-this
  load(buffer) {
    const uint16 = new Uint16Array(buffer);
    const str = [];
    uint16.forEach((element) => {
      str.push(String.fromCharCode(element));
    });
    return str.join('');
  }
}
