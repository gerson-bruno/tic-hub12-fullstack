// src/store/cart.ts
import { ref } from "vue"
import type { CartItem } from "../types/types"

export const cart = ref<CartItem[]>([])