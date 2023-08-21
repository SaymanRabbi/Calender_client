import logger from '../logger';

export default class FetchError<
  T extends object | object[] = object
> extends Error {
  status: number;

  type?: string;

  response?: T;

  url?: string;

  constructor(
    status: number,
    message: string,
    response?: T,
    type?: string,
    url?: string
  ) {
    super(message);
    this.status = status;
    this.name = 'FETCH_ERROR';
    this.response = response;
    this.type = type;
    this.url = url;

    logger.error(JSON.stringify(this));
  }
}
