import type { IStateTreeNode } from "mobx-state-tree"
import { getRoot } from "mobx-state-tree"

import type { RootStore, RootStoreModel } from "../RootStore"

/**
 * Returns a RootStore object in strongly typed way
 * for stores to access other stores.
 */
export const getRootStore = (self: IStateTreeNode): RootStore => {
  return getRoot<typeof RootStoreModel>(self)
}
