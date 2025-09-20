const cache = new Map<string, any>();
const inflight = new Map<string, Promise<any>>();
const errors = new Map<string, any>();

export default function useFetch<T = unknown>(url: string) {
  if (cache.has(url)) {
    return {
      data: cache.get(url) as T,
      isPending: false,
      error: null,
      isError: false,
    };
  }
  if (errors.has(url)) {
    throw errors.get(url);
  }
  if (inflight.has(url)) {
    throw inflight.get(url);
  }

  const promise = fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Error ${res.status}`);
      return res.json() as Promise<T>;
    })
    .then((data) => {
      if (typeof data !== "object" || data === null) {
        throw new Error("Invalid data: expected JSON object or array");
      }

      cache.set(url, data);
      inflight.delete(url);
      return data;
    })
    .catch((err) => {
      errors.set(url, err);
      inflight.delete(url);
      throw err;
    });

  inflight.set(url, promise);
  throw promise;
}

