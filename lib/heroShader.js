// Hero scan shader (spec §6). Three core only; loaded via dynamic import after LCP.
import { WebGLRenderer, Scene, OrthographicCamera, PlaneGeometry, ShaderMaterial, Mesh, TextureLoader, Color } from "three";

const vert = "varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }";
const frag = `
varying vec2 vUv;
uniform sampler2D uTex; uniform float uHasTex, uScan, uLock; uniform vec3 uBase;
void main(){
  float band = smoothstep(0.06, 0.0, abs(vUv.y - uScan)) * (1.0 - uLock);
  vec2 uv = vUv + vec2(band * 0.012, 0.0);
  vec3 c = mix(uBase, texture2D(uTex, uv).rgb, uHasTex);
  c = mix(c, vec3(0.894, 0.341, 0.18), band * 0.55);
  gl_FragColor = vec4(c, 1.0);
}`;

// Returns a dispose fn, or null (caller keeps the poster + CSS box) when WebGL is unavailable.
export default function initHeroShader(canvas, { photo, base = "#ddd7ca" } = {}) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: false, antialias: false });
  } catch {
    return null;
  }
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const geometry = new PlaneGeometry(2, 2);
  const uniforms = {
    uTex: { value: null }, uHasTex: { value: 0 }, uScan: { value: 1 }, uLock: { value: 1 },
    uBase: { value: new Color(base) },
  };
  const material = new ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms });
  scene.add(new Mesh(geometry, material));
  let texture;
  if (photo) texture = new TextureLoader().load(photo, (t) => { uniforms.uTex.value = t; uniforms.uHasTex.value = 1; draw(); });

  const fine = matchMedia("(pointer: fine)").matches;
  let pointerY = null, raf = 0, visible = true, running = false, t0 = 0;
  let lostFn;

  const resize = () => {
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  };
  const draw = () => renderer.render(scene, camera);

  const frame = (now) => {
    if (!running) return;
    if (fine && pointerY !== null) uniforms.uScan.value = pointerY;
    else uniforms.uScan.value = 1 - (((now - t0) / 1200) % 3.5); // 1.2s sweep, then rest, loop
    draw();
    raf = requestAnimationFrame(frame);
  };
  const play = () => {
    if (running || !visible || document.hidden) return;
    running = true; t0 = performance.now();
    uniforms.uLock.value = 0;
    raf = requestAnimationFrame(frame);
  };
  const settle = () => { // pause on the locked frame
    running = false; cancelAnimationFrame(raf);
    uniforms.uLock.value = 1; draw();
  };
  const sync = () => (visible && !document.hidden && document.hasFocus() ? play() : settle());

  // pointer input coalesced to rAF via the frame loop (only the latest Y is stored)
  const onMove = (e) => { const r = canvas.getBoundingClientRect(); pointerY = 1 - Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)); };
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); });
  const lose = (e) => { e.preventDefault(); dispose(); canvas.remove(); };
  canvas.addEventListener("webglcontextlost", lose);
  lostFn = lose;

  resize();
  const ro = new ResizeObserver(() => { resize(); draw(); });
  ro.observe(canvas);
  io.observe(canvas);
  if (fine) addEventListener("pointermove", onMove, { passive: true });
  addEventListener("blur", settle);
  addEventListener("focus", sync);
  document.addEventListener("visibilitychange", sync);
  draw();
  sync();

  function dispose() {
    cancelAnimationFrame(raf); running = false;
    io.disconnect(); ro.disconnect();
    removeEventListener("pointermove", onMove);
    removeEventListener("blur", settle);
    removeEventListener("focus", sync);
    document.removeEventListener("visibilitychange", sync);
    canvas.removeEventListener("webglcontextlost", lostFn);
    texture?.dispose(); geometry.dispose(); material.dispose(); renderer.dispose();
  }
  return dispose;
}
