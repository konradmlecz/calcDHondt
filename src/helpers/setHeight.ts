import {DOMRect} from "./useSize"

export function setHeight(size: DOMRect | null) {
    if (size) {
        return `${(size.width) / 2}px`
    } else return "100%"
}