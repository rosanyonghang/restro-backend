export class KeyResultNotFoundException extends Error {
  constructor(message = 'Could not find key result') {
    super(message);
  }
}
