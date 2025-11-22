import { useEffect, useRef, useState } from "react";

export default function useAnimateOnScroll(figures: string[]) {
    const observer = useRef<IntersectionObserver | null>(null)
    const [visibleIds, setVisibleIds] = useState<string[]>([]);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleIds((prev) =>
                        prev.includes(entry.target.id) ? prev : [...prev, entry.target.id]
                    );
                }
            })
        }
        const observerOptions = { threshold: 0.3 } // trigger when 30% of chart is visible
        observer.current = new IntersectionObserver(
            observerCallback,
            observerOptions,
        )

        const elements = figures.map((id)=>document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
        elements.forEach(element=>{
            observer.current!.observe(element)
        })

        const currentObserver = observer.current

        return () => {
            if (currentObserver) {
                currentObserver.disconnect()
            }
        }
    }, []);

    return visibleIds;
}