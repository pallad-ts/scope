import {ID} from '@pallad/id';
import {WithScope} from '.';

export class ScopeAccount {
	readonly type = 'account';

	constructor(readonly id: ID) {
		Object.freeze(this);
	}
}

export namespace ScopeAccount {
	export type With<T> = WithScope<T, ScopeAccount>;
}
