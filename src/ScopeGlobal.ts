import {WithScope} from '.';

export class ScopeGlobal {
	readonly type = 'global';
	static INSTANCE = new ScopeGlobal();

	constructor() {
		Object.freeze(this);
	}
}


export namespace ScopeGlobal {
	export type With<T> = WithScope<T, ScopeGlobal>;
}
