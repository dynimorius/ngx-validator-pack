import { ObjectValuesPipe } from './object-values.pipe';

describe('ObjectValuesPipe', () => {
  let pipe: ObjectValuesPipe;

  beforeEach(() => {
    pipe = new ObjectValuesPipe();
  });

  it('Create an instance.', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return object values array.', () => {
    const testObj = { a: 'a', b: 'b', c: 'c' };
    expect(Array.isArray(pipe.transform(testObj))).toBe(true);
  });
});
