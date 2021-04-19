export class ScopeGlobal {
  readonly type = 'global';
  static INSTANCE = new ScopeGlobal();

  constructor() {
    Object.freeze(this);
  }
}
