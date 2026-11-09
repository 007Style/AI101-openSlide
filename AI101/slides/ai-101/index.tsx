import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  Step,
  Steps,
  useIsActivePage,
  useSlidePageNumber,
} from '@open-slide/core';
import { type CSSProperties, type ReactNode, type RefObject, useEffect, useRef } from 'react';
import caffe from './assets/caffe.png';
import candyDetect from './assets/candy-detect.jpg';
import convolution from './assets/convolution.gif';
import dairyGrid from './assets/dairy-grid.jpg';
import dairyGridSmall from './assets/dairy-grid-small.jpg';
import djIbm from './assets/dj-ibm.png';
import flickr from './assets/flickr.jpg';
import gradientDescent from './assets/gradient-descent.gif';
import hfPage from './assets/hf-page.png';
import hrSchema from './assets/hr-schema.gif';
import keras from './assets/keras.png';
import liberty from './assets/liberty.jpg';
import mapsysCard from './assets/mapsys-card.png';
import netLarge from './assets/net-large.png';
import neuron from './assets/neuron.jpg';
import pytorch from './assets/pytorch.png';
import simpleDeep from './assets/simple-deep.png';
import social from './assets/social.jpg';
import softmax from './assets/softmax.png';
import speaker from './assets/speaker.png';
import tensorflow from './assets/tensorflow.png';
import tweet from './assets/tweet.png';
import waveform from './assets/waveform.png';
import wordcloud from './assets/wordcloud.png';
import wrapper from './assets/wrapper.jpg';
import xmlSample from './assets/xml-sample.png';
import youtube from './assets/youtube.png';

/* ───────────────────────── design ───────────────────────── */

export const design: DesignSystem = {
  palette: { bg: '#03050C', text: '#F3F6FC', accent: '#5BE3B0' },
  fonts: {
    display: 'system-ui, -apple-system, "Segoe UI", sans-serif',
    body: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  },
  typeScale: { hero: 240, body: 36 },
  radius: 20,
};

const c = {
  muted: '#A9B7D9',
  dim: 'rgba(169, 183, 217, 0.62)',
  line: 'rgba(169, 183, 217, 0.2)',
  panel: 'rgba(255, 255, 255, 0.045)',
  panel2: 'rgba(255, 255, 255, 0.085)',
  green: '#5BE3B0',
  blue: '#4FA8FF',
  violet: '#A78BFA',
  amber: '#FFC857',
  red: '#FF6B7A',
  ink: '#03050C',
};
const ACC = 'var(--osd-accent)';
const mono = '"Departure Mono", ui-monospace, "SF Mono", Menlo, monospace';
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export const transition: SlideTransition = {
  duration: 240,
  exit: { duration: 240, keyframes: [{ transform: 'translateY(0)' }, { transform: 'translateY(0)' }] },
  enter: {
    duration: 240,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    keyframes: [
      { opacity: 0, transform: 'translateY(8px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  WebkitFontSmoothing: 'antialiased',
};

const css = `
  .ai { animation-fill-mode: both; }
  [data-still] .ai { animation: none !important; }
  @media (prefers-reduced-motion: reduce) { .ai { animation: none !important; } }
  @keyframes ai-rise { from { opacity: 0; transform: translateY(28px); } }
  @keyframes ai-fade { from { opacity: 0; } }
  @keyframes ai-pop { from { opacity: 0; transform: scale(0.6); } }
  @keyframes ai-slide { from { opacity: 0; transform: translateX(-48px); } }
  @keyframes ai-slider { from { opacity: 0; transform: translateX(48px); } }
  @keyframes ai-grow { from { transform: scaleX(0); } }
  @keyframes ai-growy { from { transform: scaleY(0); } }
  @keyframes ai-tilt { from { opacity: 0; transform: translateY(60px) rotate(-6deg) scale(0.92); } }
  @keyframes ai-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
  @keyframes ai-pulse { 0%, 100% { opacity: 0.55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
  @keyframes ai-ring { 0% { transform: scale(0.3); opacity: 0.9; } 100% { transform: scale(1.7); opacity: 0; } }
  @keyframes ai-flow { to { stroke-dashoffset: -64; } }
  @keyframes ai-blink { 50% { opacity: 0; } }
  @keyframes ai-sweep { from { transform: translateX(-130%); } to { transform: translateX(230%); } }
  @keyframes ai-drift { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(70px, -44px); } }
  @keyframes ai-bar { 0%, 100% { transform: scaleY(0.2); } 50% { transform: scaleY(1); } }
  @keyframes ai-spin { to { transform: rotate(360deg); } }
  @keyframes ai-tok { 0% { opacity: 0; transform: translateY(10px); } 10%, 85% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; } }
  @keyframes ai-hop { 0%, 100% { transform: translateY(0); } 8% { transform: translateY(-14px); } 16% { transform: translateY(0); } }
  @keyframes ai-dash { to { stroke-dashoffset: -40; } }
`;

const css2 = `
  @keyframes ai-scan { 0%, 100% { transform: translateX(0); } 30%, 40% { transform: translateX(114px); } 70%, 80% { transform: translateX(254px); } }
  @keyframes ai-drawloop { 0% { stroke-dashoffset: 320; } 45%, 100% { stroke-dashoffset: 0; } }
  @keyframes ai-appear { 0%, 45% { opacity: 0; transform: scale(0.3); } 60%, 100% { opacity: 1; transform: scale(1); } }
  @keyframes ai-typeloop { 0%, 5% { transform: scaleX(0); opacity: 1; } 35%, 92% { transform: scaleX(1); opacity: 1; } 100% { transform: scaleX(1); opacity: 0; } }
  @keyframes ai-breathe { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.025); } }
  @keyframes ai-twinkle { 0%, 100% { opacity: 0.4; transform: scale(0.85) rotate(0deg); } 50% { opacity: 1; transform: scale(1.1) rotate(20deg); } }
  @keyframes ai-hl { 0%, 100% { background-position: 0 0; } 50% { background-position: 100% 0; } }
  @keyframes ai-cycle { 0%, 20% { opacity: 0.25; } 30%, 50% { opacity: 1; } 60%, 100% { opacity: 0.25; } }
  @keyframes ai-grow2 { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }
  @keyframes ai-token { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  @keyframes ai-stream { 0% { opacity: 0; transform: translateX(-16px); } 12%, 85% { opacity: 1; transform: translateX(0); } 100% { opacity: 0; } }
  @keyframes ai-load { 0% { transform: scaleX(0); } 70%, 100% { transform: scaleX(1); } }
  @keyframes ai-eq { 0%, 100% { transform: scaleY(0.15); } 50% { transform: scaleY(1); } }
  @keyframes ai-dashmove { to { stroke-dashoffset: -48; } }
`;
const Styles = () => (
  <style>
    {css}
    {css2}
  </style>
);

/* animation helper: returns the style for an entrance / loop */
const fx = (a: string, d = 0, t = 0.7, loop = false): CSSProperties => ({
  animation: loop ? `ai-${a} ${t}s ease-in-out ${d}s infinite` : `ai-${a} ${t}s ${EASE} ${d}s both`,
});

const Fx = ({
  a = 'rise',
  d = 0,
  t = 0.7,
  loop = false,
  style,
  children,
}: {
  a?: string;
  d?: number;
  t?: number;
  loop?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}) => (
  <div className="ai" style={{ ...fx(a, d, t, loop), ...style }}>
    {children}
  </div>
);

/* ───────────────────────── shared chrome ───────────────────────── */

const Backdrop = () => (
  <>
    <div
      className="ai"
      style={{
        position: 'absolute',
        left: -260,
        top: -300,
        width: 1000,
        height: 1000,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,227,176,0.13) 0%, rgba(91,227,176,0) 62%)',
        ...fx('drift', 0, 18, true),
      }}
    />
    <div
      className="ai"
      style={{
        position: 'absolute',
        right: -300,
        bottom: -360,
        width: 1100,
        height: 1100,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,168,255,0.14) 0%, rgba(79,168,255,0) 62%)',
        ...fx('drift', 4, 22, true),
      }}
    />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(169,183,217,0.08) 1.5px, transparent 1.5px)',
        backgroundSize: '48px 48px',
        maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0) 60%)',
        WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0) 60%)',
      }}
    />
  </>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: 120,
          bottom: 28,
          fontFamily: mono,
          fontSize: 20,
          letterSpacing: '0.1em',
          color: c.dim,
        }}
      >
        DJ SINGLEY <span style={{ color: ACC }}>/</span> AI 101
      </div>
      <div
        style={{
          position: 'absolute',
          right: 120,
          bottom: 28,
          fontFamily: mono,
          fontSize: 20,
          letterSpacing: '0.1em',
          color: c.dim,
        }}
      >
        <span style={{ color: 'var(--osd-text)' }}>{pad(current)}</span> / {pad(total)}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: 4,
          width: `${(current / total) * 100}%`,
          background: `linear-gradient(90deg, ${c.green}, ${c.blue})`,
        }}
      />
    </>
  );
};

const Shell = ({
  label,
  title,
  size = 68,
  children,
}: {
  label: string;
  title?: string;
  size?: number;
  children?: ReactNode;
}) => {
  const active = useIsActivePage();
  return (
    <div style={fill} data-still={active ? undefined : ''}>
      <Styles />
      <Backdrop />
      <div
        className="ai"
        style={{
          position: 'absolute',
          left: 120,
          top: 58,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontFamily: mono,
          fontSize: 22,
          letterSpacing: '0.14em',
          color: c.muted,
          ...fx('slide', 0, 0.6),
        }}
      >
        <span
          className="ai"
          style={{ width: 44, height: 3, background: ACC, transformOrigin: 'left', ...fx('grow', 0.1, 0.6) }}
        />
        {label}
      </div>
      {title && (
        <h2
          className="ai"
          style={{
            position: 'absolute',
            left: 120,
            top: 100,
            right: 120,
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: size,
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1.08,
            ...fx('rise', 0.08, 0.7),
          }}
        >
          {title}
        </h2>
      )}
      {children}
      <Footer />
    </div>
  );
};

const Card = ({ children, style }: { children?: ReactNode; style?: CSSProperties }) => (
  <div
    style={{
      background: c.panel,
      border: `1px solid ${c.line}`,
      borderRadius: 'var(--osd-radius)',
      boxSizing: 'border-box',
      ...style,
    }}
  >
    {children}
  </div>
);

const LightCard = ({ children, style }: { children?: ReactNode; style?: CSSProperties }) => (
  <div
    style={{
      background: '#ffffff',
      borderRadius: 16,
      boxSizing: 'border-box',
      overflow: 'hidden',
      boxShadow: '0 24px 60px -20px rgba(0,0,0,0.7)',
      ...style,
    }}
  >
    {children}
  </div>
);

const Hl = ({ children, color }: { children?: ReactNode; color?: string }) => (
  <span style={{ color: color ?? ACC, fontWeight: 700 }}>{children}</span>
);

const B = ({ children, size = 34, d = 0 }: { children?: ReactNode; size?: number; d?: number }) => (
  <div
    className="ai"
    style={{
      display: 'flex',
      gap: 22,
      alignItems: 'flex-start',
      fontSize: size,
      lineHeight: 1.35,
      ...fx('slide', d, 0.6),
    }}
  >
    <span
      style={{
        flex: 'none',
        width: 12,
        height: 12,
        marginTop: size * 0.48,
        borderRadius: 3,
        background: ACC,
        transform: 'rotate(45deg)',
      }}
    />
    <span>{children}</span>
  </div>
);

const Eyebrow = ({ children, color }: { children?: ReactNode; color?: string }) => (
  <div
    style={{
      fontFamily: mono,
      fontSize: 24,
      letterSpacing: '0.12em',
      color: color ?? ACC,
      textTransform: 'uppercase',
    }}
  >
    {children}
  </div>
);

const Chip = ({
  children,
  color = c.green,
  size = 26,
  style,
}: {
  children?: ReactNode;
  color?: string;
  size?: number;
  style?: CSSProperties;
}) => (
  <span
    style={{
      display: 'inline-block',
      padding: '8px 20px',
      borderRadius: 999,
      border: `1.5px solid ${color}`,
      color,
      fontFamily: mono,
      fontSize: size,
      letterSpacing: '0.04em',
      background: 'rgba(255,255,255,0.03)',
      ...style,
    }}
  >
    {children}
  </span>
);

/* ───────────────────────── decode text effect ───────────────────────── */

const WIDTH_CLASSES = ['ijl', 'frt', 'mw', 'abcdeghknopqsuvxyz', 'IJ1', '023456789', 'MW', 'BEFKLPRSTXYZ', 'ACDGHNOQUV'];
const widthClass = (ch: string) => WIDTH_CLASSES.find((k) => k.includes(ch)) ?? '';
const ROW_STAGGER = 130;
const LEAD_IN = 170;
const ROW_SPREAD = 430;
const JITTER = 55;
const SCRAMBLE_STEP = 42;

const seeded = (seed: number) => () => {
  seed = (seed + 1831565813) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

type Glyph = { ch: string; style: CSSStyleDeclaration; x: number; y: number; w: number; h: number };

function createDecoder(root: HTMLElement, el: HTMLElement, startDelay = 0) {
  let raf = 0;
  let overlay: HTMLElement | null = null;

  const stop = () => {
    cancelAnimationFrame(raf);
    overlay?.remove();
    overlay = null;
    el.style.opacity = '';
  };

  const run = () => {
    stop();
    const rootRect = root.getBoundingClientRect();
    const scale = rootRect.width / root.offsetWidth;

    const chars: Glyph[] = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const range = document.createRange();
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const parent = node.parentElement;
      const text = node.nodeValue ?? '';
      if (!parent) continue;
      const style = getComputedStyle(parent);
      for (let i = 0; i < text.length; i++) {
        if (!text[i].trim()) continue;
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const r = range.getClientRects()[0];
        if (r?.width)
          chars.push({
            ch: text[i],
            style,
            x: (r.left - rootRect.left) / scale,
            y: (r.top - rootRect.top) / scale,
            w: r.width / scale,
            h: r.height / scale,
          });
      }
    }
    if (!chars.length) return;

    const rows: Glyph[][] = [];
    for (const g of chars) {
      const row = rows.find((r) => Math.abs(r[0].y - g.y) < g.h / 2);
      if (row) row.push(g);
      else rows.push([g]);
    }

    let hash = 0;
    for (const g of chars) hash = (Math.imul(hash, 31) + g.ch.charCodeAt(0)) | 0;
    const rand = seeded(hash);
    const lockAt = new Map<Glyph, number>();
    rows.forEach((row, ri) =>
      row.forEach((g, ci) => {
        lockAt.set(
          g,
          startDelay +
            ri * ROW_STAGGER +
            LEAD_IN +
            (ci / Math.max(1, row.length - 1)) * ROW_SPREAD +
            (rand() - 0.5) * 2 * JITTER,
        );
      }),
    );

    const ov = document.createElement('span');
    ov.setAttribute('aria-hidden', 'true');
    ov.style.cssText =
      'position:absolute;left:0;top:0;width:0;height:0;z-index:10;pointer-events:none;user-select:none;letter-spacing:0;white-space:pre;';
    const props = [
      'fontFamily',
      'fontSize',
      'fontWeight',
      'fontStyle',
      'fontStretch',
      'fontKerning',
      'fontFeatureSettings',
      'color',
      'textShadow',
    ];
    const spans = chars.map((g) => {
      const s = document.createElement('span');
      s.style.cssText = `position:absolute;top:${g.y}px;height:${g.h}px;line-height:${g.h}px;`;
      for (const p of props)
        (s.style as unknown as Record<string, string>)[p] =
          (g.style as unknown as Record<string, string>)[p] ?? '';
      s.appendChild(document.createTextNode(''));
      ov.appendChild(s);
      return s;
    });
    root.appendChild(ov);
    overlay = ov;
    el.style.opacity = '0';

    const set = (i: number, text: string, x: number, centred: boolean) => {
      const node = spans[i].firstChild as Text;
      if (node.nodeValue !== text) node.nodeValue = text;
      spans[i].style.left = `${x}px`;
      spans[i].style.transform = centred ? 'translateX(-50%)' : 'none';
    };

    const t0 = performance.now();
    const tick = (now: number) => {
      const t = now - t0;
      let pending = false;
      chars.forEach((g, i) => {
        const at = lockAt.get(g) ?? 0;
        if (t >= at) {
          if (spans[i].dataset.locked) return;
          spans[i].dataset.locked = '1';
          set(i, g.ch, g.x, false);
          return;
        }
        pending = true;
        const cls = widthClass(g.ch);
        const glyph =
          cls && t >= at - LEAD_IN
            ? cls[Math.floor(seeded(hash + i * 7919 + Math.floor(t / SCRAMBLE_STEP) * 104729)() * cls.length)]
            : '';
        set(i, glyph, g.x + g.w / 2, true);
      });
      if (pending) raf = requestAnimationFrame(tick);
      else stop();
    };
    tick(t0);
  };

  return { run, stop };
}

function useDecode(
  root: RefObject<HTMLDivElement | null>,
  el: RefObject<HTMLElement | null>,
  active: boolean,
  delay: number,
  every?: number,
) {
  useEffect(() => {
    const r = root.current;
    const e = el.current;
    if (!r || !e || !active) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const d = createDecoder(r, e, delay);
    d.run();
    const id = every ? window.setInterval(d.run, every) : 0;
    return () => {
      if (id) window.clearInterval(id);
      d.stop();
    };
  }, [active, delay, every, root, el]);
}

/* ───────────────────────── WebGL Mandelbrot cover ───────────────────────── */

const VERT = `#version 300 es
void main() {
  vec2 position = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}
`;

const FRAG_GLOW = `#version 300 es
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uDarkBackground;
out vec4 fragColor;

const float HUE = 0.36;
const float HUE_SPREAD = 0.24;
const float CHROMA = 0.15;
const float LIGHTNESS = 0.58;
const float LIGHT_SWING = 0.208;
const float BAND_FREQ = 0.42;
const float BAND_DRIFT = 0.6;
const float GLOW_RATE = 0.075;
const float VIGNETTE = 0.0558240488;
const float TAU = 6.28318530718;

vec3 oklchToLinear(float L, float C, float h) {
  float a = C * cos(h), b = C * sin(h);
  float l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  float m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  float s_ = L - 0.0894841775 * a - 1.2914855480 * b;
  vec3 lms = vec3(l_, m_, s_);
  lms = lms * lms * lms;
  return mat3(4.0767416621, -1.2684380046, -0.0041960863,
              -3.3077115913, 2.6097574011, -0.7034186147,
              0.2309699292, -0.3413193965, 1.7076147010) * lms;
}

float blueNoise(vec2 p, float frame) {
  p += 5.588238 * mod(frame, 64.0);
  return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y));
}

float mandel(vec2 c) {
  vec2 z = vec2(0.0);
  for (int i = 0; i < 320; i++) {
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    float m = dot(z, z);
    if (m > 1.0e4) return float(i) + 1.0 - log2(0.5 * log(m));
  }
  return -1.0;
}

vec3 shade(float mu, float t) {
  if (mu < 0.0) return vec3(0.0);
  float glow = 1.0 - exp(-max(mu, 0.0) * GLOW_RATE);
  float k = 0.5 + 0.5 * sin(mu * BAND_FREQ - t * BAND_DRIFT);
  float hue0 = HUE * TAU, hue1 = hue0 + HUE_SPREAD * TAU;
  vec3 tint = clamp(oklchToLinear(LIGHTNESS + LIGHT_SWING * k, CHROMA * (0.75 + 0.35 * k), mix(hue0, hue1, k)), 0.0, 1.0);
  return tint * glow * (0.55 + 0.75 * k);
}

vec3 finish(vec3 color, vec2 pos) {
  vec3 x = max(color, 0.0);
  color = (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
  color = pow(clamp(color, 0.0, 1.0), vec3(0.85, 0.92, 0.98));
  color *= 1.0 - smoothstep(0.5, 1.6, length(pos)) * VIGNETTE;
  color = uDarkBackground + color * (1.0 - uDarkBackground);
  color += (blueNoise(gl_FragCoord.xy, floor(iTime * 24.0)) - 0.5) / 255.0;
  return clamp(color, 0.0, 1.0);
}

const vec2 C0 = vec2(0.0, 1.0);
const float LAMBDA_LEN = 5.65685424949;
const float LAMBDA_ARG = 0.78539816340;
const float BASE_HEIGHT = 0.0035;
const float CYCLE_SECONDS = 14.0;

vec3 layer(vec2 pos, float level) {
  float a = -LAMBDA_ARG * level;
  float ca = cos(a), sa = sin(a);
  vec2 c = C0 + mat2(ca, sa, -sa, ca) * pos * (BASE_HEIGHT * exp(-level * log(LAMBDA_LEN)));
  float mu = mandel(c);
  if (mu >= 0.0) mu -= 2.0 * level;
  return shade(mu, iTime);
}

void main() {
  vec2 R = iResolution.xy;
  vec2 pos = (gl_FragCoord.xy - vec2(0.64, 0.5) * R) / R.y;
  float level = iTime / CYCLE_SECONDS;
  float phi = fract(level);
  float w = smoothstep(0.0, 1.0, phi);
  vec3 ink = mix(layer(pos, phi), layer(pos, phi - 1.0), w);
  fragColor = vec4(finish(ink, pos), 1.0);
}
`;

const FRAG_ASCII = `#version 300 es
precision highp float;

uniform sampler2D tScene;
uniform sampler2D tGlyphs;
uniform vec2 iResolution;
uniform vec3 uDarkBackground;
out vec4 fragColor;

const float uStrength = 1.29589593;
const float uScale = 1.04066491;
const float uGlyphCount = 10.0;
const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);

vec3 sceneInk(vec2 uv) { return texture(tScene, clamp(uv, 0.0, 1.0)).rgb - uDarkBackground; }

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 cellPx = vec2(0.62, 1.0) * floor(uScale * 9.0 + 0.5);
  vec2 cell = floor(frag / cellPx);
  vec2 centre = (cell + 0.5) * cellPx;
  vec3 ink = vec3(0.0);
  ink += sceneInk(centre / iResolution) * 2.0;
  ink += sceneInk((centre + cellPx * vec2(0.3, 0.3)) / iResolution);
  ink += sceneInk((centre + cellPx * vec2(-0.3, 0.3)) / iResolution);
  ink += sceneInk((centre + cellPx * vec2(0.3, -0.3)) / iResolution);
  ink += sceneInk((centre + cellPx * vec2(-0.3, -0.3)) / iResolution);
  ink /= 6.0;
  float level = pow(clamp(dot(ink, LUMA) * (0.9 + 0.3 * uStrength), 0.0, 1.0), 0.9);
  float glyph = floor(level * (uGlyphCount - 1.0) + 0.5);
  vec2 local = (frag - cell * cellPx) / cellPx;
  float mask = texture(tGlyphs, vec2((glyph + local.x) / uGlyphCount, local.y)).r;
  vec3 under = sceneInk(frag / iResolution) * 0.45;
  vec3 color = uDarkBackground + clamp(under + ink * mask, 0.0, 1.0);
  fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}
`;

const GLYPH_RAMP = ' .:;+*oO8@';
const DARK_BG = [3 / 255, 5 / 255, 12 / 255];

function startGL(host: HTMLElement, still: boolean): () => void {
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  canvas.style.cssText =
    'width:100%;height:100%;display:block;opacity:0;transition:opacity 350ms cubic-bezier(0,0,0.2,1)';
  host.appendChild(canvas);
  const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, depth: false, stencil: false });
  if (!gl) {
    canvas.remove();
    return () => {};
  }

  const compile = (frag: string) => {
    const prog = gl.createProgram();
    for (const [type, src] of [
      [gl.VERTEX_SHADER, VERT],
      [gl.FRAGMENT_SHADER, frag],
    ] as const) {
      const sh = gl.createShader(type);
      if (!sh) throw new Error('shader');
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? 'shader');
      gl.attachShader(prog, sh);
      gl.deleteShader(sh);
    }
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog) ?? 'link');
    return prog;
  };
  const clampEdge = () => {
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  };

  const glow = compile(FRAG_GLOW);
  const ascii = compile(FRAG_ASCII);
  const W = canvas.width;
  const H = canvas.height;

  const sceneTex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, sceneTex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, W, H, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  clampEdge();
  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, sceneTex, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  const atlas = document.createElement('canvas');
  atlas.width = 480;
  atlas.height = 80;
  const ctx = atlas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, atlas.width, atlas.height);
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '500 62px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
    for (let i = 0; i < 10; i++) ctx.fillText(GLYPH_RAMP[i], i * 48 + 24, 43.2);
  }
  const glyphTex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, glyphTex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlas);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  clampEdge();

  const u1 = {
    res: gl.getUniformLocation(glow, 'iResolution'),
    time: gl.getUniformLocation(glow, 'iTime'),
    dark: gl.getUniformLocation(glow, 'uDarkBackground'),
  };
  const u2 = {
    res: gl.getUniformLocation(ascii, 'iResolution'),
    dark: gl.getUniformLocation(ascii, 'uDarkBackground'),
    scene: gl.getUniformLocation(ascii, 'tScene'),
    glyphs: gl.getUniformLocation(ascii, 'tGlyphs'),
  };

  const draw = (time: number) => {
    gl.viewport(0, 0, W, H);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.useProgram(glow);
    gl.uniform2f(u1.res, W, H);
    gl.uniform1f(u1.time, time);
    gl.uniform3fv(u1.dark, DARK_BG);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.useProgram(ascii);
    gl.uniform2f(u2.res, W, H);
    gl.uniform3fv(u2.dark, DARK_BG);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sceneTex);
    gl.uniform1i(u2.scene, 0);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, glyphTex);
    gl.uniform1i(u2.glyphs, 1);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  let raf = 0;
  let dead = false;
  if (still) {
    draw(2);
  } else {
    let last = 0;
    let t = 0;
    const loop = (now: number) => {
      if (dead) return;
      t += last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  }
  canvas.style.opacity = '1';

  return () => {
    dead = true;
    cancelAnimationFrame(raf);
    canvas.remove();
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  };
}

/* ───────────────────────── 01 · Cover ───────────────────────── */

const Cover: Page = () => {
  const active = useIsActivePage();
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const glRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = glRef.current;
    if (!host) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return startGL(host, !active || reduced);
  }, [active]);

  // Decode the title now, then again every ten seconds.
  useDecode(rootRef, heroRef, active, 200, 10000);

  const meta: CSSProperties = {
    fontFamily: mono,
    fontSize: 26,
    letterSpacing: '0.05em',
    color: c.muted,
  };
  return (
    <div ref={rootRef} style={{ ...fill, background: '#03050C' }} data-still={active ? undefined : ''}>
      <Styles />
      <div ref={glRef} aria-hidden="true" style={{ position: 'absolute', inset: 0 }} />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(90deg, rgba(3,5,12,0.88) 0%, rgba(3,5,12,0.8) 34%, rgba(3,5,12,0.35) 58%, rgba(3,5,12,0) 76%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '96px 120px 62px',
        }}
      >
        <div
          className="ai"
          style={{
            ...meta,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            color: 'var(--osd-text)',
            textShadow: '0 0 12px #03050C, 0 0 4px #03050C',
            ...fx('fade', 0.2, 1),
          }}
        >
          <span>WELCOME</span>
          <span>
            <b>DJ SINGLEY</b> / AI 101
          </span>
        </div>
        <div
          ref={heroRef}
          style={{ display: 'flex', flexDirection: 'column', gap: 36, textShadow: '0 0 40px #03050C' }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--osd-font-display)',
              fontSize: 'var(--osd-size-hero)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            AI 101
          </h1>
          <p style={{ margin: 0, fontSize: 56, lineHeight: '70px', fontWeight: 600, color: c.muted }}>
            The language. The models.
            <br />
            <b style={{ color: 'var(--osd-text)' }}>The machine.</b>
          </p>
        </div>
        <div
          className="ai"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            textShadow: '0 0 12px #03050C, 0 0 4px #03050C',
            ...fx('rise', 1.4, 0.9),
          }}
        >
          <div style={{ ...meta, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ color: 'var(--osd-text)', fontSize: 34 }}>Daneyand “DJ” Singley</span>
            <span style={{ fontSize: 24 }}>IBM Technical Leader &amp; Field CTO</span>
          </div>
          <span style={{ ...meta, fontSize: 24 }}>01</span>
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────── section divider ───────────────────────── */

const WavePath = ({ y, amp, phase, color, d }: { y: number; amp: number; phase: number; color: string; d: number }) => {
  let p = `M0 ${y}`;
  for (let x = 40; x <= 1960; x += 40) {
    p += ` L${x} ${(y + Math.sin(x / 210 + phase) * amp + Math.sin(x / 90 + phase * 2) * amp * 0.3).toFixed(1)}`;
  }
  return (
    <path
      className="ai"
      d={p}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeDasharray="3 13"
      strokeLinecap="round"
      opacity={0.5}
      style={{ animation: `ai-flow ${6 + d}s linear infinite` }}
    />
  );
};

const Divider = ({
  label,
  title,
  sub,
  n,
}: {
  label: string;
  title: string;
  sub?: string;
  n: string;
}) => {
  const active = useIsActivePage();
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  useDecode(rootRef, heroRef, active, 150);
  return (
    <div ref={rootRef} style={fill} data-still={active ? undefined : ''}>
      <Styles />
      <Backdrop />
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden="true"
      >
        <WavePath y={760} amp={50} phase={0} color={c.green} d={0} />
        <WavePath y={820} amp={62} phase={1.2} color={c.blue} d={1} />
        <WavePath y={880} amp={70} phase={2.4} color={c.violet} d={2} />
        <WavePath y={940} amp={54} phase={3.6} color={c.green} d={3} />
        <WavePath y={1000} amp={40} phase={4.8} color={c.blue} d={4} />
      </svg>
      <div
        className="ai"
        style={{
          position: 'absolute',
          right: 100,
          top: 40,
          fontFamily: 'var(--osd-font-display)',
          fontSize: 520,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.06em',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(169,183,217,0.22)',
          ...fx('fade', 0.2, 1.2),
        }}
      >
        {n}
      </div>
      <div
        className="ai"
        style={{
          position: 'absolute',
          left: 120,
          top: 58,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontFamily: mono,
          fontSize: 22,
          letterSpacing: '0.14em',
          color: c.muted,
          ...fx('slide', 0, 0.6),
        }}
      >
        <span style={{ width: 44, height: 3, background: ACC }} />
        {label}
      </div>
      <div ref={heroRef} style={{ position: 'absolute', left: 120, top: 330, width: 1500 }}>
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 148,
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: '-0.045em',
          }}
        >
          {title}
        </h1>
        {sub && (
          <p style={{ margin: '36px 0 0', fontSize: 40, lineHeight: 1.35, color: c.muted, fontWeight: 600 }}>
            {sub}
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

/* ───────────────────────── 02 · 03 · 04 · 05 ───────────────────────── */

const Thought: Page = () => (
  <Shell label="WELCOME">
    <div style={{ position: 'absolute', left: 120, top: 250, width: 900 }}>
      <Fx a="rise" d={0.2}>
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 92,
            lineHeight: 1.04,
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: c.muted,
          }}
        >
          You thought you were getting:
        </h1>
      </Fx>
      <Fx a="rise" d={0.7} style={{ marginTop: 64, fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em' }}>
        Daneyand “DJ” Singley
      </Fx>
      <Fx a="rise" d={1} style={{ marginTop: 18, fontSize: 40, color: c.muted }}>
        Executive Director @ MAPSYS
      </Fx>
    </div>
    <Fx
      a="tilt"
      d={0.5}
      t={1}
      style={{
        position: 'absolute',
        left: 1130,
        top: 120,
        width: 604,
        height: 804,
      }}
    >
      <img
        src={mapsysCard}
        alt="MAPSYS Executive Director"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 16,
          boxShadow: '0 40px 90px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.12)',
        }}
      />
    </Fx>
  </Shell>
);

const Actually: Page = () => (
  <Shell label="WELCOME">
    <div style={{ position: 'absolute', left: 120, top: 230, width: 900 }}>
      <Fx a="rise" d={0.2}>
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 92,
            lineHeight: 1.04,
            fontWeight: 800,
            letterSpacing: '-0.04em',
          }}
        >
          You’re actually getting:
        </h1>
      </Fx>
      <Fx a="rise" d={0.6} style={{ marginTop: 56, fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em' }}>
        Daneyand “DJ” Singley
      </Fx>
      <Fx a="rise" d={0.9} style={{ marginTop: 18, fontSize: 40, lineHeight: 1.3, color: ACC }}>
        Technical Leader &amp;
        <br />
        Field CTO @ IBM
      </Fx>
      <Fx a="pop" d={1.8} t={0.6} style={{ marginTop: 56 }}>
        <div
          style={{
            display: 'inline-block',
            padding: '18px 36px',
            borderRadius: 999,
            background: ACC,
            color: c.ink,
            fontSize: 38,
            fontWeight: 800,
            letterSpacing: '-0.01em',
          }}
        >
          Same DJ. Different badge.
        </div>
      </Fx>
    </div>
    <Fx a="tilt" d={0.5} t={1} style={{ position: 'absolute', left: 1120, top: 120, width: 640, height: 800 }}>
      <img
        src={djIbm}
        alt="DJ Singley at IBM"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 16,
          boxShadow: '0 0 140px rgba(79,168,255,0.35), 0 0 0 1px rgba(255,255,255,0.12)',
        }}
      />
    </Fx>
  </Shell>
);

const NetworkNode = ({ x, y, d }: { x: number; y: number; d: number }) => (
  <g>
    <circle
      className="ai"
      cx={x}
      cy={y}
      r={14}
      fill="none"
      stroke={c.green}
      strokeWidth={2}
      style={{ transformOrigin: `${x}px ${y}px`, animation: `ai-ring 3.2s ease-out ${d}s infinite` }}
    />
    <circle
      className="ai"
      cx={x}
      cy={y}
      r={10}
      fill={c.blue}
      style={{ transformOrigin: `${x}px ${y}px`, ...fx('pop', d, 0.5) }}
    />
  </g>
);

const Meetup: Page = () => (
  <Shell label="WELCOME">
    <div style={{ position: 'absolute', left: 120, top: 270, width: 880 }}>
      <Fx a="rise" d={0.2}>
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--osd-font-display)',
            fontSize: 124,
            lineHeight: 1.02,
            fontWeight: 800,
            letterSpacing: '-0.045em',
          }}
        >
          Keep the
          <br />
          conversation going
        </h1>
      </Fx>
      <Fx a="rise" d={0.6} style={{ marginTop: 52, fontSize: 48, fontWeight: 700, color: ACC }}>
        Data, Cloud &amp; AI in Columbus
      </Fx>
      <Fx a="rise" d={0.9} style={{ marginTop: 36 }}>
        <Chip color={c.blue} size={30}>
          meetup.com/Big-Data-Developers-in-Columbus/
        </Chip>
      </Fx>
    </div>
    <svg
      width="760"
      height="680"
      viewBox="0 0 760 680"
      style={{ position: 'absolute', left: 1040, top: 190 }}
      aria-hidden="true"
    >
      <g stroke={c.line} strokeWidth={2} fill="none">
        <line className="ai" x1="380" y1="340" x2="110" y2="120" style={fx('fade', 0.8, 1)} />
        <line className="ai" x1="380" y1="340" x2="640" y2="90" style={fx('fade', 1, 1)} />
        <line className="ai" x1="380" y1="340" x2="690" y2="400" style={fx('fade', 1.2, 1)} />
        <line className="ai" x1="380" y1="340" x2="560" y2="610" style={fx('fade', 1.4, 1)} />
        <line className="ai" x1="380" y1="340" x2="170" y2="560" style={fx('fade', 1.6, 1)} />
        <line className="ai" x1="380" y1="340" x2="60" y2="350" style={fx('fade', 1.8, 1)} />
      </g>
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          className="ai"
          cx="380"
          cy="340"
          r="150"
          fill="none"
          stroke={c.green}
          strokeWidth="2"
          style={{ transformOrigin: '380px 340px', animation: `ai-ring 4.5s ease-out ${i * 1.5}s infinite` }}
        />
      ))}
      <NetworkNode x={110} y={120} d={0.9} />
      <NetworkNode x={640} y={90} d={1.1} />
      <NetworkNode x={690} y={400} d={1.3} />
      <NetworkNode x={560} y={610} d={1.5} />
      <NetworkNode x={170} y={560} d={1.7} />
      <NetworkNode x={60} y={350} d={1.9} />
      <g className="ai" style={{ transformOrigin: '380px 340px', ...fx('pop', 0.4, 0.7) }}>
        <circle cx="380" cy="340" r="46" fill={c.green} />
        <circle cx="380" cy="340" r="16" fill={c.ink} />
        <text x="380" y="438" textAnchor="middle" fontFamily={mono} fontSize="26" fill={c.muted} letterSpacing="3">
          COLUMBUS
        </text>
      </g>
    </svg>
  </Shell>
);

const RowItem = ({
  n,
  color,
  title,
  text,
}: {
  n: string;
  color: string;
  title: string;
  text: string;
}) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
    <div
      style={{
        flex: 'none',
        width: 6,
        height: 140,
        borderRadius: 3,
        background: color,
        boxShadow: `0 0 28px ${color}`,
      }}
    />
    <div style={{ fontFamily: mono, fontSize: 36, color, width: 56 }}>{n}</div>
    <div>
      <div style={{ fontSize: 60, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }}>{title}</div>
      <div style={{ fontSize: 34, color: c.muted, marginTop: 8, lineHeight: 1.3 }}>{text}</div>
    </div>
  </div>
);

const Leave: Page = () => (
  <Shell label="WELCOME" title="What you’ll leave with">
    <div style={{ position: 'absolute', left: 120, top: 300, width: 1020, display: 'flex', flexDirection: 'column', gap: 52 }}>
      <Steps>
        <Step>
          <RowItem n="01" color={c.green} title="The language" text="A vocabulary for AI conversations" />
        </Step>
        <Step>
          <RowItem n="02" color={c.blue} title="The model" text="A mental model of how LLMs work" />
        </Step>
        <Step>
          <RowItem n="03" color={c.violet} title="The machine" text="A way to read model and hardware specifications" />
        </Step>
      </Steps>
    </div>
    <Fx a="slider" d={0.5} style={{ position: 'absolute', left: 1200, top: 330, width: 600 }}>
      <LightCard style={{ padding: 18 }}>
        <img src={wordcloud} alt="Word cloud of AI vocabulary" style={{ width: '100%', display: 'block' }} />
      </LightCard>
    </Fx>
  </Shell>
);

/* ───────────────────────── shared pieces for content slides ───────────────────────── */

const H1 = ({ children, size = 68, d = 0 }: { children?: ReactNode; size?: number; d?: number }) => (
  <Fx
    a="rise"
    d={d}
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.08,
    }}
  >
    {children}
  </Fx>
);

const Table = ({
  head,
  rows,
  size = 24,
  colors,
  align = 'right',
  rowDelay = 0.05,
  startDelay = 0.3,
  pad = 10,
  cellColor,
}: {
  head: string[];
  rows: string[][];
  size?: number;
  colors?: (string | undefined)[];
  align?: 'left' | 'right' | 'center';
  rowDelay?: number;
  startDelay?: number;
  pad?: number;
  cellColor?: (v: string) => string | undefined;
}) => (
  <div
    style={{
      fontFamily: mono,
      fontSize: size,
      border: `1px solid ${c.line}`,
      borderRadius: 16,
      overflow: 'hidden',
      background: c.panel,
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${head.length}, 1fr)`,
        background: 'rgba(91,227,176,0.14)',
        color: ACC,
        fontWeight: 700,
        letterSpacing: '0.04em',
      }}
    >
      {head.map((h) => (
        <div key={h} style={{ padding: `${pad + 2}px 16px`, textAlign: align }}>
          {h}
        </div>
      ))}
    </div>
    {rows.map((r, ri) => (
      <div
        key={r.join('|')}
        className="ai"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${head.length}, 1fr)`,
          borderTop: `1px solid ${c.line}`,
          background: ri % 2 ? 'rgba(255,255,255,0.025)' : 'transparent',
          ...fx('fade', startDelay + ri * rowDelay, 0.5),
        }}
      >
        {r.map((v, ci) => (
          <div
            key={`${ci}-${v}`}
            style={{
              padding: `${pad}px 16px`,
              textAlign: align,
              color: cellColor?.(v) ?? colors?.[ci] ?? 'var(--osd-text)',
              whiteSpace: 'nowrap',
            }}
          >
            {v}
          </div>
        ))}
      </div>
    ))}
  </div>
);

/* ───────────────────────── 06 · AI, ML, DL ───────────────────────── */

const Foundations: Page = () => (
  <Shell label="AI FOUNDATIONS" title="AI, machine learning, deep learning">
    <svg
      width="720"
      height="720"
      viewBox="0 0 720 720"
      style={{ position: 'absolute', left: 120, top: 260 }}
      aria-hidden="true"
    >
      <circle className="ai" cx="360" cy="360" r="340" fill="rgba(79,168,255,0.1)" stroke={c.blue} strokeWidth="3"
        style={{ transformOrigin: '360px 360px', ...fx('pop', 0.3, 0.8) }} />
      <circle className="ai" cx="360" cy="440" r="230" fill="rgba(167,139,250,0.14)" stroke={c.violet} strokeWidth="3"
        style={{ transformOrigin: '360px 440px', ...fx('pop', 0.9, 0.8) }} />
      <circle className="ai" cx="360" cy="520" r="120" fill="rgba(91,227,176,0.2)" stroke={c.green} strokeWidth="3"
        style={{ transformOrigin: '360px 520px', ...fx('pop', 1.5, 0.8) }} />
      <circle cx="360" cy="520" r="120" fill="none" stroke={c.green} strokeWidth="2"
        className="ai" style={{ transformOrigin: '360px 520px', animation: 'ai-ring 3.6s ease-out 2.4s infinite' }} />
      <g fontFamily={mono} fontSize="30" textAnchor="middle" letterSpacing="2">
        <text x="360" y="90" fill={c.blue} className="ai" style={fx('fade', 0.7, 0.6)}>AI</text>
        <text x="360" y="260" fill={c.violet} className="ai" style={fx('fade', 1.3, 0.6)}>ML</text>
        <text x="360" y="530" fill={c.green} className="ai" style={fx('fade', 1.9, 0.6)}>DL</text>
      </g>
    </svg>
    <div style={{ position: 'absolute', left: 940, top: 280, width: 860, display: 'flex', flexDirection: 'column', gap: 56 }}>
      <Steps>
        <Step>
          <div>
            <Eyebrow color={c.blue}>Artificial Intelligence</Eyebrow>
            <div style={{ fontSize: 38, lineHeight: 1.35, marginTop: 10 }}>
              Theory for computers to perform tasks requiring human intelligence
            </div>
          </div>
        </Step>
        <Step>
          <div>
            <Eyebrow color={c.violet}>Machine Learning</Eyebrow>
            <div style={{ fontSize: 38, lineHeight: 1.35, marginTop: 10 }}>
              Give the computer the ability to learn without explicit programming
            </div>
          </div>
        </Step>
        <Step>
          <div>
            <Eyebrow color={c.green}>Deep Learning</Eyebrow>
            <div style={{ fontSize: 38, lineHeight: 1.35, marginTop: 10 }}>
              Brain like logical structure of algorithms: Artificial Neural Networks
            </div>
          </div>
        </Step>
      </Steps>
    </div>
  </Shell>
);

/* ───────────────────────── 07 · What do we use learning for ───────────────────────── */

const IconBox = ({ color, children }: { color: string; children?: ReactNode }) => (
  <div
    style={{
      width: 300,
      height: 220,
      borderRadius: 20,
      border: `1px solid ${color}55`,
      background: `${color}14`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
);

const UseCard = ({
  color,
  title,
  text,
  d,
  icon,
}: {
  color: string;
  title: string;
  text: string;
  d: number;
  icon: ReactNode;
}) => (
  <Fx a="rise" d={d} style={{ width: 520 }}>
    <Card style={{ padding: 40, height: 620 }}>
      <IconBox color={color}>{icon}</IconBox>
      <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: '-0.03em', marginTop: 40, color }}>{title}</div>
      <div style={{ fontSize: 36, lineHeight: 1.35, color: c.muted, marginTop: 16 }}>{text}</div>
    </Card>
  </Fx>
);

const RecognizeIcon = () => (
  <svg width="200" height="150" viewBox="0 0 200 150" aria-hidden="true">
    <rect x="20" y="15" width="160" height="120" rx="8" fill="none" stroke={c.blue} strokeWidth="3" strokeDasharray="10 8"
      className="ai" style={{ animation: 'ai-dashmove 3s linear infinite' }} />
    <circle cx="70" cy="70" r="20" fill={c.blue} opacity="0.85" />
    <rect x="100" y="55" width="55" height="45" rx="6" fill={c.green} opacity="0.85" />
    <rect x="20" y="15" width="160" height="4" fill={c.blue} className="ai"
      style={{ animation: 'ai-sweep 2.4s ease-in-out infinite', transformOrigin: '20px 15px' }} />
  </svg>
);

const PredictIcon = () => (
  <svg width="200" height="150" viewBox="0 0 200 150" aria-hidden="true">
    <path d="M10 125 L10 15 M10 125 L190 125" stroke={c.line} strokeWidth="3" fill="none" />
    <path d="M20 110 L60 85 L95 95 L130 55" stroke={c.amber} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"
      strokeDasharray="320" className="ai" style={{ animation: 'ai-drawloop 3.6s ease-in-out infinite' }} />
    <path d="M130 55 L185 25" stroke={c.amber} strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="4 10"
      className="ai" style={{ animation: 'ai-dashmove 1.2s linear infinite' }} />
    <circle cx="185" cy="25" r="9" fill={c.amber} className="ai"
      style={{ transformOrigin: '185px 25px', animation: 'ai-pulse 1.8s ease-in-out infinite' }} />
  </svg>
);

const GenerateIcon = () => (
  <svg width="200" height="150" viewBox="0 0 200 150" aria-hidden="true">
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} className="ai" x={20} y={20 + i * 30} width={[150, 110, 160, 80][i]} height="16" rx="8"
        fill={c.violet} opacity="0.85"
        style={{ transformOrigin: `20px ${28 + i * 30}px`, animation: `ai-typeloop 4.8s ease-in-out ${i * 0.6}s infinite` }} />
    ))}
    <rect x="176" y="20" width="6" height="106" rx="3" fill={c.green} className="ai" style={{ animation: 'ai-blink 1s steps(1) infinite' }} />
  </svg>
);

const Uses: Page = () => (
  <Shell label="AI FOUNDATIONS" title="What do we use learning for?">
    <div style={{ position: 'absolute', left: 120, top: 280, right: 120, display: 'flex', justifyContent: 'space-between' }}>
      <UseCard color={c.blue} title="Recognize" text="Identify an object or a pattern" d={0.3} icon={<RecognizeIcon />} />
      <UseCard color={c.amber} title="Predict" text="Estimate an outcome from new inputs" d={0.55} icon={<PredictIcon />} />
      <UseCard color={c.violet} title="Generate" text="Produce a useful new continuation" d={0.8} icon={<GenerateIcon />} />
    </div>
  </Shell>
);

/* ───────────────────────── 08 · ML & DL used for ───────────────────────── */

const NumRow = ({ n, color, children }: { n: string; color: string; children?: ReactNode }) => (
  <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
    <div
      style={{
        flex: 'none',
        width: 100,
        height: 100,
        borderRadius: 24,
        border: `2px solid ${color}`,
        color,
        fontFamily: mono,
        fontSize: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 0 36px ${color}33`,
      }}
    >
      {n}
    </div>
    <div style={{ fontSize: 40, lineHeight: 1.3, maxWidth: 1160 }}>{children}</div>
  </div>
);

const UsedFor: Page = () => (
  <Shell label="AI FOUNDATIONS" title="What is Machine Learning and Deep Learning used for?" size={64}>
    <div style={{ position: 'absolute', left: 120, top: 330, display: 'flex', flexDirection: 'column', gap: 44, width: 1500 }}>
      <Steps>
        <Step><NumRow n="01" color={c.green}>Identifying patterns in data</NumRow></Step>
        <Step><NumRow n="02" color={c.blue}>Tools to help predict new values based on new data</NumRow></Step>
        <Step><NumRow n="03" color={c.violet}>Involves statistics – and lots of calculations to identify complex patterns</NumRow></Step>
        <Step><NumRow n="04" color={c.amber}>Ultimately build complex models to explore the data, generate new outputs</NumRow></Step>
      </Steps>
    </div>
  </Shell>
);

/* ───────────────────────── 09 · Data types (divider) ───────────────────────── */

const DataDivider: Page = () => <Divider label="THE DATA" title="Data Types" n="01" />;

/* ───────────────────────── 10 · Structured ───────────────────────── */

const structuredHead = ['LIMIT_BAL', 'AGE', 'PAY_0', 'BILL_AMT1', 'BILL_AMT2', 'BILL_AMT3', 'PAY_AMT1', 'PAY_AMT2', 'PAY_AMT3'];
const structuredRows = [
  ['£20,000.00', '24', '2', '£3,913.00', '£3,102.00', '£689.00', '£0.00', '£689.00', '£0.00'],
  ['£120,000.00', '26', '-1', '£2,682.00', '£1,725.00', '£2,682.00', '£0.00', '£1,000.00', '£1,000.00'],
  ['£90,000.00', '34', '0', '£29,239.00', '£14,027.00', '£13,559.00', '£1,518.00', '£1,500.00', '£1,000.00'],
  ['£50,000.00', '37', '0', '£46,990.00', '£48,233.00', '£49,291.00', '£2,000.00', '£2,019.00', '£1,200.00'],
  ['£50,000.00', '57', '-1', '£8,617.00', '£5,670.00', '£35,835.00', '£2,000.00', '£36,681.00', '£10,000.00'],
  ['£50,000.00', '37', '0', '£64,400.00', '£57,069.00', '£57,608.00', '£2,500.00', '£1,815.00', '£657.00'],
  ['£500,000.00', '29', '0', '£367,965.00', '£412,023.00', '£445,007.00', '£55,000.00', '£40,000.00', '£38,000.00'],
  ['£100,000.00', '23', '0', '£11,876.00', '£380.00', '£601.00', '£380.00', '£601.00', '£0.00'],
];

const Structured: Page = () => (
  <Shell label="THE DATA" title="Structured Data">
    <div style={{ position: 'absolute', left: 120, top: 220, width: 1680, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <B size={36} d={0.3}>Data that has an enforced structure and values have defined data types</B>
    </div>
    <div style={{ position: 'absolute', left: 120, top: 340, width: 1680 }}>
      <Table head={structuredHead} rows={structuredRows} size={23} />
    </div>
    <Steps>
      <Step>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,5,12,0.82)' }} />
        <div style={{ position: 'absolute', left: 380, top: 250, width: 1160 }}>
          <Card style={{ padding: 36, background: 'rgba(12,16,28,0.96)', border: `1px solid ${c.green}66` }}>
            <div style={{ fontSize: 40, fontWeight: 700, marginBottom: 24 }}>
              Relational databases contain <Hl>mostly structured data</Hl>
            </div>
            <LightCard>
              <img src={hrSchema} alt="Relational database schema" style={{ width: '100%', display: 'block' }} />
            </LightCard>
          </Card>
        </div>
      </Step>
    </Steps>
  </Shell>
);

/* ───────────────────────── 11 · Unstructured ───────────────────────── */

const FloatImg = ({
  src,
  alt,
  left,
  top,
  width,
  d,
  rot = 0,
  light,
}: {
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  d: number;
  rot?: number;
  light?: boolean;
}) => (
  <Fx a="pop" d={d} t={0.7} style={{ position: 'absolute', left, top, width, transform: `rotate(${rot}deg)` }}>
    <div style={{ animation: `ai-float ${5 + d}s ease-in-out ${d}s infinite` }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          display: 'block',
          borderRadius: 16,
          background: light ? '#fff' : undefined,
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.12)',
        }}
      />
    </div>
  </Fx>
);

const Unstructured: Page = () => (
  <Shell label="THE DATA" title="Unstructured Data">
    <div style={{ position: 'absolute', left: 120, top: 290, width: 760, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <B size={40} d={0.3}>Data without an enforced pattern or type</B>
      <B size={40} d={0.6}>Challenging to process using standard programming techniques</B>
    </div>
    <FloatImg src={waveform} alt="Audio waveform" left={960} top={230} width={440} d={0.4} rot={-2} light />
    <FloatImg src={liberty} alt="Photograph" left={1440} top={260} width={380} d={0.7} rot={2} />
    <FloatImg src={youtube} alt="Video" left={1010} top={540} width={250} d={1} rot={-3} />
    <FloatImg src={social} alt="Social media" left={1330} top={560} width={450} d={1.3} rot={2} light />
  </Shell>
);

/* ───────────────────────── 12 · Semi-structured ───────────────────────── */

const jsonLines = [
  '{',
  '  "apiVersion": "v1",',
  '  "kind": "Service",',
  '  "metadata": {',
  '    "name": "powerai-vision-vision-ui",',
  '    "namespace": "gpu",',
  '    "resourceVersion": "483980",',
  '    "labels": {',
  '      "app": "powerai-vision-vision",',
  '      "chart": "ibm-powerai-vision-prod-1.1.0",',
  '      "component": "powerai-vision-vision-ui",',
  '      "release": "vision",',
  '      "run": "powerai-vision-vision-ui-svc"',
  '    }',
  '  },',
  '  "spec": {',
  '    "ports": [',
  '      {',
  '        "name": "ui-port",',
  '        "protocol": "TCP",',
  '        "port": 80,',
  '        "targetPort": 80',
  '      }',
  '    ]',
  '  }',
  '}',
];

const CodeLine = ({ text, i }: { text: string; i: number }) => {
  const m = text.match(/^(\s*)("[^"]+")(:\s*)(.*)$/);
  return (
    <div className="ai" style={{ whiteSpace: 'pre', ...fx('slide', 0.3 + i * 0.07, 0.4) }}>
      {m ? (
        <>
          {m[1]}
          <span style={{ color: c.blue }}>{m[2]}</span>
          {m[3]}
          <span style={{ color: m[4].startsWith('"') ? c.amber : m[4].match(/^\d/) ? c.green : 'inherit' }}>{m[4]}</span>
        </>
      ) : (
        text
      )}
    </div>
  );
};

const SemiStructured: Page = () => (
  <Shell label="THE DATA" title="Semi-structured Data">
    <div style={{ position: 'absolute', left: 120, top: 210, width: 880 }}>
      <Card style={{ padding: '28px 36px', background: 'rgba(8,12,22,0.9)', fontFamily: mono, fontSize: 24, lineHeight: 1.48 }}>
        {jsonLines.map((t, i) => (
          <CodeLine key={`${i}-${t}`} text={t} i={i} />
        ))}
      </Card>
      <Fx a="fade" d={2.4} style={{ marginTop: 14, fontSize: 20, color: c.dim, fontFamily: mono }}>
        © Copyright IBM Corporation 2018
      </Fx>
    </div>
    <FloatImg src={xmlSample} alt="XML sample" left={1090} top={250} width={400} d={1} rot={-1.5} light />
    <FloatImg src={tweet} alt="A tweet as JSON-style data" left={1470} top={230} width={340} d={1.4} rot={2} light />
  </Shell>
);

/* ───────────────────────── 13 · Data comes in different forms ───────────────────────── */

const FormCard = ({
  color,
  title,
  sub,
  ex,
  d,
  children,
}: {
  color: string;
  title: string;
  sub: string;
  ex: string;
  d: number;
  children?: ReactNode;
}) => (
  <Fx a="rise" d={d} style={{ width: 520 }}>
    <Card style={{ padding: 40, height: 640 }}>
      <div
        style={{
          height: 280,
          borderRadius: 16,
          border: `1px solid ${color}55`,
          background: `${color}12`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
      <div style={{ fontSize: 50, fontWeight: 800, letterSpacing: '-0.03em', color, marginTop: 32 }}>{title}</div>
      <div style={{ fontSize: 34, color: 'var(--osd-text)', marginTop: 10 }}>{sub}</div>
      <div style={{ fontSize: 30, color: c.muted, marginTop: 8 }}>{ex}</div>
    </Card>
  </Fx>
);

const Cell = ({ i }: { i: number }) => (
  <div
    className="ai"
    style={{
      width: 56,
      height: 36,
      borderRadius: 6,
      background: c.green,
      animation: `ai-cycle 3.6s ease-in-out ${i * 0.15}s infinite`,
    }}
  />
);

const GridMini = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 56px)', gap: 10 }}>
    <Cell i={0} /><Cell i={1} /><Cell i={2} /><Cell i={3} />
    <Cell i={4} /><Cell i={5} /><Cell i={6} /><Cell i={7} />
    <Cell i={8} /><Cell i={9} /><Cell i={10} /><Cell i={11} />
  </div>
);

const BraceMini = () => (
  <div style={{ fontFamily: mono, fontSize: 30, lineHeight: 1.5, color: c.blue }}>
    <div>{'{'}</div>
    <div className="ai" style={{ paddingLeft: 28, ...fx('slide', 0.9, 0.5) }}>"id": <span style={{ color: c.amber }}>"T-104"</span>,</div>
    <div className="ai" style={{ paddingLeft: 28, ...fx('slide', 1.1, 0.5) }}>"status": <span style={{ color: c.amber }}>"open"</span>,</div>
    <div className="ai" style={{ paddingLeft: 28, ...fx('slide', 1.3, 0.5) }}>"tags": <span style={{ color: c.green }}>[ … ]</span></div>
    <div>{'}'}</div>
  </div>
);

const BlobMini = () => (
  <svg width="300" height="220" viewBox="0 0 300 220" aria-hidden="true">
    <circle className="ai" cx="70" cy="70" r="34" fill={c.violet} opacity="0.8" style={{ animation: 'ai-float 4s ease-in-out infinite' }} />
    <rect className="ai" x="150" y="40" width="90" height="56" rx="14" fill={c.blue} opacity="0.8" style={{ animation: 'ai-float 5s ease-in-out 0.6s infinite' }} />
    <path className="ai" d="M60 170 Q95 120 130 165 T200 160" stroke={c.amber} strokeWidth="8" fill="none" strokeLinecap="round" style={{ animation: 'ai-float 4.5s ease-in-out 1.1s infinite' }} />
    <polygon className="ai" points="240,170 270,130 285,185" fill={c.green} opacity="0.8" style={{ animation: 'ai-float 3.8s ease-in-out 0.3s infinite' }} />
  </svg>
);

const Forms: Page = () => (
  <Shell label="AI FOUNDATIONS" title="Data comes in different forms">
    <div style={{ position: 'absolute', left: 120, top: 270, right: 120, display: 'flex', justifyContent: 'space-between' }}>
      <FormCard color={c.green} title="Structured" sub="Rows and columns" ex="A sales table" d={0.3}>
        <GridMini />
      </FormCard>
      <FormCard color={c.blue} title="Semi-structured" sub="Named, flexible fields" ex="A JSON ticket" d={0.55}>
        <BraceMini />
      </FormCard>
      <FormCard color={c.violet} title="Unstructured" sub="Free-form content" ex="An email or recording" d={0.8}>
        <BlobMini />
      </FormCard>
    </div>
  </Shell>
);

/* ───────────────────────── 14 · Training types (divider) ───────────────────────── */

const TrainingDivider: Page = () => <Divider label="HOW MODELS LEARN" title="Training Types" n="02" />;

/* ───────────────────────── 15 · Supervised ───────────────────────── */

const supervisedRows = [
  ['4.849315', '5.669982', 'TRUE'],
  ['5.548189', '5.023918', 'TRUE'],
  ['5.449399', '6.107647', 'TRUE'],
  ['4.138449', '4.424792', 'FALSE'],
  ['4.407822', '4.530602', 'TRUE'],
  ['3.212067', '6.99535', 'FALSE'],
  ['4.036322', '5.150239', 'FALSE'],
  ['4.17845', '4.262555', 'FALSE'],
  ['3.949967', '6.322179', 'FALSE'],
  ['4.68341', '6.821367', 'TRUE'],
  ['3.569664', '5.524142', 'FALSE'],
  ['2.366305', '1.552303', 'FALSE'],
  ['3.430706', '2.388652', 'FALSE'],
  ['2.438954', '1.884384', 'FALSE'],
  ['4.526269', '1.500568', 'TRUE'],
  ['2.826602', '1.95353', 'FALSE'],
  ['4.184532', '2.259855', 'FALSE'],
];

const Supervised: Page = () => (
  <Shell label="HOW MODELS LEARN" title="Supervised learning">
    <div style={{ position: 'absolute', left: 120, top: 230, width: 820, display: 'flex', flexDirection: 'column', gap: 26 }}>
      <B size={36} d={0.3}>
        Provide <Hl color={c.green}>labelled</Hl> data to the system
      </B>
      <B size={36} d={0.6}>This is considered the ground truth</B>
      <B size={36} d={0.9}>The system will find the patterns that determine your labels</B>
    </div>
    <Fx a="rise" d={1.2} style={{ position: 'absolute', left: 120, top: 640, width: 820 }}>
      <img
        src={dairyGrid}
        alt="Images labelled dairy milk"
        style={{ width: '100%', display: 'block', borderRadius: 16, boxShadow: '0 24px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.12)' }}
      />
    </Fx>
    <div style={{ position: 'absolute', left: 1040, top: 230, width: 760 }}>
      <Table
        head={['X', 'Y', 'LABEL']}
        rows={supervisedRows}
        size={22}
        pad={5}
        align="center"
        rowDelay={0.07}
        startDelay={0.5}
        cellColor={(v) => (v === 'TRUE' ? c.green : v === 'FALSE' ? c.red : undefined)}
      />
    </div>
  </Shell>
);

/* ───────────────────────── 16 · Unsupervised ───────────────────────── */

const unsupervisedHead = ['BILL_AMT1', 'BILL_AMT2', 'BILL_AMT3', 'PAY_AMT1', 'PAY_AMT2', 'PAY_AMT3'];
const unsupervisedRows = structuredRows.map((r) => r.slice(3));

const Unsupervised: Page = () => (
  <Shell label="HOW MODELS LEARN" title="Unsupervised learning">
    <div style={{ position: 'absolute', left: 120, top: 220, width: 1680, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <B size={34} d={0.3}>
        Provide <Hl color={c.amber}>unlabelled</Hl> data to the system
      </B>
      <B size={34} d={0.5}>You do not have a clear understanding of what you are looking for</B>
      <B size={34} d={0.7}>Interested in patterns within the data</B>
      <B size={34} d={0.9}>Can identify correlations between data</B>
    </div>
    <div style={{ position: 'absolute', left: 120, top: 520, width: 1000 }}>
      <Table head={unsupervisedHead} rows={unsupervisedRows} size={20} pad={8} startDelay={1.1} />
    </div>
    <Fx a="tilt" d={1.4} style={{ position: 'absolute', left: 1170, top: 520, width: 630 }}>
      <img
        src={flickr}
        alt="Unlabelled photos"
        style={{ width: '100%', display: 'block', borderRadius: 16, boxShadow: '0 24px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.12)' }}
      />
    </Fx>
  </Shell>
);

/* ───────────────────────── 17 · Reinforcement ───────────────────────── */

const Badge = ({ x, y, ok, d }: { x: number; y: number; ok: boolean; d: number }) => (
  <Fx
    a="pop"
    d={d}
    t={0.5}
    style={{
      position: 'absolute',
      left: x - 28,
      top: y - 28,
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: ok ? c.green : c.red,
      color: c.ink,
      fontSize: 34,
      fontWeight: 900,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: `0 0 28px ${ok ? c.green : c.red}`,
    }}
  >
    {ok ? '✓' : '✕'}
  </Fx>
);

const ScoreChip = ({ children, color, d }: { children?: ReactNode; color: string; d: number }) => (
  <Fx a="pop" d={d} t={0.5}>
    <div
      style={{
        fontFamily: mono,
        fontSize: 52,
        fontWeight: 700,
        color,
        padding: '8px 30px',
        borderRadius: 16,
        border: `2px solid ${color}`,
        background: `${color}14`,
      }}
    >
      {children}
    </div>
  </Fx>
);

const Reinforcement: Page = () => (
  <Shell label="HOW MODELS LEARN" title="Reinforcement Learning">
    <div style={{ position: 'absolute', left: 120, top: 270, width: 940, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <B size={38} d={0.3}>
        Provide <Hl color={c.amber}>feedback</Hl> to a system using rewards for correct results
      </B>
      <B size={38} d={0.6}>Often implemented for gaming tasks</B>
      <B size={38} d={0.9}>Aim of the model is to maximise the reward it gets</B>
      <B size={38} d={1.2}>User provides feedback rather than labels</B>
    </div>
    <div style={{ position: 'absolute', left: 1160, top: 230, width: 560, height: 606 }}>
      <Fx a="rise" d={0.4} style={{ width: 560, height: 606 }}>
        <img
          src={candyDetect}
          alt="Candy detection results"
          style={{ width: 560, height: 606, display: 'block', borderRadius: 16, boxShadow: '0 24px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.12)' }}
        />
      </Fx>
      <Badge x={187} y={141} ok d={1.4} />
      <Badge x={458} y={333} ok d={1.8} />
      <Badge x={221} y={548} ok d={2.2} />
      <Badge x={264} y={383} ok={false} d={2.6} />
      <Badge x={114} y={259} ok={false} d={3} />
      <Badge x={344} y={137} ok={false} d={3.4} />
    </div>
    <div style={{ position: 'absolute', left: 1160, top: 876, display: 'flex', gap: 28, alignItems: 'center' }}>
      <ScoreChip color={c.green} d={3.8}>+3</ScoreChip>
      <ScoreChip color={c.red} d={4}>-3</ScoreChip>
      <ScoreChip color={c.amber} d={4.3}>=0</ScoreChip>
    </div>
  </Shell>
);

/* ───────────────────────── 18 · Data splitting (divider) ───────────────────────── */

const SplitDivider: Page = () => <Divider label="EVALUATION" title="Data splitting" n="03" />;

/* ───────────────────────── 19 · Data preparation ───────────────────────── */

const Seg = ({
  color,
  label,
  flex,
  d,
}: {
  color: string;
  label: string;
  flex: number;
  d: number;
}) => (
  <div style={{ flex, position: 'relative' }}>
    <div
      className="ai"
      style={{
        height: 150,
        borderRadius: 16,
        background: `${color}26`,
        border: `2px solid ${color}`,
        boxShadow: `0 0 40px ${color}33`,
        transformOrigin: 'left',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...fx('grow', d, 0.8),
      }}
    >
      <div
        className="ai"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '30%',
          background: `linear-gradient(90deg, transparent, ${color}55, transparent)`,
          animation: `ai-sweep 3.4s ease-in-out ${d + 1}s infinite`,
        }}
      />
      <span style={{ position: 'relative', fontSize: 52, fontWeight: 800, letterSpacing: '-0.02em', color }}>{label}</span>
    </div>
  </div>
);

const DataPrep: Page = () => (
  <Shell label="EVALUATION" title="Data preparation">
    <div style={{ position: 'absolute', left: 120, top: 250, width: 1680, display: 'flex', gap: 20 }}>
      <Seg color={c.green} label="Train" flex={7} d={0.4} />
      <Seg color={c.amber} label="Validate" flex={2} d={1} />
      <Seg color={c.blue} label="Test" flex={2} d={1.4} />
    </div>
    <div style={{ position: 'absolute', left: 120, top: 470, width: 1680, display: 'flex', flexDirection: 'column', gap: 32 }}>
      <B size={38} d={1.8}>Data is split into smaller sets before training</B>
      <B size={38} d={2.1}>
        <Hl color={c.green}>Training</Hl> data is used to train the model
      </B>
      <B size={38} d={2.4}>
        <Hl color={c.amber}>Validation</Hl> data is used to test the performance of the model and make refinements
      </B>
      <B size={38} d={2.7}>
        <Hl color={c.blue}>Test</Hl> data is used to measure the accuracy of the final model
      </B>
    </div>
  </Shell>
);

/* ───────────────────────── 20 · Dimensionality (divider) ───────────────────────── */

const MathDivider: Page = () => <Divider label="THE MATH" title="Dimensionality / Complexity" n="04" />;

/* ───────────────────────── 21 · Some mathematics ───────────────────────── */

const NumCell = ({ v, color, big }: { v: string; color: string; big?: boolean }) => (
  <div
    style={{
      width: big ? 84 : 76,
      height: big ? 62 : 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: mono,
      fontSize: big ? 38 : 32,
      color: v === '··' ? c.dim : color,
    }}
  >
    {v}
  </div>
);

const Brackets = ({ color, children }: { color: string; children?: ReactNode }) => (
  <div
    style={{
      borderLeft: `4px solid ${color}`,
      borderRight: `4px solid ${color}`,
      borderRadius: 14,
      padding: '10px 14px',
      background: 'rgba(3,5,12,0.92)',
    }}
  >
    {children}
  </div>
);

const MatRows = ({ rows, color }: { rows: string[][]; color: string }) => (
  <Brackets color={color}>
    {rows.map((r) => (
      <div key={r.join('-')} style={{ display: 'flex' }}>
        {r.map((v, i) => (
          <NumCell key={`${i}-${v}`} v={v} color={color} />
        ))}
      </div>
    ))}
  </Brackets>
);

const DimCol = ({
  title,
  tag,
  color,
  d,
  children,
}: {
  title: string;
  tag: string;
  color: string;
  d: number;
  children?: ReactNode;
}) => (
  <Fx a="rise" d={d} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.03em', color }}>{title}</div>
    <div style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.12em', color: c.dim, marginBottom: 36 }}>{tag}</div>
    {children}
  </Fx>
);

const Mathematics: Page = () => (
  <Shell label="THE MATH" title="Some mathematics">
    <Fx a="fade" d={0.3} style={{ position: 'absolute', left: 120, top: 196, fontSize: 32, color: c.muted, width: 1680 }}>
      There are different terms and representations for different dimensions of data
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 340, width: 1680, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <DimCol title="Scalar" tag="0-D" color={c.green} d={0.6}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 84,
            color: c.green,
            width: 190,
            height: 190,
            borderRadius: 28,
            border: `2px solid ${c.green}`,
            background: `${c.green}14`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'ai-breathe 3s ease-in-out infinite',
          }}
        >
          17
        </div>
      </DimCol>
      <DimCol title="Vector" tag="1-D" color={c.blue} d={1.2}>
        <MatRows rows={[['12'], ['24'], ['36'], ['42']]} color={c.blue} />
      </DimCol>
      <DimCol title="Matrix" tag="2-D" color={c.violet} d={1.8}>
        <MatRows
          rows={[
            ['12', '27', '78'],
            ['24', '14', '11'],
            ['36', '78', '16'],
            ['42', '33', '59'],
          ]}
          color={c.violet}
        />
      </DimCol>
      <DimCol title="Tensor" tag="3-D AND UP" color={c.amber} d={2.4}>
        <div style={{ position: 'relative', width: 520, height: 470 }}>
          <div style={{ position: 'absolute', left: 260, top: 0 }}>
            <MatRows
              rows={[
                ['17', '62', '55'],
                ['36', '75', '40'],
                ['··', '11', '94'],
                ['··', '17', '47'],
              ]}
              color={c.amber}
            />
          </div>
          <div style={{ position: 'absolute', left: 130, top: 110 }}>
            <MatRows
              rows={[
                ['14', '52', '16'],
                ['18', '02', '83'],
                ['62', '99', '03'],
                ['12', '05', '87'],
              ]}
              color={c.amber}
            />
          </div>
          <div style={{ position: 'absolute', left: 0, top: 220 }}>
            <MatRows
              rows={[
                ['12', '27', '78'],
                ['24', '14', '11'],
                ['36', '78', '16'],
                ['42', '33', '59'],
              ]}
              color={c.amber}
            />
          </div>
        </div>
      </DimCol>
    </div>
  </Shell>
);

/* ───────────────────────── 22 · Machine Learning (divider) ───────────────────────── */

const MLDivider: Page = () => (
  <Divider label="MACHINE LEARNING" title="Machine Learning" sub="Finding patterns in data to make predictions" n="05" />
);

/* ───────────────────────── 23 · ML tasks ───────────────────────── */

const TaskCard = ({
  color,
  name,
  q,
  ex,
  d,
  children,
}: {
  color: string;
  name: string;
  q: string;
  ex: string;
  d: number;
  children?: ReactNode;
}) => (
  <Fx a="rise" d={d} style={{ width: 405 }}>
    <Card style={{ padding: 32, height: 560 }}>
      <div
        style={{
          height: 190,
          borderRadius: 14,
          border: `1px solid ${color}55`,
          background: `${color}12`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
      <div style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.12em', color, marginTop: 26 }}>{name}</div>
      <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em', marginTop: 10, lineHeight: 1.1 }}>{q}</div>
      <div style={{ fontSize: 28, lineHeight: 1.35, color: c.muted, marginTop: 14 }}>{ex}</div>
    </Card>
  </Fx>
);

const ClassifyViz = () => (
  <svg width="300" height="160" viewBox="0 0 300 160" aria-hidden="true">
    <line x1="150" y1="10" x2="150" y2="150" stroke={c.line} strokeWidth="3" strokeDasharray="8 8" className="ai" style={{ animation: 'ai-dashmove 2s linear infinite' }} />
    {[[50, 40], [90, 90], [60, 120], [110, 50], [30, 95]].map(([x, y], i) => (
      <circle key={`a${i}`} className="ai" cx={x} cy={y} r="12" fill={c.green} style={{ transformOrigin: `${x}px ${y}px`, ...fx('pop', 0.6 + i * 0.12, 0.4) }} />
    ))}
    {[[200, 40], [250, 80], [220, 125], [265, 35], [195, 90]].map(([x, y], i) => (
      <rect key={`b${i}`} className="ai" x={x - 11} y={y - 11} width="22" height="22" rx="4" fill={c.red} style={{ transformOrigin: `${x}px ${y}px`, ...fx('pop', 0.9 + i * 0.12, 0.4) }} />
    ))}
  </svg>
);

const RegressViz = () => (
  <svg width="300" height="160" viewBox="0 0 300 160" aria-hidden="true">
    {[[30, 120], [60, 105], [90, 95], [120, 85], [150, 75], [180, 55], [215, 50], [250, 30], [275, 28]].map(([x, y], i) => (
      <circle key={i} className="ai" cx={x} cy={y + (i % 2 ? 9 : -9)} r="7" fill={c.blue} style={{ transformOrigin: `${x}px ${y}px`, ...fx('pop', 0.6 + i * 0.08, 0.4) }} />
    ))}
    <line x1="20" y1="128" x2="285" y2="22" stroke={c.amber} strokeWidth="4" strokeLinecap="round" strokeDasharray="330" className="ai" style={{ animation: 'ai-drawloop 3.6s ease-in-out infinite', ['--len' as string]: '330' }} />
  </svg>
);

const ClusterViz = () => (
  <svg width="300" height="160" viewBox="0 0 300 160" aria-hidden="true">
    <circle cx="70" cy="75" r="55" fill="none" stroke={c.violet} strokeWidth="2" strokeDasharray="6 8" className="ai" style={{ animation: 'ai-pulse 3s ease-in-out infinite', transformOrigin: '70px 75px' }} />
    <circle cx="220" cy="55" r="48" fill="none" stroke={c.green} strokeWidth="2" strokeDasharray="6 8" className="ai" style={{ animation: 'ai-pulse 3s ease-in-out 0.8s infinite', transformOrigin: '220px 55px' }} />
    <circle cx="190" cy="130" r="30" fill="none" stroke={c.amber} strokeWidth="2" strokeDasharray="6 8" className="ai" style={{ animation: 'ai-pulse 3s ease-in-out 1.6s infinite', transformOrigin: '190px 130px' }} />
    {[[50, 60], [80, 90], [65, 70], [90, 55], [55, 95]].map(([x, y], i) => <circle key={`v${i}`} cx={x} cy={y} r="8" fill={c.violet} />)}
    {[[210, 45], [235, 65], [225, 35], [245, 50], [205, 70]].map(([x, y], i) => <circle key={`g${i}`} cx={x} cy={y} r="8" fill={c.green} />)}
    {[[180, 125], [200, 135], [195, 118]].map(([x, y], i) => <circle key={`y${i}`} cx={x} cy={y} r="8" fill={c.amber} />)}
  </svg>
);

const AnomalyViz = () => (
  <svg width="300" height="160" viewBox="0 0 300 160" aria-hidden="true">
    <path d="M10 90 L40 85 L70 95 L100 80 L130 88 L160 92 L190 82 L220 90 L250 85 L290 88" stroke={c.dim} strokeWidth="3" fill="none" />
    <path d="M10 90 L40 85 L70 95 L100 80 L130 88 L145 20 L160 130 L190 82 L220 90 L250 85 L290 88" stroke={c.red} strokeWidth="4" fill="none" strokeLinejoin="round" strokeDasharray="500" className="ai" style={{ animation: 'ai-drawloop 3.6s ease-in-out infinite', ['--len' as string]: '500' }} />
    <circle cx="145" cy="20" r="14" fill="none" stroke={c.red} strokeWidth="3" className="ai" style={{ transformOrigin: '145px 20px', animation: 'ai-ring 1.8s ease-out infinite' }} />
    <circle cx="145" cy="20" r="7" fill={c.red} />
  </svg>
);

const MLTasks: Page = () => (
  <Shell label="MACHINE LEARNING" title="Common machine-learning tasks">
    <div style={{ position: 'absolute', left: 120, top: 250, width: 1680, display: 'flex', justifyContent: 'space-between' }}>
      <TaskCard color={c.green} name="CLASSIFICATION" q="Which category?" ex="Fraud or not fraud? Spam or not spam?" d={0.3}><ClassifyViz /></TaskCard>
      <TaskCard color={c.blue} name="REGRESSION" q="What number?" ex="Predict a home’s sale price from its features." d={0.5}><RegressViz /></TaskCard>
      <TaskCard color={c.violet} name="CLUSTERING" q="What groups exist?" ex="Segment customers who behave alike." d={0.7}><ClusterViz /></TaskCard>
      <TaskCard color={c.red} name="ANOMALY DETECTION" q="What looks unusual?" ex="Flag an odd transaction or sensor reading." d={0.9}><AnomalyViz /></TaskCard>
    </div>
    <Fx a="rise" d={1.6} style={{ position: 'absolute', left: 120, top: 850, width: 1680, fontSize: 36, color: c.muted, fontWeight: 600 }}>
      <span style={{ color: ACC }}>→ </span>The task describes the answer you need, not the algorithm you must use.
    </Fx>
  </Shell>
);

/* ───────────────────────── 24 · Deep Learning (divider) ───────────────────────── */

const DLDivider: Page = () => (
  <Divider label="DEEP LEARNING" title="Deep Learning" sub="Many layers of learned transformations: neural networks" n="06" />
);

/* ───────────────────────── 25 · Neural networks ───────────────────────── */

const NeuralNets: Page = () => (
  <Shell label="DEEP LEARNING" title="Neural Networks">
    <div style={{ position: 'absolute', left: 120, top: 250, width: 1000, display: 'flex', flexDirection: 'column', gap: 34 }}>
      <B size={36} d={0.3}>Neural networks are systems designed to “loosely” mimic the human brain</B>
      <B size={36} d={0.6}>They involve a lot of processing to identify patterns in data</B>
      <B size={36} d={0.9}>Calculations are encapsulated in layers</B>
      <B size={36} d={1.2}>Multiple layers are connected together in a network</B>
    </div>
    <Fx a="slider" d={0.5} style={{ position: 'absolute', left: 1180, top: 240, width: 620 }}>
      <img
        src={neuron}
        alt="A biological neuron"
        style={{ width: '100%', display: 'block', borderRadius: 16, boxShadow: '0 24px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.12)' }}
      />
    </Fx>
    <Fx a="rise" d={1.5} style={{ position: 'absolute', left: 560, top: 670 }}>
      <LightCard style={{ padding: 18 }}>
        <img src={simpleDeep} alt="Simple versus deep neural network" style={{ width: 780, display: 'block' }} />
      </LightCard>
    </Fx>
  </Shell>
);

/* ───────────────────────── 26 · Types of neural networks ───────────────────────── */

const NetType = ({
  color,
  name,
  a,
  b,
  d,
}: {
  color: string;
  name: string;
  a: string;
  b: string;
  d: number;
}) => (
  <Fx a="slide" d={d} style={{ display: 'flex', gap: 30 }}>
    <div style={{ flex: 'none', width: 6, borderRadius: 3, background: color, boxShadow: `0 0 24px ${color}` }} />
    <div>
      <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.025em', color }}>{name}</div>
      <div style={{ fontSize: 30, lineHeight: 1.35, marginTop: 8 }}>{a}</div>
      <div style={{ fontSize: 30, lineHeight: 1.35, marginTop: 6, color: c.muted }}>{b}</div>
    </div>
  </Fx>
);

const NetTypes: Page = () => (
  <Shell label="DEEP LEARNING" title="Neural Networks" >
    <Fx a="fade" d={0.3} style={{ position: 'absolute', left: 120, top: 190, fontSize: 36, color: c.muted }}>
      Different types depending on the use case
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 270, width: 1130, display: 'flex', flexDirection: 'column', gap: 44 }}>
      <Steps>
        <Step>
          <NetType color={c.green} name="Convolutional Neural Networks (CNNs)" a="Performs the same processing over multiple subsets of the data" b="Heavily used in Image Classification use cases" d={0} />
        </Step>
        <Step>
          <NetType color={c.blue} name="Recurrent Neural Networks (RNNs)" a="Pass output of some layers back into the input of same layer" b="Often used in Text to Speech as the model has ‘memory’" d={0} />
        </Step>
        <Step>
          <NetType color={c.violet} name="Transformers (Self-Attention)" a="Use attention to identify relationships between parts of the input, even when far apart" b="Excel at language tasks such as summarization, translation, Q&A, and text generation, Multimodal" d={0} />
        </Step>
      </Steps>
    </div>
    <Fx a="pop" d={0.8} style={{ position: 'absolute', left: 1330, top: 300, width: 470 }}>
      <LightCard style={{ padding: 20, animation: 'ai-float 6s ease-in-out infinite' }}>
        <img src={convolution} alt="Convolution animation" style={{ width: '100%', display: 'block' }} />
      </LightCard>
      <div style={{ fontFamily: mono, fontSize: 22, letterSpacing: '0.1em', color: c.dim, textAlign: 'center', marginTop: 16 }}>
        CONVOLUTION IN ACTION
      </div>
    </Fx>
  </Shell>
);

/* ───────────────────────── 27 · Hyperparameter ───────────────────────── */

const Hyper1: Page = () => (
  <Shell label="DEEP LEARNING" title="Building a model – and what’s a hyperparameter" size={60}>
    <div style={{ position: 'absolute', left: 120, top: 230, width: 1680, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <B size={36} d={0.3}>Each layer has a series of weights and biases</B>
      <B size={36} d={0.55}>These are modified as the model is trained to produce higher accuracy</B>
      <B size={36} d={0.8}>These weights and biases are held in matrices</B>
      <B size={36} d={1.05}>The amount of change each iteration is called the <Hl>learning rate</Hl></B>
    </div>
    <Fx a="rise" d={1.4} style={{ position: 'absolute', left: 395, top: 590, width: 1130 }}>
      <LightCard style={{ padding: 16 }}>
        <img src={softmax} alt="Weights, biases and softmax" style={{ width: '100%', display: 'block' }} />
      </LightCard>
    </Fx>
  </Shell>
);

/* ───────────────────────── 28 · Iterations ───────────────────────── */

const IterBox = ({ label, color, d, sub }: { label: string; color: string; d: number; sub?: boolean }) => (
  <Fx a="pop" d={d} t={0.5}>
    <div
      style={{
        padding: sub ? '16px 26px' : '22px 30px',
        borderRadius: 16,
        border: `2px solid ${color}`,
        background: `${color}${sub ? '10' : '1f'}`,
        color: sub ? c.muted : 'var(--osd-text)',
        fontSize: 30,
        fontWeight: 700,
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </div>
  </Fx>
);

const Arrow = ({ d, w = 80 }: { d: number; w?: number }) => (
  <svg width={w} height="30" viewBox={`0 0 ${w} 30`} aria-hidden="true" className="ai" style={fx('fade', d, 0.4)}>
    <line x1="2" y1="15" x2={w - 14} y2="15" stroke={c.green} strokeWidth="4" strokeDasharray="8 8" className="ai" style={{ animation: 'ai-dashmove 1.2s linear infinite' }} />
    <polygon points={`${w - 16},5 ${w - 2},15 ${w - 16},25`} fill={c.green} />
  </svg>
);

const Iterations: Page = () => (
  <Shell label="DEEP LEARNING" title="Building a model – and what’s a hyperparameter" size={60}>
    <div style={{ position: 'absolute', left: 120, top: 220, width: 1100, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <B size={32} d={0.3}>Deep Learning training requires the system to learn from the data</B>
      <B size={32} d={0.5}>This requires multiple iterations or <Hl>epochs</Hl></B>
      <B size={32} d={0.7}>Over each iteration or epoch the system looks at all of the training data</B>
      <B size={32} d={0.9}>The model is refined based on the <Hl color={c.red}>loss</Hl> from previous run</B>
    </div>
    <div style={{ position: 'absolute', left: 120, top: 560, display: 'flex', alignItems: 'center', gap: 14 }}>
      <IterBox label="Iteration 1" color={c.green} d={1.2} />
      <Arrow d={1.4} />
      <IterBox label="Refine model" color={c.blue} d={1.6} sub />
      <Arrow d={1.8} />
      <IterBox label="Iteration 2" color={c.green} d={2} />
      <Arrow d={2.2} />
      <IterBox label="Refine model" color={c.blue} d={2.4} sub />
      <Arrow d={2.6} />
      <IterBox label="Iteration 3" color={c.green} d={2.8} />
    </div>
    <div style={{ position: 'absolute', left: 120, top: 700, display: 'flex', alignItems: 'center', gap: 14 }}>
      <Fx a="fade" d={3.1} style={{ fontSize: 60, color: c.dim, width: 120, textAlign: 'center' }}>···</Fx>
      <IterBox label="Iteration 2000" color={c.green} d={3.3} />
      <Arrow d={3.5} />
      <IterBox label="Final model" color={c.amber} d={3.7} />
    </div>
    <Fx a="slider" d={1.5} style={{ position: 'absolute', left: 1230, top: 215, width: 570 }}>
      <LightCard style={{ padding: 10 }}>
        <img src={gradientDescent} alt="Gradient descent" style={{ width: '100%', display: 'block' }} />
      </LightCard>
    </Fx>
  </Shell>
);

/* ───────────────────────── 29 · Loss and back propagation ───────────────────────── */

const LoopBox = ({ label, color, left, top, width, d }: { label: string; color: string; left: number; top: number; width: number; d: number }) => (
  <Fx a="pop" d={d} t={0.5} style={{ position: 'absolute', left, top, width }}>
    <div
      style={{
        padding: '18px 0',
        textAlign: 'center',
        borderRadius: 16,
        border: `2px solid ${color}`,
        background: `${color}1c`,
        fontSize: 32,
        fontWeight: 700,
        color,
      }}
    >
      {label}
    </div>
  </Fx>
);

const LossLoop: Page = () => (
  <Shell label="DEEP LEARNING" title="Building a model">
    <div style={{ position: 'absolute', left: 120, top: 200, width: 1680, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <B size={30} d={0.3}>The model is refined based on <Hl color={c.red}>loss</Hl> which is a measure of error</B>
      <B size={30} d={0.5}>This is based on a loss function and the difference between predicted and actual results</B>
      <B size={30} d={0.7}>This step is called <Hl>feed forward</Hl> as we pass through the model forwards</B>
      <B size={30} d={0.9}>This loss can be calculated per layer moving backwards through the network</B>
      <B size={30} d={1.1}>This is called <Hl color={c.amber}>back propagation</Hl> and is key to Deep Learning training</B>
    </div>
    <Fx a="fade" d={1.4} style={{ position: 'absolute', left: 186, top: 580, width: 1548, height: 400, borderRadius: 24, border: `1px solid ${c.line}`, background: c.panel }} />
    <svg width="1548" height="400" viewBox="0 0 1548 400" style={{ position: 'absolute', left: 186, top: 580 }} aria-hidden="true">
      <line x1="500" y1="95" x2="1000" y2="95" stroke={c.green} strokeWidth="5" strokeDasharray="12 10" className="ai" style={{ animation: 'ai-dashmove 1.4s linear infinite' }} />
      <polygon points="1000,80 1030,95 1000,110" fill={c.green} />
      <line x1="1050" y1="305" x2="560" y2="305" stroke={c.red} strokeWidth="5" strokeDasharray="12 10" className="ai" style={{ animation: 'ai-dashmove 1.4s linear infinite reverse' }} />
      <polygon points="560,290 530,305 560,320" fill={c.red} />
      <path d="M1090 120 Q1160 200 1090 285" stroke={c.red} strokeWidth="4" fill="none" strokeDasharray="10 8" className="ai" style={{ animation: 'ai-dashmove 1.4s linear infinite reverse' }} />
      <path d="M440 120 Q370 200 440 285" stroke={c.green} strokeWidth="4" fill="none" strokeDasharray="10 8" className="ai" style={{ animation: 'ai-dashmove 1.4s linear infinite' }} />
      <text x="750" y="75" textAnchor="middle" fontFamily={mono} fontSize="22" fill={c.green} letterSpacing="3">FEED FORWARD</text>
      <text x="800" y="352" textAnchor="middle" fontFamily={mono} fontSize="22" fill={c.red} letterSpacing="3">BACK PROPAGATION</text>
    </svg>
    <Fx a="pop" d={1.8} t={0.6} style={{ position: 'absolute', left: 816, top: 580 + 112, width: 340 }}>
      <LightCard style={{ padding: 6 }}>
        <img src={netLarge} alt="Network" style={{ width: '100%', display: 'block' }} />
      </LightCard>
    </Fx>
    <LoopBox label="Training Data" color={c.green} left={500 + 186 - 190} top={580 + 78} width={190} d={1.6} />
    <LoopBox label="Calculate Loss" color={c.red} left={186 + 1090} top={580 + 170} width={260} d={2} />
    <LoopBox label="Refine Model" color={c.blue} left={186 + 160} top={580 + 170} width={260} d={2.4} />
    <LoopBox label="Loss" color={c.amber} left={186 + 640} top={580 + 288} width={160} d={2.8} />
  </Shell>
);

/* ───────────────────────── 30 · Trained model ───────────────────────── */

const Trained: Page = () => (
  <Shell label="DEEP LEARNING" title="Building a model">
    <div style={{ position: 'absolute', left: 120, top: 200, width: 1680, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <B size={34} d={0.3}>A trained model includes:</B>
      <div style={{ paddingLeft: 40, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <B size={32} d={0.55}>A network definition file that describes the layers</B>
        <B size={32} d={0.8}>Weights and biases for each layer within that network</B>
      </div>
    </div>
    <Fx a="rise" d={1.2} style={{ position: 'absolute', left: 120, top: 520, width: 480 }}>
      <Card style={{ padding: 22, height: 380 }}>
        <LightCard style={{ padding: 10 }}>
          <img src={netLarge} alt="Network definition" style={{ width: '100%', display: 'block' }} />
        </LightCard>
        <div style={{ fontSize: 34, fontWeight: 700, textAlign: 'center', marginTop: 28 }}>network definition</div>
        <div style={{ fontFamily: mono, fontSize: 22, color: c.dim, textAlign: 'center', marginTop: 8 }}>describes the layers</div>
      </Card>
    </Fx>
    <Fx a="fade" d={1.8} style={{ position: 'absolute', left: 620, top: 690 }}><Arrow d={0} w={100} /></Fx>
    <Fx a="pop" d={2} t={0.7} style={{ position: 'absolute', left: 740, top: 560, width: 440 }}>
      <div
        style={{
          height: 320,
          borderRadius: 28,
          border: `3px solid ${c.green}`,
          background: `${c.green}16`,
          boxShadow: `0 0 80px ${c.green}33`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 54,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: c.green,
          animation: 'ai-breathe 3.4s ease-in-out infinite',
        }}
      >
        Trained model
      </div>
    </Fx>
    <Fx a="fade" d={2.4} style={{ position: 'absolute', left: 1200, top: 560 }}><Arrow d={0} w={130} /></Fx>
    <Fx a="fade" d={2.5} style={{ position: 'absolute', left: 1200, top: 840 }}><Arrow d={0} w={130} /></Fx>
    <Fx a="slider" d={2.7} style={{ position: 'absolute', left: 1360, top: 520, width: 440 }}>
      <Card style={{ padding: 26 }}>
        <div style={{ fontSize: 34, fontWeight: 700, color: c.blue, marginBottom: 14 }}>weights</div>
        <WeightGrid color={c.blue} rows={[['7', '6', '8', '2'], ['4', '4', '3', '8'], ['7', '2', '4', '0']]} />
      </Card>
    </Fx>
    <Fx a="slider" d={3} style={{ position: 'absolute', left: 1360, top: 740, width: 440 }}>
      <Card style={{ padding: 26 }}>
        <div style={{ fontSize: 34, fontWeight: 700, color: c.amber, marginBottom: 14 }}>biases</div>
        <WeightGrid color={c.amber} rows={[['7', '6', '8', '2'], ['4', '4', '3', '8'], ['7', '2', '4', '0']]} />
      </Card>
    </Fx>
  </Shell>
);

const WeightGrid = ({ rows, color }: { rows: string[][]; color: string }) => (
  <div style={{ fontFamily: mono, fontSize: 30, color, display: 'flex', flexDirection: 'column', gap: 4 }}>
    {rows.map((r) => (
      <div key={r.join('')} style={{ display: 'flex', gap: 28 }}>
        {r.map((v, i) => (
          <span key={`${i}-${v}`} className="ai" style={{ animation: `ai-cycle 4s ease-in-out ${i * 0.25}s infinite` }}>
            {v}
          </span>
        ))}
      </div>
    ))}
  </div>
);

/* ───────────────────────── 31 · Frameworks (divider) ───────────────────────── */

const FrameworksDivider: Page = () => <Divider label="SOFTWARE" title="Deep Learning frameworks" n="07" />;

/* ───────────────────────── 32 · Frameworks ───────────────────────── */

const Logo = ({ src, alt, w, d }: { src: string; alt: string; w: number; d: number }) => (
  <Fx a="pop" d={d} t={0.6}>
    <div style={{ animation: `ai-float ${5 + d}s ease-in-out ${d}s infinite` }}>
      <LightCard style={{ width: 360, height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={src} alt={alt} style={{ width: w, display: 'block' }} />
      </LightCard>
    </div>
  </Fx>
);

const Frameworks: Page = () => (
  <Shell label="SOFTWARE" title="Frameworks">
    <div style={{ position: 'absolute', left: 120, top: 250, width: 1680, display: 'flex', flexDirection: 'column', gap: 30 }}>
      <B size={40} d={0.3}>Frameworks are also known as <Hl>libraries</Hl></B>
      <B size={40} d={0.6}>They contain common functions to simplify model building</B>
      <B size={40} d={0.9}>Most of the common frameworks are <Hl>Open Source</Hl></B>
    </div>
    <div style={{ position: 'absolute', left: 120, top: 580, width: 1680, display: 'flex', justifyContent: 'space-between' }}>
      <Logo src={tensorflow} alt="TensorFlow" w={200} d={1.3} />
      <Logo src={pytorch} alt="PyTorch" w={290} d={1.6} />
      <Logo src={keras} alt="Keras" w={290} d={1.9} />
      <Logo src={caffe} alt="Caffe" w={260} d={2.2} />
    </div>
  </Shell>
);

/* ───────────────────────── 33 · Inference (divider) ───────────────────────── */

const InferenceDivider: Page = () => <Divider label="INFERENCE" title="Making use of trained models" n="08" />;

/* ───────────────────────── 34 · Deployment ───────────────────────── */

const ResultJson = ({ d, big }: { d: number; big?: boolean }) => (
  <Fx a="rise" d={d}>
    <div
      style={{
        fontFamily: mono,
        fontSize: big ? 28 : 24,
        lineHeight: 1.45,
        padding: '22px 28px',
        borderRadius: 18,
        border: `1px solid ${c.line}`,
        background: 'rgba(8,12,22,0.92)',
        whiteSpace: 'pre',
      }}
    >
      {'{\n  '}
      <span style={{ color: c.blue }}>result</span>
      {': '}
      <span style={{ color: c.amber }}>"success"</span>
      {',\n  '}
      <span style={{ color: c.blue }}>imageUrl</span>
      {': '}
      <span style={{ color: c.amber }}>"http:/ibm/test.jpg"</span>
      {',\n  '}
      <span style={{ color: c.blue }}>classified</span>
      {':\n    {\n      '}
      <span style={{ color: c.blue }}>creme-egg</span>
      {': '}
      <span style={{ color: c.green, fontWeight: 700 }}>"0.94855"</span>
      {'\n    }\n}'}
    </div>
  </Fx>
);

const Deployment: Page = () => (
  <Shell label="INFERENCE" title="Deployment">
    <div style={{ position: 'absolute', left: 120, top: 200, width: 1680, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <B size={32} d={0.3}>Trained models can be used to predict outcomes based on new data</B>
      <B size={32} d={0.5}>
        Models can be deployed for <Hl>inference</Hl> – also known as <Hl>scoring</Hl>
      </B>
      <B size={32} d={0.7}>This generally uses a cut down version of the framework</B>
      <B size={32} d={0.9}>
        A common method is to create an <Hl>Application Programming Interface (API)</Hl>
      </B>
    </div>
    <Fx a="rise" d={1.2} style={{ position: 'absolute', left: 180, top: 560 }}>
      <img
        src={wrapper}
        alt="Candy wrapper input"
        style={{ width: 220, height: 292, objectFit: 'cover', display: 'block', borderRadius: 16, boxShadow: '0 24px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.12)' }}
      />
    </Fx>
    <Fx a="fade" d={1.5} style={{ position: 'absolute', left: 430, top: 680 }}><Arrow d={0} w={150} /></Fx>
    <Fx a="pop" d={1.7} style={{ position: 'absolute', left: 620, top: 560, width: 320 }}>
      <div style={{ padding: '30px 0', textAlign: 'center', borderRadius: 20, border: `2px solid ${c.blue}`, background: `${c.blue}1c`, fontSize: 48, fontWeight: 800, color: c.blue }}>API</div>
    </Fx>
    <Fx a="fade" d={2} style={{ position: 'absolute', left: 750, top: 680 }}>
      <svg width="60" height="150" viewBox="0 0 60 150" aria-hidden="true">
        <line x1="30" y1="4" x2="30" y2="124" stroke={c.green} strokeWidth="4" strokeDasharray="8 8" className="ai" style={{ animation: 'ai-dashmove 1.2s linear infinite' }} />
        <polygon points="16,120 30,146 44,120" fill={c.green} />
      </svg>
    </Fx>
    <Fx a="pop" d={2.3} style={{ position: 'absolute', left: 620, top: 840, width: 320 }}>
      <div style={{ padding: '30px 0', textAlign: 'center', borderRadius: 20, border: `2px solid ${c.green}`, background: `${c.green}1c`, fontSize: 48, fontWeight: 800, color: c.green, animation: 'ai-breathe 3s ease-in-out infinite' }}>Model</div>
    </Fx>
    <Fx a="fade" d={2.6} style={{ position: 'absolute', left: 1000, top: 680 }}><Arrow d={0} w={150} /></Fx>
    <div style={{ position: 'absolute', left: 1190, top: 580 }}>
      <ResultJson d={2.8} big />
    </div>
  </Shell>
);

/* ───────────────────────── 35 · Quality of results ───────────────────────── */

const Mark = ({ x, y, ok, d }: { x: number; y: number; ok: boolean; d: number }) => (
  <Fx
    a="pop"
    d={d}
    t={0.4}
    style={{
      position: 'absolute',
      left: x - 17,
      top: y - 17,
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: ok ? c.green : c.red,
      color: c.ink,
      fontSize: 22,
      fontWeight: 900,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: `0 0 18px ${ok ? c.green : c.red}`,
    }}
  >
    {ok ? '✓' : '✕'}
  </Fx>
);

const Quality: Page = () => (
  <Shell label="INFERENCE" title="Quality of results">
    <div style={{ position: 'absolute', left: 120, top: 195, width: 1680, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <B size={29} d={0.3}>Each inference event will provide a <Hl>confidence</Hl> value</B>
      <B size={29} d={0.45}>This value relates to that prediction only</B>
      <B size={29} d={0.6}>The <Hl color={c.blue}>accuracy</Hl> of a model is determined through:</B>
      <div style={{ paddingLeft: 40 }}>
        <B size={27} d={0.75}>Correct predictions of data within the Test data set or the validation data set described previously</B>
      </div>
      <B size={29} d={0.9}>Accuracy relates to the model, confidence relates to the prediction</B>
    </div>
    <div style={{ position: 'absolute', left: 120, top: 540, width: 760 }}>
      <Fx a="rise" d={1.2}>
        <img
          src={dairyGridSmall}
          alt="Test images"
          style={{ width: 760, height: 305, display: 'block', borderRadius: 14, boxShadow: '0 24px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.12)' }}
        />
      </Fx>
      {[0, 1, 2, 3, 4].map((i) => (
        <Mark key={`t${i}`} x={i * 152 + 128} y={142} ok={i !== 3} d={1.6 + i * 0.12} />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <Mark key={`b${i}`} x={i * 152 + 128} y={290} ok={i !== 1} d={2.2 + i * 0.12} />
      ))}
    </div>
    <Fx a="pop" d={3} style={{ position: 'absolute', left: 120, top: 880 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
        <span style={{ fontSize: 76, fontWeight: 800, color: c.blue, letterSpacing: '-0.03em' }}>80%</span>
        <span style={{ fontSize: 40, fontWeight: 700 }}>Accurate</span>
      </div>
    </Fx>
    <Fx a="rise" d={1.4} style={{ position: 'absolute', left: 1000, top: 540 }}>
      <img
        src={wrapper}
        alt="Candy wrapper input"
        style={{ width: 205, height: 272, objectFit: 'cover', display: 'block', borderRadius: 16, boxShadow: '0 24px 60px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.12)' }}
      />
    </Fx>
    <Fx a="fade" d={2.2} style={{ position: 'absolute', left: 1220, top: 640 }}><Arrow d={0} w={90} /></Fx>
    <div style={{ position: 'absolute', left: 1330, top: 540 }}>
      <ResultJson d={2.4} />
    </div>
    <Fx a="pop" d={3.4} style={{ position: 'absolute', left: 1330, top: 880 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
        <span style={{ fontSize: 76, fontWeight: 800, color: c.green, letterSpacing: '-0.03em' }}>95%</span>
        <span style={{ fontSize: 40, fontWeight: 700 }}>Confident</span>
      </div>
    </Fx>
  </Shell>
);

/* ───────────────────────── 36 · LLMs (divider) ───────────────────────── */

const LLMDivider: Page = () => <Divider label="LLMs" title="Working with LLMs & Running Models" n="09" />;

/* ───────────────────────── 37 · LLMs ───────────────────────── */

const ModelLine = ({ children, d }: { children?: ReactNode; d: number }) => (
  <Fx a="slide" d={d} style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 18 }}>
    <span style={{ width: 12, height: 12, borderRadius: '50%', background: c.violet }} />
    {children}
  </Fx>
);

const LLMs: Page = () => (
  <Shell label="LLMs" title="LLMs">
    <Fx a="rise" d={0.3} style={{ position: 'absolute', left: 120, top: 200, width: 1680 }}>
      <Card style={{ padding: '28px 40px' }}>
        <Eyebrow>What is an LLM</Eyebrow>
        <div style={{ fontSize: 31, lineHeight: 1.42, marginTop: 12 }}>
          An <Hl>LLM</Hl> - computational model notable for its ability to achieve general-purpose language generation and other
          natural language processing tasks such as classification, extraction, text generation, summarization, Q&amp;A, etc
        </div>
      </Card>
    </Fx>
    <Fx a="rise" d={0.7} style={{ position: 'absolute', left: 120, top: 520, width: 820 }}>
      <Card style={{ padding: 40, height: 430 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Eyebrow color={c.violet}>Models</Eyebrow>
          <Chip color={c.violet} size={22}>Foundational Models</Chip>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}>
          <ModelLine d={1}>Meta Llama</ModelLine>
          <ModelLine d={1.15}>OpenAI GPT</ModelLine>
          <ModelLine d={1.3}>XAI Grok</ModelLine>
          <ModelLine d={1.45}>Qwen</ModelLine>
          <ModelLine d={1.6}>IBM Granite &amp; Slate</ModelLine>
        </div>
      </Card>
    </Fx>
    <Fx a="rise" d={0.9} style={{ position: 'absolute', left: 980, top: 520, width: 820 }}>
      <Card style={{ padding: 40, height: 430 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Eyebrow color={c.blue}>Working with them</Eyebrow>
          <Chip color={c.blue} size={22}>*** Inferencing ***</Chip>
        </div>
        <Fx a="slide" d={1.2} style={{ marginTop: 34 }}>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.025em' }}>Prompt Engineering</div>
          <div style={{ fontSize: 30, color: c.muted, marginTop: 10 }}>zero-shot, one-shot, few-shot prompting</div>
        </Fx>
        <Fx a="slide" d={1.6} style={{ marginTop: 40 }}>
          <div style={{ fontSize: 30, color: c.muted }}>Run locally with</div>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.025em', marginTop: 6 }}>
            <span style={{ color: ACC }}>Ollama</span>
            <span style={{ fontWeight: 500, color: c.muted }}> =&gt; </span>
          </div>
          <div style={{ fontSize: 30, color: c.muted, marginTop: 6 }}>open-source software platform and runtime</div>
        </Fx>
      </Card>
    </Fx>
  </Shell>
);

/* ───────────────────────── 38 · Tokens & context window ───────────────────────── */

const Tok = ({ t, i, color }: { t: string; i: number; color: string }) => (
  <Fx a="pop" d={0.5 + i * 0.18} t={0.4}>
    <div
      style={{
        fontFamily: mono,
        fontSize: 46,
        padding: '14px 24px',
        borderRadius: 14,
        border: `2px solid ${color}`,
        background: `${color}1c`,
        color: 'var(--osd-text)',
        animation: `ai-hop 6s ease-in-out ${2 + i * 0.35}s infinite`,
      }}
    >
      {t}
    </div>
  </Fx>
);

const Tokens: Page = () => (
  <Shell label="LLMs" title="Tokens and the context window">
    <Fx a="fade" d={0.2} style={{ position: 'absolute', left: 120, top: 210, fontFamily: mono, fontSize: 24, letterSpacing: '0.1em', color: c.muted }}>
      THE MODEL READS TOKENS, NOT WORDS
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 280, display: 'flex', gap: 14, alignItems: 'center' }}>
      <Tok t="Col" i={0} color={c.green} />
      <Tok t="umbus" i={1} color={c.blue} />
      <Tok t="is" i={2} color={c.violet} />
      <Tok t="the" i={3} color={c.amber} />
      <Tok t="capital" i={4} color={c.green} />
      <Tok t="of" i={5} color={c.blue} />
      <Tok t="Ohio" i={6} color={c.violet} />
      <Tok t="." i={7} color={c.amber} />
      <Fx a="slide" d={2.2} style={{ marginLeft: 30, fontSize: 40, fontWeight: 800, color: ACC }}>8 tokens</Fx>
    </div>
    <Fx a="fade" d={2.4} style={{ position: 'absolute', left: 120, top: 395, fontSize: 26, color: c.dim }}>
      Illustrative split. Each model family has its own tokenizer.
    </Fx>
    <Fx a="fade" d={2.8} style={{ position: 'absolute', left: 120, top: 520, fontFamily: mono, fontSize: 24, letterSpacing: '0.1em', color: c.muted }}>
      CONTEXT WINDOW = PROMPT + ANSWER
    </Fx>
    <Fx a="fade" d={3} style={{ position: 'absolute', left: 120, top: 570, fontSize: 36, fontWeight: 700 }}>
      Example: Qwen3-8B, <Hl>32,768 tokens</Hl>
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 650, width: 1680, height: 120, display: 'flex', gap: 6 }}>
      <div style={{ flex: 24576, position: 'relative', overflow: 'hidden', borderRadius: '20px 6px 6px 20px', border: `2px solid ${c.blue}`, background: `${c.blue}22` }}>
        <div className="ai" style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${c.blue}66, ${c.blue}22)`, transformOrigin: 'left', ...fx('grow', 3.2, 1.2) }} />
        <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 700 }}>
          PROMPT  ·  24,576 input tokens
        </div>
      </div>
      <div style={{ flex: 8192, position: 'relative', overflow: 'hidden', borderRadius: '6px 20px 20px 6px', border: `2px solid ${c.green}`, background: `${c.green}22` }}>
        <div className="ai" style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${c.green}66, ${c.green}22)`, transformOrigin: 'left', ...fx('grow', 4.3, 0.7) }} />
        <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 700 }}>
          ANSWER  ·  8,192
        </div>
      </div>
    </div>
    <Fx a="rise" d={5} style={{ position: 'absolute', left: 120, top: 810, width: 1500, fontSize: 36, lineHeight: 1.4, color: c.muted }}>
      <span style={{ color: ACC }}>→ </span>Fill the window with the prompt and there is no room left for the answer. Every token in the window takes{' '}
      <Hl>KV-cache</Hl> memory.
    </Fx>
  </Shell>
);

/* ───────────────────────── 39 · Attention & KV cache ───────────────────────── */

const AttnTok = ({ t, x, hot, d }: { t: string; x: number; hot?: boolean; d: number }) => (
  <Fx
    a="pop"
    d={d}
    t={0.5}
    style={{
      position: 'absolute',
      left: x,
      top: hot ? 330 : 230,
      fontFamily: mono,
      fontSize: 40,
      padding: '12px 28px',
      borderRadius: 14,
      border: `2px solid ${hot ? c.amber : c.blue}`,
      background: hot ? `${c.amber}30` : `${c.blue}1c`,
      boxShadow: hot ? `0 0 44px ${c.amber}55` : 'none',
      color: hot ? c.amber : 'var(--osd-text)',
    }}
  >
    {t}
  </Fx>
);

const Attention: Page = () => (
  <Shell label="LLMs" title="Attention and the KV cache">
    <Fx a="fade" d={0.2} style={{ position: 'absolute', left: 120, top: 175, fontFamily: mono, fontSize: 22, letterSpacing: '0.1em', color: c.muted }}>
      EARLIER TOKENS  ·  keys + values already cached
    </Fx>
    <svg width="1680" height="320" viewBox="0 0 1680 320" style={{ position: 'absolute', left: 120, top: 200 }} aria-hidden="true">
      {[
        { x: 70, w: 5, o: 0.35 },
        { x: 250, w: 8, o: 0.8 },
        { x: 440, w: 10, o: 1 },
        { x: 600, w: 4, o: 0.3 },
        { x: 770, w: 12, o: 1 },
      ].map((l, i) => (
        <path
          key={l.x}
          className="ai"
          d={`M${l.x + 55} 100 Q${(l.x + 55 + 1020) / 2} 190 1020 140`}
          fill="none"
          stroke={c.amber}
          strokeWidth={l.w}
          opacity={l.o}
          strokeLinecap="round"
          strokeDasharray="14 12"
          style={{ animation: `ai-dashmove ${1.6 + i * 0.2}s linear infinite, ai-fade 1s ease ${2 + i * 0.3}s both` }}
        />
      ))}
    </svg>
    <AttnTok t="The" x={190} d={0.5} />
    <AttnTok t="cat" x={370} d={0.7} />
    <AttnTok t="sat" x={560} d={0.9} />
    <AttnTok t="on" x={720} d={1.1} />
    <AttnTok t="the" x={890} d={1.3} />
    <AttnTok t="mat" x={1140} hot d={1.8} />
    <Fx a="fade" d={2} style={{ position: 'absolute', left: 1330, top: 345, fontFamily: mono, fontSize: 22, letterSpacing: '0.12em', color: c.amber }}>
      ← NEW TOKEN
    </Fx>
    <Fx a="rise" d={2.4} style={{ position: 'absolute', left: 260, top: 500, width: 900 }}>
      <div style={{ padding: '14px 0', textAlign: 'center', borderRadius: 14, border: `2px dashed ${c.green}`, background: `${c.green}14`, fontFamily: mono, fontSize: 28, letterSpacing: '0.14em', color: c.green }}>
        KV CACHE
      </div>
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 620, width: 1680, display: 'flex', justifyContent: 'space-between' }}>
      <Fx a="rise" d={3} style={{ width: 530 }}>
        <Eyebrow color={c.amber}>Attention</Eyebrow>
        <div style={{ fontSize: 32, lineHeight: 1.4, marginTop: 12 }}>Each new token looks back at the earlier tokens to decide which ones matter.</div>
      </Fx>
      <Fx a="rise" d={3.4} style={{ width: 530 }}>
        <Eyebrow color={c.green}>KV cache</Eyebrow>
        <div style={{ fontSize: 32, lineHeight: 1.4, marginTop: 12 }}>Keys and values for earlier tokens are stored, so they are not recomputed for every new token.</div>
      </Fx>
      <Fx a="rise" d={3.8} style={{ width: 530 }}>
        <Eyebrow color={c.red}>The cost</Eyebrow>
        <div style={{ fontSize: 32, lineHeight: 1.4, marginTop: 12 }}>The cache grows with every token in the context. That is the memory math on slides 45–46.</div>
      </Fx>
    </div>
  </Shell>
);

/* ───────────────────────── 40 · GenAI, agentic, encoder/decoder ───────────────────────── */

const ConceptCard = ({
  color,
  name,
  d,
  viz,
  children,
}: {
  color: string;
  name: string;
  d: number;
  viz: ReactNode;
  children?: ReactNode;
}) => (
  <Fx a="rise" d={d} style={{ width: 540 }}>
    <Card style={{ padding: 36, height: 690 }}>
      <div style={{ height: 190, borderRadius: 14, border: `1px solid ${color}55`, background: `${color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {viz}
      </div>
      <div style={{ fontFamily: mono, fontSize: 24, letterSpacing: '0.12em', color, marginTop: 28 }}>{name}</div>
      <div style={{ fontSize: 31, lineHeight: 1.42, marginTop: 14 }}>{children}</div>
    </Card>
  </Fx>
);

const GenViz = () => (
  <svg width="300" height="150" viewBox="0 0 300 150" aria-hidden="true">
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect key={i} className="ai" x={20 + i * 38} y={30} width="26" height="90" rx="6" fill={c.violet}
        style={{ transformOrigin: `${33 + i * 38}px 120px`, animation: `ai-eq ${1.2 + (i % 4) * 0.3}s ease-in-out ${i * 0.12}s infinite` }} />
    ))}
  </svg>
);

const AgentViz = () => (
  <svg width="300" height="150" viewBox="0 0 300 150" aria-hidden="true">
    <circle cx="150" cy="75" r="60" fill="none" stroke={c.blue} strokeWidth="3" strokeDasharray="10 10" className="ai" style={{ transformOrigin: '150px 75px', animation: 'ai-spin 14s linear infinite' }} />
    <circle cx="150" cy="75" r="18" fill={c.blue} className="ai" style={{ transformOrigin: '150px 75px', animation: 'ai-pulse 2s ease-in-out infinite' }} />
    <g className="ai" style={{ transformOrigin: '150px 75px', animation: 'ai-spin 6s linear infinite' }}>
      <circle cx="150" cy="15" r="11" fill={c.green} />
    </g>
    <g className="ai" style={{ transformOrigin: '150px 75px', animation: 'ai-spin 9s linear infinite reverse' }}>
      <rect x="196" y="63" width="22" height="22" rx="5" fill={c.amber} />
    </g>
  </svg>
);

const EncDecViz = () => (
  <svg width="300" height="150" viewBox="0 0 300 150" aria-hidden="true">
    <rect x="20" y="40" width="100" height="70" rx="12" fill="none" stroke={c.green} strokeWidth="3" />
    <text x="70" y="82" textAnchor="middle" fontFamily={mono} fontSize="20" fill={c.green}>ENC</text>
    <rect x="180" y="40" width="100" height="70" rx="12" fill="none" stroke={c.amber} strokeWidth="3" />
    <text x="230" y="82" textAnchor="middle" fontFamily={mono} fontSize="20" fill={c.amber}>DEC</text>
    <line x1="124" y1="75" x2="176" y2="75" stroke={c.violet} strokeWidth="4" strokeDasharray="8 8" className="ai" style={{ animation: 'ai-dashmove 1s linear infinite' }} />
    <circle cx="150" cy="75" r="7" fill={c.violet} className="ai" style={{ animation: 'ai-pulse 1.4s ease-in-out infinite', transformOrigin: '150px 75px' }} />
  </svg>
);

const GenAgentic: Page = () => (
  <Shell label="LLMs" title="Generative AI, agentic AI, encoders & decoders" size={60}>
    <div style={{ position: 'absolute', left: 120, top: 235, width: 1680, display: 'flex', justifyContent: 'space-between' }}>
      <ConceptCard color={c.violet} name="GENERATIVE AI" d={0.3} viz={<GenViz />}>
        Capable of generating text, images, videos, or other data using generative models, often in response to prompts.
      </ConceptCard>
      <ConceptCard color={c.blue} name="AGENTIC AI" d={0.6} viz={<AgentViz />}>
        Agentic AI is artificial intelligence that can take a goal, break it into steps, make decisions, use tools or data sources, and act with some level of autonomy to complete a task.
      </ConceptCard>
      <ConceptCard color={c.green} name="ENCODER / DECODER" d={0.9} viz={<EncDecViz />}>
        An <Hl color={c.green}>encoder</Hl> builds a representation of the input.
        <br />
        <br />A <Hl color={c.amber}>decoder</Hl> generates what comes next.
      </ConceptCard>
    </div>
  </Shell>
);

/* ───────────────────────── 41 · Hardware ───────────────────────── */

const HwChip = ({ children, color, d }: { children?: ReactNode; color: string; d: number }) => (
  <Fx a="pop" d={d} t={0.5}>
    <Chip color={color} size={30}>
      {children}
    </Chip>
  </Fx>
);

const GpuViz = () => (
  <svg width="520" height="170" viewBox="0 0 520 170" aria-hidden="true">
    <rect x="10" y="20" width="200" height="130" rx="14" fill={`${c.blue}1c`} stroke={c.blue} strokeWidth="3" />
    <text x="110" y="62" textAnchor="middle" fontFamily={mono} fontSize="22" fill={c.blue}>GPU</text>
    <text x="110" y="100" textAnchor="middle" fontFamily={mono} fontSize="22" fill={c.muted}>VRAM</text>
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} className="ai" x={34 + i * 28} y="116" width="18" height="22" rx="3" fill={c.blue}
        style={{ animation: `ai-cycle 2.4s ease-in-out ${i * 0.2}s infinite` }} />
    ))}
    <rect x="310" y="20" width="200" height="130" rx="14" fill={`${c.violet}14`} stroke={c.violet} strokeWidth="3" />
    <text x="410" y="62" textAnchor="middle" fontFamily={mono} fontSize="22" fill={c.violet}>CPU</text>
    <text x="410" y="100" textAnchor="middle" fontFamily={mono} fontSize="22" fill={c.muted}>System RAM</text>
    <line x1="214" y1="85" x2="306" y2="85" stroke={c.dim} strokeWidth="3" strokeDasharray="6 8" className="ai" style={{ animation: 'ai-dashmove 2s linear infinite' }} />
  </svg>
);

const UnifiedViz = () => (
  <svg width="520" height="170" viewBox="0 0 520 170" aria-hidden="true">
    <rect x="10" y="10" width="500" height="150" rx="18" fill={`${c.green}12`} stroke={c.green} strokeWidth="3" strokeDasharray="10 8" className="ai" style={{ animation: 'ai-dashmove 3s linear infinite' }} />
    <text x="260" y="146" textAnchor="middle" fontFamily={mono} fontSize="22" fill={c.green} letterSpacing="2">ONE SHARED MEMORY POOL</text>
    <rect x="50" y="30" width="170" height="70" rx="12" fill={`${c.violet}22`} stroke={c.violet} strokeWidth="3" />
    <text x="135" y="74" textAnchor="middle" fontFamily={mono} fontSize="24" fill={c.violet}>CPU</text>
    <rect x="300" y="30" width="170" height="70" rx="12" fill={`${c.blue}22`} stroke={c.blue} strokeWidth="3" />
    <text x="385" y="74" textAnchor="middle" fontFamily={mono} fontSize="24" fill={c.blue}>GPU</text>
    <circle r="7" fill={c.green} className="ai">
      <animateMotion dur="2.4s" repeatCount="indefinite" path="M220 65 L300 65 L220 65" />
    </circle>
  </svg>
);

const Hardware: Page = () => (
  <Shell label="HARDWARE" title="How to understand models and hardware needed to run them:" size={56}>
    <Fx a="fade" d={0.3} style={{ position: 'absolute', left: 120, top: 178, fontSize: 36, fontWeight: 700, color: ACC }}>
      Unified Memory Compute vs GPU
    </Fx>
    <Fx a="rise" d={0.5} style={{ position: 'absolute', left: 120, top: 270, width: 810 }}>
      <Card style={{ padding: 40, height: 660 }}>
        <Eyebrow color={c.blue}>GPU</Eyebrow>
        <div style={{ marginTop: 22 }}><GpuViz /></div>
        <div style={{ fontSize: 33, lineHeight: 1.4, marginTop: 14 }}>
          GPUs are highly parallel compute engines perfectly suited to handling tensors and other deep learning data types
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
          <HwChip color={c.blue} d={1.4}>Nvidia GPU</HwChip>
          <HwChip color={c.blue} d={1.6}>AMD GPU</HwChip>
          <HwChip color={c.blue} d={1.8}>Intel GPU</HwChip>
        </div>
      </Card>
    </Fx>
    <Fx a="rise" d={0.8} style={{ position: 'absolute', left: 990, top: 270, width: 810 }}>
      <Card style={{ padding: 40, height: 660 }}>
        <Eyebrow color={c.green}>Unified memory compute</Eyebrow>
        <div style={{ marginTop: 22 }}><UnifiedViz /></div>
        <div style={{ fontSize: 33, lineHeight: 1.4, marginTop: 14 }}>
          CPU and GPU share one memory pool
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
          <HwChip color={c.green} d={1.7}>Apple M-series</HwChip>
          <HwChip color={c.green} d={1.9}>AMD Ryzen AI Max</HwChip>
          <HwChip color={c.green} d={2.1}>Nvidia DGX Spark</HwChip>
        </div>
      </Card>
    </Fx>
  </Shell>
);

/* ───────────────────────── 42 · Reading a model repository ───────────────────────── */

const ReadRepo: Page = () => (
  <Shell label="FROM MODEL TO MEMORY" title="Reading a model repository">
    <Fx a="rise" d={0.4} style={{ position: 'absolute', left: 382, top: 230, width: 1155, height: 739 }}>
      <img
        src={hfPage}
        alt="Hugging Face page for Qwen3-8B-GGUF"
        style={{ width: 1155, height: 739, display: 'block' }}
      />
    </Fx>
  </Shell>
);

/* ───────────────────────── 43 · Two repositories ───────────────────────── */

const RepoRow = ({ children, d }: { children?: ReactNode; d: number }) => (
  <Fx a="slide" d={d} style={{ fontSize: 34, lineHeight: 1.35 }}>
    {children}
  </Fx>
);

const TwoRepos: Page = () => (
  <Shell label="FROM MODEL TO MEMORY" title="One model, two source repositories">
    <Fx a="rise" d={0.3} style={{ position: 'absolute', left: 120, top: 250, width: 810 }}>
      <Card style={{ padding: 44, height: 640, borderColor: `${c.green}66` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <div style={{ width: 84, height: 84, borderRadius: 22, background: c.green, color: c.ink, fontSize: 56, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>A</div>
          <Eyebrow color={c.green}>Chosen download: GGUF repository</Eyebrow>
        </div>
        <div style={{ marginTop: 56 }}>
          <RepoRow d={0.9}>
            <span style={{ fontFamily: mono, color: c.green }}>Q4_K_M</span> file:
          </RepoRow>
          <Fx a="pop" d={1.2} style={{ fontSize: 120, fontWeight: 800, letterSpacing: '-0.04em', color: c.green, marginTop: 6, lineHeight: 1.1 }}>
            5.03 GB
          </Fx>
        </div>
        <Fx a="fade" d={1.8} style={{ marginTop: 74 }}>
          <Chip color={c.green} size={22}>huggingface.co/Qwen/Qwen3-8B-GGUF/tree/main</Chip>
        </Fx>
      </Card>
    </Fx>
    <Fx a="rise" d={0.6} style={{ position: 'absolute', left: 990, top: 250, width: 810 }}>
      <Card style={{ padding: 44, height: 640, borderColor: `${c.blue}66` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <div style={{ width: 84, height: 84, borderRadius: 22, background: c.blue, color: c.ink, fontSize: 56, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>B</div>
          <Eyebrow color={c.blue}>Architecture: original model repository</Eyebrow>
        </div>
        <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 26 }}>
          <RepoRow d={1.2}>
            <Hl color={c.blue}>8.2B parameters, 32K native context:</Hl> model card
          </RepoRow>
          <RepoRow d={1.5}>
            <Hl color={c.blue}>36 layers, 8 KV heads, 128 dimensions:</Hl> config.json
          </RepoRow>
        </div>
        <Fx a="fade" d={2.1} style={{ marginTop: 48 }}>
          <Chip color={c.blue} size={22}>huggingface.co/Qwen/Qwen3-8B</Chip>
        </Fx>
        <Fx a="fade" d={2.4} style={{ marginTop: 34, fontSize: 28, lineHeight: 1.4, color: c.muted }}>
          Architecture file: <span style={{ fontFamily: mono, color: 'var(--osd-text)' }}>/blob/main/config.json</span> in repository B
        </Fx>
      </Card>
    </Fx>
  </Shell>
);

/* ───────────────────────── 44 · Weights memory ───────────────────────── */

const WeightRow = ({
  bits,
  calc,
  gb,
  w,
  color,
  d,
}: {
  bits: string;
  calc: string;
  gb: string;
  w: number;
  color: string;
  d: number;
}) => (
  <Fx a="fade" d={d} style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
    <div style={{ width: 170, fontSize: 44, fontWeight: 800, color }}>{bits}</div>
    <div style={{ width: 360, fontFamily: mono, fontSize: 30, color: c.muted }}>{calc}</div>
    <div style={{ width: 640, height: 54, borderRadius: 12, background: c.panel, border: `1px solid ${c.line}`, overflow: 'hidden' }}>
      <div className="ai" style={{ width: `${w}%`, height: '100%', background: `linear-gradient(90deg, ${color}aa, ${color})`, transformOrigin: 'left', ...fx('grow', d + 0.3, 0.9) }} />
    </div>
    <div style={{ fontSize: 50, fontWeight: 800, letterSpacing: '-0.02em', color }}>{gb}</div>
  </Fx>
);

const WeightMem: Page = () => (
  <Shell label="FROM MODEL TO MEMORY" title="How much memory do the weights need?">
    <Fx a="rise" d={0.3} style={{ position: 'absolute', left: 120, top: 210, width: 1680 }}>
      <div style={{ fontFamily: mono, fontSize: 38, color: ACC, padding: '18px 32px', borderRadius: 16, border: `1px solid ${c.green}55`, background: `${c.green}10`, display: 'inline-block' }}>
        Weight bytes ≈ parameters × bits per weight ÷ 8
      </div>
      <div style={{ fontSize: 28, color: c.muted, marginTop: 18 }}>
        8.2B parameters: original model card (B). Results below are calculated.
      </div>
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 450, width: 1680, display: 'flex', flexDirection: 'column', gap: 34 }}>
      <Steps>
        <Step><WeightRow bits="8 bits" calc="8.2B × 8 ÷ 8" gb="8.2 GB" w={100} color={c.red} d={0} /></Step>
        <Step><WeightRow bits="5 bits" calc="8.2B × 5 ÷ 8" gb="5.13 GB" w={62.6} color={c.amber} d={0} /></Step>
        <Step><WeightRow bits="4 bits" calc="8.2B × 4 ÷ 8" gb="4.1 GB" w={50} color={c.green} d={0} /></Step>
      </Steps>
    </div>
    <Fx a="rise" d={1.2} style={{ position: 'absolute', left: 120, top: 810, width: 1680 }}>
      <Card style={{ padding: '22px 36px', borderColor: `${c.blue}66` }}>
        <div style={{ fontSize: 34, fontWeight: 700 }}>
          <span style={{ color: c.blue }}>GGUF Files page (A):</span> <span style={{ fontFamily: mono }}>Q4_K_M = 5.03 GB</span>
        </div>
        <div style={{ fontSize: 28, color: c.muted, marginTop: 8 }}>
          Formats add overhead and can mix precisions. Use the actual file for the budget.
        </div>
      </Card>
    </Fx>
  </Shell>
);

/* ───────────────────────── 45 · KV-cache numbers ───────────────────────── */

const FactorChip = ({ v, color, d }: { v: string; color: string; d: number }) => (
  <Fx a="pop" d={d} t={0.5}>
    <div style={{ fontSize: 78, fontWeight: 800, fontFamily: mono, color, padding: '8px 30px', borderRadius: 18, border: `2px solid ${color}`, background: `${color}14` }}>
      {v}
    </div>
  </Fx>
);

const Op = ({ children, d }: { children?: ReactNode; d: number }) => (
  <Fx a="fade" d={d} style={{ fontSize: 56, color: c.dim, fontFamily: mono }}>
    {children}
  </Fx>
);

const FactorRow = ({ v, what, from, color, d }: { v: string; what: string; from: string; color: string; d: number }) => (
  <Fx
    a="slide"
    d={d}
    style={{
      display: 'grid',
      gridTemplateColumns: '170px 520px 1fr',
      alignItems: 'center',
      padding: '12px 28px',
      borderTop: `1px solid ${c.line}`,
      fontSize: 30,
    }}
  >
    <span style={{ fontFamily: mono, fontSize: 40, fontWeight: 700, color }}>{v}</span>
    <span>{what}</span>
    <span style={{ fontFamily: mono, fontSize: 26, color: from.startsWith('ASSUMPTION') ? c.amber : c.muted }}>{from}</span>
  </Fx>
);

const KVNumbers: Page = () => (
  <Shell label="FROM MODEL TO MEMORY" title="Where the KV-cache numbers come from">
    <div style={{ position: 'absolute', left: 120, top: 215, width: 1680, display: 'flex', alignItems: 'center', gap: 22 }}>
      <FactorChip v="2" color={c.green} d={0.3} />
      <Op d={0.45}>×</Op>
      <FactorChip v="36" color={c.blue} d={0.6} />
      <Op d={0.75}>×</Op>
      <FactorChip v="8" color={c.violet} d={0.9} />
      <Op d={1.05}>×</Op>
      <FactorChip v="128" color={c.amber} d={1.2} />
      <Op d={1.35}>×</Op>
      <FactorChip v="2" color={c.red} d={1.5} />
      <Op d={1.7}>=</Op>
      <Fx a="pop" d={1.9} t={0.6} style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        <span style={{ color: ACC, fontFamily: mono }}>147,456</span>
        <div style={{ fontSize: 30, fontWeight: 500, color: c.muted }}>bytes per token</div>
      </Fx>
    </div>
    <Fx a="fade" d={2.2} style={{ position: 'absolute', left: 120, top: 340, fontFamily: mono, fontSize: 24, color: c.dim }}>
      B: huggingface.co/Qwen/Qwen3-8B/blob/main/config.json
    </Fx>
    <Fx a="rise" d={2.4} style={{ position: 'absolute', left: 120, top: 410, width: 1680 }}>
      <div style={{ border: `1px solid ${c.line}`, borderRadius: 18, overflow: 'hidden', background: c.panel }}>
        <div style={{ display: 'grid', gridTemplateColumns: '170px 520px 1fr', padding: '14px 28px', background: 'rgba(91,227,176,0.14)', fontFamily: mono, fontSize: 24, letterSpacing: '0.08em', color: ACC }}>
          <span>Factor</span>
          <span>What it means</span>
          <span>Where it comes from</span>
        </div>
        <FactorRow v="2" what="Keys AND values" from="KV-cache structure" color={c.green} d={2.7} />
        <FactorRow v="36" what="Transformer layers" from="B config: num_hidden_layers" color={c.blue} d={2.9} />
        <FactorRow v="8" what="KV heads per layer" from="B config: num_key_value_heads" color={c.violet} d={3.1} />
        <FactorRow v="128" what="Values in each head vector" from="B config: head_dim" color={c.amber} d={3.3} />
        <FactorRow v="2 bytes" what="Storage per cached value" from="ASSUMPTION: 16-bit cache" color={c.red} d={3.5} />
      </div>
    </Fx>
  </Shell>
);

/* ───────────────────────── 46 · Context memory ───────────────────────── */

const CtxRow = ({
  tokens,
  gb,
  w,
  color,
  d,
  note,
}: {
  tokens: string;
  gb: string;
  w: number;
  color: string;
  d: number;
  note?: string;
}) => (
  <Fx a="fade" d={d} style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
    <div style={{ width: 460 }}>
      <div style={{ fontSize: 40, fontWeight: 700, fontFamily: mono }}>{tokens}</div>
      {note && <div style={{ fontSize: 26, color: c.muted }}>{note}</div>}
    </div>
    <div style={{ width: 740, height: 62, borderRadius: 14, background: c.panel, border: `1px solid ${c.line}`, overflow: 'hidden' }}>
      <div className="ai" style={{ width: `${w}%`, height: '100%', background: `linear-gradient(90deg, ${color}99, ${color})`, transformOrigin: 'left', ...fx('grow', d + 0.2, 1) }} />
    </div>
    <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.03em', color }}>{gb}</div>
  </Fx>
);

const ContextMem: Page = () => (
  <Shell label="FROM MODEL TO MEMORY" title="More context needs more KV memory">
    <Fx a="rise" d={0.3} style={{ position: 'absolute', left: 120, top: 210, width: 1680 }}>
      <div style={{ fontFamily: mono, fontSize: 38, color: ACC, padding: '18px 32px', borderRadius: 16, border: `1px solid ${c.green}55`, background: `${c.green}10`, display: 'inline-block' }}>
        32,768 tokens × 147,456 bytes ≈ 4.83 GB
      </div>
      <div style={{ fontSize: 28, color: c.muted, marginTop: 18 }}>
        Model card (B): native 32K; YaRN extension for 64K.
      </div>
    </Fx>
    <Fx a="fade" d={0.8} style={{ position: 'absolute', left: 120, top: 430, width: 1680, display: 'flex', fontFamily: mono, fontSize: 22, letterSpacing: '0.1em', color: c.dim }}>
      <span style={{ width: 496 }}>CONTEXT PER CONVERSATION</span>
      <span>KV CACHE AT 2 BYTES PER VALUE</span>
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 490, width: 1680, display: 'flex', flexDirection: 'column', gap: 42 }}>
      <Steps>
        <Step><CtxRow tokens="8,192 tokens" gb="1.21 GB" w={12.5} color={c.green} d={0} /></Step>
        <Step><CtxRow tokens="32,768 tokens" gb="4.83 GB" w={50} color={c.blue} d={0} /></Step>
        <Step><CtxRow tokens="65,536 tokens" note="(extended)" gb="9.66 GB" w={100} color={c.red} d={0} /></Step>
      </Steps>
    </div>
    <Fx a="fade" d={1.4} style={{ position: 'absolute', left: 120, top: 900, fontSize: 26, color: c.dim }}>
      Calculated from slide 45. One conversation, input + answer. Decimal GB.
    </Fx>
  </Shell>
);

/* ───────────────────────── 47 · Total ───────────────────────── */

const Total: Page = () => (
  <Shell label="FROM MODEL TO MEMORY">
    <Fx a="rise" d={0.2} style={{ position: 'absolute', left: 120, top: 110, width: 1680 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 36 }}>
        <span style={{ fontSize: 190, fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1, color: ACC }}>9.86 GB</span>
        <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.03em' }}>before runtime overhead</span>
      </div>
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 380, width: 1680 }}>
      <div style={{ display: 'flex', height: 110, gap: 6 }}>
        <div style={{ flex: 5.03, position: 'relative', overflow: 'hidden', borderRadius: '18px 6px 6px 18px', border: `2px solid ${c.green}`, background: `${c.green}22` }}>
          <div className="ai" style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${c.green}88, ${c.green}33)`, transformOrigin: 'left', ...fx('grow', 0.8, 1) }} />
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 700 }}>5.03 GB file (A)</div>
        </div>
        <div style={{ flex: 4.83, position: 'relative', overflow: 'hidden', borderRadius: '6px 18px 18px 6px', border: `2px solid ${c.blue}`, background: `${c.blue}22` }}>
          <div className="ai" style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, ${c.blue}88, ${c.blue}33)`, transformOrigin: 'left', ...fx('grow', 1.6, 1) }} />
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, fontWeight: 700 }}>4.83 GB calculated cache</div>
        </div>
      </div>
      <Fx a="fade" d={2.6} style={{ fontSize: 34, color: c.muted, marginTop: 30 }}>
        <span style={{ color: ACC }}>+ </span>Then add runtime memory, measured on the target system.
      </Fx>
    </div>
    <Fx a="rise" d={3} style={{ position: 'absolute', left: 120, top: 640, width: 810 }}>
      <Card style={{ padding: 36, height: 270, borderColor: `${c.blue}66` }}>
        <Eyebrow color={c.blue}>Dedicated GPU</Eyebrow>
        <div style={{ fontSize: 32, lineHeight: 1.45, marginTop: 18 }}>
          <div><b>VRAM:</b> model, cache, GPU buffers</div>
          <div style={{ marginTop: 8 }}><b>System RAM:</b> OS and host apps</div>
        </div>
      </Card>
    </Fx>
    <Fx a="rise" d={3.3} style={{ position: 'absolute', left: 990, top: 640, width: 810 }}>
      <Card style={{ padding: 36, height: 270, borderColor: `${c.green}66` }}>
        <Eyebrow color={c.green}>Unified memory</Eyebrow>
        <div style={{ fontSize: 32, lineHeight: 1.45, marginTop: 18 }}>
          Model, cache, and runtime share memory with the OS and other apps.
        </div>
      </Card>
    </Fx>
    <Fx a="fade" d={3.8} style={{ position: 'absolute', left: 120, top: 938, fontSize: 26, color: c.dim }}>
      Assumes 32K context and 2-byte cache values. Measure runtime overhead.
    </Fx>
  </Shell>
);

/* ───────────────────────── 48 · Performance ───────────────────────── */

const PerfCard = ({
  color,
  big,
  name,
  a,
  b,
  d,
  viz,
}: {
  color: string;
  big: string;
  name: string;
  a: string;
  b: string;
  d: number;
  viz: ReactNode;
}) => (
  <Fx a="rise" d={d} style={{ width: 810 }}>
    <Card style={{ padding: 40, height: 470 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
        <span style={{ fontSize: 100, fontWeight: 800, letterSpacing: '-0.04em', color, lineHeight: 1 }}>{big}</span>
        <span style={{ fontSize: 36, fontWeight: 700 }}>{name}</span>
      </div>
      <div style={{ margin: '28px 0 22px', height: 70, borderRadius: 12, background: `${color}0f`, border: `1px solid ${color}44`, position: 'relative', overflow: 'hidden' }}>
        {viz}
      </div>
      <div style={{ fontSize: 34, fontWeight: 700, color }}>{a}</div>
      <div style={{ fontSize: 30, color: c.muted, marginTop: 8 }}>{b}</div>
    </Card>
  </Fx>
);

const TtftViz = () => (
  <>
    <div className="ai" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '55%', background: `linear-gradient(90deg, ${c.amber}33, ${c.amber}88)`, transformOrigin: 'left', animation: 'ai-load 3.6s ease-in-out infinite' }} />
    <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, display: 'flex', alignItems: 'center', fontFamily: mono, fontSize: 24, color: c.amber }}>waiting…</div>
    <div className="ai" style={{ position: 'absolute', left: '55%', top: 14, width: 42, height: 42, borderRadius: 10, background: c.amber, animation: 'ai-appear 3.6s ease-in-out infinite' }} />
  </>
);

const TpsViz = () => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px' }}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <div key={i} className="ai" style={{ width: 52, height: 40, borderRadius: 8, background: c.green, animation: `ai-stream 3.6s ease-out ${i * 0.22}s infinite` }} />
    ))}
  </div>
);

const Perf: Page = () => (
  <Shell label="FROM MEMORY TO PERFORMANCE" title="How long until it starts? How fast does it write?" size={60}>
    <Fx a="fade" d={0.3} style={{ position: 'absolute', left: 120, top: 198, width: 1680, fontSize: 32, lineHeight: 1.4, color: c.muted }}>
      Each new token takes a pass through the model’s layers, using cached attention information from earlier tokens.
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 310, width: 1680, display: 'flex', justifyContent: 'space-between' }}>
      <PerfCard color={c.amber} big="TTFT" name="Time to first token" a="Initial wait. Lower is better." b="Prompt processing + queueing" d={0.6} viz={<TtftViz />} />
      <PerfCard color={c.green} big="TPS" name="Tokens per second, per user" a="Generation pace. Higher is better." b="Often limited by memory bandwidth" d={1.1} viz={<TpsViz />} />
    </div>
    <Fx a="rise" d={1.8} style={{ position: 'absolute', left: 120, top: 810, width: 1680, fontSize: 32, lineHeight: 1.45 }}>
      <span style={{ color: ACC }}>→ </span>
      <Hl>Compute</Hl> performs the calculations. <Hl color={c.blue}>Memory bandwidth</Hl> feeds the model weights and KV-cache data.
    </Fx>
  </Shell>
);

/* ───────────────────────── 49 · Play with it ───────────────────────── */

const LinkRow = ({ children, d }: { children?: ReactNode; d: number }) => (
  <Fx a="slide" d={d}>
    <Chip color={c.blue} size={30}>
      {children}
    </Chip>
  </Fx>
);

const Play: Page = () => (
  <Shell label="TRY IT" title="Play with it @ home!">
    <Fx a="rise" d={0.3} style={{ position: 'absolute', left: 120, top: 270, width: 810 }}>
      <Card style={{ padding: 44, height: 560 }}>
        <Eyebrow color={c.green}>Models + runtime</Eyebrow>
        <div style={{ fontSize: 38, lineHeight: 1.4, marginTop: 30 }}>Download open weight models from</div>
        <div style={{ marginTop: 14 }}><LinkRow d={0.9}>huggingface.com</LinkRow></div>
        <div style={{ fontSize: 38, lineHeight: 1.4, marginTop: 40 }}>Run with <Hl>ollama</Hl> from</div>
        <div style={{ marginTop: 14 }}><LinkRow d={1.2}>ollama.com</LinkRow></div>
      </Card>
    </Fx>
    <Fx a="rise" d={0.6} style={{ position: 'absolute', left: 990, top: 270, width: 810 }}>
      <Card style={{ padding: 44, height: 560 }}>
        <Eyebrow color={c.violet}>Open source projects</Eyebrow>
        <div style={{ fontSize: 38, lineHeight: 1.4, marginTop: 30 }}>Or play with it via open source projects:</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 30 }}>
          <LinkRow d={1.5}>github.com/007Style/deepThink</LinkRow>
          <LinkRow d={1.8}>github.com/007Style/deepThinkER</LinkRow>
        </div>
      </Card>
    </Fx>
  </Shell>
);

/* ───────────────────────── 50 · Stay curious ───────────────────────── */

const Curious: Page = () => (
  <Shell label="KEEP LEARNING">
    <Fx a="rise" d={0.2} style={{ position: 'absolute', left: 120, top: 300, width: 1200 }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--osd-font-display)', fontSize: 190, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.05em' }}>
        Stay
        <br />
        <span style={{ color: ACC }}>Curious</span>
      </h1>
    </Fx>
    <Fx a="rise" d={0.9} style={{ position: 'absolute', left: 120, top: 680, width: 1200 }}>
      <div style={{ fontSize: 40, fontWeight: 600, color: c.muted }}>IBM’s A Mixture of Experts Podcast:</div>
      <div style={{ marginTop: 22 }}>
        <Chip color={c.green} size={30}>ibm.com/think/podcasts/mixture-of-experts</Chip>
      </div>
    </Fx>
    <div style={{ position: 'absolute', left: 1270, top: 280, width: 520, height: 560, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {[0, 1, 2].map((i) => (
        <div key={i} className="ai" style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', border: `2px solid ${c.green}`, animation: `ai-ring 4.5s ease-out ${i * 1.5}s infinite` }} />
      ))}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 200 }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="ai" style={{ width: 22, height: 200, borderRadius: 11, background: i % 2 ? c.blue : c.green, transformOrigin: 'center', animation: `ai-eq ${1 + (i % 4) * 0.25}s ease-in-out ${i * 0.1}s infinite` }} />
        ))}
      </div>
    </div>
  </Shell>
);

/* ───────────────────────── 51 · Summary ───────────────────────── */

const Summary: Page = () => (
  <Shell label="WRAP-UP" title="Summary">
    <Fx a="rise" d={0.3} style={{ position: 'absolute', left: 120, top: 300, width: 900 }}>
      <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
        Feel confident with the vocabulary of <span style={{ color: ACC }}>Deep Learning &amp; AI</span>
      </div>
    </Fx>
    <div style={{ position: 'absolute', left: 120, top: 700, display: 'flex', gap: 18 }}>
      <Fx a="pop" d={1.4} t={0.5}><Chip color={c.green} size={30}>The language</Chip></Fx>
      <Fx a="pop" d={1.7} t={0.5}><Chip color={c.blue} size={30}>The models</Chip></Fx>
      <Fx a="pop" d={2} t={0.5}><Chip color={c.violet} size={30}>The machine</Chip></Fx>
    </div>
    <Fx a="tilt" d={0.6} style={{ position: 'absolute', left: 1080, top: 250, width: 720 }}>
      <LightCard style={{ padding: 20, animation: 'ai-float 7s ease-in-out infinite' }}>
        <img src={wordcloud} alt="Word cloud of AI vocabulary" style={{ width: '100%', display: 'block' }} />
      </LightCard>
    </Fx>
  </Shell>
);

/* ───────────────────────── 52 · About the speaker ───────────────────────── */

const BioBlock = ({ color, d, children }: { color: string; d: number; children?: ReactNode }) => (
  <Fx a="slide" d={d} style={{ display: 'flex', gap: 26 }}>
    <div style={{ flex: 'none', width: 5, borderRadius: 3, background: color, boxShadow: `0 0 18px ${color}88` }} />
    <div style={{ fontSize: 25, lineHeight: 1.42, color: 'var(--osd-text)' }}>{children}</div>
  </Fx>
);

const Speaker: Page = () => (
  <Shell label="ABOUT THE SPEAKER" title="About the speaker:">
    <Fx a="tilt" d={0.3} style={{ position: 'absolute', left: 120, top: 250, width: 420 }}>
      <img
        src={speaker}
        alt="Daneyand DJ Singley"
        style={{ width: 420, height: 420, objectFit: 'cover', display: 'block', borderRadius: 24, boxShadow: '0 0 90px rgba(79,168,255,0.35), 0 0 0 1px rgba(255,255,255,0.14)' }}
      />
    </Fx>
    <Fx a="rise" d={0.9} style={{ position: 'absolute', left: 120, top: 710, width: 560 }}>
      <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em' }}>Daneyand “DJ” Singley</div>
      <div style={{ fontFamily: mono, fontSize: 28, color: ACC, marginTop: 22 }}>Daneyand@IBM.com</div>
      <div style={{ fontFamily: mono, fontSize: 28, color: c.muted, marginTop: 8 }}>802-598-6057</div>
    </Fx>
    <div style={{ position: 'absolute', left: 760, top: 215, width: 1040, display: 'flex', flexDirection: 'column', gap: 26 }}>
      <BioBlock color={c.green} d={0.6}>
        Daneyand "DJ" Singley is a <Hl>Technical Leader &amp; Field CTO at IBM</Hl>, helping clients solve complex business challenges through technology strategy, architecture, and innovation.
      </BioBlock>
      <BioBlock color={c.blue} d={1.1}>
        Prior to returning to IBM, DJ spent 17 years at MAPSYS, a premier IBM Business Partner based in Columbus, Ohio. As Executive Director &amp; Chief Architect, he led the company’s reseller business for a decade, delivering sustained year-over-year revenue growth and guiding clients through the evolution of enterprise infrastructure.
      </BioBlock>
      <BioBlock color={c.violet} d={1.6}>
        DJ began his career at IBM as a microprocessor design engineer, developing processor logic for Apple G5 Macs, Nintendo Wii and Wii U consoles, and IBM Power servers before transitioning into technical sales. He holds <Hl color={c.violet}>six patents</Hl> and has authored several published papers.
      </BioBlock>
      <BioBlock color={c.amber} d={2.1}>
        DJ earned a Bachelor of Science in Computer Engineering from Rutgers University and a Master of Science in Electrical Engineering from the University of Vermont. Throughout his career, his passion has remained the same: bringing together exceptional people and technology to solve customer problems.
      </BioBlock>
    </div>
  </Shell>
);

/* ───────────────────────── notes, meta, deck ───────────────────────── */

export const notes: (string | undefined)[] = [
  "DELIVERY\nSuggested time: 29 seconds. Use the click builds to pace the explanation.\nSPEAKER NARRATION\nWelcome. This is a vocabulary session with a hardware payoff. We will begin with familiar examples, then connect the terminology to the models behind today's AI applications. By the end, we will follow a prompt all the way to the GPU and explain why fitting a model in memory is only the beginning. Some of you are using these tools every day, and some are still trying to untangle the acronyms. Both groups belong here. Experienced attendees should listen for the distinctions between training and inference, total and active parameters, and memory capacity and bandwidth. We will leave time for questions.\nTRANSITION\nNext: You thought you were getting:.\nBACKGROUND ART SOURCE: Generated with the built-in OpenAI image-generation tool. Prompt: Create sophisticated abstract flowing electric cyan and faint violet luminous filaments converging into a computational lattice on the right third. Deep midnight navy background with quiet dark negative space across the left for white presentation typography. Premium scientific editorial artwork. No human figures, brains, robot faces, lettering, logos, UI, or watermarks.",
  "DELIVERY\nSuggested time: 17 seconds. Keep static. Pause for the joke before advancing.\nSPEAKER NARRATION\nLet the audience look at the old listing before you explain anything. This is the setup: “You thought you were getting the MAPSYS guy.” The screenshot is intentionally retained, including its mixed old and new information. Do not read the biography aloud. Give people a moment to recognize the mismatch. Then advance to the next slide for the reveal. The humor comes from the contrast between the advertised role and the person who has arrived, rather than from making a serious announcement about a résumé. Keep this short so the joke has room to land.\nTRANSITION\nNext: You’re actually getting:.\nVISUAL SOURCE: Retained images from the user-supplied AI 101 presentation: image6.png. Full image proportions preserved. The TIFF diagram uses a pixel-identical PNG conversion for compatibility.",
  "DELIVERY\nSuggested time: 29 seconds. Keep static. Pause for the joke before advancing.\nSPEAKER NARRATION\nPause for the laugh before talking over the reveal. “I recently moved back to IBM. Same DJ, different badge.” Adjust that line to your natural delivery. The new IBM portrait is the punch line, so let it do the work. If a brief introduction helps, explain that your path started in microprocessor design at IBM, moved through technical sales and 17 years at MAPSYS, and now returns to IBM. Your experience connecting architecture to business problems is why this AI vocabulary talk will eventually get down to hardware. The full biography belongs in notes and the closing reference slide, rather than competing with the joke.\nTRANSITION\nNext: Keep the conversation going.\nVISUAL SOURCE: Retained images from the user-supplied AI 101 presentation: image7.png. Full image proportions preserved. The TIFF diagram uses a pixel-identical PNG conversion for compatibility.",
  "DELIVERY\nSuggested time: 17 seconds. Use the click builds to pace the explanation.\nSPEAKER NARRATION\nA quick invitation before the lesson: this conversation continues beyond the conference. If you are in the Columbus area, the local Data, Cloud & AI group is another way to meet practitioners and compare experiences. The group URL is retained from the supplied deck. Invite people to photograph the slide if they want it, rather than reading the link aloud. Keep this to a few seconds. Transition by saying that a mixed community needs a common language, which is exactly what the rest of this session is meant to provide.\nTRANSITION\nNext: What you’ll leave with.\nBACKGROUND ART SOURCE: Generated with the built-in OpenAI image-generation tool. Prompt: Create sophisticated abstract flowing electric cyan and faint violet luminous filaments converging into a computational lattice on the right third. Deep midnight navy background with quiet dark negative space across the left for white presentation typography. Premium scientific editorial artwork. No human figures, brains, robot faces, lettering, logos, UI, or watermarks.",
  "DELIVERY\nSuggested time: 34 seconds. Use the click builds to pace the explanation.\nSPEAKER NARRATION\nThe goal is to make the terminology useful. You should be able to hear a discussion about supervised learning, a foundation model, a context window, or GPU bandwidth and understand what the speaker is describing. This is not a programming class. We will nevertheless go beneath the interface: a model is a collection of learned numerical parameters executed by software on hardware. We will build that understanding step by step, so nobody needs to arrive knowing the mathematics. Ask people to hold detailed architecture questions for the end, while welcoming quick clarifications when a term is unclear.\nTRANSITION\nNext: AI, machine learning, deep learning.",
  "DELIVERY\nSuggested time: 51 seconds. Use the click builds to pace the explanation.\nSPEAKER NARRATION\nThese terms overlap. Artificial intelligence is the broad umbrella. Machine learning is a family of approaches that learns from data rather than requiring a person to hand-code every rule. Deep learning is a family of machine-learning approaches based on multilayer neural networks. Today's generative language models sit within this broader history. AI also includes methods outside machine learning, and machine learning includes many useful methods outside deep learning. Avoid implying that the newest approach replaces every older one. The useful question is which method fits the problem, the data, and the operating constraints.\nTRANSITION\nNext: What do we use learning for?.",
  "DELIVERY\nSuggested time: 46 seconds. Use the click builds to pace the explanation.\nSPEAKER NARRATION\nYour original explanation is the right starting point: look for patterns and use them with new data. A house-price model relates property attributes to sale prices. An image classifier relates visual patterns to labels. A generative model learns statistical structure that lets it produce a continuation, an image, or another output. These examples differ in what we ask the model to return. The common thread is learning numerical relationships from examples. Statistical patterns can be useful without proving causation, and success on past examples does not guarantee success in a changed setting. We will return to that distinction when we discuss evaluation.\nTRANSITION\nNext: Data comes in different forms.",
  "You can go to Wikipedia to find the detailed definition of Machine Learning (https://en.wikipedia.org/wiki/Machine_learning) and Deep Learning (https://en.wikipedia.org/wiki/Deep_learning). Most definitions are quite complicated for a novice user and that’s because the true definition of these terms usually involves “how” the learning works and can get very complicated.\nTo simplify this, let’s discuss more about “what it is used for”. In general ML and DL algorithms are used to find patterns in data. That’s it in a nutshell. Finding patterns is only of minimal use in and of itself, but where pattern recognition really becomes valuable is using prior patterns to predict new values. For example, if you can find a pattern in home price data based on home sales in your area, you can build algorithms to predict current home prices. Or if you can find patterns in images, you can predict if an image is a picture of a dog or a cat. Or predict if a tumor is benign or malignant, based on the patterns of cell images you have seen in the past.\nHow this is all done under the covers and the details behind machine learning and deep learning won’t be discussed in detail in this presentation. We will only go as far as to introduce the concepts in order for you to understand the language of AI, ML and DL.",
  "Before we get into the details behind the language of deep learning it’s important to have common vocabulary behind the data (where we are looking for the repeating patterns) that is used by the ML or DL programs. There are lots of types of data that can be used with ML and DL algorithms.",
  "The first category of data is “structured data”. By structured data we mean that the type of data itself has some kind of structure and the data is typically grouped into a form of structure. In the simplest case think of an Excel spreadsheet. In there, you have rows and columns. A column typically represents some attribute of your data using a well defined data type. For example, if you have a spreadsheet of accounts, one column might be the account number, another might be the account balance, another might represent a debit or a credit into that account, another might be a description of that transaction, etc. In DL and ML we call these attributes “features”.\nFor example, the bank balance column will contain a currency value, while the description column will likely contain a string of characters and a date column will contain only valid dates. These are known as “data types” and form the structure for a given column.\nEach row in a structured dataset is well defined in that all the column values for a given row are all related. For example, one row might represent an order from a store (purchase of something) and contain the price, tax, description, date, time, etc of that purchase. The row is structured because there is a column for every value that is put into that row and each row has the same set of well defined columns.\nRelational databases (like Db2, Oracle, SQL Server, etc) are the primary source of structured data within a company and often used as the source for ML and DL. In the case of structured data, we are usually trying to find patterns within the rows in order to predict a given column within the data. For example, if I have a table of home sales, some of the columns might be home type, location, number of bedrooms, number of bathrooms, room sizes, etc. (the features) and one of the columns will be sold price. In a machine learning algorithm, you might ingest all of that structured data and have the model learn how to predict the sold price column from the other data in that table. Then you can build an application to take in the various values that define the home (any of the columns) and predict the sold price column value.",
  "Unstructured data are things like images, sounds, videos, emails, tweets, etc. We refer to these as unstructured because the contents of the data do not have structure; however, the delivery mechanism does have some structure. For example, a picture may come in the form of a JPEG file which does have some structure which defines how to interpret the data and render the image on the screen. An email has some structure in that it has a sender, receiver, subject and then the body of the email. This kind of structure is often referred to as the metadata for the object (attributes that define the object) but the contents of the data (like the sentences in the email) could be anything and don’t have the same kind of structure as our previous example on structured data.\nIn the case of machine learning and deep learning, we are often looking for patterns within the unstructured data. For example, looking for patterns in an image file can help a system recognize if the image is a picture of a cat or a dog. Or we may be looking for the signature sound wave of a gun shot to be able to predict if a violent action has taken place in a neighborhood before it is even reported to police (or if the sound was simply a fire cracker or a car backfiring). Or with emails we may want to find patterns to indicate the authors sentiment (are they upset or happy or sad) or we may be looking for specific patterns of speech to understand a question and build a reply to the email without human intervention, or even identifying spam.\nThese are the types of problems ML and DL are typically used for with unstructured data.",
  "The final class of data is “semi-structured”. This data has a more rigid structure around it than unstructured data. For example, a JSON document has a well formed structure that describes each element within the document; like a person’s name, address, phone number, etc. much like a relational structured table has column headings. But the difference is that a structured relational table has fixed number of columns based on how it was defined (and changing that definition can be a lot of work), whereas a JSON document can have any number of data fields and a developer is free to add new fields whenever they see fit without worrying about the data structure.\nSimilarly, a tweet has a formed structure in that it has a fixed length and within the tweet certain symbols have specific meanings (like a hashtag or a persons @ handle). This gives the tweet some structure but again like unstructured data, the “payload” or the contents don’t have a defined structure.",
  "DELIVERY\nSuggested time: 34 seconds. Use the click builds to pace the explanation.\nSPEAKER NARRATION\nBefore we talk about learning, we need a shared language for what the system learns from. A spreadsheet is a useful mental picture for structured data. JSON is a familiar example of semi-structured data. Free-form text, recordings, and photographs are commonly called unstructured data. The last label does not mean that a file has no format or that language has no structure. It means the content does not arrive as a fixed set of database columns. Real applications often combine all three: a support ticket can contain structured metadata, a text description, and an attached image.\nTRANSITION\nNext: Structured data.",
  "Now let’s move onto machine learning and deep learning training. By training we mean that we are “teaching” the computer how to find patterns from. Not by telling it what patterns exist, but instead we feed in the data and let the algorithms find the patterns on their own. That is what training means … the computer is training a model to be able to detect patterns based on what it “sees” within the training runs.",
  "The first type of training is called “Supervised Learning”. Think of this as how we teach our children to identify objects. We sit with them and open a book of animal pictures and we point to a picture of a dog and we say “dog” then we point to a picture of a cat and say “cat”. The child learns by doing this over and over until they can point to a dog and say the word dog. And if you are a parent, you will know that the first time they see a picture of a horse, they may point to it and say “dog”. Why? Because it has four legs, a tail and no big whiskers so it looks more like a dog than a cat and the child has not yet heard the word for horse. In our supervised learning model, we say “no Sophia that is a horse … can you say horse?”\nThat’s what supervised machine learning is. We pass in data to an algorithm and tell it what the expected outcome is. For example, with structured data we pass in the table of values and include the expected outcome (in the home sales example we pass in all the attributes of the home AND we pass in the sold price column that the home sold for). For images, we pass in images of chocolate bars AND we pass in the name of those chocolate bars. The learning model then has the facts it needs to discover patterns so it carry out predictions: like what chocolate bars are in an image.",
  "“Unsupervised learning” is really more like putting a child in a room full of toys without any parent in the room and then they learn on their own. For example, if you put a child in front of a set of Lego blocks they may have no idea what they are for. And the first thing they will likely do is try to eat them  but they will quickly find that they don’t taste good and they will likely notice that two Lego blocks actually connect together (they find the pattern of bumps on a block that fit into the holes on another block). This may actually happen by accident, but once discovered the child will notice that other blocks have the same pattern and they then start to connect many blocks together (without supervision).\nQuite simply, with unsupervised learning, a set of data is provided and ML or DL algorithms look for patterns within the data. This is often used for clustering like objects together. That is, looking for things in the data that are like other things in the data and grouping them together (more on clustering and classification later).\nIn the examples above, you might be looking for patterns in a table of structured data (without a target column to “supervise” the result). Or you might, for example, look at flickr images and group them together into similar images as in the graphic on the right.",
  "Reinforcement learning is much like a reward system you might have with a pet (or a child). For example, one way to train a dog is to teach them how to perform a task, and when the task is performed correctly, the dog is given a treat. This tells the dog that their behaviour was correct so they should do it again to get another treat.\nWith machine learning, reinforcement is providing by way of a goal or score. When a task finds a pattern correctly, it is rewarded with a higher score and the goal is to find something that improves the score. As noted on this slide, this is often used with gaming tasks.\nAs an example, think of the old computer game of pong where you have two “paddles” (one on each side of the screen) that simply move up and down and a “ball” that bounces around the screen from side to side. If the ball hits the paddle it bounces back towards the other side of the screen. If the ball does not hit the paddle it will fall off the screen and that player loses a point. If I start with the computer not knowing how to play pong at all, but given them a “penalty” when they miss the ball, the computer will eventually just hit the ball at random and realize there is a reward for performing that task. Subsequently, the computer will start moving the paddle and eventually understand how to track the ball and hit the paddle repeatedly in order to receive the reward (and eventually learn how to hit the ball to make it harder for the opponent to hit it back). In the above example, the “goal” is to increase the score as much as possible and the score is calculated as the number of correctly identified objects gives you a plus 1 and the number of objects missed subtracts 1 from your overall score. The goal is to get the highest score. That is reinforcement learning in a nut shell.",
  "Another important concept to understand is not only “how” a learning model can take a set of data and find patterns but we also need to make sure that the patterns it is finding are “correct” or not. To do that we need a set of data to “train” the model and another set of data to “test” the model against to see how well the predictions match to reality.\nThis takes us to the topic of data splitting.",
  "Of course to train a model to find patterns in data, you need a large set of data for it to learn from. However, the training of the model is only one step in the process. In order to know if the model is good, you need to take some additional data and test the model for accuracy.\nOften you only have one data set to work with and so a data scientist will split the data (randomly) into 3 sets. The first set is the  training data set and is typically made up of 70% - 80% of the data you have to work with. This is the data that will be used to train the model.\nThe second set of data is called the validation set and is used to look at how the model is performing while the data scientist is training the model. That is, after a model is created a data scientist will run the model against the validation set of data and may then go back to retrain the model using a different set of hyperparameters (more on hyperparameters later in this deck). By doing this they are refining the model over many iterations. However, by doing this they are also tuning the model to “fit” both the training data and the validation set of data (although not directly training the data on the validation set, it does influence the final model indirectly because it was used to make the model better based on the results of the predictions in the validation set).\nThe third set of data is the test data set. This is data that the model has never seen before in any of the training runs and is used to measure the accuracy of the final model. The model will be used against the Test data set and you will see how well (or how accurate) the predictions are to the real outcomes (which are in the test data set). For example, in a Kaggle competition (https://www.kaggle.com/) you are given a data set to train on and then a data set to test on which you will use for your final submissions to the contest (you don’t know the correct predictions in the test data set but Kaggle will take your test results and score them and let you know how well your model performs).",
  "In this next section we will discuss the concept of dimensionality and how it relates to the complexity of building a machine learning or deep learning model.",
  "Another term you will come across in data science is a Tensor. So what is a Tensor? Before we get there let’s look at more primitive dimensions of data.\nThe first is a scalar. The definition of which is a quantity that has only a magnitude but no direction. That’s a complicated way of just saying it’s a number  If I ask you how is the car moving and you say 17 that doesn’t tell me much (because you only gave me a scalar).\nIf instead you say 17 miles per hour due east then I know how fast you are going and in what direction. That description is actually a vector which is defined as a quantity having both magnitude and direction. In mathematics, this may be represented as an X and a Y coordinate (and then the line drawn from 0,0 to x,y represents the vector of a car’s motion where the length of the line is the magnitude and the angle of the line represents the direction. As discussed on the previous slide, it gets more complicated when you go beyond 2 or 3 dimensions. In the example shown on the slide, we have a vector in 4 dimensions, which is represented by 4 numbers inside of a set of parenthesis, like (12,24,36,42). This is known as a vector.\nA matrix is a two dimensional vector (which in itself is a multidimensional type…confused yet?). It is often referred to as a rectangular array of scalar elements. There may be M rows and N columns in the M x N (pronounced m by n) matrix. Just like there are mathematical rules for multiplying, dividing, adding and subtracting scalars, there are also mathematical rules that define how you multiply, divide, add and subtract two matrices (which is the plural of matrix) together. The interesting thing about matrices is that a graphics processing unit (GPU) is very good at doing matrix mathematics (they were specially designed for doing math on graphical data which themselves are represented by a set of matrices). This is why GPUs are so useful when doing deep learning as they are very good at matrix math.\nFinally this brings us to a tensor. A tensor can be defined as a multi-dimensional array of matrices as shown above. These are simple for a computational system to store and manipulate (and input and output). And as mentioned above, GPUs make it very easy to accelerate the manipulation of matrices (and therefore tensors). Note that a tensor is not limited to the dimensions that we have shown on the slide above. It can be a nested set of matrices to any depth.",
  "Now let’s jump into what machine learning algorithms mean and what they are trying to do for us in terms of pattern detection or pattern recognition.",
  "DELIVERY\nAbout one minute. One example per box.\nSPEAKER NARRATION\nMost machine-learning problems fall into a handful of task types, and the task is defined by the kind of answer you want back. Classification answers 'which category?': fraud or not fraud, spam or not spam. Regression answers 'what number?': the sale price of a home, which ties back to our structured-data example. Clustering answers 'what groups exist?' without labels, which is the unsupervised learning we just saw. Anomaly detection answers 'what looks unusual?': an odd transaction or a sensor reading that doesn't fit.\nThe task tells you what you need. Many different algorithms can do each one, and choosing among them is the data scientist's job.\nTRANSITION\nNext: deep learning.",
  "Now that we have covered machine learning lets dive into deep learning to understand what it means and what is the difference to machine learning.",
  "Before we jump into what is deep learning we first have to mention neural networks (and you will see shortly the often cited relation between deep learning and neural networks). The idea behind a neural network is to have a computer system that “mimics” the way a human brain works. And in fact, mimic the way neurons communicate inside the brain. A neuron contains 3 parts; the dendrite which receives messages from other neurons, the cell body which processes the input “message” and the axon which distributes the output of the cell to other neurons. The other important property of the brain is that the use of certain neurons strengthens those neuron connections (so the more you think about something the stronger that memory encoded in those neurons).\nA simple neural network takes a set of inputs (think dimensions of data or matrices of pixel values in an image), then pass that information on to what is called a hidden layer. In a computational neural network that is analysing images for example that hidden layer may take pixel values and find things like lines, curves, etc in a picture and pass that on to the next layer. In a simple Neural network there is one input layer, one hidden layer and one output layer that gives a result.\nDeep learning neural networks are those neural networks that have several hidden layers. In our example on image recognition to distinguish between dogs and cats, the first hidden layer my detect lines, shapes, arcs, circles, etc which then get passed on to the next hidden layer which might be using those shapes to identify features like nose, tail, whiskers, etc which are then passed on to the next layer, etc. etc.\nIn the end the output layer may determine if the image is a dog or a cat. In training of a deep learning model if the model output was “dog” and the image was actually a cat, then those branches within the neural network that favoured the output of dog would be weakened (weights of those connections would be reduced) and connections and nodes which favoured the image being a cat would be strengthened (weights of those predictions would be increased). This is much like the case of the brain where neural networks are strengthened by their repeated use.\nThere are many public architectures for various neural networks that have been developed in recent years (like Imagenet, googleNet, Inception (v3, v4 etc), YOLO). If you want to get a deeper understanding of these, they are described further here: https://medium.com/@sidereal/cnns-architectures-lenet-alexnet-vgg-googlenet-resnet-and-more-666091488df5\nThere are also some good examples at Quora.com (where many of these network images have been taken from) here https://www.quora.com/What-is-the-difference-between-Neural-Networks-and-Deep-Learning",
  "As mentioned on the previous slide, there are a number of different types of neural networks. If you really want to spend more time on the details of neural networks, you can find a very detailed list of network types and what they are useful for here: https://towardsdatascience.com/the-mostly-complete-chart-of-neural-networks-explained-3fb6f2367464\nTwo very common neural networks are shown on this slide. The first is known as a convolutional neural network (CNN) which is used frequently in image processing. A CNN is looking at sections of an image at a time and essentially is looking for patterns across the sets of data (lines, edges, curves, etc.). This is why CNNs excels at classifying images and detecting objects within an image (as it is looking for similar patterns across sets of data). The second common network is known as a recurrent neural network (RNN) which takes the output of some layers and uses them as input for the same layer. This is often used for text recognition because it learns from what it found in the past. For example, an RNN is a good method to know that a “dog” is different when you put the word “hot” in front of it. RNNs are also frequently used for speech recognition as it is often needed for understanding the context of a sentence (looking at the entire sentence and not just each individual word is important to understand the context).\nAs well, if you want to dive deeper into convolutional neural networks, there is a good guide by Vincent Dumoulin and Francesco Visin here (https://arxiv.org/abs/1603.07285).",
  "As previously mentioned, a neural network in your brain is “strengthened” when a given neural path is used frequently. Similarly, in a computational neural network, there are aspects called weights and biases that perform similar functions. As a model is trained, the network is “learning” how to predict and model the correct outcome. The way this happens is that any path within the neural network that predicts the correct answer will have its weights increased such that similar patterns found in the future will be biased towards the correct outcome.\nAs shown on this slide, weights are associated with each edge that connect one neuron to every other neuron. Each line has its own weight (in the above diagram labeled as W x,y … where y is the input neuron and x is the output neuron). The function of the neuron takes the input values of the previous layer and the weights of those lines to determine the value of the output of that cell. Bias is added at each cell before the output is sent on to the next layer. At the end of the network, when we notice that the model accurately or inaccurately made a prediction, we go back through the network and adjust the weights and the biases in order to strengthen the connections that were making correct predictions and weaken the connections (lower the values) that were leading us to the incorrect prediction (more on this in a bit … but this process is known as back propagation). By adjusting these weights during the training the model evolves into being able to make accurate predictions.\nAs you may be able to imagine, if you only change the weights by very small amounts in each pass, it may take a very long time to converge on an optimal prediction. Likewise, if you change these values by a large amount, you may easily overshoot the optimal values and never converge on the best solution for a given model. The amount of change of these values is called the learning rate and is one kind of “hyperparameter”.\nA hyperparameter is a configuration parameter, when building a neural network, that describes how the learning will happen within the network. There are many other hyperparameters and data scientists spend a significant amount of time building models, changing hyperparameters and iterating over and over again tweaking these parameters and re-training models to find the optimal model.",
  "When training a deep learning model, you need to iterate many times over the data to find the optimal result. The way this works is that the model is generated and the error rate is found. For example, in the lower right graph, a linear regression finds some line to fit the data and you can measure how far away from the line each dot on the graph is. This would be considered a loss function (how far away the prediction is from the truth). The algorithm will then go through another iteration in an attempt to minimise the errors (i.e. minimise the loss function).\nThe number of iterations (also known in deep learning as epochs) that a training run will go through is also a typical hyperparameter that a data scientist will tweak as they iterate over building their model.",
  "How do these iterations and loss functions interact with weights? Here we will combine the 3 previous concepts. During the forward portion of an iteration, the algorithm will produce some output. That output will have a measurable loss. That loss is used to adjust the weights between the layers before the next iteration. This application of loss information to the weights is known as “back propagation”.\nThe model will continue to be refined in this manner for N iterations or epochs (defined as a hyperparameter).\nIf you want to dive a lot deeper into how weights and biases are leveraged and modified during a training run, there is a detailed explanation here: https://medium.com/@neuralnets/back-propagation-algorithm-and-bias-neural-networks-fcf68b5153",
  "To summarize, deep learning is a method in which a network (with many hidden layers) is used to create a trained model which can take some input, apply weights and biases throughout the layers, and produce an output (prediction).\nThis trained model is often simply referred to as a deep learning algorithm … or simply a deep learning model.",
  "To make it easier for data scientists and developers to build these deep learning models, frameworks have evolved to simplify the creation and programming of deep learning models. In this section we will discuss some of the more common frameworks.",
  "Like many application development environments, a framework is a set of libraries that simplify the common functions that are needed by data scientists to build models. Most of these frameworks are open source and as such they have evolved rapidly.\nFour of the most common are:\nTensorFlow - developed by the Google Brain team for internal Google use. It was released under the Apache 2.0 open-source license on November 9, 2015. TensorFlow provides libraries for Python, C, C++, Go, Java, JavaScript and Swift. In TensorFlow, multi-dimensional matrices of data are known as tensors and are manipulated by built-in functions. Developers can create graphs (networks) to process tensors.\nPyTorch - pronounced “pie torch” – is an open source machine learning library for Python, used for applications such as natural language processing. It is primarily developed by Facebook's artificial-intelligence research group but is open source so there are many other contributors including IBM.\nCaffe - From the Berkeley Vision Learning Center (BVLC) and alternative versions have been produced by NVIDIA and IBM with optimizations for their hardware. With Caffe you create models using networks of layers and build training iterations. Pre-trained models are often shared in a what is known as a Model Zoo (which makes it easier for various developers to collaborate and extend each others works). Rather than working on tensors like with TensorFlow, data is passed between layers in Blobs (binary large objects) within Caffe.\nKeras - An open source neural network library written in Python. It runs on top of TensorFlow, and has been designed to enable fast experimentation with deep neural networks, it focuses on being user-friendly, modular, and extensible. In fact, it is part of TensorFlow today, but people will still refer to it on its own so we put it here.",
  "Now that you have a model created, how is it used?",
  "Once you have a model, you then take some input (which would be the same kind of data you used in the training) and passing it into the model to have it produce a prediction. The prediction is often referred to as an inference (we are inferring a result based on the model and the input) or sometimes it is called scoring (we are producing a score as output that someone can make a decision on).\nTo use the model there is usually an application programming interface (API) that is called with the input data (the input data could be a structured row of data or it could be an image or whatever was used as input data when the model was trained). The API will use the model to run the data through and produce an output that can be used within an application to make some decision on.  Most often this is a REST API which makes it easily invokable from a web application.\nNote that we have said that we will generally use a cut down version of the framework and by this we mean that the input is the same as what was done during the training and the output will be the same but there is no learning going on during the inferencing. As such, there are no iterations or back propagation or weight/bias changes. We simply execute the model to come up with a prediction or a score. This may mean that GPUs are less critical for inferencing (but in some high volume cases like video stream object detection, GPUs may be a critical success factor). There is also inferencing possible on other servers that are not where the model was trained. In fact inferencing can often benefit by being closer to the actual source of the input (like next to the cameras or attached directly to the sensors used to collect input).\nUpdate for LLMs: large language models are the exception to 'GPUs may be less critical for inference.' Generating every token reads the model weights and the KV cache, so memory capacity and bandwidth matter a lot. That is the payoff in the model-to-memory section.",
  "Along with the prediction that the model produces for a given single input, the model will also produce a confidence value. That is, how sure is the model that its prediction is accurate. In the above example on the right, we have a model that can identify types of chocolates. The output on the right is saying that the model predicts this image is of type “cream-egg” chocolate and it is 95% sure (confident) that its prediction is correct. Confidence is related to a given prediction.\nAnother quality measure is a measure of the model itself. That is, how often does the model make the correct prediction. If the model is given 100 chocolates and it correctly categorizes 80 of those 100 then it is said to have an accuracy of 80%. The key metric that data scientists look for is how accurate the model is and so accuracy is a very important quality metric (they often refer to it as performance, as in “performance of the model”).\nIn fact, the most common goal is to increase Accuracy of a model which is often achieved by providing more labelled data to train, run training over a larger number of iterations, or provide higher quality data.\nCaution: a model's output score is not always calibrated. A 0.95 score does not guarantee the answer is right 95% of the time. If you plan to act on the score, check calibration on held-out test data.",
  "One final area of terminology we want to discuss is some of the language used when working with LLMs and running models.",
  "SPEAKER NARRATION\nA large language model is a neural network trained on a huge amount of text to predict what comes next. That one skill turns out to cover classification, extraction, generation, summarization and question answering. The model families on the slide include closed models you call through an API and open-weight models you can download. Prompt engineering is how you steer them: zero-shot gives just the instruction, one-shot and few-shot add examples. Ollama lets you run open-weight models on your own machine, which is what we'll size in a few minutes.\nTRANSITION\nNext: what a model actually reads, tokens.",
  "DELIVERY\nAbout one minute. This sets up the memory math later in the talk.\nSPEAKER NARRATION\nLLMs don't read words. They read tokens: chunks of text that might be a whole word, part of a word, or punctuation. In English a token averages a bit less than a word. The split on the slide is illustrative; every model family ships its own tokenizer, so the same sentence can be a different number of tokens on different models.\nThe context window is the model's working budget, and it covers both the prompt and the answer. Qwen3-8B, the model we'll size later, has a native 32,768-token window. If the prompt uses 24,576 tokens, there are 8,192 left for the answer. Fill the whole window with the prompt and the model has no room to respond.\nHold on to this idea: every token in that window costs memory. We'll put a number on it in a few slides.\nTRANSITION\nNext: how the model uses all those earlier tokens.",
  "DELIVERY\nAbout one minute. Point at the gold token, then trace the lines back.\nSPEAKER NARRATION\nAttention is how a transformer uses context. When the model produces a new token, here 'mat', it looks back at every earlier token and weighs how relevant each one is. That's how 'it' can refer to something three sentences back.\nTo do that, each earlier token contributes a key and a value at every layer. Recomputing those for the whole conversation on every new token would be wasteful, so inference engines store them. That store is the KV cache.\nThe cache is stored data, not another neural network. It grows by a fixed amount with every token, which is why long context costs memory. In a few slides we'll calculate exactly how much for Qwen3-8B.\nTRANSITION\nNext: how the hardware side fits in.",
  "SPEAKER NARRATION\nGenerative AI produces new content. Agentic AI wraps a model in a loop with goals and tools so it can take several steps on its own; not every chatbot is an agent. Encoders and decoders are two halves of the original transformer design: the encoder builds a representation of the input, the decoder generates what comes next. Most chat LLMs today are decoder-only.\nTRANSITION\nNext: the hardware that runs them.",
  "SPEAKER NARRATION\nTwo hardware shapes come up in every local-AI conversation. A dedicated GPU from NVIDIA, AMD or Intel has its own fast VRAM, separate from system RAM. Unified-memory systems such as Apple M-series, AMD Ryzen AI Max (codename Strix Halo) and NVIDIA DGX Spark let the CPU and GPU share one large pool. Unified memory can hold bigger models than a typical GPU's VRAM; dedicated GPUs usually have more memory bandwidth. Keep both capacity and bandwidth in mind for the next section.\nTRANSITION\nNext: reading a real model page.",
  "SPEAKER NARRATION\nThis is the Hugging Face page for Qwen3-8B in GGUF format. Point out the model name, the parameter count, and the list of quantized files with their sizes. We'll use the Q4_K_M file for the memory math on the next slides.\nTRANSITION\nNext: where each number comes from.",
  "SOURCE KEY\nA: https://huggingface.co/Qwen/Qwen3-8B-GGUF/tree/main (chosen weight file and size).\nB: https://huggingface.co/Qwen/Qwen3-8B (original model card); https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json (architecture).\nCache setting: assumed 16-bit values, 2 bytes each. This is independent of the chosen Q4_K_M weights.\nAll arithmetic results are calculated estimates, not measured peak memory.\nDELIVERY\nUse after the Hugging Face screenshot. Click to reveal the calculations.\nSPEAKER NARRATION\nUse this slide immediately after the user's Hugging Face screenshot. Read the repository name first: Qwen is the publisher, Qwen3 is the family, and 8B is a rounded parameter-count label. The original Qwen3-8B card reports 8.2 billion learned numerical values. Those values are the weights. This count does not say how many gigabytes the chosen representation requires. Next read the native context limit, 32,768 tokens, on the original model card. That budget includes both input and generated continuation, so a full 32K input leaves no room for a response within a 32K limit. An illustrative split is 24,576 input tokens and 8,192 output tokens. Finally inspect the selected file in the official GGUF repository. Q4_K_M is the roughly four-bit option in our example and its listed download size is 5.03 GB. Q8_0 is listed at 8.71 GB. These names describe alternative weight representations of the same underlying model. Choose one file, not all the variants. The 32 GB repository total is not this model's required memory. The original model card and GGUF Files tab are separate sources. Use the card for the model's characteristics and the file listing for the chosen artifact's actual size.\nSOURCES\nhttps://huggingface.co/Qwen/Qwen3-8B\nhttps://huggingface.co/Qwen/Qwen3-8B-GGUF/tree/main",
  "SOURCE KEY\nA: https://huggingface.co/Qwen/Qwen3-8B-GGUF/tree/main (chosen weight file and size).\nB: https://huggingface.co/Qwen/Qwen3-8B (original model card); https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json (architecture).\nCache setting: assumed 16-bit values, 2 bytes each. This is independent of the chosen Q4_K_M weights.\nAll arithmetic results are calculated estimates, not measured peak memory.\nDELIVERY\nUse after the Hugging Face screenshot. Click to reveal the calculations.\nSPEAKER NARRATION\nEach learned weight needs storage. Eight bits make a byte. Multiply the number of weights by bits per weight and divide by eight to estimate bytes. With the rounded 8.2 billion parameter count, eight bits per weight gives 8.2 billion bytes, or 8.2 decimal GB. Five bits gives 5.125 GB, rounded to 5.13 GB, and four bits gives 4.1 GB. These are ideal weight payload calculations. They are useful for understanding the relationship without teaching floating-point format names. Actual quantized files also contain scales, metadata, and some values at different precisions. That is why the chosen Q4_K_M file is 5.03 GB rather than the ideal 4.1 GB and Q8_0 is 8.71 GB rather than 8.2 GB. The Q5_K_M file is 5.85 GB rather than the ideal 5.13 GB. Quantization retains the parameter count while changing the numerical representation, and may change quality or performance. Use the actual selected file as the next budgeting input when the engine keeps that compressed representation in memory. The file size is still an estimate of loaded weight storage, not a measurement of peak inference memory. Runtime conversion can change it. The slide uses decimal GB throughout.\nSOURCES\nhttps://huggingface.co/Qwen/Qwen3-8B-GGUF/tree/main",
  "SOURCE KEY\nA: https://huggingface.co/Qwen/Qwen3-8B-GGUF/tree/main (chosen weight file and size).\nB: https://huggingface.co/Qwen/Qwen3-8B (original model card); https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json (architecture).\nCache setting: assumed 16-bit values, 2 bytes each. This is independent of the chosen Q4_K_M weights.\nAll arithmetic results are calculated estimates, not measured peak memory.\nDELIVERY\nUse after the Hugging Face screenshot. Click to reveal the calculations.\nSPEAKER NARRATION\nThis table makes every factor in the KV-cache calculation explicit. The first factor of two means keys and values. The architecture configuration specifies 36 transformer layers, 8 key/value heads per layer, and 128 values in each head's vector. The final factor of two means two bytes per cached numerical value, which is our chosen 16-bit cache assumption. It is not two bytes per token. A token needs 2 × 36 × 8 × 128 = 73,728 numerical values across the cache. At two bytes each, this is 147,456 bytes per cached token. The first two is structural, and the last two is a precision setting. The Q4_K_M filename describes weight quantization and does not specify cache precision. The memory rate is specific to this architecture and our cache setting. The architecture fields come from the original Qwen3-8B config.json. With GGUF, the converted model's metadata and runtime should reflect the architecture and selected cache representation. No part of this arithmetic establishes runtime overhead.\nSOURCES\nhttps://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json\nhttps://huggingface.co/docs/transformers/cache_explanation",
  "SOURCE KEY\nA: https://huggingface.co/Qwen/Qwen3-8B-GGUF/tree/main (chosen weight file and size).\nB: https://huggingface.co/Qwen/Qwen3-8B (original model card); https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json (architecture).\nCache setting: assumed 16-bit values, 2 bytes each. This is independent of the chosen Q4_K_M weights.\nAll arithmetic results are calculated estimates, not measured peak memory.\nDELIVERY\nUse after the Hugging Face screenshot. Click to reveal the calculations.\nSPEAKER NARRATION\nChoose a context budget for one conversation. It includes the prompt and generated continuation. For a 32,768-token sequence multiply 147,456 bytes per token by 32,768 to obtain 4,831,838,208 bytes, or 4.83 decimal GB. The same calculation gives approximately 1.21 GB at 8,192 tokens and 9.66 GB at 65,536 tokens. These are KV payload calculations using the assumed two-byte cache values. Qwen documents 32,768 as the native context and validates extension to 131,072 with YaRN, which stands for Yet another RoPE extensioN. RoPE means Rotary Position Embedding, a method for representing token positions. YaRN adjusts positional scaling to support longer sequences. For 64K Qwen recommends factor two. Changing a runtime context setting alone does not establish reliable long-context behavior. Correct model configuration and sufficient memory are separate requirements. At 128K the cache payload would be approximately 19.33 GB. An engine can allocate for its configured capacity instead of only the currently used tokens. Multiple independent active conversations multiply cache needs, while model weights can be shared.\nSOURCES\nhttps://huggingface.co/Qwen/Qwen3-8B#processing-long-texts",
  "SOURCE KEY\nA: https://huggingface.co/Qwen/Qwen3-8B-GGUF/tree/main (chosen weight file and size).\nB: https://huggingface.co/Qwen/Qwen3-8B (original model card); https://huggingface.co/Qwen/Qwen3-8B/blob/main/config.json (architecture).\nCache setting: assumed 16-bit values, 2 bytes each. This is independent of the chosen Q4_K_M weights.\nAll arithmetic results are calculated estimates, not measured peak memory.\nDELIVERY\nUse after the Hugging Face screenshot. Click to reveal the calculations.\nSPEAKER NARRATION\nUse the selected Q4_K_M download, 5.03 GB, as the approximate model-storage term if the runtime retains that quantized representation. Add the calculated 4.83 GB KV payload for a full 32K conversation. The subtotal is 9.86 GB before runtime overhead. It is not a measured minimum hardware requirement. Do not add a made-up fixed working-room number. Ollama's inference engine needs temporary calculation buffers, activations, and other allocations, which depend on hardware, backend, configured context, parallel requests, and prompt processing. Measure peak memory for the selected model and runtime. For a dedicated NVIDIA GPU, the GPU-resident weights, cache and GPU execution buffers consume VRAM. The OS, Ollama host process and most other apps use system RAM; GPU-using apps may also consume VRAM. On Apple M-series, DGX Spark, and Ryzen AI Max unified-memory systems, CPU and GPU compete for a shared pool, so leave room for OS and applications as well as inference. Some backends split work between CPU and GPU; that changes the placement and performance. Capacity says whether a workload can fit. It does not promise useful speed. Compare time to first token and per-request generated tokens per second on the target hardware. Small-batch decoding is often bandwidth-sensitive, whereas prompt processing can be compute-intensive. The previous arbitrary 3 GB allowance has been removed.\nSOURCES\nhttps://docs.ollama.com/faq\nhttps://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/",
  "DELIVERY\nAbout one minute. Click 1 explains a decode step. Click 2 covers initial wait. Click 3 covers streaming speed. Click 4 connects generation to memory traffic.\nSPEAKER NARRATION\nUse the two questions in the title to make performance concrete. Time to first token measures the delay from submitting a request until its first output token arrives. It includes queueing and prompt processing, and may include network delay or model loading. With a warm model, processing a long prompt often makes substantial use of compute. Tokens per second here means the generation rate experienced by one user after output begins. Aggregate TPS across many users measures server throughput and should be labeled separately. An ordinary autoregressive decode step processes the current token through the model's layers and reads previous keys and values during attention. The cache is stored state, not a second neural network. A dense model uses its dense layers; an MoE model activates selected experts rather than every expert. Ordinary inference does not update weights. The new token's attention state is appended to the cache. For one or a few simultaneous sequences, weight and cache traffic can make decode sensitive to memory bandwidth. Long context increases attention work and cache traffic. Compute, optimized kernels, batching, and offloading also affect speed. Capacity determines whether the workload can fit; a larger memory pool does not automatically deliver faster generation. Compare the same model file, prompt length, output length, runtime settings, and concurrency. No speed benchmark is claimed on this slide.\nSOURCES\nhttps://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/\nhttps://huggingface.co/docs/transformers/cache_explanation\nhttps://www.nvidia.com/en-us/glossary/mixture-of-experts/",
  "SPEAKER NARRATION\nIf you want to try this yourself: download open-weight models from Hugging Face and run them with Ollama. The two GitHub projects are open-source examples you can explore. A good first experiment is to run the same model at two quantization levels and compare time to first token and tokens per second.",
  "SPEAKER NARRATION\nTo keep up with how fast this field moves, IBM's Mixture of Experts podcast is a good weekly listen.",
  "After going through this session, you have hopefully learned something about the various terms used in deep learning and machine learning and feel more comfortable having a conversation with someone on this subject.",
  "SPEAKER NARRATION\nThank the audience, share contact details, and open for questions.",
];

export const meta: SlideMeta = {
  title: 'AI 101: The language. The models. The machine.',
  createdAt: '2026-11-09T21:37:18.335Z',
};

export default [
  Cover,
  Thought,
  Actually,
  Meetup,
  Leave,
  Foundations,
  Uses,
  UsedFor,
  DataDivider,
  Structured,
  Unstructured,
  SemiStructured,
  Forms,
  TrainingDivider,
  Supervised,
  Unsupervised,
  Reinforcement,
  SplitDivider,
  DataPrep,
  MathDivider,
  Mathematics,
  MLDivider,
  MLTasks,
  DLDivider,
  NeuralNets,
  NetTypes,
  Hyper1,
  Iterations,
  LossLoop,
  Trained,
  FrameworksDivider,
  Frameworks,
  InferenceDivider,
  Deployment,
  Quality,
  LLMDivider,
  LLMs,
  Tokens,
  Attention,
  GenAgentic,
  Hardware,
  ReadRepo,
  TwoRepos,
  WeightMem,
  KVNumbers,
  ContextMem,
  Total,
  Perf,
  Play,
  Curious,
  Summary,
  Speaker,
] satisfies Page[];

