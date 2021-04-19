import { ID } from '@pallad/id';

export class ScopeOrganization {
  readonly type = 'organization';

  constructor(readonly id: ID) {
    Object.freeze(this);
  }
}
