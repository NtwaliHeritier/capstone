import ApiCall from '../modules/apicall';

describe('test async functions', () => {
  it('test callStocks function', async () => {
    const result = await ApiCall.callStocks();
    expect(result.data.length).toBe(30);
  });

  it('test callNews function', async () => {
    const result = await ApiCall.callNews();
    expect(result.data.length).toBe(5);
  });

  it('test callNews function', async () => {
    const result = await ApiCall.callDetails('GOOGL');
    expect(result.data.length).toBe(1);
  });
});
