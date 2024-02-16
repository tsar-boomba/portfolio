export const fetcher = <JSON>(key: string): Promise<JSON> => fetch(key).then((res) => res.json());
