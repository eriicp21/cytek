import React from 'react';
import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

// Base64 encoded SVG
const LOGO_BASE64 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIgImh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDEvUkVDLVNWRy0yMDAxMDkwNC9EVEQvc3ZnMTAuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgd2lkdGg9IjM2Ny4wMDAwMDBwdCIgaGVpZ2h0PSIzNjcuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAzNjcuMDAwMDAwIDM2Ny4wMDAwMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE2LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxOQo8bWV0YSBuYW1lPSJQcm9kdWNlciIgY29udGVudD0iT25saW5lLUNvbnZlcnQiLz48L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzNjcuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTkwMCAzNjAwIGMtNTA5IC0zNSAtOTg1IC0yOTUgLTEyODkgLTcwNiAtOTkgLTEzNCAtMTYxIC0yNDUgLTIyMiAtMzk0IC0xNzIgLTQyNCAtMTcyIC05MDYgMCAtMTMzMCAyMzcgLTU4MyA3NDQgLTk4MyAxMzc2IC0xMDg1IDEzMyAtMjIgMzk3IC0yMiA1MzAgLTEgMzc0IDYxIDcwMiAyMjQgOTc1IDQ4NiBsODQgODEgLTI0MiAyNDEgLTI0MSAyNDIgLTczIC03MCBjLTE2NiAtMTYwIC0zMzIgLTI1MCAtNTQ1IC0yOTUgLTExMiAtMjQgLTI5NSAtMjggLTQwNiAtMTAgLTE1OCAyNyAtMzUxIDExMiAtNDg3IDIxNiAtMTc5IDEzNyAtMzI1IDM2MSAtMzg4IDU5MyAtMjMgODcgLTI2IDExNSAtMjYgMjY3IDAgMTUzIDMgMTgwIDI3IDI3MCAxMzIgNDg3IDU1NyA4MTYgMTA1NyA4MTcgMjM1IDAgNDUxIC02OSA2MzQgLTIwMyBsNjkgLTUxIC0xMTEgLTExMSAtMTEwIC0xMTAgLTY3IDQyIGMtMzgxIDI0MSAtODkyIDEwNyAtMTA5OSAtMjg4IC0yMjAgLTQyMSAtMjAgLTk0MiA0MjMgLTEwOTYgMTQ4IC01MiAzMzYgLTU4IDQ3NiAtMTUgMTQwIDQzIDMxNSAxNTUgMzc1IDI0MCBsMjMgMzIgLTE4MCAxODIgLTE4MCAxODEgMTQgNTAgYzMxIDExNSAtMzEgMjUwIC0xNDIgMzA3IC01NyAzMCAtMTYyIDM2IC0yMjIgMTMgLTY0IC0yNSAtMTM4IC05NSAtMTYwIC0xNTMgLTM5IC0xMDEgLTE1IC0yMjggNTggLTMwMSA3MyAtNzMgMjA0IC0xMDMgMjkxIC02NyBsMzUgMTUgMTEzIC0xMTQgMTEzIC0xMTMgLTQ4IC0zMSBjLTExOCAtNzUgLTI3NiAtMTA1IC00MTAgLTc4IC0xODIgMzcgLTM0MCAxNTMgLTQxOCAzMDggLTQ5IDk3IC02NyAxNjYgLTY3IDI2NiAwIDExMSAxNCAxNzMgNjMgMjcyIDkzIDE5MiAzMTQgMzMxIDUyNyAzMzEgMTQxIDAgMzExIC03MyA0MTYgLTE3NyBsNjYgLTY2IDI0MSAyNDIgMjQyIDI0MiAtODcgODMgYy0xOTAgMTgwIC00MTggMjk1IC02NzIgMzM4IC0xMTUgMjAgLTM0NCAxNCAtNDYzIC0xMSAtMjYwIC01NCAtNDc3IC0xNzQgLTY2MSAtMzY1IC0xNzYgLTE4MyAtMjkzIC00MTQgLTMzNiAtNjYxIC0yMCAtMTE2IC0yMCAtMzI0IDAgLTQ0MCA3MyAtNDI1IDM3MCAtNzk1IDc2OCAtOTU3IDQxNiAtMTcwIDkxMSAtMTA1IDEyNjAgMTY2IGw1OSA0NiA4NiAtNzkgYzQ3IC00NCA5OSAtOTIgMTE0IC0xMDkgbDI4IC0yOSAtNjMgLTUwIGMtMjA4IC0xNjUgLTQyMiAtMjY3IC02NzggLTMyNCAtMTM4IC0zMCAtNDA4IC0zNyAtNTU1IC0xNCAtNjQ1IDEwMSAtMTE1NyA1NzMgLTEzMTAgMTIwNSAtMTI3IDUzMCAzMyAxMDk2IDQyMSAxNDg0IDIzNyAyMzcgNTM2IDM5MSA4NjcgNDQ3IDE2MyAyOCA0MTkgMjMgNTc3IC0xMSAyMzMgLTUwIDQ1MyAtMTQ5IDYzMyAtMjg3IDUyIC00MCA1NyAtNDggNTcgLTgzIDAgLTUwIDE1IC04OCA0OCAtMTIzIDM5IC00MiA3NSAtNTcgMTMxIC01NyA4NyAwIDEzOCAzMSAxNzIgMTA1IDM2IDc4IDEzIDE2OCAtNTYgMjIxIC0zMiAyNCAtNDkgMjkgLTEwOSAzMiAtNjIgNCAtNzYgOCAtMTExIDM3IC0yMiAxOCAtNzggNTcgLTEyNSA4NyAtMzE5IDIwNyAtNjk5IDMwNCAtMTA5MCAyNzh6Ii8+CjwvZz4KPC9zdmc+Cg==";

// Define mask style
const maskStyle = {
  WebkitMaskImage: `url('${LOGO_BASE64}')`,
  WebkitMaskSize: '100vw',
  WebkitMaskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat',
  maskImage: `url('${LOGO_BASE64}')`,
  maskSize: '100vw',
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
} as const;

// Define grid animation colors and configuration
const GRID_CONFIG = {
  background: {
    color: "#6D28D9",
    maxOpacity: 0.15,
    flickerChance: 0.12,
    squareSize: 4,
    gridGap: 4,
  },
  logo: {
    color: "#ffffff",
    maxOpacity: 0.65,
    flickerChance: 0.18,
    squareSize: 3,
    gridGap: 6,
  },
} as const;

export const FlickeringGridHero = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <FlickeringGrid
        className={`absolute inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] motion-safe:animate-pulse`}
        {...GRID_CONFIG.background}
      />
      <div
        className="absolute inset-0 z-0 translate-y-[2vh] motion-safe:animate-fade-in"
        style={{
          ...maskStyle,
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      >
        <FlickeringGrid {...GRID_CONFIG.logo} />
      </div>
    </div>
  );
};