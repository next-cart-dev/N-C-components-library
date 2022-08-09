import React from "react";

type Place = 'top' | 'right' | 'bottom' | 'left';
type Effect = 'float' | 'solid';
type Type = 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light';

export type Props = {
    /**
     * Effect of tooltip, by default it is solid. It is not mandatory 
     */
    effect?: Effect
    /**
     * Placement of tooltip. by default it is top. It is not mandatory 
     */
    place?: Place
    /**
     * Tooltip value
     */
    tip: string
    /**
     * The element that will be overridden for the tooltip
     */
    children: React.ReactNode
    /**
     * The type of tooltip. It is not mandatory 
     */
    type?: Type
}