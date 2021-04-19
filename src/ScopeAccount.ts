import { ID } from '@pallad/id';

export class ScopeAccount {
  readonly type = 'account';

  constructor(readonly id: ID) {
    Object.freeze(this);
  }
}
