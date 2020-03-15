import makeStore from '../redux/store';

describe('Store tests', () => {
  const store = makeStore();
  it('Should create a new store.', () => {
    expect(store).toBeDefined();
  });
});
