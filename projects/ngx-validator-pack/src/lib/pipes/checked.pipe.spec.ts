import { CheckedPipe } from './checked.pipe';

describe('CheckedPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckedPipe();
    expect(pipe).toBeTruthy();
  });
});
