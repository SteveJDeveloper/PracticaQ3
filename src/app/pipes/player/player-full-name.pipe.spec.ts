import { PlayerFullNamePipe } from './player-full-name.pipe';

describe('PlayerFullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PlayerFullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
