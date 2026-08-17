interface ImportMeta {
  readonly glob: (
    pattern: string | string[],
    options?: { eager?: boolean; import?: string; query?: string | Record<string, string> }
  ) => Record<string, any>;
}
