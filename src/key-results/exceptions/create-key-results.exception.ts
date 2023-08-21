export class CreateKeyResultsException extends Error {
  constructor(message = 'Could not create key result') {
    super(message);
  }
}
