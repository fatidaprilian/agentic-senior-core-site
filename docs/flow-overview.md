# Flow Overview: User Journey & Interaction

This document maps out the interactive navigation flow, layout layers, and event-handling transitions of the website using a Mermaid sequence diagram.

## Interaction Flow Schematic

```mermaid
sequenceDiagram
    autonumber
    actor Developer as Web Visitor
    participant Page as Creative Studio (UI)
    participant Companion as AI Companion (Cloud Character)
    participant Drag as Draggable Badges (Pills)
    participant Specs as Active Specs (Layout)
    participant Core as System Core (State)
    
    Developer->>Page: Lands on page
    Note over Page: Friendly off-whites fade in &<br/>AI companion begins breathing animation on load
    
    Developer->>Page: Toggles Theme Switch / Clicks Swatch
    Page->>Core: Update theme color variables & accent
    Core-->>Page: Canvas colors shift: Chalk White <-> Carbon Slate
    
    Developer->>Drag: Drags rule badge pill
    Note over Drag: React tracks drag coordinates relative to character
    Drag->>Specs: Send coordinate offsets
    Specs-->>Developer: Draws dynamic red spacing caliper vectors (e.g. 24px, 48px)
    
    Drag->>Companion: Badge enters snap radius of AI Companion
    Note over Companion: Magnetically snaps onto companion cloud body & sparkle pops
    Companion->>Companion: Morph facial expression to super happy / smiling
    Companion->>Core: Update connectionState = snapped
    Core-->>Page: Active properties widget flashes "Rule Applied Successfully!"
    
    Developer->>Page: Scrolls to Token Matrix
    Note over Page: Mesy scattered red tokens bounce around dynamically
    Developer->>Page: Clicks "Engage Optimizer" slide toggle
    Page->>Core: Set isOptimized = true
    Core-->>Page: Red tokens compile & align smoothly into a neat compact green grid (-80% size)
    
    Developer->>Page: Clicks Setup copy buttons
    Page->>Core: Copy command to clipboard
    Core-->>Developer: Toast status: check indicator turns green & pulses happily
```
