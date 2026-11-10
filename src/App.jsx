import { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./App.css";

const photos = [
  { id: 1, src: "Images/Still/_MG_7099.webp", category: "still", orientation: "horizontal" },
  { id: 2, src: "Images/Still/_MG_7930.webp", category: "still", orientation: "vertical" },
  { id: 3, src: "Images/Other/CasaDoPerdao_22-02-26_01.webp", category: "other", orientation: "horizontal" },
  { id: 4, src: "Images/Portraits/IMG_7012.webp", category: "portraits", orientation: "vertical" },
  { id: 5, src: "Images/Street/Print3.webp", category: "street", orientation: "vertical" },
  { id: 6, src: "Images/Street/_MG_8086.webp", category: "street", orientation: "vertical" },
  { id: 7, src: "Images/Still/699A8761.webp", category: "still", orientation: "horizontal" },
  { id: 8, src: "Images/Portraits/IMG_8008.webp", category: "portraits", orientation: "horizontal" },
  { id: 9, src: "Images/Street/Print4.webp", category: "street", orientation: "horizontal" },
  { id: 10, src: "Images/Still/699A8770.webp", category: "still", orientation: "horizontal" },
  { id: 11, src: "Images/Street/_MG_8122.webp", category: "street", orientation: "horizontal" },
  { id: 12, src: "Images/Other/_MG_8642.webp", category: "other", orientation: "vertical" },
  { id: 13, src: "Images/Street/_A2A9709.webp", category: "street", orientation: "horizontal" },
  { id: 14, src: "Images/Portraits/_82A0024.webp", category: "portraits", orientation: "horizontal" },
  { id: 15, src: "Images/Still/IMG_7176.webp", category: "still", orientation: "horizontal" },
  { id: 16, src: "Images/Street/fe615cc8-8a44-41e1-8c4b-38fca4af0fa0.webp", category: "street", orientation: "horizontal" },
  { id: 17, src: "Images/Other/CasaDoPerdao_22-02-26_03.webp", category: "other", orientation: "horizontal" },
  { id: 18, src: "Images/Street/_E9A9232.webp", category: "street", orientation: "horizontal" },
  { id: 19, src: "Images/Still/_MG_8092.webp", category: "still", orientation: "vertical" },
  { id: 20, src: "Images/Portraits/_84A0240.webp", category: "portraits", orientation: "horizontal" },
  { id: 21, src: "Images/Street/IMG_5953.webp", category: "street", orientation: "vertical" },
  { id: 22, src: "Images/Still/_MG_7823.webp", category: "still", orientation: "horizontal" },
  { id: 23, src: "Images/Street/_MG_8114.webp", category: "street", orientation: "vertical" },
  { id: 24, src: "Images/Portraits/_MG_7504.webp", category: "portraits", orientation: "horizontal" },
  { id: 25, src: "Images/Street/ddcdfa43-84da-4faa-84c4-6ac39ba7e63a.webp", category: "street", orientation: "horizontal" },
  { id: 26, src: "Images/Still/IMG_7205.webp", category: "still", orientation: "horizontal" },
  { id: 27, src: "Images/Other/_MG_8637.webp", category: "other", orientation: "horizontal" },
  { id: 28, src: "Images/Street/_MG_7645.webp", category: "street", orientation: "horizontal" },
  { id: 29, src: "Images/Portraits/_MG_7558.webp", category: "portraits", orientation: "vertical" },
  { id: 30, src: "Images/Street/Print8.webp", category: "street", orientation: "vertical" },
  { id: 31, src: "Images/Still/IMG_7210.webp", category: "still", orientation: "horizontal" },
  { id: 32, src: "Images/Street/_A2A9662.webp", category: "street", orientation: "horizontal" },
  { id: 33, src: "Images/Other/CasaDoPerdao_22-02-26_05.webp", category: "other", orientation: "horizontal" },
  { id: 34, src: "Images/Still/_MG_8109.webp", category: "still", orientation: "vertical" },
  { id: 35, src: "Images/Street/_MG_8491.webp", category: "street", orientation: "horizontal" },
  { id: 36, src: "Images/Portraits/_MG_7875.webp", category: "portraits", orientation: "vertical" },
  { id: 37, src: "Images/Street/Print6.webp", category: "street", orientation: "horizontal" },
  { id: 38, src: "Images/Other/CasaDoPerdao_22-02-26_06.webp", category: "other", orientation: "horizontal" },
  { id: 39, src: "Images/Still/_MG_7826.webp", category: "still", orientation: "horizontal" },
  { id: 40, src: "Images/Street/_MG_8522.webp", category: "street", orientation: "vertical" },
  { id: 41, src: "Images/Portraits/_MG_7982.webp", category: "portraits", orientation: "vertical" },
  { id: 42, src: "Images/Street/Print1.webp", category: "street", orientation: "vertical" },
  { id: 43, src: "Images/Other/_MG_8638.webp", category: "other", orientation: "horizontal" },
  { id: 44, src: "Images/Still/IMG_7212.webp", category: "still", orientation: "horizontal" },
  { id: 45, src: "Images/Street/_E9A9199 copy.webp", category: "street", orientation: "horizontal" },
  { id: 46, src: "Images/Portraits/_MG_8039.webp", category: "portraits", orientation: "horizontal" },
  { id: 47, src: "Images/Street/_A2A9678.webp", category: "street", orientation: "horizontal" },
  { id: 48, src: "Images/Street/_A2A9687.webp", category: "street", orientation: "horizontal" },
  { id: 49, src: "Images/Other/CasaDoPerdao_22-02-26_07.webp", category: "other", orientation: "horizontal" },
  { id: 50, src: "Images/Street/IMG_7055.webp", category: "street", orientation: "horizontal" },
  { id: 51, src: "Images/Still/_MG_8479.webp", category: "still", orientation: "vertical" },
  { id: 52, src: "Images/Portraits/_MG_8100.webp", category: "portraits", orientation: "horizontal" },
  { id: 53, src: "Images/Street/_MG_7544.webp", category: "street", orientation: "horizontal" },
  { id: 54, src: "Images/Other/CasaDoPerdao_22-02-26_08.webp", category: "other", orientation: "horizontal" },
  { id: 55, src: "Images/Still/_MG_8197.webp", category: "still", orientation: "horizontal" },
  { id: 56, src: "Images/Portraits/_MG_8241.webp", category: "portraits", orientation: "horizontal" },
  { id: 57, src: "Images/Other/_MG_8640.webp", category: "other", orientation: "horizontal" },
  { id: 58, src: "Images/Still/_MG_7227.webp", category: "still", orientation: "horizontal" },
  { id: 59, src: "Images/Street/Print7.webp", category: "street", orientation: "horizontal" },
  { id: 60, src: "Images/Street/f3ba3c6e-4637-4192-87c1-3515e44c3eda.webp", category: "street", orientation: "horizontal" },
  { id: 61, src: "Images/Portraits/_MG_8469.webp", category: "portraits", orientation: "horizontal" },
  { id: 62, src: "Images/Other/CasaDoPerdao_22-02-26_09.webp", category: "other", orientation: "horizontal" },
  { id: 63, src: "Images/Still/_MG_8202.webp", category: "still", orientation: "horizontal" },
  { id: 64, src: "Images/Street/_A2A9671.webp", category: "street", orientation: "horizontal" },
];

// Filters
const filters = ["all", "street", "portraits", "still", "other"];

// variable that stores the preloaded photos
const preloaded = [];

// download and decode the image before, errors are ignored so it doesn't block the rest.
function preloadImage(url) {
  const img = new Image();
  img.decoding = "async";
  img.src = url;
  preloaded.push(img);
  return img.decode().catch(() => {});
}

// animation duration
const DURATION = 600;

// pushes the photo off-screen via its nearest side (+20px margin)
function offscreenX(rect) {
  const center = rect.left + rect.width / 2;
  return center < window.innerWidth / 2
    ? -(rect.right + 20)
    : window.innerWidth - rect.left + 20;
}

// lets other files (main.jsx) use this component
export default function App() {
  // runs once when the site load (preload images)
  useEffect(() => {
    photos.forEach((p) => preloadImage(p.src));
  }, []);

  // starts with the "all" filter selected
  const [active, setActive] = useState("all");

  // List with ids of the photos that are in the grid
  const [shown, setShown] = useState(photos.map((p) => p.id));

  // Maps the id of the photo to a <div>
  const photoElements = useRef(new Map());

  // initial position of the photos
  const firstPositions = useRef(null);

  // grid <div>, used to position leaving photos relative to it
  const gridRef = useRef(null);

  // photos leaving, frozen at their grid position ({ id, top, left, width, height }) until the exit animation ends
  const [leaving, setLeaving] = useState([]);

  // full screen or null when none is open
  const [opened, setOpened] = useState(null);

  // Runs when a filter button is clicked
  function handleFilter(filter) {
    setActive(filter); 

    // id of the photos that match the new filter
    const next = photos
      .filter((p) => filter === "all" || p.category === filter)
      .map((p) => p.id);

    // STEP 1: save each photo's current on-screen position before the grid changes
    const positions = new Map();
    shown.forEach((id) => {
      positions.set(id, photoElements.current.get(id).getBoundingClientRect());
    });
    firstPositions.current = positions;

    // STEP 2: freeze leaving photos in place (absolute) so the rest can move while they slide out
    const gridRect = gridRef.current.getBoundingClientRect();
    setLeaving(
      shown
        .filter((id) => !next.includes(id))
        .map((id) => {
          const r = positions.get(id);
          return {
            id,
            top: r.top - gridRect.top,
            left: r.left - gridRect.left,
            width: r.width,
            height: r.height,
          };
        })
    );

    // Update the grid; photos jump to their new spots (STEP 3 animates the jump)
    setShown(next);
  }

  // STEP 3: animate everything at once, before paint: leaving photos slide out,
  // staying ones slide from old to new spot (FLIP), new ones slide in
  useLayoutEffect(() => {
    const first = firstPositions.current;
    if (!first) return; // nothing to animate on first load
    firstPositions.current = null;

    // Leaving photos: slide off-screen via the nearest side
    const exits = leaving.map(({ id }) => {
      const el = photoElements.current.get(id);
      const x = offscreenX(first.get(id));
      // el.animate: browser Web Animations API, from the first keyframe to the second
      return el.animate(
        [{ transform: "translateX(0)" }, { transform: `translateX(${x}px)` }],
        // fill "forwards": stay off-screen after the animation ends
        { duration: DURATION, easing: "ease-in", fill: "forwards" }
      ).finished;
    });

    // Staying and entering photos
    const moves = shown.map((id) => {
      const el = photoElements.current.get(id);
      const last = el.getBoundingClientRect(); // new position
      const old = first.get(id); // old position (if it was already in the grid)

      // Start from the old spot, or from off-screen if the photo is new
      const from = old
        ? `translate(${old.left - last.left}px, ${old.top - last.top}px)`
        : `translateX(${offscreenX(last)}px)`;

      return el.animate(
        [{ transform: from }, { transform: "translate(0, 0)" }],
        { duration: DURATION, easing: "ease-out" }
      ).finished;
    });

    // When all animations finish, remove the photos that left
    Promise.all([...exits, ...moves]).then(() => {
      setLeaving([]);
    });
  }, [shown, leaving]); // re-run when "shown" or "leaving" changes

  // "other" only: stretch the rows to fill the screen (class "fill")
  const shownPhotos = photos.filter((p) => shown.includes(p.id));
  const fill =
    shownPhotos.length > 0 && shownPhotos.every((p) => p.category === "other");
  // Number of rows in the 4-column grid (vertical photos take 2 cells)
  const cells = shownPhotos.reduce(
    (sum, p) => sum + (p.orientation === "vertical" ? 2 : 1),
    0
  );
  const rows = Math.ceil(cells / 4);

  // Leaving photos by id, for quick lookup while rendering
  const leavingById = new Map(leaving.map((l) => [l.id, l]));

  return (
    <div className="gallery">
      {/* Filter buttons, one per item in "filters" */}
      <div className="filters">
        {filters.map((f) => (
          <button
            key={f}
            className={active === f ? "active" : ""} // selected button gets "active"
            onClick={() => handleFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid: shown photos plus the ones still sliding out */}
      <div
        ref={gridRef}
        className={fill ? "grid fill" : "grid"}
        style={fill ? { "--rows": rows } : undefined}
      >
        {photos
          .filter((p) => shown.includes(p.id) || leavingById.has(p.id))
          .map((p) => {
            const out = leavingById.get(p.id); // frozen position if the photo is leaving
            return (
              <div
                key={p.id} // lets React track each photo between renders
                // save (or remove) this photo's <div> in "photoElements"
                ref={(el) => (el ? photoElements.current.set(p.id, el) : photoElements.current.delete(p.id))}
                // classes: photo + orientation + category (+ leaving)
                className={`photo ${p.orientation} ${p.category}${out ? " leaving" : ""}`}
                // leaving photos stay frozen at this position
                style={
                  out
                    ? { top: out.top, left: out.left, width: out.width, height: out.height }
                    : undefined
                }
                // click opens the photo full screen (not while leaving)
                onClick={out ? undefined : () => setOpened(p)}
              >
                {/* eager: load now, not lazily; async: decode without blocking the page */}
                <img src={p.src} alt={p.category} loading="eager" decoding="async" />
              </div>
            );
          })}
      </div>

      {/* Name stretched edge to edge at the bottom of the screen */}
      <svg className="name" viewBox="0 0 1000 116">
        <text x="0" y="116" textLength="1000" lengthAdjust="spacing">
          Bianca Zanotti
        </text>
      </svg>

      {/* Full-screen photo; click anywhere to close */}
      {opened && (
        <div className="lightbox" onClick={() => setOpened(null)}>
          <img src={opened.src} alt={opened.category} />
        </div>
      )}
    </div>
  );
}
