declare global {
  interface IInputSelectOptions<T = unknown> {
    value: T
    display: string
    state?: SelectOptionStates
  }
}
