import { useEffect, useRef } from "react";
export interface useHorizontalScroll {
  offset?: number;
  isOffsetItem?: boolean;
  paddingItemOffset?: number;
  areaCheckOffset?: number;
}
export function useHorizontalScroll<
  T extends HTMLElement,
  Q extends HTMLElement = T
>(
  {
    offset = 0,
    isOffsetItem = false,
    paddingItemOffset = 0,
    areaCheckOffset = 20,
  }: useHorizontalScroll = {
    offset: 0,
    isOffsetItem: false,
    paddingItemOffset: 0,
    areaCheckOffset: 20,
  }
) {
  const elRef = useRef<T>(null);
  const prRef = useRef<Q>(null);

  useEffect(() => {
    const el = elRef.current as T;
    const pr = prRef.current as Q;
    if (el) {
      const onWheel = (e: any) => {
        if (e.deltaY == 0) return;
        let offsetItem = 0;
        let offsetParent = pr != null ? pr.offsetTop : el.offsetTop;
        if (isOffsetItem) {
          const child = el.children;
          if (child.length > 0) {
            let width = paddingItemOffset + child[0].clientWidth;
            offsetItem = e.deltaY > 0 ? width : -width;
          }
        }
        let backToPos = false;
        // console.log(
        //   el.scrollLeft,
        //   el.scrollWidth - el.offsetWidth,
        //   el.scrollLeft >= el.scrollWidth - el.offsetWidth
        // );
        if (
          (Math.abs(el.scrollLeft - (el.scrollWidth - el.offsetWidth)) <= 5 &&
            e.deltaY > 0) ||
          (el.scrollLeft <= 0 && e.deltaY < 0)
        ) {
          // Not stop, scroll pass
        } else {
          // Stop body scroll
          e.preventDefault();

          if (
            Math.abs(offsetParent - document.documentElement.scrollTop) <=
            areaCheckOffset
          ) {
            window.scrollTo({
              top: offsetParent,
              behavior: "smooth",
            });
            backToPos = true;
          }
        }

        const value =
          el.scrollLeft +
          e.deltaY +
          (e.deltaY > 0 ? offset : -offset) +
          offsetItem;
        console.log(
          offsetParent,
          document.documentElement.scrollTop,
          Math.abs(offsetParent - document.documentElement.scrollTop)
        );
        if (
          Math.abs(offsetParent - document.documentElement.scrollTop) <
            areaCheckOffset &&
          backToPos
        ) {
          el.scrollTo({
            left: value,
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return { elRef, prRef };
}
