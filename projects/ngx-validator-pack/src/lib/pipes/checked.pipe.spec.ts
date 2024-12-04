import { CheckedPipe } from './checked.pipe';

describe('CheckedPipe', () => {
  let pipe: CheckedPipe;

  beforeEach(() => {
    pipe = new CheckedPipe();
  });
  
  it('Create an instance.', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return a proper symbol.', () => {
    expect(pipe.transform(true)).toBe('✗');
    expect(pipe.transform(false)).toBe('✔');
    expect(pipe.transform(null)).toBe('✔');
    expect(pipe.transform(undefined)).toBe('✔');
  });
});
