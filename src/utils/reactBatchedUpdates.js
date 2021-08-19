/* eslint-disable import/no-unresolved */

export function unstable_batchedUpdates(fn, bookkeeping) {
  return fn(bookkeeping);
}
