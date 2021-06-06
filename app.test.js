const { loadTitle } = require('./util');

test('print uppercase text', async () => {
  const title = await loadTitle();
  expect(title).toBe('DELECTUS AUT AUTEM');
});