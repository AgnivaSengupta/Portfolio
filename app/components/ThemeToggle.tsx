"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Avoid hydration mismatch by only rendering after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-5 right-5 z-50 p-2 rounded-full border border-border bg-background/80 backdrop-blur-sm w-9 h-9" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = async (event: React.MouseEvent) => {
    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 400,
          easing: "ease-in-out",
          // If entering dark mode, animate the new view.
          // If entering light mode, animate the old view disappearing.
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-2 bg-background/80 backdrop-blur-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
