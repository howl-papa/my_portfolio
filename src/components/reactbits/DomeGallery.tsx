import React, { useState, useRef, useEffect } from "react";
import "./DomeGallery.css";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface DomeGalleryProps {
  items: GalleryItem[];
  className?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

const DomeGallery: React.FC<DomeGalleryProps> = ({
  items,
  className = "",
  autoRotate = false,
  rotationSpeed = 0.5,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  // Auto rotation effect
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setRotation(prev => prev + rotationSpeed);
    }, 50);

    return () => clearInterval(interval);
  }, [autoRotate, rotationSpeed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;

    const deltaX = e.clientX - lastX.current;
    setRotation(prev => prev + deltaX * 0.5);
    lastX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    const targetRotation = (index * 360) / items.length;
    setRotation(targetRotation);
  };

  // Calculate positions for dome layout
  const getItemStyle = (index: number) => {
    const totalItems = items.length;
    const angle = (index * 360) / totalItems + rotation;
    const radius = 200; // Distance from center
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const z = Math.sin((angle * Math.PI) / 180) * radius;
    
    // Calculate scale and opacity based on position
    const distanceFromFront = Math.abs(z);
    const scale = Math.max(0.4, 1 - distanceFromFront / 400);
    const opacity = Math.max(0.3, 1 - distanceFromFront / 300);

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity,
      zIndex: Math.round((200 - z) * 10),
    };
  };

  return (
    <div className={`dome-gallery ${className}`}>
      <div
        ref={containerRef}
        className="dome-gallery__container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="dome-gallery__dome">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`dome-gallery__item ${
                index === activeIndex ? "active" : ""
              }`}
              style={getItemStyle(index)}
              onClick={() => handleItemClick(index)}
            >
              <div className="dome-gallery__image-wrapper">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="dome-gallery__image"
                  draggable={false}
                />
                {item.title && (
                  <div className="dome-gallery__overlay">
                    <h3 className="dome-gallery__title">{item.title}</h3>
                    {item.description && (
                      <p className="dome-gallery__description">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="dome-gallery__dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`dome-gallery__dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>

      {/* Active item info */}
      {items[activeIndex] && (
        <div className="dome-gallery__info">
          <h2 className="dome-gallery__active-title">
            {items[activeIndex].title || `Item ${activeIndex + 1}`}
          </h2>
          {items[activeIndex].description && (
            <p className="dome-gallery__active-description">
              {items[activeIndex].description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DomeGallery;