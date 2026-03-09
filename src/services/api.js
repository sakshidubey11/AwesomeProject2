export const fetchAccountsApi = async () => {
  const response = await fetch('https://srest.com/accounts.json');

  if (!response.ok) {
    throw new Error('Failed to fetch accounts');
  }

  const data = await response.json();
  console.log(data, 'api data');
  return data;
};
