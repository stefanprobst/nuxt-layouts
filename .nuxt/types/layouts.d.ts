import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "entities"
declare module "../../node_modules/.pnpm/nuxt@3.12.2_@opentelemetry+api@1.9.0_vite@5.3.1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}