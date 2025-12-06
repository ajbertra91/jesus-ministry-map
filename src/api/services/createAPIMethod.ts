type Options = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
};
type CreateAPIMethod = <TInput extends Record<string, string>, TOutput>(options: Options) => (input: TInput) => Promise<TOutput>;


const get = (url: string, input: Record<string, string>) => {
  const queryString = new URLSearchParams(input).toString();
  const urlWithQS = queryString ? `${url}?${queryString}` : url;
  return fetch(urlWithQS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const post = (url: string, input: Record<string, string>) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });
};

export const createAPIMethod: CreateAPIMethod = (opts) => (input) => {
  const method = opts.method === 'GET' ? get : post;
  return (
    method(opts.url, input)
      .then((res) => res.json())
  );
};
