import React from "react";
import useResizeObserver from "@react-hook/resize-observer";

export type DOMRect = {
    bottom: number,
    height: number,
    left: number,
    top: number,
    width: number,
    x: number,
    y: number,
}

interface Target {
    current: null | HTMLDivElement
}

export const useSize = (target: Target) => {
    const [size, setSize] = React.useState<DOMRect | null>(null)
    useResizeObserver(target, (entry) => setSize(entry.contentRect))
    return size
}