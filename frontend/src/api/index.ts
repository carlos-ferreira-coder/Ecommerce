export async function api<T>(
  path: string,
  requestInit?: RequestInit,
): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    requestInit,
  );
  return response.json();
}
