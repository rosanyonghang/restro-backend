export class CreateKeyResultCommand {
  constructor(
    readonly data: any,
    readonly okr_id: string,
    readonly currentUser: string,
  ) {}
}
