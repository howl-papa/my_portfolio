import React, { useEffect, useRef, useState } from "react";
import "./CardNav.css";

export type CardItem = {
  id: string;
  title: string;
  subtitle?: string;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

type CardNavProps = {
  items: CardItem[];
  value?: string | null;
  defaultValue?: string | null;
  onChange?: (id: string) => void;
  ariaLabel?: string;
  className?: string;
};

export default function CardNav({
  items,
  value = null,
  defaultValue = null,
  onChange,
  ariaLabel = "Card navigation",
  className,
}: CardNavProps) {
  const controlled = value !== null && value !== undefined;
  const [activeId, setActiveId] = useState<string | null>(() => {
    if (controlled) return value as string;
    if (defaultValue) return defaultValue;
    return items.length ? items[0].id : null;
  });

  useEffect(() => {
    if (controlled) setActiveId(value as string);
  }, [value, controlled]);

  const refs = useRef<Array<HTMLButtonElement | HTMLAnchorElement | null>>([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, items.length);
  }, [items.length]);

  const setActive = (id: string) => {
    if (!controlled) setActiveId(id);
    onChange?.(id);
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const key = e.key;
    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % items.length;
      refs.current[next]?.focus();
      setActive(items[next].id);
    } else if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + items.length) % items.length;
      refs.current[prev]?.focus();
      setActive(items[prev].id);
    } else if (key === "Home") {
      e.preventDefault();
      refs.current[0]?.focus();
      setActive(items[0].id);
    } else if (key === "End") {
      e.preventDefault();
      refs.current[items.length - 1]?.focus();
      setActive(items[items.length - 1].id);
    }
  };

  return (
    <nav
      aria-label={ariaLabel}
      className={`card-nav ${className ?? ""}`}
    >
      <ul className="card-nav-list" role="list">
        {items.map((item, i) => {
          const isActive = activeId === item.id;
          const commonProps = {
            className: `card-nav-card ${isActive ? "active" : ""} ${
              item.disabled ? "disabled" : ""
            }`,
            "aria-current": isActive ? "page" : undefined,
            tabIndex: item.disabled ? -1 : 0,
            onKeyDown: (e: React.KeyboardEvent) => onKeyDown(e, i),
            ref: (el: HTMLButtonElement | HTMLAnchorElement | null) =>
              (refs.current[i] = el),
          } as const;

          if (item.href && !item.disabled) {
            return (
              <li key={item.id} className="card-nav-item">
                <a
                  {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                  href={item.href}
                  onClick={(e) => {
                    setActive(item.id);
                  }}
                >
                  <CardContent item={item} />
                </a>
              </li>
            );
          }

          return (
            <li key={item.id} className="card-nav-item">
              <button
                type="button"
                {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
                onClick={() => {
                  if (item.disabled) return;
                  setActive(item.id);
                }}
                disabled={item.disabled}
              >
                <CardContent item={item} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function CardContent({ item }: { item: CardItem }) {
  return (
    <div className="card-nav-inner">
      {item.icon ? <span className="card-nav-icon">{item.icon}</span> : null}
      <div className="card-nav-text">
        <div className="card-nav-title">{item.title}</div>
        {item.subtitle ? (
          <div className="card-nav-subtitle">{item.subtitle}</div>
        ) : null}
      </div>
      <div aria-hidden className="card-nav-chev">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          focusable="false"
        >
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}