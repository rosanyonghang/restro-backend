export class AssignKeyResultCommand {
  constructor(
    readonly keyResultId: string,
    readonly assignTo: string,
    readonly currentUser: string,
  ) {}
}
