import { createEventHook } from '@vueuse/core'
import type { EventHookOn, EventHookOff } from '@vueuse/core'
import { Ref } from 'vue';

interface FetchFnResult<T> {
  onResult: EventHookOn<T>;
  onError: EventHookOff;
  onEnd: EventHookOff;
}

interface FetchListResult<T, R> {
  fetch: (params: R) => FetchFnResult<T>;
}

// type Result<T> = ReturnType<T>
type PromiseType<T> = (...args) => Promise<T>
type UnPromisify<T> = T extends PromiseType<infer U> ? U : never


export function useFetchList<T, R>(fetchFn: (p: R) => Promise<UnPromisify<T>>): FetchListResult<UnPromisify<T>, R> {
  const loading = ref(false)

  const fetchResult = createEventHook<UnPromisify<T>>()

  const fetchError = createEventHook<unknown>()

  const fetchFinally = createEventHook<unknown>()

  const fetch = (params: R): FetchFnResult<UnPromisify<T>> => {
    loading.value = true

    fetchFn(params)
      .then(res => fetchResult.trigger(res as UnPromisify<T>))
      .catch(err => fetchError.trigger(err?.message || ''))
      .finally(() => fetchFinally.trigger(''))

      return {
        onResult: fetchResult.on,
        onError: fetchError.on,
        onEnd: fetchFinally.on
      }
  }
  return {
    fetch,
  }
}
