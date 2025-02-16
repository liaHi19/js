# Debouncing is a programming practice that limits how often a function can fire by enforcing a waiting period before it can be called again. It's like adding a "cooling off" period after each function call. If the function is called again during this waiting period, the timer resets, and the waiting period starts over.

## Common use cases include:

1.  Search input fields - waiting until the user stops typing before making API calls
2.  Window resize handlers - preventing excessive calculations as the window is being resized
3.  Save drafts - waiting until the user stops typing before auto-saving

# Throttling guarantees that a function runs at a fixed rate - no more than once per specified time period.

## Think of throttling like a valve that only allows water through at a certain rate. No matter how much pressure you apply, it won't flow faster than the valve allows.

## Common use cases for throttling include:

1.  Scroll event handlers - processing scroll events at a manageable rate
2.  Game input controls - limiting how often a player can fire a weapon
3.  API rate limiting - ensuring you don't exceed API call limits
4.  Infinite scrolling - loading new content at a controlled rate

## The key difference from debouncing:

- Debouncing: Waits for a pause in activity before executing
- Throttling: Executes at a regular interval regardless of activity

# RequestAnimationFrame (rAF) is a web API that tells the browser you want to perform an animation, asking it to schedule a repaint of the window for the next animation frame. It's specifically designed for smooth animations by synchronizing with the browser's natural refresh rate (typically 60fps).

## Key benefits of requestAnimationFrame:

1.  Performance optimization - the browser can optimize animations by:

- Pausing animations in background tabs
- Matching the screen's refresh rate to prevent tearing
- Batching visual updates together

2. Battery efficiency - animations are paused when the tab isn't visible
3. Smoother animations - by synchronizing with the display's refresh rate
