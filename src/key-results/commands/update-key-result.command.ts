import { UpdateKeyResultDto } from '../http/requests/update-key-result.request';

export class UpdateKeyResultCommand {
  constructor(
    readonly keyResultId: string,
    readonly updateKeyResultDto: UpdateKeyResultDto,
    readonly currentUser: string,
  ) {}
}
