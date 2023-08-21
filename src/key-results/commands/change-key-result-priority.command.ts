export class ChangeKeyResultPriorityCommand {
  constructor(
    readonly keyResultId: string,
    readonly priority: string,
    readonly currentUser: string,
  ) {}
}
