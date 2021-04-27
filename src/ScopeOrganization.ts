import {ID} from '@pallad/id';
import {WithScope} from '.';

export class ScopeOrganization {
	readonly type = 'organization';

	constructor(readonly id: ID) {
		Object.freeze(this);
	}
}

export namespace ScopeOrganization {
	export type With<T> = WithScope<T, ScopeOrganization>;
}
