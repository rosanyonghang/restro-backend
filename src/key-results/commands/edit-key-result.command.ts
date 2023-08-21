export class EditKeyResultCommand {
  constructor(
    readonly keyResultId: string,
    readonly okrId: string,
    readonly data: any,
  ) {}
}
