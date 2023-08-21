import { Auth } from '@aws-amplify/auth';

import type { RequestHeaders } from '@/types';

import FetchError from './fetchError';
import logger from '../logger';

export default async function http<
  T extends object | object[] = { message: string }
>(url: RequestInfo | URL, init?: RequestHeaders): Promise<T> {
  // Adding necessary 'content-type' header value for POST, PUT, and PATCH HTTP requests.
  let headers: RequestHeaders['headers'] = {
    'Content-Type': init?.headers?.['Content-Type'] ?? 'application/json',
  };

  // Adding auth token in the request headers, if 'x-require-auth' is present in the request headers.
  if (init?.headers?.['x-require-auth'] === 'true') {
    // Retrieving the id token from aws cognito and passing it as Bearer token for authenticated requests.
    const token = (await Auth.currentSession()).getIdToken().getJwtToken();

    headers = {
      ...headers,
      ...init.headers,
      Authorization: `Bearer ${token}`,
    };
    // Deleting the 'x-require-auth' header so, that it won't be passed into the request.
    delete (headers as Extract<RequestHeaders, 'headers'>)['x-require-auth'];
  }

  // Adding the build token in the request headers, if 'x-require-build-token' is present in the request headers.
  if (init?.headers?.['x-require-build-token'] === 'true') {
    headers = {
      ...headers,
      ...init.headers,
      Authorization: `Bearer ${process.env.BUILD_API_KEY}`,
    };
    // Deleting the 'x-require-build-token' header so, that it won't be passed into the request.
    delete (headers as Extract<RequestHeaders, 'headers'>)[
      'x-require-build-token'
    ];
  }

  try {
    // HTTP request
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}${url}`, {
      ...init,
      headers,
    });
    const data = (await res.json()) as T;

    if (res.status >= 400)
      return Promise.reject(
        new FetchError(res.status, res.statusText, data as T, '', res.url)
      );

    // Enable logging for requests, the logs will be visible in browser's console and cloudwatch.
    if (init?.enableLogger)
      logger.info(
        JSON.stringify({
          status: res.status,
          type: res.type,
          url: res.url,
        })
      );

    // Resolving the result of fetch request.
    return Promise.resolve(data);
  } catch (err) {
    // Throwing FETCH_ERROR, if there is some issue with request.
    return Promise.reject(
      new FetchError(
        500,
        (err as FetchError).message,
        undefined,
        (err as FetchError).type
      )
    );
  }
}
