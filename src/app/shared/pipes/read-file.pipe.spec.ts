import { ReadFilePipe } from './read-file.pipe';

describe('ReadFilePipe', () => {
  it('create an instance', () => {
    const pipe = new ReadFilePipe();
    expect(pipe).toBeTruthy();
  });
});
