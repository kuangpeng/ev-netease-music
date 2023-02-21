import { createEventHook } from '@vueuse/core'
import type { EventHookOn, EventHookOff } from '@vueuse/core'

interface FetchFnResult<T> {
  onResult: EventHookOn<T>
  onError: EventHookOff
  onEnd: EventHookOff
}

// type Result<T> = ReturnType<T>
type PromiseType<T> = (...args) => Promise<T>
type UnPromisify<T> = T extends PromiseType<infer U> ? U : never

export function useFetchList<T>(fetchFn: (params: unkonw) => Promise<UnPromisify<T>>) {
  const fetchResult = createEventHook<UnPromisify<T>>()

  const fetchError = createEventHook<unknown>()

  const fetchFinally = createEventHook<unknown>()

  const fetch = (params: unkonw): FetchFnResult<UnPromisify<T>> => {
    fetchFn(params)
      .then((res) => fetchResult.trigger(res as UnPromisify<T>))
      .catch((err) => fetchError.trigger(err?.message || ''))
      .finally(() => {
        fetchFinally.trigger('')
      })

    return {
      onResult: fetchResult.on,
      onError: fetchError.on,
      onEnd: fetchFinally.on
    }
  }

  return fetch
}
